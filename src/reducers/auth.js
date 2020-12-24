/* eslint-disable import/no-anonymous-default-export */
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
} from "../components/action/authTypes";

const initialState = {
  token: localStorage.getItem("token-brandee"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      localStorage.setItem("token-brandee", action.payload.token);
      localStorage.setItem("_userId", action.payload.user.id);
      localStorage.removeItem("search-status");
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token-brandee", action.payload.token);
      localStorage.setItem("_userId", action.payload.user.id);
      localStorage.removeItem("search-status");
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem("token-brandee", action.payload.token);
      localStorage.setItem("_userId", action.payload.id);
      localStorage.removeItem("search-status");
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_USER:
      localStorage.removeItem("token-brandee");
      localStorage.removeItem("_userId");
      localStorage.setItem("latestAction", "FAIL");
      localStorage.removeItem("search-status");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };

    case RECOVER_SUCCESS:
    default:
      return state;
  }
}
