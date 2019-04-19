import { combineReducers } from 'redux'

import fetch_all_products from './fetch_all_products'
import fetch_all_carts from './fetch_all_carts'

const appReducer = combineReducers({
  fetch_all_products: fetch_all_products,
  fetch_all_carts: fetch_all_carts
})

export default appReducer
