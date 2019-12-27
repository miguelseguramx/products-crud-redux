import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import validationReducer from './validationReducer'

export default combineReducers({
  products: productsReducer,
  error: validationReducer
})