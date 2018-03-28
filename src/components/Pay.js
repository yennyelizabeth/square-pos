import React from 'react';
// import {addToCart} from '../actionCreatores';
// import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.css'
import dinero from '../assets/icons/dinero.png';
import tarjeta from '../assets/icons/tarjeta-de-credito.png';
import pregunta from '../assets/icons/pregunta.png';
import calendario from '../assets/icons/calendario.png';

// La variable price esta el monto acumulado, si te fijal en detalle de 
// compra aparece  {`${localStorage.total}.00`} ahi llamé al valor de el localstorage
// La funcion calculate es donde estaba trabajando para obtener el input 
// onClick={() => calculate(props)} --> estaba pensando hacer una acción que calcule, esta en el boton COBRAR abajo

const calculate = props => {
  let price = localStorage.total;
  let mont = document.getElementById('mountInput');
  let result = Number(mont.value) - Number(price);
  console.log(result);

}

const PayList = props => (
  <div class="container form-pay">
    <div class="row">
      <div class="col-12 monto-pay">
        <p>Detalle de compra</p>
        <div>
          {`${localStorage.total}.00`}
        </div>
      </div>
      <form>
        <p>Seleccionar una forma de pago</p>
        <div class="form-check form-check-1">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" /><img src={dinero} />Efectivo
          </label>
          <div className="input-efectivo">
            <input id="mountInput" class="form-control" placeholder="Monto recibido" />
            <ul>
              <li>Monto:  <span> {`${localStorage.total}.00`}</span></li>
              <li>Vuelto: <span>00.00</span></li>
            </ul>
          </div>
        </div>
        <br />
        <div class="form-check">
          <label class="form-check-label ">
            <input type="checkbox" class="form-check-input" value="" /><img src={tarjeta} />Tarjeta(Crédito)
          </label>
          <div className="input-credito">
            <input disabled class="form-control" placeholder="Monto a cobrar" />
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
                  <span class="input-group-addon"><img src={pregunta} /></span>
                  <input maxlength="3" pattern="[0-9]{3}" type="number" class="form-control" aria-label="Text input with radio button" placeholder="CVC" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-primary btn-block" onClick={() => calculate(props)}>COBRAR</button>
        </div>
      </form>
    </div>
  </div>
)

export default PayList;