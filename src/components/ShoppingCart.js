import React from 'react';
import { removeFromCart } from '../actionCreatores';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = ({cart, removeFromCart}) => {
  
    return (
      <div header="Shopping Cart" className="col-4">

        <div>

          <div>
            {cart.map(product =>
              <div key={product.id}>
                <div>{product.name}</div>
                <div className="text-right">${product.price}</div>
                <div className="text-right"><button  onClick={() => removeFromCart(product)}><i class="far fa-trash-alt"></i></button></div>
              </div>
            )}
          </div>
          <div>
            <div>
              <div colSpan="4" style={styles.footer}>
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
              </div>
            </div>

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