import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component{
  render(){
    return(
      
      <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route path="/Details" component={Details}/>
            <Route path="/Cart" component={Cart}/>
            <Route component={Default}/>
          </Switch>
          <Modal/>
      </React.Fragment>

    )
  }
}

export default App;
