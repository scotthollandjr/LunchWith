var passport = require('passport');
var User = require('./linkedinauth/usermodel');


module.exports = function() {

  passport.serializeUser(function(user, done) {
    debugger;
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

};
