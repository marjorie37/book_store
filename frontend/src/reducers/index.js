import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";
import errorReducer from "./errorReducer";
import logReducers from "./logReducers";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  books: bookReducer,
  cart: cartReducer,
  form: formReducer,
  errors: errorReducer,
  log: logReducers
});
