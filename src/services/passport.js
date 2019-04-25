const passport = require("passport");
const twitchPass = require("passport-twitch").Strategy;

const TWITCH_CLIENT_ID = '13lrjlpznzk5fg43jtrplx24vn52by';
const TWITCH_SECRET    = 'hsvpc93t2vvrwbib4s74wexdxvvuq6';
const SESSION_SECRET   = 'PLACEHOLDER';
const CALLBACK_URL     = 'http://localhost:3000';


const twitchStrategy = new twitchPass({
  clientID: TWITCH_CLIENT_ID,
  clientSecret: TWITCH_SECRET,
  callbackURL: CALLBACK_URL,
  scope: "user_read"
},

function(accessToken, refreshToken, profile, done) {
  console.log('Authenticated')
  // User.findOrCreate({ twitchId: profile.id }, function (err, user) {
  //   return done(err, user);
  // });
}
);

exports.twitch = twitchStrategy
