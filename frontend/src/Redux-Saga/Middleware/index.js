import { takeEvery, all } from 'redux-saga/effects'
import * as ActionProducts from '../Constants/Products'

import { handleGetProducts } from './ProductsSaga'

function *watchAll(){
	yield all([
		takeEvery(ActionProducts.GET_PRODUCTS_REQUEST, handleGetProducts)
	])
}

export default watchAll