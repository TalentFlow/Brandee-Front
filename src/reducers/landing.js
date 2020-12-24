/* eslint-disable import/no-anonymous-default-export */
import {
  GET_HOME_IMAGES,
  HOME_IMAGES_LOADING,
} from "../components/action/landingTypes";

const initialState = {
  homeImages: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HOME_IMAGES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_HOME_IMAGES:
      console.log("reducer called");
      localStorage.removeItem("search-status");
      return {
        ...state,
        homeImages: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
