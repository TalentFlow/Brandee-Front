import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAccAddress } from "../action/account";
import { Link, Redirect } from "react-router-dom";
import "../../css/account/order.css";
import "../../css/account/address.css";

const Account = () => {
  const { isAuthenticated, token, address } = useSelector(
    (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token,
      address: state.account.addresses,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthenticated && !token) {
      window.location.href = "/login";
      return <Redirect to="/login" />;
    }
  });
  useEffect(() => {
    dispatch(getAccAddress());
  }, []);
  return (
    <React.Fragment className="account-main">
      <div className="container-fluid">
        <header className="cart-page-header">
          <h1>
            <span>My Account</span>
          </h1>
        </header>
      </div>
      <div className="container">
        <header className="account-order-header">
          <h2>
            <span>Order History</span>
          </h2>
        </header>
        <hr />
        <div className="no-order-text">
          <h3>
            <span>You haven't placed any orders yet.</span>
          </h3>
        </div>
      </div>
      <div className="container">
        <header className="account-detail-header">
          <h2>
            <span>Account Details</span>
          </h2>
        </header>
        <hr />
        {address.length <= 0 ? (
          <div className="no-order-text">
            <h3>
              <span>You haven't saved any address yet.</span>
            </h3>
          </div>
        ) : (
          <React.Fragment>
            {address.map((item) =>
              item.default === true ? (
                <React.Fragment>
                  <div className="account-adresses">
                    <h5 className="account-name">
                      {item.first_name} {item.last_name}
                      {item.default === true ? "(Default)" : null}
                    </h5>
                    <span className="customer-add">
                      {item.address1 ? item.address1 : null}
                    </span>
                    <span className="customer-add">
                      {item.address2 ? item.address2 : null}
                    </span>
                    <span className="customer-add">{item.city}</span>
                    <span className="customer-add customer-zip">
                      {item.postal}
                    </span>
                    <span className="customer-add customer-country">
                      {item.name}
                    </span>
                    <span className="customer-add customer-tel">
                      {item.phone}
                    </span>
                  </div>
                </React.Fragment>
              ) : null
            )}
          </React.Fragment>
        )}
        <div className="row account-buttons">
          <Link to="/account/addresses" className="addr-btn ">
            View Addresses {`(${address.length})`}
          </Link>
          <a href="/checkout" className="checkout-btn">
            Proceed to checkout
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
