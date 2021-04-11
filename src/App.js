import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import store from "./store/store";
import { Header, Footer } from "./components/";
import Routes from "./routes/routes";
import {
  setCurrentUser,
  logoutUser,
  clearCurrentUser,
} from "./store/actions/authActions";
import setAuthToken from "./utils/setAuthToken";
import "react-toastify/dist/ReactToastify.css";
import SideDrawer from "./components/Header/SideDrawer/SideDrawer";
import Backdrop from "./components/Header/Backdrop/Backdrop";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentUser());
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <ToastContainer />
              <Header
                drawerToggleClickHandler={this.drawerToggleClickHandler}
              />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
              <Routes />
              <Footer />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
