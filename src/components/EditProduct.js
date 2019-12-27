import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { getEditProductAction, editProductAction } from "../actions/productsActions";
import { successValidation, errorValidation, validateFormAction } from "../actions/validationActions";

function EditProduct({ match, history }) {

  // Create ref
  const nameRef = useRef('')
  const priceRef = useRef('')
  
  // Dispatchh to call the principal action
  const dispatch = useDispatch()

  const editProduct = product => dispatch( editProductAction(product))
  
  const { id } = match.params
  
  useEffect(()=>{
    dispatch(getEditProductAction(id))
  }, [dispatch, id])
  
  // Get the state and the product data 
  
  const product =  useSelector( state => state.products.product )
  const error =  useSelector( state => state.products.error)
  
  // Wait the response from the api
  if (!product) return 'Cargando'
  
  // Validation thing
  const validateForm = () => dispatch( validateFormAction() )
  const validationSuccess = () => dispatch( successValidation() )
  const validationError = () => dispatch( errorValidation() )

  const handleSubmit = e => {
    e.preventDefault()

    // Validate Form 

    validateForm()

    if( nameRef.current.value.trim() === '' || priceRef.current.value.trim() === ''){
      validationError()
    } else {
      validationSuccess()
    }
    // There's no error
    // Save the changes
    
    editProduct({
      id,
      name: nameRef.current.value,
      price: priceRef.current.value
    })

    
    // Redirect to the last page
    history.push('/')
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Editar Producto</h2>
            <form
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Titulo</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Titulo"
                  defaultValue={product.name}
                  ref={nameRef}
                />
              </div>
              <div className="form-group">
                <label>Precio del Producto</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Precio" 
                  defaultValue={product.price}
                  ref={priceRef}
                />
              </div>
              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
            </form>
            { error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un errors</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;