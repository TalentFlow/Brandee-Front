import axios from "axios";
import { GET_HOME_IMAGES, HOME_IMAGES_LOADING } from "./landingTypes";
import { GET_ERRORS } from "./errorTypes";
// import {}

// export const getHomeImages = () => async (dispatch) => {
//   console.log("action called");

//   await fetch("https://sohaib-shafiq-ecommerce.herokuapp.com/api/home-photos/", { method: "GET" })
//     .then((response) => response.json())
//     .then((data) =>
//       dispatch({
//         type: GET_HOME_IMAGES,
//         payload: data,
//       })
//     )
//     .then((data) => console.log("This is your data", data));
// };

// export const getHomeImages = () => (dispatch) => {
//   console.log("action called");
//   // return (dispatch) => {
//   axios
//     .get("https://sohaib-shafiq-ecommerce.herokuapp.com/api/home-photos/", { timeout: 900 })
//     .then((res) => {
//       console.log(res.data);
//       dispatch({
//         type: GET_HOME_IMAGES,
//         payload: res.data,
//       });
//     })
//     .catch((err) => console.log(err));
// };
// };

export const getHomeImages = () => (dispatch) => {
  dispatch({ type: HOME_IMAGES_LOADING });
  axios
    .get(
      "https://sohaib-shafiq-ecommerce.herokuapp.com/api/home-photos/",
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: GET_HOME_IMAGES,
        payload: res.data,
      });
    })
    .catch((err) => {
      // const errors = {
      //   msg: err.response.data,
      //   status: err.response.status,
      // };
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: errors,
      // });
    });
};
