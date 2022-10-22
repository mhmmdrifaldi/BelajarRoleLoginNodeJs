import * as ActionType from '../Constants/Products'

export const GetProductsRequest = () => ({
  type : ActionType.GET_PRODUCTS_REQUEST
})

export const GetProductsSuccess = (payload) => ({
  type : ActionType.GET_PRODUCTS_SUCCESS,
  payload
})

export const GetProductsFailed = (payload) => ({
  type : ActionType.GET_PRODUCTS_FAILED,
  payload
})