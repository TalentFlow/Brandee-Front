/* eslint-disable import/no-anonymous-default-export */
import {
  GET_PRODUCT,
  GET_PRODUCT_DETAIL,
  PRODUCT_LOADING,
  ADD_OR_REMOVE_FROM_WISHLIST,
  ADD_OR_REMOVE_FROM_CART,
  SEARCH_PRODUCT,
  CLEAR_SEARCH_PRODUCT,
  SEARCH_PRODUCT_ERROR,
} from "../components/action/productTypes";
import update from "react-addons-update";

const initialState = {
  products: [],
  searchItems: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT:
      console.log("reducer called");
      localStorage.removeItem("search-status");
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case SEARCH_PRODUCT:
      console.log("search reducers called");
      if (action.payload.length === 0) {
        localStorage.setItem("search-status", "empty");
      } else {
        localStorage.removeItem("search-status");
      }

      return {
        ...state,
        searchItems: action.payload,
        isLoading: false,
      };

    case CLEAR_SEARCH_PRODUCT:
      console.log("search reducers called");
      localStorage.removeItem("search-status");
      return {
        ...state,
        searchItems: [],
        isLoading: false,
      };
    case GET_PRODUCT_DETAIL:
      console.log("reducer called");
      localStorage.removeItem("search-status");
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case ADD_OR_REMOVE_FROM_WISHLIST:
      console.log("wishlist reducer called");
      localStorage.removeItem("search-status");
      console.log("index", action.index);
      // return {
      //   ...state,
      //   products: [([action.index] = action.payload)],
      //   isLoading: false,
      // };
      return update(state, {
        products: {
          [action.index]: {
            $set: action.payload,
          },
        },
      });
    case ADD_OR_REMOVE_FROM_CART:
      console.log("cart reducer called");
      localStorage.removeItem("search-status");
      console.log("index", action.index);
      // return {
      //   ...state,
      //   products: [([action.index] = action.payload)],
      //   isLoading: false,
      // };
      return update(state, {
        products: {
          [action.index]: {
            $set: action.payload,
          },
        },
      });
    default:
      return state;
  }
}
