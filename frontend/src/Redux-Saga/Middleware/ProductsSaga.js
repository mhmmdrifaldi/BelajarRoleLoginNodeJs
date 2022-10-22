import {call,put} from 'redux-saga/effects'
import apiProduct from '../../Api/Product-API'
import { GetProductsSuccess, GetProductsFailed } from '../Actions/Products'

function* handleGetProducts(){
  try {
    const result = yield call(apiProduct.list)
    yield put(GetProductsSuccess(result))
  } catch (error) {
    yield put(GetProductsFailed(error))
  }
}

export {
	handleGetProducts
}