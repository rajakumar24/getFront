import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { CardFive, Pagination } from "../../../components";
import { Spinner } from "reactstrap";
// import AdminMasterRedirect from "./AdminMasterRedirect"

class Properties_List extends React.Component {
  state = {
    currentPage: 1,
    pageSize: 5,
    selectedFilter: "all",
  };

  componentDidMount() {
    this.props.getAllProperties(
      this.state.currentPage,
      this.state.pageSize,
      this.state.selectedFilter
    );
  }
  componentWillUnmount() {
    this.props.clearProperty();
  }
  onInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

    if (e.currentTarget.value === "all") {
      this.props.getAllProperties(1, 5, "all");
    } else if (e.currentTarget.value === "rent") {
      this.props.getAllProperties(1, 5, "rent");
    } else {
      this.props.getAllProperties(1, 5, "sale");
    }
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.props.getAllProperties(
      page,
      this.state.pageSize,
      this.state.selectedFilter
    );
  };

  render() {
    let { pageSize, currentPage } = this.state;
    // console.log("props", this.props);
    // const { approve } = this.props.Currentapprove;
    const { totalCount, properties } = this.props.property;

    let renderComponent;

    if (properties.length > 0 && Object.keys(this.props.errors).length === 0) {
      renderComponent = properties.map((property) => {
        return (
          <CardFive
            key={property._id}
            id={property._id}
            apartName={property.apartName}
            title={property.title}
            propertyId={property._id}
            agentId={property.user._id}
            agentName={property.user.name}
            imgUrl={property.imgUrl}
            propertyType={property.propertyType}
            status={property.status}
            address={property.address}
            price={property.price}
            text={property.description}
            area={property.area}
            beds={property.beds}
            baths={property.baths}
            garages={property.garages}
            approveid={property.approve}
          />
        );
      });
    } else {
      if (Object.keys(this.props.errors).length > 0) {
        renderComponent = (
          <p className="d-flex justify-content-center align-items-center text-warning display-4">
            No result for selected Filter
          </p>
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
    }

    return (
      <div className="dashboardSmaller">
        <div className="dashboard__Container">
          <div className="row">
            <div className="SideMenu_ContainerPropertyList">
              <div className="column">
                <div className="sidebar__titleContainer">
                  <p className="sidebar__title">Filter Property</p>
                </div>
                <p className="sidebar__title" style={{ marginLeft: "10px" }}>
                  Total Properties List: {totalCount}
                </p>
                <div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">
                        Filter Properties:
                      </label>
                      <select
                        name="selectedFilter"
                        onChange={this.onInputChange}
                        className="form-control"
                      >
                        {" "}
                        <option value="all">All</option>
                        <option value="rent">Rent</option>
                        <option value="sale">Sale</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
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

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(Properties_List);
