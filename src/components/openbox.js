import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.css';
import dinero from '../assets/icons/dinero.png';
import tarjeta from '../assets/icons/tarjeta-de-credito.png';
import pregunta from '../assets/icons/pregunta.png';
import calendario from '../assets/icons/calendario.png';

const OpenBox = props => (
    <div class="container form-pay">
      <div class="row">
        <p className = "text-left date">{new Date().toLocaleDateString() }</p>
        <i class="far fa-calendar-alt"></i>
        <div className="col-12 monto-pay">
          <p>APERTURA DE CAJA</p>
          <div>
            {`S/ ${localStorage.total}.00`}
          </div>
        </div>
        <div className="col-12 monto-pay">
          
        <form class="form-inline">
  <div class="form-group">
    <label for="inputPassword6">Saldo Inicial de Caja</label>
    <input type="number" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
</div>

</form>
        </div>

        <button type="button" className="btn btn-primary btn-lg caja mt-5">Aperturar</button>
        
        
      </div>
    </div>
  )

export default OpenBox
