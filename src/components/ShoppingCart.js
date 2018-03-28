import React from 'react';
import { removeFromCart } from '../actionCreatores';
import { connect } from 'react-redux';
import PayList from './Pay';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




const ShoppingCart = ({ cart, removeFromCart }) => {

  return (
    <div className="col-4 shop">
      <div>
        <div>
          <button className="" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            Cobrar: S/.{cart.reduce((sum, product) => sum + product.price, 0)}
          </button>

          <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div class="modal-header">                  
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <PayList />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {cart.map(product =>
            <div className="productShop d-flex justify-content-between" key={product.id}>
              <p className="text-left">{product.name}</p>
              <div>
                <p className="text-right">S/.{product.price}</p>
                <p className="text-right"><button onClick={() => removeFromCart(product)} className="btnTrash"><i class="far fa-trash-alt"></i></button></p>
              </div>
            </div>
          )}
        </div>


      </div>
    </div>
  )

}



const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);