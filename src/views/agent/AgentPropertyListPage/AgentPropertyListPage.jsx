import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Pagination } from "../../../components";
import PropertyPageUI from "./PropertyPageUI";
import VerticalTabs from "../AgentMenuNew";
import { Spinner } from "reactstrap";
import Button from "@material-ui/core/Button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from "phoenix-component-2.0/card";
import "./PropertyList.css";

class AgentPropertyListPage extends Component {
  state = {
    currentPage: 1,
    pageSize: 5,
    selectedFilter: "all",
  };
  componentWillMount() {
    this.props.getUserPropertyList(this.state.currentPage, this.state.pageSize);
  }
  componentWillUnmount() {
    this.props.clearError();
    this.props.clearProperty();
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.props.getUserPropertyList(page, this.state.pageSize);
  };
  deleteProperty = (id) => {
    this.props.deleteProperty(id);
  };
  render() {
    const { currentPage, pageSize } = this.state;

    let renderComponent;
    const { totalCount, properties } = this.props.property;

    if (Object.keys(properties).length > 0) {
      renderComponent = (
        <PropertyPageUI
          deleteProperty={this.deleteProperty}
          dataList={properties}
        />
      );
    } else {
      renderComponent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }

    if (Object.keys(this.props.errors).length > 0) {
      renderComponent = <p>no proerties found</p>;
    }

    return (
      <div className="dashboardSmaller">
        <div className="dashboard__Container">
          <div className="row">
            <div className="SideMenu_Container">
              <Card>
                <div className="column">
                  <div className="sidebar__titleContainer">
                    <p className="sidebar__title">Manage your Account</p>
                  </div>
                  <div className="sidebar__DetailContainer">
                    <span style={{ cursor: "not-allowed" }}>
                      <div className="column" style={{ marginTop: "20px" }}>
                        <Button
                          name="flag"
                          variant="contained"
                          // component={Link}
                          onClick={(e) => this.handlebuttonclick(e)}
                          color={this.state.flag ? "primary" : ""}
                          href="/agent/dashboard"
                        >
                          Profile
                        </Button>
                        <Button
                          name="flag1"
                          variant="contained"
                          // component={Link}
                          onClick={(e) => this.handlebuttonclick(e)}
                          color={this.state.flag1 ? "primary" : ""}
                          href="/agent/properties"
                        >
                          Your Properties
                        </Button>
                        <Button
                          name="flag2"
                          variant="contained"
                          //component={Link}
                          onClick={(e) => this.handlebuttonclick(e)}
                          color={this.state.flag2 ? "primary" : ""}
                          href={"/agent/add-property"}
                        >
                          Post Property
                        </Button>{" "}
                        {this.state.name === "rpclan" ? (
                          <Button
                            name="flag3"
                            variant="contained"
                            // component={Link}
                            onClick={(e) => this.handlebuttonclick(e)}
                            color={this.state.flag3 ? "primary" : ""}
                            href="/Admin"
                          >
                            Admin
                          </Button>
                        ) : (
                          ""
                        )}
                      </div>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            {/* property card start */}
            <div className="card_ContainerBig">{renderComponent}</div>
            {/*  property card end  */}
          </div>
        </div>
        <div className="card_ContainerSmaller">{renderComponent}</div>
      </div>
    );
  }
}

const mapStateToPrope = (state) => {
  return {
    errors: state.errors,
    property: state.property,
  };
};

export default connect(mapStateToPrope, actions)(AgentPropertyListPage);
