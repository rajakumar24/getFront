import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
// import Avaatar from "@material-ui/core/Avatar";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  const onlogoutClick = () => {
    props.clearCurrentUser();
    props.logoutUser();
  };
  console.log("user", props);
  const authLinks = (
    <React.Fragment>
      <NavLink
        className="nav-item nav-link header__optionLine"
        style={{ backgroundColor: "#4bd80a" }}
        to="/agent/dashboard"
      >
        <span style={{ color: "white", marginLeft: "5px" }}>Dashboard</span>
      </NavLink>
      <NavLink
        onClick={onlogoutClick}
        className="nav-item nav-link header__optionLine"
        to="/"
      >
        <span style={{ color: "black", marginLeft: "-5px" }}>Logout</span>
      </NavLink>
    </React.Fragment>
  );
  const guestLinks = (
    <React.Fragment>
      <NavLink
        className="nav-item nav-link header__optionLine"
        to="/registration"
      >
        <span style={{ color: "black" }}>Register</span>
      </NavLink>
      <NavLink className="nav-item nav-link header__optionLine" to="/login">
        <span style={{ color: "black", marginLeft: "-13px" }}>Login</span>
      </NavLink>
    </React.Fragment>
  );

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div className={drawerClasses}>
      <div className="Sidebar_header">
        {/* <Avaatar
          style={{
            width: "50px",
            height: "50px",
          }}
          alt="Remy Sharp"
          //  src={`${baseUrl}uploads/${this.state.imgUrl}`}
        /> */}
        <h4>
          {props.auth.user.name
            ? `Hello, ${props.auth.user.name}`
            : "Hello, Guest"}
        </h4>
      </div>
      <nav>
        <ul>
          {props.auth.isAuthenticated ? (
            <div>
              <li>
                <a href="/agent/dashboard">Profile</a>
              </li>
              <li>
                <a href="/agent/properties">Your Properties</a>
              </li>
              <li>
                <a href="/agent/add-property">Post Property</a>
              </li>
            </div>
          ) : null}

          <li>
            <a href="/">Properties-List</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            {!props.auth.isAuthenticated ? (
              <a href="/registration">Register</a>
            ) : null}
          </li>
          <li>
            {props.auth.isAuthenticated ? (
              <a href="/login" onClick={onlogoutClick}>
                Logout
              </a>
            ) : (
              <a href="/login">Login</a>
            )}
          </li>
        </ul>
      </nav>
      <div className="separator"></div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(sideDrawer);
