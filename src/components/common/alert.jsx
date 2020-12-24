import React, { useEffect, useRef } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const Alert = (props) => {
  const alert = useAlert();
  const { error, status, msg } = useSelector(
    (state) => ({
      error: state.error.error,
      status: state.error.status,
      msg: state.message,
    }),
    shallowEqual
  );

  // function usePreviousErr(value) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]);

  //   return ref.current;
  // }
  // const prevError = usePreviousErr(error);

  // function usePreviousStatus(value) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]);

  //   return ref.current;
  // }
  // const prevStatus = usePreviousStatus(status);

  function usePreviousMessage(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);

    return ref.current;
  }
  const prevMessage = usePreviousMessage(msg);
  useEffect(() => {
    if (status >= 404 && status < 500)
      alert.show("Something went wrong. Try Later.");
    if (status > 500) alert.show("Bad Request");
    if (msg !== prevMessage) {
      if (msg.DeleteAddress) alert.success(msg.DeleteAddress);
      if (msg.UpdateAddress) alert.success(msg.UpdateAddress);
      if (msg.CreateAddress) alert.success(msg.CreateAddress);
      if (msg.DeleteCartItem) alert.success(msg.DeleteCartItem);
      if (msg.DeleteCartItemSingle) alert.success(msg.DeleteCartItemSingle);
      if (msg.AddCart) alert.success(msg.AddCart);
      if (msg.DeleteWishlist) alert.success(msg.DeleteWishlist);
    }
  });
  return <React.Fragment />;
};

export default Alert;
