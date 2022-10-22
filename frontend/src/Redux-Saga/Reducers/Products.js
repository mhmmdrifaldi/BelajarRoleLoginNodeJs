import * as ActionType from '../Constants/Products'

const INIT_STATE = {
	products: []
}

const ProductsReduce = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ActionType.GET_PRODUCTS_REQUEST:
			return { ...state }
		case ActionType.GET_PRODUCTS_SUCCESS:
			return GetProductsSucceed(state, action)
		default:
			return state
	}
}

const GetProductsSucceed = (state, action) => {
  return {
    ...state,
    products: action.payload
  }
}

export default ProductsReduce