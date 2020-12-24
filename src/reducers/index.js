import { combineReducers } from "redux";
import landing from "./landing";
import product from "./product";
import auth from "./auth";
import cart from "./cart";
import wishlist from "./wishlist";
import navbar1 from "./navbar";
import account from "./account";
import error from "./error";
import message from "./message";

export default combineReducers({
  message,
  landing,
  product,
  auth,
  cart,
  wishlist,
  navbar1,
  account,
  error,
});
