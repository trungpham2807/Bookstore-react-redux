import { combineReducers } from "redux";
import booksReducer from "../reducers/book.reducer";

export default combineReducers({
  books: booksReducer,
});