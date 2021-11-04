import * as types from "../constants/cart.constants";
const initialState = {
  books: [],
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case types.GET_CARTS_REQUEST:
    case types.POST_BOOK_CARTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_CARTS_FAILURE:
    case types.POST_BOOK_CARTS_FAILURE:
      return { ...state, loading: false };
    case types.POST_BOOK_CARTS_SUCCESS:
      return { ...state, loading: false };
    case types.GET_CARTS_SUCCESS:
      return { ...state, books: payload, loading: false };
    default:
      return state;
  }
};

export default cartReducer;