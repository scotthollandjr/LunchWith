import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Main from './components/Main';
import Activity from './components/Activity';
import Login from './components/Login';
import Account from './components/Account';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import NewUser from './components/NewUser';
import Splash from './components/Splash';
import SkillsForm from './components/SkillsForm';
import Messages from './components/Messages';
import * as userService from './services/user-service';
var props;

class App extends React.Component {


    componentDidMount() {
        this.displayUsers();
    }

    displayUsers() {
      userService.queryUsers({firstname: "Kyle"})
        .then(data => {
          console.log(data)
        });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
};

ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={Splash}/>
  <Route path="/footer" component={App}/>
  <Route path="/account" component={Account} {...props}/>
  <Route path="/activity" component={Activity}/>
  <Route path="/login" component={Login}/>
  <Route path="/messages" component={Messages}/>
</Router>
), document.getElementById("content"));
