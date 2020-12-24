import React, { useEffect, useState, FC } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect, Link } from "react-router-dom";
// import { connect } from "react-redux";
import "../../css/auth/login.css";
import { login, recoverEmailAction } from "../action/auth";
import axios from "axios";
import store from "../../store";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { func } from "prop-types";
import $ from "jquery";

const Login = () => {
  const alert = useAlert();
  const [email, setEmail] = useState(null);
  const [recoverEmail, setRecoverEmail] = useState(null);
  const [recoverErrorStatus, setRecoverErrorStatus] = useState(null);
  const [password, setPassword] = useState(null);
  const [forgotPasswordStatus, setForgotPasswordStatus] = useState(false);
  const [emailstatus, setEmailStatus] = useState(false);
  const [emailblank, setEmailBlank] = useState(true);
  const [passwordstatus, setPasswordStatus] = useState(false);
  const [passwordblank, setPasswordBlank] = useState(true);

  const [loginStatus, setLoginStatus] = useState(null);

  const { isAuthenticated } = useSelector(
    (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = `${localStorage.getItem("prev")}`;
      return <Redirect to={`${localStorage.getItem("prev")}`} />;
    }
  });

  // const handleEmail = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.vaue);
  //   if (e.target.value === "") {
  //     setEmailBlank(true);
  //   } else {
  //     setEmailBlank(false);
  //   }
  //   isValiEmail(e.target.value);
  // };

  // const handlePassword = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.vaue);
  //   // if (e.target.value === "") {
  //   //   setPasswordBlank(true);
  //   // }
  //   // if (e.target.value !== "") {
  //   //   setPasswordBlank(false);
  //   // }
  //   // if (e.target.value.length < 6) {
  //   //   setPasswordStatus(false);
  //   // }
  //   // if (e.target.value.length >= 6) {
  //   //   setPasswordStatus(true);
  //   // }
  // };

  function isValiEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      setEmailStatus(false);
    } else {
      setEmailStatus(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit called");
    const data = {
      email: email,
      password: password,
    };
    dispatch(login(data));
    if (localStorage.getItem("latestAction") === "FAIL") {
      setLoginStatus(false);
      console.log(localStorage.getItem("latestAction"));
    } else {
      setLoginStatus(true);
    }
  };

  const handleRecoveryEmail = (e) => {
    e.preventDefault();
    console.log("recover submit called");
    const data = {
      email: recoverEmail,
    };
    // let variable = dispatch(recoverEmailAction(data));
    // console.log(variable);
    var value;
    axios
      .post(
        "https://sohaib-shafiq-ecommerce.herokuapp.com/accounts/request-reset-email/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        value = res.status;
        console.log(value);
        setRecoverErrorStatus(true);
      })
      .catch((err) => {
        console.log(err);
        value = err.data;
        setRecoverErrorStatus(false);
      });
  };

  return (
    <React.Fragment>
      <header className="login-page-header">
        <h1>
          <span>Log In</span>
        </h1>
      </header>
      <div className="main">
        <div className="login-container">
          <div className="login-header">
            <div className="title">
              <h2>I'm already a client</h2>
            </div>
          </div>
          <div className="login-content">
            <form className="login-form">
              <div className="form-error">
                {forgotPasswordStatus && (
                  <React.Fragment>
                    <p className="error-detail-main">
                      We will send you an email to reset your password.
                    </p>
                    <hr />
                  </React.Fragment>
                )}

                {recoverErrorStatus && (
                  <p className="error-detail-main">
                    We've sent you an email with a link to update your password.
                  </p>
                )}

                {recoverErrorStatus === false && (
                  <p className="error-detail-main">
                    No account found with this email.
                  </p>
                )}

                {loginStatus === false ? (
                  <p className="error-detail-main login-error">
                    Incorrect email or password.
                  </p>
                ) : null}

                <ul className="error-list">
                  {emailblank && !forgotPasswordStatus && (
                    <li className="error-list-item email-blank">
                      The <strong>email</strong> field can't be blank
                    </li>
                  )}
                  {!emailstatus && !forgotPasswordStatus && (
                    <li className="error-list-item email-invalid">
                      The <strong>email</strong> you entered is invalid
                    </li>
                  )}
                  {passwordblank && !forgotPasswordStatus && (
                    <li className="error-list-item password-blank">
                      The <strong>password</strong> field can't be blank
                    </li>
                  )}
                  {!passwordstatus && !forgotPasswordStatus && (
                    <li className="error-list-item password-blank">
                      The <strong>password</strong> length must be six or above
                    </li>
                  )}
                </ul>
              </div>
              <div className="form-inputs-container">
                {!forgotPasswordStatus && (
                  <div className="form-group ">
                    <label className="form-input-label" for="email">
                      <span>Email</span>
                      <em>*</em>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email || ""}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value === "") {
                          setEmailBlank(true);
                        } else {
                          setEmailBlank(false);
                        }
                        isValiEmail(e.target.value);
                      }}
                      className="form-control form-email"
                    ></input>
                  </div>
                )}

                {forgotPasswordStatus && (
                  <div className="form-group ">
                    <label className="form-input-label" for="email">
                      <span>Email</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={recoverEmail || ""}
                      onChange={(e) => {
                        setRecoverEmail(e.target.value);
                      }}
                      className="form-control form-email"
                    ></input>
                  </div>
                )}

                {!forgotPasswordStatus && (
                  <div className="form-group ">
                    <label className="form-input-label" for="password">
                      <span>Password</span>
                      <em>*</em>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password || ""}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (e.target.value === "") {
                          setPasswordBlank(true);
                        }
                        if (e.target.value !== "") {
                          setPasswordBlank(false);
                        }
                        if (e.target.value.length < 6) {
                          setPasswordStatus(false);
                        }
                        if (e.target.value.length >= 6) {
                          setPasswordStatus(true);
                        }
                      }}
                      className="form-control form-password"
                    ></input>
                  </div>
                )}

                {!forgotPasswordStatus && (
                  <React.Fragment>
                    <div className="last">
                      <Link onClick={() => setForgotPasswordStatus(true)}>
                        Forgotten your password?
                      </Link>
                      <span>or</span>
                      <Link to="/">Return to Store</Link>
                    </div>
                    <div className="action-btn">
                      <input
                        type="button"
                        className="btn btn-login"
                        value="Log in"
                        disabled={passwordstatus && emailstatus ? false : true}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmit(e);
                        }}
                      />
                    </div>
                  </React.Fragment>
                )}

                {forgotPasswordStatus && (
                  <div className="row recovery">
                    <input
                      type="button"
                      className="btn btn-recovery mr-auto"
                      value="Submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRecoveryEmail(e);
                      }}
                    />
                    <div className="right-div ml-auto">
                      <span>or</span>
                      <Link onClick={() => setForgotPasswordStatus(false)}>
                        Cancel
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="new-container">
          <div className="new-header">
            <div className="title">
              <h2>i'm New</h2>
            </div>
          </div>
          <div className="new-content">
            <form className="new-form">
              <div className="new-form-msg">
                <p className="msg-detail-main">
                  Create an account with just a couple of details and you’ll be
                  able to process your order faster and find out about the
                  latest trends and promotions by email!
                </p>
              </div>
              <div className="form-new-container">
                <div className="action-btn">
                  <input
                    type="button"
                    className="btn btn-login"
                    value="Sign Up"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
