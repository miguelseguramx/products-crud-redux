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

// SET INITIAL STATE
const initialState = {
  products: [],
  error: null,
  loading: false,
  product: {}
}

export default function ( state = initialState, action) {
  switch(action.type){
    case ADD_PRODUCT:
      return{
        ...state,
        error: null
      }
    case ADD_PRODUCT_SUCCESS:
      return{
        ...state,
        error: null,
        products: [...state.products, action.payload]
      }
    case ADD_PRODUCT_ERROR:
      return{
        ...state,
        error: true
      }
    case START_DOWNLOAD_PRODUCTS:
      return{
        ...state,
        loading: true,
        product: {}
      }
    case DOWNLOAD_PRODUCTS_SUCCESS:
      return{
        ...state,
        products: action.payload,
        loading: false,
        error: false,
        product: {}
      }
    case DOWNLOAD_PRODUCTS_ERROR:
      return{
        ...state,
        products: [],
        loading: false,
        error: true,
        product: {}
      }
    case SET_PRODUCT_TO_DELETE:
      return{
        ...state,
        error: null
      }
    case PRODUCT_DELETE_SUCCESS:
      return{
        ...state,
        error: null,
        products: state.products.filter( products => products.id !== action.payload)
      }
    case PRODUCT_DELETE_ERROR:
      return{
        ...state,
        error: true,
      }
    case GET_PRODUCT_TO_EDIT:
      return{
        ...state,
        error: null
      }
    case PRODUCT_EDIT_SUCCESS:
      return{
        ...state,
        error: null,
        product: action.payload
      }
    case PRODUCT_EDIT_ERROR:
      return{
        ...state,
        error: true
      }
    case START_PRODUCT_EDITION:
      return{
        ...state,
        error: null
      }
    case PRODUCT_EDITION_SUCCESS:
      return{
        ...state,
        error: null,
        products: state.products.map( product => product.id === action.payload.id ? product = action.payload : product )
      }
    case PRODUCT_EDITION_ERROR:
      return{
        ...state,
        error: true,
      }
    default:
      return state
  }
}