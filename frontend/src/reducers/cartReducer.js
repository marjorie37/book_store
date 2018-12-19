import { ADD_TO_CART } from "../actions/types";

export default function(state = { item: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state.item);
      return {
        ...state,
        item: [...state.item, action.item]
      };

    default:
      return state;
  }
}
