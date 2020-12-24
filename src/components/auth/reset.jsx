import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect } from "react-router-dom";
import "../../css/auth/login.css";
import { register } from "../action/auth";

const Reset = (props) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [passwordstatus, setPasswordStatus] = useState(false);
  const [passwordstatus1, setPasswordStatus1] = useState(false);
  const [passwordblank, setPasswordBlank] = useState(true);
  const [passwordblank1, setPasswordBlank1] = useState(true);
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit called");
    var value;
    if (password === password1) {
      value = password;
    }
    const data = {
      password: value,
      uidb64: props.match.params.uidb64,
      token: props.match.params.token,
    };
    axios
      .patch(
        "https://sohaib-shafiq-ecommerce.herokuapp.com/accounts/password-reset-complete/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        window.location.href = "/";
        return <Redirect to="/" />;
      })
      .catch((err) => {
        setResponse(false);
      });
  };

  // const handleEmail = (e) => {
  //   setEmail(e.target.vaue);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.vaue);
  // };
  // const handleFirstName = (e) => {
  //   setFirst_name(e.target.vaue);
  // };
  // const handleLastName = (e) => {
  //   setLast_name(e.target.vaue);
  // };

  return (
    <React.Fragment>
      <header className="login-page-header">
        <h1>
          <span>Sign Up</span>
        </h1>
      </header>
      <div className="main">
        <div className="login-container">
          <div className="login-header">
            <div className="title">
              <h2>Change Password</h2>
            </div>
          </div>
          <div className="login-content">
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <div className="form-error">
                <p className="error-detail-main">
                  Enter a new password for sohaibshafiq78@gmail.com.
                </p>
                <hr />
                {response === false && (
                  <p className="error-detail-main">
                    Sorry, looks like something went wrong. Please correct the
                    following and submit again:
                  </p>
                )}

                <ul className="error-list">
                  {password !== password1 ? (
                    <li className="error-list-item password-blank">
                      The <strong>password</strong> must match to each other.
                    </li>
                  ) : null}
                </ul>
              </div>
              <div className="form-inputs-container">
                <div className="form-group ">
                  <label className="form-input-label" for="password">
                    <span>Password</span>
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
                <div className="form-group ">
                  <label className="form-input-label" for="password">
                    <span>Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="confirm-password"
                    value={password1 || ""}
                    onChange={(e) => {
                      setPassword1(e.target.value);
                      if (e.target.value === "") {
                        setPasswordBlank1(true);
                      }
                      if (e.target.value !== "") {
                        setPasswordBlank1(false);
                      }
                      if (e.target.value.length < 6) {
                        setPasswordStatus1(false);
                      }
                      if (e.target.value.length >= 6) {
                        setPasswordStatus1(true);
                      }
                    }}
                    className="form-control form-password"
                  ></input>
                </div>

                <div className="action-btn">
                  <input
                    type="submit"
                    className="btn btn-login"
                    value="Reset Password"
                    disabled={
                      password === password1 &&
                      passwordstatus === true &&
                      passwordstatus1 === true &&
                      passwordblank === false &&
                      passwordblank1 === false
                        ? false
                        : true
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
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

export default Reset;
