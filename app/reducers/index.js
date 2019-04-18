import { combineReducers } from 'redux'

import fetch_all_products from './fetch_all_products'

const appReducer = combineReducers({
  fetch_all_products: fetch_all_products
})

export default appReducer
