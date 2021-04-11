import React from "react";
import { Link } from "react-router-dom";

const RegistrationPageUI = (props) => {
  return (
    <div className="register">
      <div className="login__logo">
        <span style={{ color: "#4bd80a", marginTop: "0px", fontSize: "20px" }}>
          G
        </span>
        <span className="header_name" style={{ fontSize: "15px" }}>
          etRightProperty.Com
        </span>
      </div>
      <div className="login__container">
        <h1>Sign-up</h1>
        <form onSubmit={props.onFormSubmit}>
          <div className="login__containerInput">{props.children}</div>
          <button className="login__signInButton">Sign Up</button>
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
            to="/login"
          >
            Already have an Account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPageUI;
