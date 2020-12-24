import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  RECOVER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT_USER,
} from "./authTypes";
import { CLEAR_CART } from "./cartTypes";

export const loadUser = () => (dispatch, getState) => {
  // USER LOADING
  dispatch({ type: USER_LOADING });

  //GET token from state

  const token = getState().auth.token;

  const body = {
    token: `${token}`,
  };

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  axios
    .post(
      "https://sohaib-shafiq-ecommerce.herokuapp.com/accounts/token-auth-refresh/",
      body
    )
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  dispatch({ type: CLEAR_CART });
  window.location.reload();
};

export const login = (data) => (dispatch) => {
  console.log("login called");
  console.log(data);
  // const lastLocation = useLastLocation();
  // console.log(lastLocation);

  axios
    .post(
      "https://sohaib-shafiq-ecommerce.herokuapp.com/accounts/login/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
    });

  // window.location.reload();
};

export const register = (data) => (dispatch) => {
  console.log(data);
  axios
    .post(
      "https://sohaib-shafiq-ecommerce.herokuapp.com/accounts/register/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const recoverEmailAction = (data) => (dispatch) => {
  console.log("login called");
  console.log(data);
  var value;
  axios
    .post(
      "https://sohaib-shafiq-ecommerce.herokuapp.com/accounts/request-reset-email/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({
        type: RECOVER_SUCCESS,
      });
      value = res.status;
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
      value = err.data;
    });
  return value;
  // window.location.reload();
};
