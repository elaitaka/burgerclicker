import React, { Component } from 'react';
import './App.css';

import Menu from './Menu.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from './Game';
import Coupons from './Coupons';
import Profile from './Profile';

class Clicker extends Component {

  render() {
    return(
      <Router>
      <div className="clicker">
        <Route path="/" exact component={Game}/>  
        <Route path="/coupons" component={Coupons}/>
        <Route path="/profile" component={Profile}/>  
        <Menu coupons={3}/>
      </div>
      </Router>
    );    
  }
}

export default Clicker;