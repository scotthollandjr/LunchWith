
var userService = require('../../services/user-service');
var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var config = require('../../../server/config');

let pg = require('pg'),
    databaseURL = 'postgres://localhost:5432/lunchwith',
    db = require('../../../server/pghelper');

let newUser = (profileData) => {
  var firstName = profileData.firstName;
  var lastName = profileData.lastName;
  var emailAddress = profileData.emailAddress;
  var company = profileData.company;
  var title = profileData.title;
  var pictureUrl = profileData.pictureUrl;

  var sql = "INSERT INTO users (firstName, lastName, emailAddress, company, title, pictureUrl) VALUES ('" + firstName + "','" + lastName + "','" + emailAddress + "','" + company + "','" + title + "','" + pictureUrl + "')";

  db.query(sql, null)
    .then(user => res.json("new user created!"))
    .catch(next);
};

passport.serializeUser(function(user, done) {
  done(null, user._json.emailAddress);
});

passport.deserializeUser(function(email, done) {

    var sql = "SELECT * FROM users WHERE emailaddress = $1";

    db.query(sql, [email], true)
    .then(function (user) {
      done(null, user);
    })
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

      var sql = "SELECT * FROM users WHERE emailaddress = $1";

      db.query(sql, [profile._json.emailAddress])
      .then(function (user) {
        if (!user[0]) {
          newUser(profile._json);
        } else {
        res.json({"user" : user});
        }
      })
        return done(null, profile);
      });
    }));

module.exports = passport;
