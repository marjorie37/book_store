import { FETCH_BOOKS, SEARCH_BOOK, FETCH_BOOK_DETAILS } from "./types";
import axios from "axios";

export const fetchBooks = () => dispatch => {
  axios
    .get("https://api.itbook.store/1.0/new")
    .then(res => res.data.books)
    .then(books =>
      dispatch({
        type: FETCH_BOOKS,
        books
      })
    );
};

export const searchBook = (book) => dispatch => {
  axios.get(`https://api.itbook.store/1.0/search/${book}`)
  .then(res => res.data.books)
  .then(books => 
    dispatch({
      type : SEARCH_BOOK,
      books
    }))
}
export const fetchBookDetails = (id) => dispatch => {
  axios.get(`https://api.itbook.store/1.0/search/${id}`)
  .then(res => res.data.books)
  .then(bookDetails => 
    dispatch({
      type : FETCH_BOOK_DETAILS,
      bookDetails
    }))
}