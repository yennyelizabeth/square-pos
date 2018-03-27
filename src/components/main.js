import React,  { Component }  from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

class Main extends Component {
  render() {
    return (
      <div>
        <ProductList />
        <ShoppingCart />
      </div>
    );
  }
}

export default Main;
