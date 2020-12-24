/* eslint-disable import/no-anonymous-default-export */
import store from "../store";
import { GET_MESSAGE, CREATE_MESSAGE } from "../components/action/errorTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    case CREATE_MESSAGE:
      console.log(action.payload);
      return (state = action.payload);
    default:
      return state;
  }
}
