import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
import Welcome from './components/Welcome';
// import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import Brand from './components/Brand';
import CreateProduct from './components/CreateProduct';
import Category from './components/Category';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <div className="catalogue">CATALOGUE</div>
        <div className="header">
          <div><Link to="/">HOME</Link></div>
          <div><Link to="/product">PRODUCTS
          <button value="text" ><Link to="/createproduct">CREATE PRODUCT</Link></button>
          </Link>
          </div>
          <div><Link to="/brand">BRAND</Link></div>
          <div><Link to="/category">CATEGORY</Link></div>
        </div>
        <Switch>
          <Route  exact path="/"  component={Welcome}/>
          <Route  exact path="/product" component={Product} />
          <Route  exact path="/brand" component ={Brand} />
          <Route exact path ="/category" component={Category} />
          <Route exact path ="/createproduct" component={CreateProduct} />
        </Switch>
        </div>
       </BrowserRouter>
    );
  }
}

export default App;
