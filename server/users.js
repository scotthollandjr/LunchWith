"use strict";

let db = require('./pghelper');

let escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

let newUser = (req, res, next) => {
  var firstName = req.query.firstName;
  var lastName = req.query.lastName;
  var emailAddress = req.query.emailAddress;
  var company = req.query.company;
  var title = req.query.title;
  var pictureUrl = req.query.pictureUrl;

  var sql = "INSERT INTO users (firstName, lastName, emailAddress, company, title, pictureUrl) VALUES ('" + firstName + "','" + lastName + "','" + emailAddress + "','" + company + "','" + title + "','" + pictureUrl + "')";

  db.query(sql, null)
    .then(user => res.json("new user created!"))
    .catch(next);
};

let queryUsers = (req, res, next) => {
  var params = req.query;
  var firstname = req.query.firstname;
  var lastname;
  var sql = "SELECT * FROM users WHERE firstname = $1";

  db.query(sql, [firstname])
    .then(function (user) {
      return res.json({"user" : user})
    })
    .catch(next);
};

exports.queryUsers = queryUsers;
exports.newUser = newUser;
