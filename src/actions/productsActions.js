import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  SET_PRODUCT_TO_DELETE,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  GET_PRODUCT_TO_EDIT,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,
  START_PRODUCT_EDITION,
  PRODUCT_EDITION_SUCCESS,
  PRODUCT_EDITION_ERROR
} from '../types'


import Swal from 'sweetalert2'
import axiosClient from '../config/axiosConfig'
// Create new product or principal function

export function createNewProductAction(product){
  return (dispatch) =>{
    dispatch( addProduct() )

    // Push to an API
    axiosClient.post('/libros', product)
      .then( answer => {
        console.log(answer.data);
        dispatch( addProductSuccess(answer.data) )
      })
      .catch( error => {
        dispatch( addProductError(error))
      })
  }
}

export const addProduct = () => ({
  type: ADD_PRODUCT
})

export const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
})

export const addProductError = error => ({
  type: ADD_PRODUCT_ERROR
})

// Get list of products from the API

export function getProductsAction(params) {
  return (dispatch) => {
    dispatch( startProductsDownload() )

    // Consult the API
    axiosClient.get('/libros')
      .then(answer => {
        dispatch( downloadProductsSuccess(answer.data) )
      })
      .catch(error => {
        console.log(error);
        dispatch( downloadProductsError() );
      })
  }
}

export const startProductsDownload = () => ({
  type: START_DOWNLOAD_PRODUCTS
})

export const downloadProductsSuccess = ( products ) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products
})

export const downloadProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR
})

// Function to delete a product 

export function deleteProductAction(id) {
  return (dispatch) =>{

    dispatch(setProductToDelete())
    axiosClient.delete(`/libros/${id}`)
      .then( () => {
        dispatch(productDeleteSuccess(id))
      })
      .catch( error => {
        console.log(error);
        dispatch(productDeleteError())
      })
  }
}

const setProductToDelete = () => ({
  type: SET_PRODUCT_TO_DELETE
})

const productDeleteSuccess = id => ({
  type: PRODUCT_DELETE_SUCCESS,
  payload: id
})

const productDeleteError = () => ({
  type: PRODUCT_DELETE_ERROR
})

// Fuction to edit the product

export function getEditProductAction(id){
  return (dispatch) => {
    dispatch(getProductToEdit())

    axiosClient.get(`/libros/${id}`)
      .then(answer => {
        dispatch(productEditSuccess(answer.data))
      })
      .catch( error => {
        dispatch(productEditError())
      })
  }
}

export const getProductToEdit = () => ({
  type: GET_PRODUCT_TO_EDIT
})

export const productEditSuccess = product => ({
  type: PRODUCT_EDIT_SUCCESS,
  payload: product
})

export const productEditError = () => ({
  type: PRODUCT_EDIT_ERROR
})

// Change a product on the API and the state

export function editProductAction(product) {
  return (dispatch) => {
    dispatch(startEdition())
    
    // Call the API TO PUSH DATA
    axiosClient.put(`/libros/${product.id}`, product)
      .then( answer => {
        dispatch(editionSuccess(answer.data))
        Swal.fire(
          'Almacenado',
          'El producto se ha actualizado correctamente',
          'success'
        )
      })
      .catch( error => {
        console.log(error)
        dispatch(editionError())
      })

  }
}

export const startEdition = () => ({
  type: START_PRODUCT_EDITION
}) 

export const editionSuccess = (product) => ({
  type: PRODUCT_EDITION_SUCCESS,
  payload: product
})

export const editionError = () => ({
  type: PRODUCT_EDITION_ERROR
}) 