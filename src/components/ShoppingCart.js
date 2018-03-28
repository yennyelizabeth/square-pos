import React from 'react';
import { removeFromCart } from '../actionCreatores';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




const ShoppingCart = ({cart, removeFromCart}) => {
  
    return (
      <div className="col-4 shop">
        <div>
        <div>
            <button className="cobrar">
              Cobrar: S/.{cart.reduce((sum, product) => sum + product.price, 0)}
            </button>
          </div>

          <div>
            {cart.map(product =>
              <div className="productShop d-flex justify-content-between" key={product.id}>
                <p className="text-left">{product.name}</p>
                <div>
                  <p className="text-right">S/.{product.price}</p>
                  <p className="text-right"><button  onClick={() => removeFromCart(product)} className="btnTrash"><i class="far fa-trash-alt"></i></button></p>
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
export default connect(mapStateToProps, mapDispatchToProps) (ShoppingCart);