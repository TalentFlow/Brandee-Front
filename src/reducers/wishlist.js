/* eslint-disable import/no-anonymous-default-export */
import {
  GET_WISHLIST_ITEMS,
  WISHLIST_LOADING,
  REMOVE_FROM_WISHLIST,
} from "../components/action/wishlistTypes";

const initialState = {
  wishlistItems: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case WISHLIST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WISHLIST_ITEMS:
      console.log("wishlist reducer called");
      localStorage.removeItem("search-status");
      return {
        ...state,
        wishlistItems: action.payload,
        isLoading: false,
      };
    case REMOVE_FROM_WISHLIST:
      console.log(action.payload);
      localStorage.removeItem("search-status");
      return {
        wishlistItems: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
