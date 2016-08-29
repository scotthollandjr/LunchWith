import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Paginator from './components/Paginator';
import SearchBar from './components/SearchBar';
import RangeSlider from './components/RangeSlider';
import NewUser from './components/NewUser';
import SkillsForm from './components/SkillsForm';
import Account from './components/Account';

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
      userService.queryUsers({firstname: "sweet-ass"})
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
        userService.findAll({search: this.state.searchKey, min: this.state.min, max: this.state.max, page: this.state.page})
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
                <div className="slds-grid slds-p-top--small slds-grid--align-center">
                    <div className="slds-col">
                        <SearchBar searchKey={this.state.searchKey} onChange={this.searchKeyChangeHandler.bind(this)}/>
                        <RangeSlider defaultValue={[0, 26]} min={0} max={26} step={.5} withBars={true} onChange={this.rangeChangeHandler.bind(this)}/>
                    </div>
                </div>
                <Paginator page={this.state.page} pageSize={this.state.pageSize} total={this.state.total} onPrevious={this.prevPageHandler.bind(this)} onNext={this.nextPageHandler.bind(this)}/>
                <ProductList products={this.state.products} total={this.state.total} onSearchKeyChange={this.searchKeyChangeHandler.bind(this)}/>
                <Footer text="Belgian Beer Explorer"/>
            </div>
        );
    }
};

ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={App}/>
  <Route path="/footer" component={App}/>
  <Route path="/newUserWelcome" component={NewUser}/>
  <Route path="/account" component={Account}/>
</Router>
), document.getElementById("main"));
