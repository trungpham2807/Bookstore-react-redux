import { combineReducers } from "redux";
import booksReducer from "./book.reducer";
import cartReducer from "./cart.reducer";
export default combineReducers({
  books: booksReducer,
  cart: cartReducer,
});