import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Redirect } from "react-router-dom";
import "../../css/auth/login.css";
import { register } from "../action/auth";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const [emailstatus, setEmailStatus] = useState(false);
  const [emailblank, setEmailBlank] = useState(true);
  const [firstblank, setFirstBlank] = useState(true);
  const [lastblank, setLastBlank] = useState(true);
  const [passwordstatus, setPasswordStatus] = useState(false);
  const [passwordblank, setPasswordBlank] = useState(true);

  const { isAuthenticated } = useSelector(
    (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = `${localStorage.getItem("prev")}`;
      return <Redirect to={`${localStorage.getItem("prev")}`} />;
    }
  });

  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit called");
    if (e.keyCode === 13) {
      console.log("enter");
    }
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };
    let variable = dispatch(register(data));
    console.log(variable);
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
              <h2>Create an account</h2>
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
                  Sorry, looks like something went wrong. Please correct the
                  following and submit again:
                </p>
                <ul className="error-list">
                  {firstblank && (
                    <li className="error-list-item email-blank">
                      The <strong>First Name</strong> field can't be blank
                    </li>
                  )}
                  {lastblank && (
                    <li className="error-list-item email-blank">
                      The <strong>Last Name</strong> field can't be blank
                    </li>
                  )}
                  {emailblank && (
                    <li className="error-list-item email-blank">
                      The <strong>email</strong> field can't be blank
                    </li>
                  )}
                  {!emailstatus && (
                    <li className="error-list-item email-invalid">
                      The <strong>email</strong> you entered is invalid
                    </li>
                  )}
                  {passwordblank && (
                    <li className="error-list-item password-blank">
                      The <strong>password</strong> field can't be blank
                    </li>
                  )}
                  {!passwordstatus && (
                    <li className="error-list-item password-blank">
                      The <strong>password</strong> length must be six or above
                    </li>
                  )}
                </ul>
              </div>
              <div className="form-inputs-container">
                <div className="form-group ">
                  <label className="form-input-label" for="first_name">
                    <span>First Name</span>
                    <em>*</em>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={first_name || ""}
                    onChange={(e) => {
                      setFirst_name(e.target.value);
                      if (e.target.value === "") {
                        setFirstBlank(true);
                      } else {
                        setFirstBlank(false);
                      }
                    }}
                    className="form-control form-first-name"
                  ></input>
                </div>
                <div className="form-group ">
                  <label className="form-input-label" for="email">
                    <span>Last Name</span>
                    <em>*</em>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={last_name || ""}
                    onChange={(e) => {
                      setLast_name(e.target.value);
                      if (e.target.value === "") {
                        setLastBlank(true);
                      } else {
                        setLastBlank(false);
                      }
                    }}
                    className="form-control form-last-name"
                  ></input>
                </div>
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
                      // isValiEmail(e.target.value);
                      if (!regEmail.test(e.target.value)) {
                        setEmailStatus(false);
                      } else {
                        setEmailStatus(true);
                      }
                    }}
                    className="form-control form-email"
                  ></input>
                </div>
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

                <div className="action-btn">
                  <input
                    type="submit"
                    className="btn btn-login"
                    value="Create an Account"
                    disabled={
                      !firstblank && !lastblank && passwordstatus && emailstatus
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

export default Register;
