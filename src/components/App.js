import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from './card'
import Cash from './cash'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to='/cash'> Efectivo</Link></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to='/card'>Tarjeta</Link></a>
                </li>
              </ul>
            </div>
          </nav>


          {/* <ul className=''>
            <li><Link to='/cash'> Efectivo</Link></li>
            <li><Link to='/card'>Tarjeta</Link></li>
          </ul> */}
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
