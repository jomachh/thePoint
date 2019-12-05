function products(state = {}, action) {
  switch (action.type) {
    case "SET_CUSTOMER": {
      return { ...state, ...action.payload.customer };
    }
    default:
      return state;
  }
}

export default products;
