import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Paginator from './components/Paginator';
import SearchBar from './components/SearchBar';
import RangeSlider from './components/RangeSlider';

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
                <Footer />
            </div>
        );
    }
};

ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={App}/>
  <Route path="/footer" component={App}/>
</Router>
), document.getElementById("main"));
