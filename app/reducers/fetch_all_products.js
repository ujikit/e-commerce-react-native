const initialState = {
  all_products_data: [],
  isFetching: false
}

const fetch_all_products = (state = initialState, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch(action.type) {
    case 'FETCH_ALL_PRODUCTS':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_ALL_PRODUCTS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        all_products_data: action.payload
      }
    case 'FETCH_ALL_PRODUCTS_FAILURE':
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export default fetch_all_products
