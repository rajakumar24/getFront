import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { NavLink, Link } from "react-router-dom";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import "./SideDrawer/DrawerToggleButton";
import "./Header.css";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

class Header extends React.Component {
  onlogoutClick = () => {
    this.props.clearCurrentUser();
    this.props.logoutUser();
  };

  render() {
    // const { name } = this.props.profileData.user;
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
          onClick={this.onlogoutClick}
          className="nav-item nav-link header__optionLine"
          to="/"
        >
          <span style={{ color: "white", marginLeft: "-5px" }}>Logout</span>
        </NavLink>
      </React.Fragment>
    );
    const guestLinks = (
      <React.Fragment>
        <NavLink
          className="nav-item nav-link header__optionLine"
          to="/registration"
        >
          <span style={{ color: "white" }}>Register</span>
        </NavLink>
        <NavLink className="nav-item nav-link header__optionLine" to="/login">
          <span style={{ color: "white", marginLeft: "-13px" }}>Login</span>
        </NavLink>
      </React.Fragment>
    );

    return (
      <div className="header">
        <div className="header_Content">
          <div className="header_toogleButton">
            <DrawerToggleButton click={this.props.drawerToggleClickHandler} />
          </div>
          <NavLink className="nav-link" to="/">
            <p className="header__logo">
              {/* <HomeWorkIcon style={{ color: "#4bd80a" }} />{" "} */}
              <span
                style={{
                  color: "#4bd80a",
                  fontSize: "22px",
                }}
              >
                G
              </span>
              <span className="header_name">etRightProperty</span>
            </p>
          </NavLink>
          <div className="Spacer" />
          <div className="header__nav">
            <div style={{ marginTop: 5, marginLeft: 10 }}>
              <Link to="/home">
                <span className="header__optionLine">Home</span>
              </Link>{" "}
              <Link to="/properties-list">
                <span className="header__optionLine">Properties-list</span>
              </Link>
              <Link to="/about">
                <span className="header__optionLine">About</span>
              </Link>
              <Link to="/contact">
                <span className="header__optionLine">Contact</span>
              </Link>
            </div>
            <span className="header__optionAuth">
              {this.props.auth.isAuthenticated ? authLinks : guestLinks}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(Header);
