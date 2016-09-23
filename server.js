"use strict";

let express = require('express'),
    compression = require('compression'),
    db = require('./server/pghelper'),
    app = express();

var passport = require('passport'),
OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var session = require('express-session');
var passportLinkedIn = require('./app/auth/linkedinauth');
require('dotenv').config();
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');


let escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

let newUser = (req, res, next) => {
  var firstName = req.firstName;
  var lastName = req.lastName;
  var emailAddress = req.emailAddress;
  var company = req.company;
  var title = req.title;
  var pictureUrl = req.pictureUrl;

  var sql = "INSERT INTO users (firstName, lastName, emailAddress, company, title, pictureUrl) VALUES ($1, $2, $3, $4, $5, $6)";

  db.query(sql, [firstName, lastName, emailAddress, company, title, pictureUrl])
    .then(user => res.json("new user created!"))
    .catch(next);
};

let findOrCreateUser = (req, res, next) => {
  var email = req.query.email;
  var sql = "SELECT * FROM users WHERE emailaddress = $1";

  db.query(sql, [email])
  .then(function (user) {
    return res.json({"user" : user})
  })
  .catch(next);
};

let queryUsers = (req, res, next) => {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  var sql = "SELECT * FROM users WHERE earth_box(ll_to_earth($1, $2), 10000) @> ll_to_earth(users.latitude,users.longitude) AND id !=" + req.user.id + 100000 + ";";

  db.query(sql, [latitude, longitude])
  .then(function (usersInRadius) {
    return res.json({"users" : usersInRadius})
  })
};


let getLoggedInUserDetails = (req, res, next) => {
  var loggedInUser = req.user;
  return res.json({"user" : loggedInUser});
};

let checkReceivedMessages = (req, res, next) => {
  var sql = "SELECT messages.message, messages.messagetime, messages.id, users.firstname, users.skills, users.title, users.company, users.pictureurl from messages inner join users on messages.sender_id=users.id where recipient_id = " + req.user.id + ";";
  db.query(sql)
  .then(function (messages){
    return res.json({"messages": messages});
  })
}

let checkSentMessages = (req, res, next) => {
    var sql = "SELECT messages.message, messages.messagetime, messages.id, users.firstname, users.skills, users.title, users.company, users.pictureurl from messages inner join users on messages.sender_id=users.id where sender_id = " + req.user.id + ";";
  db.query(sql)
  .then(function (messages){
    return res.json({"messages": messages});
  })
}

let sendMessage = (req, res) => {
  var sql = "INSERT INTO messages (sender_id, recipient_id, message, subject) VALUES ($1, $2, $3, $4);"
  var sender_id = req.user.id;
  var recipient_id = req.query.recipient_id;
  var message = req.query.message;
  var subject = req.query.subject;

  db.query(sql, [sender_id, recipient_id, message, subject])
  .then(function(result){
    return res.json({"messageSent": true});
  })
}

let updateUserDetails = (req, res) => {
  var firstName = req.query.firstname;
  var lastName = req.query.lastname;
  var company = req.query.company;
  var title = req.query.title;
  var bio = req.query.bio;
  var sql = "UPDATE users SET firstname=$1, lastname=$2, company=$3, title=$4 ,bio=$5 WHERE emailaddress='" + req.user.emailaddress + "';";
  db.query(sql, [firstName, lastName, company, title, bio]);
  return res;
}

let updateUserLocationDetails = (req, res) => {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  var sql;
  if (req.query.latitude === 'NULL') {
    sql = "UPDATE users SET latitude=NULL,longitude=NULL WHERE emailaddress='" + req.user.emailaddress + "';";
  } else {
    sql = "UPDATE users SET latitude=$1,longitude=$2 WHERE emailaddress='" + req.user.emailaddress + "';";
  }
  db.query(sql, [latitude, longitude]);
  return res;
}

let updateUserSkills = (req, res) => {
  var skills = req.query.skills;
  var sql = "UPDATE users SET skills=$1 WHERE emailaddress='" + req.user.emailaddress + ";";
  db.query(sql, [skills]);
  return "Updated!"
}

app.set('port', process.env.PORT || 3000);

app.use(compression());

if (process.env.NODE_ENV != 'development') {
  console.log(process.env.NODE_ENV)
  app.get('*',function(req,res,next){
    if(req.headers['x-forwarded-proto']!='https')
      res.redirect('https://lunchwith.herokuapp.com'+req.url)
    else
      next() /* Continue to other routes if we're not redirecting */
  })
}

app.use('/', express.static(__dirname + '/www'));
app.use('/splash', express.static(__dirname + '/www'));
app.use('/main', express.static(__dirname + '/www'));
app.use('/css', express.static(__dirname + '/node_modules/bulma/css'));
app.use('/images', express.static(__dirname + '/www/assets/images'));
app.use('/activity', express.static(__dirname + '/www'));
app.use('/account', express.static(__dirname + '/www'));
app.use('/contact', express.static(__dirname + '/www'));
app.use('/privacy', express.static(__dirname + '/www'));
app.use('/about', express.static(__dirname + '/www'));
app.use('/login', express.static(__dirname + '/www'));
app.use('/newUserWelcome', express.static(__dirname + '/www'));

// Adding CORS support
app.all('*', function (req, res, next) {
    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        next();
    }
});

let cookieSecret = 'dfkghjkdhgjkdg';
app.use(cookieParser(cookieSecret));
app.use(cookieSession({
  key    : 'fggfddfgdgfdfgg',
  secret : cookieSecret,
  cookie : {
    maxAge: 3600
  }
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/linkedin',
  passport.authenticate('linkedin'),
  function(req, res) {
    console.log("shouldn't be here");
  });

app.use('/auth/linkedin/callback',
  passportLinkedIn.authenticate('linkedin', { failureRedirect: '/auth/linkedin' }),
  function(req, res) {
    if (req.user[0]){
      res.redirect('/activity');
    } else {
      res.redirect('/account');
    }
  }
);

app.use('*', function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next(); }
  // denied. redirect to login
  res.redirect('/auth/linkedin')
});

app.use('/activity', express.static(__dirname + '/www'));
app.use('/account', express.static(__dirname + '/www'));
app.use('/messages', express.static(__dirname + '/www'));
app.use('/checkReceivedMessages', checkReceivedMessages);
app.use('/checkSentMessages', checkSentMessages);
app.use('/sendMessage', sendMessage);
app.use('/newUserCreation', newUser);
app.use('/queryUsers', queryUsers);
app.use('/getLoggedInUserDetails', getLoggedInUserDetails);
app.use('/updateUserDetails', updateUserDetails);
app.use('/updateUserLocationDetails', updateUserLocationDetails);
app.use('/updateUserSkills', updateUserSkills);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
