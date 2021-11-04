import * as types from "../constants/cart.constants";
import api from "../../apiService";
import { toast } from "react-toastify";

const getCart = () => async (dispatch) => {
  dispatch({ type: types.GET_CARTS_REQUEST, payload: null });

  try {
    const data = await api.get("/cart");
    dispatch({ type: types.GET_CARTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: types.GET_CARTS_FAILURE, payload: null });
  }
};

const addToCart = (book) => async (dispatch) => {
  dispatch({ type: types.POST_BOOK_CARTS_REQUEST, payload: null });
  try {
    await api.post(`/cart`, book);
    dispatch({ type: types.POST_BOOK_CARTS_SUCCESS, payload: null });
    toast.success(`Add ${book.title} to cart success`);
  } catch (error) {
    dispatch({ type: types.POST_BOOK_CARTS_FAILURE, payload: null });
    toast.error(`loser ${error.message}`);
  }
};

const removeFromCart = (bookId) => async (dispatch) => {
  dispatch({ type: types.POST_BOOK_CARTS_REQUEST, payload: null });
  try {
    await api.delete(`/cart/${bookId}`);
    dispatch({ type: types.POST_BOOK_CARTS_SUCCESS, payload: null });
    toast.success("remove haha");
    dispatch(getCart());
  } catch (error) {
    dispatch({ type: types.POST_BOOK_CARTS_FAILURE, payload: null });
    toast.error(`u are loser \n ${error.message}`);
  }
};

export const cartActions = {
  getCart,
  addToCart,
  removeFromCart,
};