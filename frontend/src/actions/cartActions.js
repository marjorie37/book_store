import { ADD_TO_CART } from "./types";
import axios from "axios";

export const addToCart = id => dispatch => {
  axios
    .get(`https://api.itbook.store/1.0/search/${id}`)
    .then(res => res.data.books)
    .then(item =>
      dispatch({
        type: ADD_TO_CART,
        item
      })
    );
};
