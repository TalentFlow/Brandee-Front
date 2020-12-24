/* eslint-disable import/no-anonymous-default-export */
import store from "../store";
import { GET_ERRORS } from "../components/action/errorTypes";

const initialState = {
  error: [],
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        error: action.payload.error,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
