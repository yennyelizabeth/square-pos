import React, { Component } from 'react';
import {addToCart} from '../actionCreatores';
import { connect } from 'react-redux';

 const ProductList =({products,addToCart}) =>{
    
        products = [
          { id: 1, name: "Simple res", price: 10, image: "https://image.ibb.co/gsFbhx/carne.jpg"  },
          { id: 2, name: "Simple pollo", price: 10, image: "https://image.ibb.co/e3pK2x/hamburguesa.jpg"  },
          { id: 3, name: "Simple vegetariana", price: 10, image: "https://image.ibb.co/fA1Ghx/vegetariana.jpg"  },
          { id: 4, name: "Doble res", price: 15, image: "https://image.ibb.co/gsFbhx/carne.jpg"},
          { id: 5, name: "Doble pollo", price: 15, image: "https://image.ibb.co/e3pK2x/hamburguesa.jpg" },
          { id: 6, name: "Doble vegetariana", price: 15, image: "https://image.ibb.co/fA1Ghx/vegetariana.jpg"  },
          { id: 5, name: "Papas fritas", price: 5, image: "https://image.ibb.co/cmYwhx/papas_fritas.jpg" },
          { id: 6, name: "Onion Rings", price: 5, image: "https://image.ibb.co/eyDwhx/cebolla.jpg"  },
          { id: 6, name: "Agua", price: 5, image: "https://image.ibb.co/hqTXpc/agua.jpg" },
          { id: 6, name: "Gaseosa", price: 7, image: "https://image.ibb.co/eYRMFH/gaseosa.jpg"  },
        ]
     
      return (
        <div className="col-9">
          <div>
            <h1 className="text-center m-5"> Menú Hamburguesas </h1>
          </div>
          <div class="card-group ">
            {products.map(product =>
            <div class="col-3">
              <div className="card m-3"  key={product.id}>
                <img className="card-img-top" src={product.image} alt={product.name} />
                <div className="card-body">
                <h4 className="card-title text-center">{product.name}</h4>
                <h4 className="card-title text-center">S/.{product.price}</h4>
                  <p className="card-text">
                    <button className= "btn" onClick={() => addToCart(product)}>Comprar</button>
                  </p>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
        
      );
   
  }

    const mapStateToProps = state => {
      return {
        products: state.products
      }
    }
    
    const mapDispatchToProps = dispatch => {
      return {
        addToCart(product) {
          dispatch(addToCart(product))
        }
      }
    }

    export default connect(mapStateToProps, mapDispatchToProps) (ProductList);
  
    