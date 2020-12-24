import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { getAccAddressDefault } from "../action/account";
import { getCartItems } from "../action/cart";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "react-loader-spinner";
import Logo from "../../pics/Logo1.png";
import "../../css/checkout/checkout.css";
import { Link } from "react-router-dom";
import {
  CardElement,
  injectStripe,
  Elements,
  StripeProvider,
} from "react-stripe-elements";

const CheckoutForm = (props) => {
  const { address, order } = useSelector(
    (state) => ({
      address: state.account.addresses,
      order: state.cart.cartItems,
    }),
    shallowEqual
  );
  const submit = async (ev) => {
    ev.preventDefault();

    props.stripe.createToken().then((result) => {
      console.log(result);
      axios
        .post("https://sohaib-shafiq-ecommerce.herokuapp.com/api/checkout/", {
          stripeToken: result.token.id,
          user: localStorage.getItem("_userId"),
        })
        .then((res) => (window.location.href = "/"))
        .catch((err) => console.log(err));
    });
  };
  return (
    <div className="form-check">
      <CardElement
        style={{
          base: {
            backgroundColor: "#fff",
            fontSize: "25px",
            fontWeight: 400,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            // fontSmoothing: "antialiased",
            padding: "10px 10px 10px 10px",
            lineHeight: "50px",
          },
        }}
      />
      <button
        className="payment-button"
        onClick={submit}
        style={{ marginTop: "2rem" }}
        // disabled={
        //   address.length > 0 && order[0] && order[0].items.length > 0
        //     ? false
        //     : true
        // }
      >
        Complete Order
      </button>
    </div>
  );
};

const InjectedForm = injectStripe(CheckoutForm);

