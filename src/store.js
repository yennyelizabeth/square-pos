import { createStore } from 'redux';


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.concat(action.product)
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.product.id)
      }
    default:
      return state;

  }
}

const initialState = {
  cart: []
} 
export default createStore(reducer,initialState);