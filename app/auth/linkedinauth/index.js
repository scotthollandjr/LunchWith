var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var User = require('./usermodel');
var config = require('../../../server/config');
var init = require('../');

passport.serializeUser(function(user, done) {
  console.log("serialize user", user._json.emailAddress);
  done(null, user._json.emailAddress);
});

passport.deserializeUser(function(email, done) {
  console.log("deserialize", email);
  // User.findById(id, function (err, user) {
  //   done(err, user);
  // });
  done(null, email);
});

passport.use(new LinkedInStrategy({
    clientID: "78b3ua1u1ptbbj",
    clientSecret: "TN6C4QGvwiY5mIS1",
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true
  },
  // linkedin sends back the tokens and progile info
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }));



    // var searchQuery = {
    //   name: profile.displayName
    // };
    //
    // var updates = {
    //   name: profile.displayName,
    //   someID: profile.id
    // };
    //
    // var options = {
    //   upsert: true
    // };
    //
    // // update the user if s/he exists or add a new user
    // User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
    //   if(err) {
    //     return done(err);
    //   } else {
    //     return done(null, user);
    //   }
    // });
//   }
//
// ));
//
// // serialize user into the session
// init();


module.exports = passport;
