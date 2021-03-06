import React, { Component } from 'react';
// import {addToCart} from '../actionCreatores';
// import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.css'
import dinero from '../assets/icons/dinero.png';
import tarjeta from '../assets/icons/tarjeta-de-credito.png';
import pregunta from '../assets/icons/pregunta.png';
import calendario from '../assets/icons/calendario.png';
import PropTypes from 'prop-types';

const calculate = props => {
  let price = localStorage.total;
  let mont = document.getElementById('mountInput');
  let result = Number(mont.value) - Number(price);
  console.log(result);
}

class PayList extends Component {
  constructor() {
    super();
    this.state = {
      monto:'',
      montResiduo:''
    }
  }

  render() {
    return(
      <div class="container form-pay">
    <div class="row">
      <div class="col-12 monto-pay">
        <p>Detalle de compra</p>
        <div>     
          S/{`${localStorage.total}.00`}
        </div>
      </div>
      <form>
        <p>Seleccionar una forma de pago</p>
        <div class="form-check form-check-1">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" /><img src={dinero}/>Efectivo
          </label>
          <div className="input-efectivo">
            <input type="number" class="form-control" placeholder="Monto recibido" value={this.state.monto} onChange={this.update.bind(this)}/>
            <ul>
              <li>Monto:  <span>{`${localStorage.total}.00`}</span></li>
              <li>Vuelto: <span>{this.state.monto - localStorage.total}</span></li>
            </ul>
            <div className="text-center">
              <button type="button" class="btn btn-primary btn-block" onClick={this.calculo.bind(this)}>COBRAR</button>
            </div>
          </div>
        </div>
        <br />
        <div class="form-check">
          <label class="form-check-label ">
            <input type="checkbox" class="form-check-input" value="" /><img src={tarjeta} />Tarjeta(Crédito)
          </label>
          <div className="input-credito">
            <input disabled class="form-control" placeholder="Monto a cobrar" value={this.state.montoResiduo} />
            <input disabled class="form-control" placeholder="Número de tarjeta" />
            <input disabled class="form-control" placeholder="Nombre del titular" />
            <div className="input-credito-icons">
              <div class="col-6">
                <div class="input-group">
                  <span class="input-group-addon"><img src={calendario} /></span>
                  <input type="month" class="form-control" aria-label="Text input with checkbox" placeholder="Fecha de exp." />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <span class="input-group-addon"><img src={pregunta}/></span>
                  <input  maxlength="3" pattern="[0-9]{3}" type="text" class="form-control" aria-label="Text input with radio button" placeholder="CVC"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-primary btn-block">COBRAR</button>
        </div>
      </form>
    </div>
  </div>
    )
  }

  update(event) {
    this.setState({
      monto: event.target.value
    })
  }

  calculo() {
    let  rest = this.state.monto - localStorage.total;
    console.log(rest);
    console.log(this.state.montoResiduo);
    if ((rest) < 0 ){
      console.log(Math.abs(rest));
      this.setState({
        montoResiduo : Math.abs(rest)
      })
      // this.state.montoResiduo = Math.abs(rest);
    }

  }
}


export default PayList;