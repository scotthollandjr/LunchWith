
var userService = require('../../services/user-service');
var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var config = require('../../../server/config');
var init = require('../');

let pg = require('pg'),
    databaseURL = 'postgres://localhost:5432/lunchwith',
    db = require('../../../server/pghelper');

passport.serializeUser(function(user, done) {
  done(null, user._json.emailAddress);
});

passport.deserializeUser(function(email, done) {
    var sql = "SELECT * FROM users WHERE emailaddress = $1";

    db.query(sql, [email])
    .then(function (err, data) {
      console.log("Deserialized user", data);
      if (user) {
        return JSON.parse(data)
      } else {
        // CREATE user
        return JSON.parse({})
      }
    })
    // return request({url: baseURL + "/findOrCreateUser", values: values})
    //   .then(function(data){
    //     return JSON.parse(data)
    //   })



  // Find or create user
  // var user = userService.findOrCreateUser({email : email})
  //   .then(
  //     console.log("deserialize log", user),
  //     done(null, user)
  //   );
  // User.findById(id, function (err, user) {
  //   done(err, user);
  // });
  console.log(email);
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
