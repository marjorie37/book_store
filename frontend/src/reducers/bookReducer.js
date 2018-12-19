import { FETCH_BOOKS, SEARCH_BOOK, FETCH_BOOK_DETAILS } from "../actions/types";

export default function(state = {books : [], bookDetails : []}, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
          ...state, books: action.books
      };
case SEARCH_BOOK:
return {
  ...state, books: action.books
}
case FETCH_BOOK_DETAILS:
return {
 ...state, bookDetails: action.bookDetails
}
  default :
  return state
  }
}
