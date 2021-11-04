import * as types from "../constants/book.constants";

import api from "../../apiService";
import { toast } from "react-toastify";

const getBooks = (pageNum, limit, query) => async (dispatch) => {
  dispatch({ type: types.GET_BOOKS_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}/books?_page=${pageNum}&_limit=${limit}`;
    if (query) url += `&q=${query}`;
    const data = await api.get(url);
    dispatch({ type: types.GET_BOOKS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: types.GET_BOOKS_FAILURE, payload: null });
  }
};

const selectBook = (bookId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_BOOK_REQUEST, payload: null });
  try {
    const data = await api.get(`/books/${bookId}`);
    dispatch({ type: types.GET_SINGLE_BOOK_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_BOOK_FAILURE, payload: null });
  }
};

const addToFavorite = (book) => async (dispatch) => {
  dispatch({ type: types.POST_FAVORITE_REQUEST, payload: null });
  try {
    const data = await api.post(`/favorites`, book);
    dispatch({ type: types.POST_FAVORITE_SUCCESS, payload: data.data });
    toast.success(`Add ${book.title} to cart success`);
  } catch (error) {
    dispatch({ type: types.POST_FAVORITE_FAILURE, payload: null });
    toast.error(`huhuhuh ${error.message}`);
  }
};
const deleteToFavorite = (bookId) => async (dispatch) => {
  dispatch({ type: types.DELETE_FAVORITE_REQUEST, payload: null });
  try {
    await api.delete(`/favorites/${bookId}`);
    dispatch({ type: types.DELETE_FAVORITE_SUCCESS, payload: bookId });
    dispatch(getFavorite());
    toast.success(`lucky for u success`);
  } catch (error) {
    console.log(error.message);
    dispatch({ type: types.DELETE_FAVORITE_FAILURE, payload: null });
    toast.error(`hihi ${error.message}`);
  }
};

const getFavorite = () => async (dispatch) => {
  dispatch({ type: types.GET_FAVORITE_REQUEST, payload: null });
  try {
    const data = await api.get(`/favorites`);
    dispatch({ type: types.GET_FAVORITE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: types.GET_FAVORITE_FAILURE, payload: null });
  }
};

export const bookActions = {
  getBooks,
  selectBook,
  addToFavorite,
  getFavorite,
  deleteToFavorite,
};