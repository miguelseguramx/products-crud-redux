import React, { useState } from 'react';

// REDUX
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { createNewProductAction } from '../actions/productsActions'
import { validateFormAction, successValidation, errorValidation } from '../actions/validationActions'
// import { ADD_PRODUCT_SUCCESS } from '../types';
import shortid from 'shortid'

function NewProduct( {history} ) {

  // state
  const [ name, setName ] = useState('')
  const [ price, setPrice ] = useState('')

  // Create new product and validate form

  const dispatch = useDispatch()

  const addProduct = product => dispatch(createNewProductAction(product))

  const validateForm = () => dispatch( validateFormAction() )
  const validationSuccess = () => dispatch( successValidation() )
  const validationError = () => dispatch( errorValidation() )

  // Get data from the state 

  const error = useSelector((state) => state.error.error )

  // Add new product
  const submitNewProduct = e => {
    e.preventDefault()

    // Validate Form

    validateForm()

    if( name.trim() === '' || price.trim() === ''){
      validationError()
    } else {
      validationSuccess()
    }

    // If pass the validation 
    // Create new product

    addProduct({
      name,
      price
    })

    // Redirect new product
    history.push('/')
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Producto</h2>
            <form
              onSubmit={submitNewProduct}
            >
              <div className="form-group">
                <label>Nombre del Libro</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nombre Libro" 
                  value={name}
                  onChange={ e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio del Libro</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Precio Libro" 
                  value={price}
                  onChange={ e => setPrice(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
            </form>
            { error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;