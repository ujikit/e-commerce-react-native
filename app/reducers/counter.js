const initialState = {
  count: 0
}

const counter = (state = initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    case 'ADD_COUNTER':
      return {
        count: state.count + 1
      };
    case 'REMOVE_COUNTER':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default counter
