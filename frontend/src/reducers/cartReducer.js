import { ADD_TO_CART, INCREASE_QUANTITY } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.findIndex(el => el.item.title === action.item.title);
      if (index === -1) {
        return [...state, { item: action.item, quantity: action.quantity + 1 }];
      } else {
        return state.map((item, i) =>
          index === i
            ? {
                ...item,
                quantity: item.quantity + action.quantity + 1
              }
            : item
        );
      }
    case INCREASE_QUANTITY:
      return state.map(ite => ({
        ...ite,
        quantity: ite.quantity + action.quantity
      }));

    default:
      return state;
  }
}
