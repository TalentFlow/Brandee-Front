/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ICON_COUNT,
  NAVBAR_LOADING,
} from "../components/action/navbarTypes";

const initialState = {
  icon_count: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NAVBAR_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ICON_COUNT:
      console.log("reducer called");
      localStorage.removeItem("search-status");
      return {
        ...state,
        icon_count: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
