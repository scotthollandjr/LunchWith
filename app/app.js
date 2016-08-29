import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Main from './components/Main';
import Login from './components/Login';
import Account from './components/Account';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import NewUser from './components/NewUser';

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
  <Route path="/" component={Main}/>
  <Route path="/newuser" component={NewUser}/>
  <Route path="/account" component={Account}/>
</Router>
), document.getElementById("content"));
