/* eslint-disable import/no-anonymous-default-export */
import store from "../store";
import {
  GET_CART_ITEMS,
  CART_ITEMS_LOADING,
  ADD_TO_CART,
  REMOVE_Single_FROM_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../components/action/cartTypes";

const initialState = {
  cartItems: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CART_ITEMS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CART_ITEMS:
      console.log("reducer called");
      localStorage.removeItem("search-status");
      return {
        ...state,
        cartItems: action.payload,
        isLoading: false,
      };
    case ADD_TO_CART:
      localStorage.removeItem("search-status");
      return {
        cartItems: [action.payload],
        isLoading: false,
      };
    case REMOVE_Single_FROM_CART:
      localStorage.removeItem("search-status");
      return {
        cartItems: [action.payload],
        isLoading: false,
      };
    case REMOVE_FROM_CART:
      localStorage.removeItem("search-status");
      return {
        cartItems: [action.payload],
        isLoading: false,
      };
    case CLEAR_CART:
      localStorage.removeItem("search-status");
      return {
        cartItems: [],
        isLoading: false,
      };

    default:
      return state;
  }
}
