import {
  VALIDATE_FORM,
  VALIDATE_FORM_SUCCESS,
  VALIDATE_FORM_ERROR
} from '../types/index'

export function validateFormAction(params) {
  return dispatch => {
    dispatch( initValidation() )
  }
}

export const initValidation = () => {
  return{
    type: VALIDATE_FORM
  }
}

export const successValidation = () => {
  return{
    type: VALIDATE_FORM_SUCCESS
  }
}

export const errorValidation = () => {
  return{
    type: VALIDATE_FORM_ERROR
  }
}


