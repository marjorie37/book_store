import { ADD_TO_CART, INCREASE_QUANTITY } from "./types";
import axios from "axios";

export const addToCart = id => dispatch => {
  axios
    .get(`https://api.itbook.store/1.0/search/${id}`)
    .then(res => res.data.books)
    .then(items =>
      items.map((item, quantity) =>
        dispatch({
          type: ADD_TO_CART,
          item,
          quantity
        })
      )
    );
};

export const increaseQuantity = quantity => ({
  type: INCREASE_QUANTITY,
  quantity
});
