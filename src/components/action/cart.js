import axios from "axios";
import store from "../../store";
import {
  GET_CART_ITEMS,
  CART_ITEMS_LOADING,
  ADD_TO_CART,
  REMOVE_Single_FROM_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./cartTypes";
import { GET_ICON_COUNT } from "./navbarTypes";
// import { GET_ERRORS, CREATE_MESSAGE } from "./errorTypes";
import { createMessage } from "./message";
import { getIconCount, getCartItemsNavbar } from "./navbar";

export const getCartItems = () => (dispatch) => {
  dispatch({ type: CART_ITEMS_LOADING });
  axios
    .get(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/orders/?${
        localStorage.getItem("_userId")
          ? `user=${localStorage.getItem("_userId")}`
          : ""
      }&ordered=${false}`,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: GET_CART_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      // const errors = {
      //   error: err.response.data,
      //   status: err.response.status,
      // };
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: errors,
      // });
      console.log(err);
    });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};

const addToCartSingle = (data, index) => (dispatch) => {
  dispatch({ type: CART_ITEMS_LOADING });
  const user = localStorage.getItem("_userId");
  const data1 = {
    slug: data.items[index].products.slug,
    user: user,
  };
  console.log(data1);
  axios
    .post(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/add-to-cart/`,
      data1,
      function () {
        setTimeout(5000);
      }
    )
    .then((res) => {
      dispatch(createMessage({ AddCart: "Item Added" }));
      dispatch({
        type: ADD_TO_CART,
        payload: data,
      });
      dispatch({ GET_ICON_COUNT });
      store.dispatch(getCartItemsNavbar());
    })
    .catch((err) => console.log(err));
};
export { addToCartSingle };

export const removeFromCartSingle = (data, index, id) => (dispatch) => {
  dispatch({ type: CART_ITEMS_LOADING });
  const user = localStorage.getItem("_userId");
  const data1 = {
    slug: data.items[index].products.slug,
    user: user,
  };
  console.log(data1);
  axios
    .post(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/order-items/update/
      `,
      data1,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch(createMessage({ DeleteCartItemSingle: " Quantity Updated" }));
      dispatch({
        type: REMOVE_Single_FROM_CART,
        payload: data,
      });
      store.dispatch(getIconCount(user));
    })
    .catch((err) => console.log(err));
};

export const removeFromCart = (id, data) => (dispatch) => {
  dispatch({ type: CART_ITEMS_LOADING });

  axios
    .delete(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/order-items/${id}/delete/
      `,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch(createMessage({ DeleteCartItem: "Cart Item Deleted" }));
      dispatch({
        type: REMOVE_FROM_CART,
        payload: data,
      });
      dispatch({ GET_ICON_COUNT });
    })
    .catch((err) => console.log(err));
};
