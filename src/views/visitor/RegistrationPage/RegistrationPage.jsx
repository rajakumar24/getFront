import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../../../store/actions";
import RegistrationPageUI from "./RegistrationPageUI";

class RegistrationPage extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    errors: {},
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/agent/dashboard");
    }
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onInputChange = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const registrationDetail = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    this.props.registerUser(registrationDetail, this.props.history);
  };

  render() {
    if (Object.keys(this.props.message.msg).length > 0) {
      toast.success(this.props.message.msg);
    }

    if (this.props.errors.error) {
      toast.error(this.props.errors.error);
    }

    return (
      <RegistrationPageUI onFormSubmit={this.onFormSubmit}>
        <div className="login__containerInput">
          <h6 style={{ marginLeft: "10px" }}>Name</h6>
          <input
            name="name"
            className="form-control"
            onChange={this.onInputChange}
            value={this.state.value}
            error={this.props.errors.name}
            style={{ width: "300px", marginLeft: "5px" }}
          />
          <h6>E-mail</h6>
          <input
            name="email"
            className="form-control"
            onChange={this.onInputChange}
            value={this.state.value}
            error={this.props.errors.email}
            style={{ width: "300px", marginLeft: "5px" }}
          />
          <h6>Password</h6>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={this.onInputChange}
            value={this.state.value}
            error={this.props.errors.password}
            style={{ width: "300px", marginLeft: "5px" }}
          />
          <h6>Confirm Password</h6>
          <input
            type="password"
            name="password_confirmation"
            className="form-control"
            onChange={this.onInputChange}
            value={this.state.value}
            error={this.props.errors.password_confirmation}
            style={{ width: "300px", marginLeft: "5px" }}
          />
        </div>
      </RegistrationPageUI>
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

export default connect(mapStateToProps, actions)(RegistrationPage);
