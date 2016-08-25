import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Main from './components/Main';
import Login from './components/Login';
import Account from './components/Account';
import Footer from './components/Footer';
import Header from './components/Header';
import SkillsForm from './components/SkillsForm';

import * as productService from './services/product-service';

class App extends React.Component {

    render() {
        return (
            <div>
                
            </div>
        );
    }
};

ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={Login}/>
  <Route path="/account" component={Account}/>
  <Route path="/main" component={Main}/>
</Router>
), document.getElementById("content"));