const Checkout = () => {
  const width = useWindowWidth();
  const {
    isAuthenticated,
    token,
    address,
    order,
    cartLoading,
    accountLoading,
    user,
  } = useSelector(
    (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token,
      address: state.account.addresses,
      order: state.cart.cartItems,
      cartLoading: state.cart.isLoading,
      accountLoading: state.account.isLoading,
      user: state.auth.user,
    }),
    shallowEqual
  );
  useEffect(() => {
    if (!isAuthenticated && !token) {
      window.location.href = "/login";
      return <Redirect to="/login" />;
    }
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
    dispatch(getAccAddressDefault());
  }, []);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`${width > 999 ? "col-lg-7" : "col-lg-12"} left`}
            style={{
              maxHeight: "101vh",
              height: "101vh",
              overflow: "auto",
              overflowY: "visible",
            }}
          >
            <div className="container">
              <div className="checkout-header" style={{ marginTop: "2rem" }}>
                <div className="row">
                  <div className="mx-auto">
                    <a href="/">
                      <img
                        src={Logo}
                        alt="Brand 01"
                        width="144px"
                        height="47px"
                      />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <React.Fragment>
                    <div className="account-adresses mx-auto">
                      <header className="address-header">
                        <h4>Contact Detail</h4>
                      </header>
                      <hr />
                      <span className="customer-add">
                        {localStorage.getItem("_userId") && user && user.email
                          ? user.email
                          : null}
                      </span>
                      <div className="row">
                        <a href="/account" className="return-account mr-auto">
                          <div className="end-left">
                            <h6>
                              <span>
                                <FaArrowLeft size="0.8rem" />{" "}
                              </span>
                              Logout And Login As another User
                            </h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </React.Fragment>
                </div>
                <hr />
                <div className="row">
                  {address &&
                    address.map((item) =>
                      item.default === true ? (
                        <React.Fragment>
                          <div className="account-adresses mx-auto">
                            <header className="address-header">
                              <h4>Shipping Detail</h4>
                            </header>
                            <hr />
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
                            <div className="row">
                              <a
                                href="/account"
                                className="return-account mr-auto"
                              >
                                <div className="end-left">
                                  <h6>
                                    <span>
                                      <FaArrowLeft size="0.8rem" />{" "}
                                    </span>
                                    Change The Default Address
                                  </h6>
                                </div>
                              </a>
                            </div>
                          </div>
                        </React.Fragment>
                      ) : null
                    )}
                </div>
              </div>
            </div>
            <div className="checkout-form">
              <React.Fragment>
                <div className="account-adresses">
                  <header className="payment-header">
                    <h4>Payment Detail</h4>
                  </header>
                  <hr />
                  <div
                    className="check-form"
                    style={{
                      backgroundColor: "#f1f1f1",
                    }}
                  >
                    {/******************************* 

                     Insert Your Stripe Publishable Key Here
                     This is a Test Publishable Stripe Key

                    ******************************* */}
                    <StripeProvider apiKey="">
                      <div className="container">
                        <div className="example">
                          <Elements>
                            <InjectedForm />
                          </Elements>
                        </div>
                      </div>
                    </StripeProvider>
                  </div>
                </div>
              </React.Fragment>
            </div>
          </div>
          {width > 999 ? (
            <div
              className="col-lg-5 right"
              style={{
                backgroundColor: "#fafafa",
                borderLeft: "1px solid #e1e1e1",
                maxHeight: "100vh",
                height: "100vh",
              }}
            >
              <div className="container">
                <form
                  id="wrapper-cart1"
                  class="cart-form wrapper-cart-template form-cart-mobile"
                >
                  <div className="container-fluid mobile-mini items-mini">
                    <React.Fragment>
                      {accountLoading ? (
                        <Loader
                          type="TailSpin"
                          color="#000"
                          height={100}
                          width={100}
                          timeout={8000}
                          style={{
                            marginTop: "5rem",
                            marginBottom: "3rem",
                            marginLeft: "8rem",
                          }}
                        />
                      ) : (
                        <React.Fragment>
                          {order &&
                            order.map((item1) => (
                              <React.Fragment>
                                {item1.items.map((cart) => (
                                  <React.Fragment>
                                    <div className="row mobile-cart1">
                                      <div className="img-mini1">
                                        <Link href="/">
                                          <img
                                            src={cart.products.img[0].img}
                                            alt={cart.products.title}
                                            width=""
                                          />
                                        </Link>
                                        <span className="order-quantity item-count">
                                          {cart.quantity}
                                        </span>
                                      </div>
                                      <div className="info-mini1">
                                        <br />
                                        <h3 className="title-mini1">
                                          {cart.products.title}
                                        </h3>
                                        <h6 className="col-size-mini1">
                                          <small>
                                            {cart.size} / {cart.products.color}
                                          </small>
                                        </h6>
                                      </div>
                                      <div className="info-right-mini1 ml-auto">
                                        <div className="info-price-right1">
                                          <br />
                                          <br />
                                          <h6>
                                            USD{" "}
                                            <span>
                                              {cart.total.toLocaleString(
                                                undefined,
                                                {
                                                  maximumFractionDigits: 2,
                                                }
                                              )}
                                            </span>
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                    <hr />
                                  </React.Fragment>
                                ))}
                              </React.Fragment>
                            ))}
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  </div>
                </form>
              </div>
              <div
                style={{
                  margin: "0px -15px 0px",
                  border: " 0",
                  borderTop: "3px solid #e1e1e1",
                }}
              >
                {cartLoading ? (
                  <Loader
                    type="TailSpin"
                    color="#000"
                    height={100}
                    width={100}
                    timeout={8000}
                    style={{
                      marginTop: "5rem",
                      marginBottom: "3rem",
                      marginLeft: "8rem",
                    }}
                  />
                ) : (
                  <div className="container">
                    {order.map((item) => (
                      <div className="total-section">
                        <div className="row subtotal">
                          <span className="mr-auto subtotal">Subtotal</span>
                          <span className="ml-auto subtotal-price">
                            USD{" "}
                            {item.total.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="row subtotal">
                          <span className="mr-auto subtotal">Shipping</span>
                          <span className="ml-auto subtotal-price">
                            To Be Negotiated
                          </span>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="left-total subtotal">
                            <span className="mr-auto subtotal">Total</span>
                          </div>
                          <div className="right-total ml-auto total-price-order">
                            <span className="total-price">
                              USD{" "}
                              {item.total.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });
  return width;
}
