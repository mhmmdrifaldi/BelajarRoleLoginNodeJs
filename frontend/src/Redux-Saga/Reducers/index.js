import { combineReducers } from 'redux'
import ProductsReduce from './Products'

const rootReducer = combineReducers({
	productsState: ProductsReduce
})

export default rootReducer