const passport = require('passport')
const twitchPass = require('passport-twitch').Strategy

const TWITCH_CLIENT_ID = '13lrjlpznzk5fg43jtrplx24vn52by'
const TWITCH_SECRET = 'hsvpc93t2vvrwbib4s74wexdxvvuq6'
const SESSION_SECRET = 'PLACEHOLDER'
const CALLBACK_URL = 'http://localhost:3000/auth/twitch/callback'

const twitchStrategy = new twitchPass({
  clientID: TWITCH_CLIENT_ID,
  clientSecret: TWITCH_SECRET,
  callbackURL: CALLBACK_URL,
  scope: 'user_read'
},

function (accessToken, refreshToken, profile, done) {
  profile.accessToken = accessToken
  profile.refreshToken = refreshToken
  profile.email = profile._json.email
  profile.logo = profile._json.logo
  return done(null, profile)
}
)

exports.twitch = twitchStrategy
