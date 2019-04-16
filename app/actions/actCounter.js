const incCounter = () => {
  return {
    type: 'ADD_COUNTER',
    payload: 1
  }
}

const decCounter = () => {
  return {
    type: 'REMOVE_COUNTER',
    payload: 1
  }
}

export {
  incCounter,
  decCounter
}
