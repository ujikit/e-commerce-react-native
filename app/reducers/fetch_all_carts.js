const initialState = {
  all_carts_data: [],
  isFetching: false
}

const fetch_all_carts = (state = initialState, action) => {
  console.log(action.type);
  // console.log(action.payload);
  switch(action.type) {
    case 'FETCH_ALL_CARTS':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_ALL_CARTS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        all_carts_data: action.payload
      }
    case 'FETCH_ALL_CARTS_FAILURE':
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export default fetch_all_carts
