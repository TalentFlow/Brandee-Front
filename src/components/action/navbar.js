import axios from "axios";
import store from "../../store";
import { GET_ICON_COUNT, NAVBAR_LOADING } from "./navbarTypes";
import { GET_CART_ITEMS, CART_ITEMS_LOADING } from "./cartTypes";

export const getIconCount = (data) => (dispatch) => {
  dispatch({ type: NAVBAR_LOADING });
  console.log(data);
  axios
    .post(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/navbar-mobile/`,
      data,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: GET_ICON_COUNT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getCartItemsNavbar = () => (dispatch) => {
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
