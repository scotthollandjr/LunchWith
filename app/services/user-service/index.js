var request = require('../request');
var Router = require('react-router');


let baseURL = "";

let findAll = (values) => {
    let qs = "";
    if (values) {
        qs = Object.keys(values).map(key => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(values[key]);
        }).join('&');
        qs = "?" + qs;
    }
    return request({url: baseURL + "/products" + qs})
        .then(data => data = JSON.parse(data))
}

let findById = () => {
    return request({url: baseURL + "/products/" + id})
        .then(data => data = JSON.parse(data))
}

let newUser = (values) => {
  return request({url: baseURL + "/newUserCreation", values: values})
    .then(Router.browserHistory.push('/newUserWelcome'));
}

let findOrCreateUser = (values) => {
  var sql = "SELECT * FROM users WHERE emailaddress = $1";

  db.query(sql, [values.email])
  .then(function (err, user) {
    console.log("not being called", user);
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
}

let queryUsers = (values) => {
  return request({url: baseURL + "/searchUsers", values: values})
    .then(function(data){
      return JSON.parse(data)
    })
}

module.exports = {
  newUser,
  queryUsers,
  findOrCreateUser
}
