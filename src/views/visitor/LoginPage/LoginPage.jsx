import React from "react";
import { connect } from "react-redux";
import LoginPageUI from "./LoginPageUI";
import * as actions from "../../../store/actions";
import { Input } from "../../../components";
import "./Login.css";

class LoginPage extends React.Component {
  state = { email: "", password: "", errors: {} };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/agent/dashboard");
    }
  }
  componentWillUnmount() {
    this.props.clearError();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/agent/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const loginDetail = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(loginDetail);
  };

  onInputChange = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value,
    });
  };
  render() {
    let err;

    if (this.props.errors) {
      err = (
        <p className="text-center text-danger">{this.props.errors.error}</p>
      );
    }

    return (
      <LoginPageUI onFormSubmit={this.onFormSubmit}>
        {err}
        <div className="login__containerInput">
          <h5>E-mail</h5>
          <input
            label="Your Email"
            className="form-control"
            placeholder="email..."
            name="email"
            onChange={this.onInputChange}
            value={this.state.value}
            error={this.props.errors.email}
            style={{ width: "300px", marginLeft: "5px" }}
          />
          <h5>Password</h5>
          <input
            label="Password"
            className="form-control"
            type="password"
            placeholder="password..."
            name="password"
            onChange={this.onInputChange}
            value={this.state.value}
            error={this.props.errors.password}
            style={{ width: "300px", marginLeft: "5px" }}
          />
        </div>
      </LoginPageUI>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    errors: state.errors,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(LoginPage);
