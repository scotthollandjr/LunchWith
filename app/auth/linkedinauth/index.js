"use strict";

var userService = require('../../services/user-service');
var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var config = require('../../../server/config');

let pg = require('pg'),
    db = require('../../../server/pghelper');

let newUser = (profileData) => {
  var firstName = profileData.firstName || "No first name provided?";
  var lastName = profileData.lastName || "No last name provided";
  var emailAddress = profileData.emailAddress;
  var company;
  if(profileData.positions.values[0]) {
  company = profileData.positions.values[0].company.name
  } else {
  company = "No company info provided";
  }
  var title;
  if(profileData.positions.values[0]) {
  title = profileData.positions.values[0].title;
  } else {
  title = "No title provided";
  }
  var pictureUrl = profileData.pictureUrl || "No picture provided";
  var bio = "No bio provided";

  var sql = "INSERT INTO users (firstName, lastName, emailAddress, company, title, pictureUrl, bio) VALUES ('" + firstName + "','" + lastName + "','" + emailAddress + "','" + company + "','" + title + "','" + pictureUrl + "','" + bio + "')";

  db.query(sql, null)
    .then(user => res.json("new user created!"))
    .catch(next);
};

passport.serializeUser(function(user, done) {
  if (user._json) {
    done(null, user._json.emailAddress)
  } else {
    done(null, user[0].emailaddress);
  }
});

passport.deserializeUser(function(email, done) {

    var sql = "SELECT * FROM users WHERE emailaddress = $1";

    db.query(sql, [email], true)
    .then(function (user) {
      done(null, user);
    })
});

function findOrCreateUser(profile, done) {
  var sql = "SELECT * FROM users WHERE emailaddress = $1";

  console.log(profile._json.positions.values[0]);

  db.query(sql, [profile._json.emailAddress])
  .then(function (user) {
    if (!user[0]) {
      newUser(profile._json, done(null, profile));
      return done(null, profile);
    } else {
    return done(null, user);
    }
  })
}

passport.use(new LinkedInStrategy({
    clientID: "78b3ua1u1ptbbj",
    clientSecret: "TN6C4QGvwiY5mIS1",
    callbackURL: "/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true
  },
  // linkedin sends back the tokens and progile info
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      findOrCreateUser(profile, done, function(user){
        console.log("In find or create");
        return done(null, profile);
      })
    });
  }));

module.exports = passport;
