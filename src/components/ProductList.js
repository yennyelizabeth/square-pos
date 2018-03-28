import React from 'react';
import {addToCart} from '../actionCreatores';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './main.css'

 const ProductList =({products,addToCart}) =>{
    
        products = [
          { id: 1, name: "Simple res", price: 10, image: "https://image.ibb.co/gsFbhx/carne.jpg"  },
          { id: 2, name: "Simple pollo", price: 10, image: "https://image.ibb.co/e3pK2x/hamburguesa.jpg"  },
          { id: 3, name: "Simple pollo", price: 10, image: "https://image.ibb.co/fA1Ghx/vegetariana.jpg"  },
          { id: 4, name: "Doble pollo", price: 15, image: "https://image.ibb.co/gsFbhx/carne.jpg"},
          { id: 5, name: "Doble pollo", price: 15, image: "https://image.ibb.co/e3pK2x/hamburguesa.jpg" },
          { id: 6, name: "Doble pollo", price: 15, image: "https://image.ibb.co/fA1Ghx/vegetariana.jpg"  },
          { id: 7, name: "Papas fritas", price: 5, image: "https://image.ibb.co/cmYwhx/papas_fritas.jpg" },
          { id: 8, name: "Onion Rings", price: 5, image: "https://image.ibb.co/eyDwhx/cebolla.jpg"  },
          { id: 9, name: "Agua sin gas", price: 5, image: "https://image.ibb.co/hqTXpc/agua.jpg" },
          { id: 10, name: "Gaseosa fanta", price: 7, image: "https://image.ibb.co/eYRMFH/gaseosa.jpg"  },
          { id: 11, name: "Onion Rings", price: 5, image: "https://image.ibb.co/eyDwhx/cebolla.jpg"  },
          { id: 12, name: "Agua con gas", price: 5, image: "https://image.ibb.co/hqTXpc/agua.jpg" },
          { id: 13, name: "Gaseosa fanta", price: 7, image: "https://image.ibb.co/eYRMFH/gaseosa.jpg"  },
          { id: 14, name: "Simple res", price: 10, image: "https://image.ibb.co/gsFbhx/carne.jpg"  },
          { id: 15, name: "Simple pollo", price: 10, image: "https://image.ibb.co/e3pK2x/hamburguesa.jpg"  },
          { id: 16, name: "Simple pollo", price: 10, image: "https://image.ibb.co/fA1Ghx/vegetariana.jpg"  },
        ]
     
      return (
        <div className="col-8 main p-1">
          <div className ="" >
            {products.map(product =>
            <div className="col-3 p-1 product float-left" onClick={() => addToCart(product)}>
              <div className="card"  key={product.id}>
                <img className="card-img-top" src={product.image} alt={product.name} />
                  <p className="card-title text-center mt-1">{product.name}</p>
                  <p className="card-title text-center mt-1">S/. {product.price}</p>
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
  
    