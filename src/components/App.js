import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';

import Card from './card'
import Cash from './cash'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className=''>
            <li><Link to='/cash' activeClassName='active'> Efectivo</Link></li>
            <li><Link to='/card' activeClassName='active'>Tarjeta</Link></li>
          </ul>
          <hr className='' />
          <Switch>
            <Route path='/cash' component={Cash} />
            <Route path='/card' component={Card} />
            <Redirect from='/' to='/cash' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
