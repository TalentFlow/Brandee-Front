import axios from "axios";
import store from "../../store";
import { loadUser } from "./auth";
import { getIconCount } from "./navbar";
import {
  GET_PRODUCT,
  PRODUCT_LOADING,
  GET_PRODUCT_DETAIL,
  ADD_OR_REMOVE_FROM_WISHLIST,
  ADD_OR_REMOVE_FROM_CART,
  SEARCH_PRODUCT,
  CLEAR_SEARCH_PRODUCT,
} from "./productTypes";

export const getProduct = (data) => (dispatch) => {
  // dispatch(loadUser());
  dispatch({ type: PRODUCT_LOADING });
  axios
    .get(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/products/getfor/?${
        localStorage.getItem("_userId")
          ? `user=${localStorage.getItem("_userId")}`
          : ""
      }&${data}`,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const searchProduct = (data) => (dispatch) => {
  // dispatch(loadUser());
  dispatch({ type: PRODUCT_LOADING });
  axios
    .get(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/products/?${
        localStorage.getItem("_userId")
          ? `user=${localStorage.getItem("_userId")}`
          : ""
      }&search=${data}`,
      function () {
        setTimeout(4000);
      }
    )
    .then((res) => {
      dispatch({
        type: SEARCH_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const clearSearchProduct = () => (dispatch) => {
  dispatch(loadUser());
  dispatch({ type: PRODUCT_LOADING });
  dispatch({ type: CLEAR_SEARCH_PRODUCT });
};

export const getProductDetail = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: PRODUCT_LOADING });
  axios
    .get(
      `https://sohaib-shafiq-ecommerce.herokuapp.com/api/product-detail/?slug=${data}${
        localStorage.getItem("_userId")
          ? `&user=${localStorage.getItem("_userId")}`
          : ""
      }`,
      function () {
        setTimeout(1000);
      }
    )
    .then((res) => {
      dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// export const handleWish = (item, index) => (dispatch) => {
//   console.log(item);
//   dispatch({ type: PRODUCT_LOADING });
//   dispatch({ type: ADD_OR_REMOVE_FROM_WISHLIST, payload: item, index: index });
// };

const updateArray = (obj, index) => {
  return {
    type: "ADD_OR_REMOVE_FROM_WISHLIST",
    index: index,
    payload: obj,
  };
};
const updateArrayCart = (obj, index) => {
  return {
    type: "ADD_OR_REMOVE_FROM_CART",
    index: index,
    payload: obj,
  };
};

const handleWish = (obj, index) => {
  return (dispatch) => {
    if (obj.wishlisted === true) {
      console.log("liked");
      let data = {
        user: store.getState().auth.user.id,
        product: obj.id,
      };
      axios
        .post(
          "https://sohaib-shafiq-ecommerce.herokuapp.com/api/product/wishlist/",
          data
        )
        .then((res) => {
          dispatch(updateArray(obj, index));
          dispatch(getIconCount({ user: localStorage.getItem("_userId") }));
        });
    } else {
      console.log("not liked");
      axios
        .get(
          `https://sohaib-shafiq-ecommerce.herokuapp.com/api/product/wishlist/?user=${
            store.getState().auth.user.id
          }&product=${obj.id}`
        )
        .then((res) => {
          console.log(res.data[0].id);
          axios
            .delete(
              `https://sohaib-shafiq-ecommerce.herokuapp.com/api/product/wishlist/${res.data[0].id}/`
            )
            .then((res) => {
              dispatch(updateArray(obj, index));
              dispatch(getIconCount({ user: localStorage.getItem("_userId") }));
            });
        });
    }
  };
};

export { handleWish };

const handleCartAddRemoveAction = (obj, index) => {
  return (dispatch) => {
    if (obj.in_cart === true) {
      console.log("added");

      let data = {
        user: store.getState().auth.user.id,
        slug: obj.slug,
      };

      axios
        .post(
          "https://sohaib-shafiq-ecommerce.herokuapp.com/api/add-to-cart/",
          data
        )
        .then((res) => {
          dispatch(updateArrayCart(obj, index));
          dispatch(getIconCount({ user: localStorage.getItem("_userId") }));
        });
    } else {
      console.log("removed");
      axios
        .get(
          `https://sohaib-shafiq-ecommerce.herokuapp.com/api/order-items/?user=${
            store.getState().auth.user.id
          }&products=${obj.id}`
        )
        .then((res) => {
          console.log(res.data[0].id);
          axios
            .delete(
              `https://sohaib-shafiq-ecommerce.herokuapp.com/api/order-items/${res.data[0].id}/delete/`
            )
            .then((res) => {
              dispatch(updateArrayCart(obj, index));
              dispatch(getIconCount({ user: localStorage.getItem("_userId") }));
            })
            .catch();
        });
    }
  };
};

export { handleCartAddRemoveAction };

const handleCartAddRemoveActionDetail = (obj, index, quantity) => {
  return (dispatch) => {
    if (obj.in_cart === true) {
      console.log("added");

      let data = {
        user: store.getState().auth.user.id,
        slug: obj.slug,
        quantity: quantity,
      };
      console.log(data);

      axios
        .post(
          "https://sohaib-shafiq-ecommerce.herokuapp.com/api/add-to-cart/",
          data
        )
        .then((res) => {
          dispatch(updateArrayCart(obj, index));
          dispatch(getIconCount({ user: localStorage.getItem("_userId") }));
        });
    } else {
      console.log("removed");
      axios
        .get(
          `https://sohaib-shafiq-ecommerce.herokuapp.com/api/order-items/?user=${
            store.getState().auth.user.id
          }&products=${obj.id}`
        )
        .then((res) => {
          console.log(res.data[0].id);
          axios
            .delete(
              `https://sohaib-shafiq-ecommerce.herokuapp.com/api/order-items/${res.data[0].id}/delete/`
            )
            .then((res) => {
              dispatch(updateArrayCart(obj, index));
              dispatch(getIconCount({ user: localStorage.getItem("_userId") }));
            })
            .catch();
        });
    }
  };
};

export { handleCartAddRemoveActionDetail };
