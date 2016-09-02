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
import SkillsForm from './components/SkillsForm';
import * as userService from './services/user-service';

class App extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            searchKey: "",
            min: 0,
            max: 30,
            products: [],
            total: 0,
            page: 1
        }
    }

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
  <Route path="/" component={Main}/>
  <Route path="/footer" component={App}/>
  <Route path="/newUserWelcome" component={NewUser}/>
  <Route path="/account" component={Account}/>
  <Route path="/activity" component={Activity}/>
  <Route path="/login" component={Login}/>
</Router>
), document.getElementById("content"));
