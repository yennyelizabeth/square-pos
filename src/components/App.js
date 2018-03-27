import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import './main.css'
import CloseBox from './closeBox' 
import OpenBox from './openbox'
import RegistrePay from './registrePay' 

const  App  = ()  =>  {  
    return ( 
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">SQUARE - POS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to='/openbox'><img src="./assets/icons/caja-registradora.png" alt="" className="icons_menu" /> Abrir Caja</Link></a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to='/registrePay'><img src="./assets/icons/bolsa-de-la-compra.png" alt="" className="icons_menu" />Productos</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to='/closeBox'><img src="assets/icons/grafico-de-aumento-de-las-existencias.png" alt="" className="icons_menu" />Cierre de caja</Link></a>
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
            <Route path='/openbox' component={OpenBox} /> 
            <Route path='/registrePay' component={RegistrePay} />
            <Route path='/closeBox' component={CloseBox} /> 
            <Redirect from='/' to='/registrePay' />
          </Switch>
        </div>
      </Router>
    ); 
}

export default App;
