import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.css';

const CloseBox = props => (
    <div className="container form-pay">
        <div className="row">
            <p className="text-left date">{new Date().toLocaleDateString()}</p>
            <i className="far fa-calendar-alt"></i>
            <div className="col-12 monto-pay">
                <p>CIERRE DE CAJA</p>
                <div>
                    {`S/ ${localStorage.total}.00`}
                </div>
            </div>
            <div className="col-12 monto-pay">

                <form class="form-inline">
                    <div className="form-group">
                        <label for="inputPassword6">Saldo Inicial de Caja</label>
                        <input type="number" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="form-group">
                        <label for="inputPassword6">Ventas en efectivo</label>
                        <input type="number" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="form-group">
                        <label for="inputPassword6">Saldo de Caja</label>
                        <input type="number" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="form-group">
                        <label for="inputPassword6">Ventas con Tarjeta</label>
                        <input type="number" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                    </div>
                </form>
            </div>

            <button type="button" className="btn btn-primary btn-lg caja">Cerrar Caja</button>


        </div>
    </div>
)

export default CloseBox
