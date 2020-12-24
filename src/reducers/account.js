/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ADDRESS,
  ACC_LOADING,
  DELETE_ADDRESS,
  UPDATE_ADDRESS,
  ADD_ADDRESS,
} from "../components/action/accountTypes";
import update from "react-addons-update";

const initialState = {
  addresses: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACC_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ADDRESS:
      return {
        ...state,
        isLoading: false,
        addresses: action.payload,
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        isLoading: false,
        addresses: action.payload,
      };
    case UPDATE_ADDRESS:
      return update(state, {
        addresses: {
          [action.index]: {
            $set: action.payload,
          },
        },
      });
    case ADD_ADDRESS:
      return {
        ...state,
        isLoading: false,
        addresses: action.payload,
      };
    default:
      return state;
  }
}
