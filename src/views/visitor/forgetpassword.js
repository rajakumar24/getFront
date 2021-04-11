import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { baseUrl } from "../../baseURL/baseURL";

export default class forgetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", errors: {} };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleForm = (e) => {
    e.preventDefault();
    if (this.state.email === "") {
      NotificationManager.warning("Email is Required");
      return false;
    }
    const data = { email: this.state.email };
    axios
      .post(`${baseUrl}api/user/reset`, data)
      .then((result) => {
        NotificationManager.success(
          "Password Reset link sent to yout email .Please check the your email.Link Will be Valid For 30 min"
        );
      })
      .catch((err) => {
        if (err.response && err.response.status === 404)
          NotificationManager.error(err.response.data.msg);
        else NotificationManager.error("Something Went Wrong");
        this.setState({ errors: err.response });
      });
  };
  render() {
    return (
      <div className="login">
        <div className="login__logo">
          <span
            style={{ color: "#4bd80a", marginTop: "0px", fontSize: "20px" }}
          >
            G
          </span>
          <span className="header_name" style={{ fontSize: "15px" }}>
            etRightProperty.Com
          </span>
        </div>
        <NotificationContainer />
        <div className="login__container">
          <h3>Reset-Password</h3>
          <form onSubmit={this.handleForm}>
            <div
              className="login__containerInput"
              style={{ marginTop: "20px" }}
            >
              <h5>E-mail</h5>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
                className="form-control"
                style={{ width: "300px", marginLeft: "5px" }}
              />
              <h5>Confirm E-mail</h5>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
                className="form-control"
                style={{ width: "300px", marginLeft: "5px" }}
              />
              <button
                className="login__signInButton"
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "3px",
                }}
                onClick={this.handleForm}
              >
                Reset Password
              </button>
            </div>
          </form>
          <Link
            style={{
              marginLeft: "20px",
              color: "black",
              fontWeight: "500",
            }}
            to="/login"
          >
            Try Log in ?
          </Link>
        </div>
      </div>
    );
  }
}
