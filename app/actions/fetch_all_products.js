const fetchAllProducts = () => {
  return {
    type: 'FETCH_ALL_PRODUCTS'
  }
}

const fetchAllProductsSuccess = (data) => {
  return {
    type: 'FETCH_ALL_PRODUCTS_SUCCESS',
    payload: data
  }
}

const fetchAllProductsFailure = () => {
  return {
    type: 'FETCH_ALL_PRODUCTS_FAILURE'
  }
}

export {
  fetchAllProducts,
  fetchAllProductsSuccess,
  fetchAllProductsFailure
}
