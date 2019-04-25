const config = require('../config')
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const errorHandler = require('../middlewares/error-handler')
const apiRouter = require('../routes/api')
const expressMongoDb = require('express-mongo-db')
const passport = require('passport')
const passportTwitch = require('../services/passport')
const handlebars = require('handlebars')

const app = express()
app.use(session({secret: 'test', resave: false, saveUninitialized: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(expressMongoDb('mongodb://localhost/streamerdemo'))

// passport
app.use(passport.initialize())
app.use(passport.session())
passport.use(passportTwitch.twitch)

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})
// Define a simple template to safely generate HTML with values from user's profile
var template = handlebars.compile(`
<html><head><title>Twitch Auth Sample</title></head>
<table>
    <tr><th>Access Token</th><td>{{accessToken}}</td></tr>
    <tr><th>Refresh Token</th><td>{{refreshToken}}</td></tr>
    <tr><th>Display Name</th><td>{{display_name}}</td></tr>
    <tr><th>Bio</th><td>{{bio}}</td></tr>
    <tr><th>Image</th><td>{{logo}}</td></tr>
</table></html>`)

// If user has an authenticated session, display it, otherwise display link to authenticate
app.get('/', function (req, res) {
  if (req.session && req.session.passport && req.session.passport.user) {
    res.send(template(req.session.passport.user))
  } else {
    res.send('<html><head><title>Twitch Auth Sample</title></head><a href="/auth/twitch"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a></html>')
  }
})
app.get('/auth/twitch', passport.authenticate('twitch'))
app.get('/auth/twitch/callback', passport.authenticate('twitch', { failureRedirect: '/' }), function (req, res) {
  console.log('callback')
  // Successful authentication, redirect home.
  res.redirect('/')
})

app.use('/api', apiRouter)
app.use(errorHandler.handleNotFound)
app.use(errorHandler.handleError)

exports.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log(`Error : ${err}`)
      process.exit(-1)
    }

    console.log(`${config.app} is running on ${config.port}`)
  })
}

exports.app = app
