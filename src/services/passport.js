const passport = require("passport");
const twitchStrategy = require("passport-twitch").Strategy;

const TWITCH_CLIENT_ID = '13lrjlpznzk5fg43jtrplx24vn52by';
const TWITCH_SECRET    = 'hsvpc93t2vvrwbib4s74wexdxvvuq6';
const SESSION_SECRET   = 'PLACEHOLDER';
const CALLBACK_URL     = 'http://localhost:3000/auth/twitch/callback';


const twitchStrategy = new twitchStrategy({
  clientID: TWITCH_CLIENT_ID,
  clientSecret: TWITCH_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/twitch/callback",
  scope: "user_read"
},

function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ twitchId: profile.id }, function (err, user) {
    return done(err, user);
  });
}

);

exports.twitch = twitchStrategy
