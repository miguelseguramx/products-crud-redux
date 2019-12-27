import React, { useEffect, Fragment } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from "../actions/productsActions";

// Components
import Product from './Product'

function Products(props) {
  
  // Principal fuction to get the products

  const dispatch = useDispatch()
  useEffect( () => {
    // Load produts 
    const loadProducts = () => dispatch( getProductsAction() )
    loadProducts()
    
  }, [dispatch])

  // Get the state for the condicional loading component
  const loading = useSelector( state => state.products.loading)
  const products = useSelector( state => state.products.products)
  const error = useSelector( state => state.products.error)
  

  return (
    <Fragment>
      { error
      ? 
      <div className="font-weight-bold alert alert-danger text-center">Ha ocurrido un error</div> 
      : 
        <Fragment>
        <h2 className="text-center my-5">Listado de Productos</h2>
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>   
          </thead>
          <tbody>
            {products.map( product => (
              <Product
                key = {product.id}
                product = {product}
              ></Product>
            ))}
          </tbody>
        </table>
        {loading ? <p className="text-center">Cargando...</p> : null}
        </Fragment>
      }
    </Fragment>
  );
}

export default Products;