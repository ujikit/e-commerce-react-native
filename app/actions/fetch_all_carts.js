const fetchAllCarts = () => {
  return {
    type: 'FETCH_ALL_CARTS'
  }
}

const fetchAllCartsSuccess = (data) => {
  return {
    type: 'FETCH_ALL_CARTS_SUCCESS',
    payload: data
  }
}

const fetchAllCartsFailure = () => {
  return {
    type: 'FETCH_ALL_CARTS_FAILURE'
  }
}

export {
  fetchAllCarts,
  fetchAllCartsSuccess,
  fetchAllCartsFailure
}
