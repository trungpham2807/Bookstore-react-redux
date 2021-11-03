import * as types from "../constants/book.constants";

const initialState = {
  books: [],
  loading: false,
  readingList: [],
  selectedBook: null,
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default booksReducer;