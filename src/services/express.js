const config = require('../config')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const errorHandler = require('../middlewares/error-handler')
const apiRouter = require('../routes/api')
const expressMongoDb = require('express-mongo-db')
const passport = require('passport')
const passportTwitch = require('../services/passport')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(expressMongoDb('mongodb://localhost/streamerdemo'))

// passport
app.use(passport.initialize())
passport.use(passportTwitch.twitch)

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
