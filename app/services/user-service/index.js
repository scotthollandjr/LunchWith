import request from '../request';
var Router = require('react-router');

let baseURL = "";

export let findAll = (values) => {
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

export let findById = () => {
    return request({url: baseURL + "/products/" + id})
        .then(data => data = JSON.parse(data))
}

export var newUser = (values) => {
  return request({url: baseURL + "/newUserCreation", values: values})
    .then(Router.browserHistory.push('/newUserWelcome'));
}

export var queryUsers = (values) => {
  return request({url: baseURL + "/searchUsers", values: values})
    .then(function(data){
      return JSON.parse(data)
    })
}
