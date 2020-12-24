import axios from "axios";
import store from "../../store";
import {
  GET_WISHLIST_ITEMS,
  WISHLIST_LOADING,
  REMOVE_FROM_WISHLIST,
} from "./wishlistTypes";
import { GET_ERRORS, CREATE_MESSAGE } from "./errorTypes";
import { createMessage } from "./message";

export const getWishlist = (data) => (dispatch) => {
  dispatch({ type: WISHLIST_LOADING });
  axios
    .get(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/wishlist/?${
        localStorage.getItem("_userId")
          ? `user=${localStorage.getItem("_userId")}`
          : ""
      }`,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: GET_WISHLIST_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const removeFromWishlist = (id, data) => (dispatch) => {
  dispatch({ type: WISHLIST_LOADING });

  axios
    .delete(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/product/wishlist/${id}/
      `,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch(createMessage({ DeleteWishlist: "Removed From Wishlist" }));
      dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};
