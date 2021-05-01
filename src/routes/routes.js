import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  PropertyListPage,
  PropertyDetailPage,
  AgentProfilePage,
  AboutPage,
  PassionPage,
  ContactPage,
  BlogDashboard,
} from "../views/common";
import BuyPage from "../views/common/GetRightBuy/Buy";
import PlotPage from "../views/common/GetRigthPlot/Plot";
import RentPage from "../views/common/GetRightRent/Rent";
import { RegistrationPage, LoginPage } from "../views/visitor";
import {
  AddPropertyPage,
  Dashboard,
  AgentPropertyListPage,
  EditPropertyPage,
} from "../views/agent";
import {
  Admin,
  AdminPropertyPage,
  AdminMaster,
  AdminMasterPropertyPage,
  Properties_List,
  AdminQuesPage,
  RateReview,
} from "../views/agent/";
import ForgetPassword from "../views/visitor/forgetpassword";
import ResetPassword from "../views/visitor/resetPassword";
import "react-notifications/lib/notifications.css";
import Otp from "../views/visitor/otp";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/buy" component={BuyPage} />
        <Route path="/rent" component={RentPage} />
        <Route path="/plot" component={PlotPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/passion" component={PassionPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/blog" component={BlogDashboard} />
        <Route path="/forget-password" component={ForgetPassword} />
        <Route path="/change-password/:slug" component={ResetPassword} />
        <Route path="/otp" component={Otp} />

        <Route path="/agent/dashboard" component={Dashboard} />
        <Route path="/agent/properties" component={AgentPropertyListPage} />
        <Route path="/properties-list" component={Properties_List} />
        {/* add */}
        <Route path="/Admin" component={Admin} />
        <Route path="/agent/Admin/:id" component={AdminPropertyPage} />
        {/* <Route path="/AdminQues" component={AdminQues} /> */}
        <Route path="/agent/AdminQues/:id" component={AdminQuesPage} />
        <Route path="/AdminMaster" component={AdminMaster} />
        <Route
          path="/agent/AdminMaster/:id"
          component={AdminMasterPropertyPage}
        />
        <Route path="/agent/RateReview/:id" component={RateReview} />
        {/* <Route path="/agent/Admin/:id" component={AdminPropertyPage} /> */}
        {/* add */}
        <Route path="/property-detail/:id" component={PropertyDetailPage} />
        {/* <Route path="/:title/:id" component={PropertyDetailPage} /> */}
        <Route path="/agent-profile/:id" component={AgentProfilePage} />
        <Route path="/agent/add-property" component={AddPropertyPage} />
        <Route path="/agent/edit-property/:id" component={EditPropertyPage} />

        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default Routes;
