import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginPageUI = (props) => {
  return (
    <div className="login">
      <div className="login__logo">
        <span style={{ color: "#4bd80a", marginTop: "0px", fontSize: "20px" }}>
          G
        </span>
        <span className="header_name" style={{ fontSize: "15px" }}>
          etRightProperty.Com
        </span>
      </div>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={props.onFormSubmit}>
          <div>{props.children}</div>
          <button className="login__signInButton" style={{ marginLeft: "5px" }}>
            Sign In
          </button>
        </form>
        <div className="login__footer">
          <Link
            style={{
              marginLeft: "0px",
              marginTop: "25px",
              color: "black",
              fontWeight: "500",
            }}
            to="/forget-password"
          >
            ForgetPassword?
          </Link>
          <Link
            style={{
              marginLeft: "20px",
              marginTop: "25px",
              color: "black",
              fontWeight: "500",
            }}
            to="/registration"
          >
            Create your Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPageUI;
