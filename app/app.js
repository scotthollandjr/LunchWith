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
        this.findProducts();
        this.displayUsers();
    }

    displayUsers() {
      productService.queryUsers({firstname: "sweet-ass"})
        .then(data => {
          console.log(data)
        });
    }

    searchKeyChangeHandler(searchKey) {
        this.setState({searchKey: searchKey, page: 1}, this.findProducts);
    }

    rangeChangeHandler(values) {
        this.setState({min: values[0], max: values[1], page: 1}, this.findProducts);
    }

    findProducts() {
        productService.findAll({search: this.state.searchKey, min: this.state.min, max: this.state.max, page: this.state.page})
            .then(data => {
                this.setState({
                    products: data.products,
                    page: data.page,
                    pageSize: data.pageSize,
                    total: data.total
                });
            });
    }

    nextPageHandler() {
        let p = this.state.page + 1;
        this.setState({page: p}, this.findProducts);
    }

    prevPageHandler() {
        let p = this.state.page - 1;
        this.setState({page: p}, this.findProducts);
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
  <Route path="/newuser" component={NewUser}/>
  <Route path="/account" component={Account}/>
  <Route path="/postTest" component={Account}/>
</Router>
), document.getElementById("content"));
