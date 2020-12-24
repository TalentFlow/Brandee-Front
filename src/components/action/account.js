import axios from "axios";
import {
  GET_ADDRESS,
  ACC_LOADING,
  DELETE_ADDRESS,
  UPDATE_ADDRESS,
  ADD_ADDRESS,
} from "./accountTypes";
import { GET_ERRORS, CREATE_MESSAGE } from "./errorTypes";
import { createMessage } from "./message";

export const getAccAddress = () => (dispatch) => {
  dispatch({ type: ACC_LOADING });
  axios
    .get(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/addresses/?${
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
        type: GET_ADDRESS,
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
    });
};

export const getAccAddressDefault = () => (dispatch) => {
  dispatch({ type: ACC_LOADING });
  axios
    .get(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/addresses/?${
        localStorage.getItem("_userId")
          ? `user=${localStorage.getItem("_userId")}`
          : ""
      }&default=${true}`,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: GET_ADDRESS,
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
    });
};

export const deleteAddresses = (id, data) => (dispatch) => {
  dispatch({ type: ACC_LOADING });
  axios
    .delete(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/addresses/${id}/`,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: DELETE_ADDRESS,
        payload: data,
      });
      dispatch(createMessage({ DeleteAddress: "Address Deleted" }));
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
    });
};

const updateArray = (obj, index) => {
  return {
    type: "UPDATE_ADDRESS",
    index: index,
    payload: obj,
  };
};

export const updateAddresses = (data, index) => (dispatch) => {
  dispatch({ type: ACC_LOADING });
  axios
    .post(
      "https://sohaib-shafiq-ecommerce.herokuapp.com/api/upd/address/",
      data,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch(updateArray(data, index));
      // window.location.reload();
      localStorage.setItem("address_updated", true);
      dispatch(createMessage({ UpdateAddress: "Address Updated" }));
    })
    .catch((err) => {
      localStorage.setItem("address_updated", false);
      // const errors = {
      //   error: err.response.data,
      //   status: err.response.status,
      // };
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: errors,
      // });
    });
};

export const addNewAddress = (data, data1) => (dispatch) => {
  dispatch({ type: ACC_LOADING });
  axios
    .post(
      "https://sohaib-shafiq-ecommerce.herokuapp.com/api/addresses/create/",
      data,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: ADD_ADDRESS,
        payload: data1.concat(res.data.obj),
      });
      localStorage.setItem("address_created", "true");
      dispatch(createMessage({ CreateAddress: "Address Created" }));
      // window.location.reload();
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
      localStorage.setItem("address_created", "false");
    });
};
