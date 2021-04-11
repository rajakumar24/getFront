import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//store
import * as actions from "../../../store/actions";
// local Comp
import { GoogleMap, CardOne } from "../../../components";
// Enquiry Form
import { CardSix } from "../../../components";
// Libraries comp
import { Spinner } from "reactstrap";
import { Grid } from "phoenix-component-2.0";
import SearchIcon from "@material-ui/icons/Search";
import ApartmentIcon from "@material-ui/icons/Apartment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ReceiptIcon from "@material-ui/icons/Receipt";
// style
import "./HomePage.css";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getAllProperties(1, 10, "all");
  }

  render() {
    let renderComponent;
    const { properties } = this.props.property;

    if (properties === null || Object.keys(properties).length === 0) {
      renderComponent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }
    if (properties.length > 0) {
      renderComponent = properties.slice(0, 3).map((property) => {
        if (property.approve === "Approved") {
          return (
            <div key={property._id}>
              <CardOne
                propertyId={property._id}
                img={property.imgUrl}
                title={property.title}
                description={property.description}
                price={property.price}
                area={property.area}
                beds={property.beds}
                baths={property.baths}
                garages={property.garages}
                btnText="View Details"
              />
            </div>
          );
        } else {
          return null;
        }
      });
    }

    return (
      <React.Fragment>
        {/* main Container */}
        <div className="home">
          {/* Item Over Images */}
          <div className="home__containerBigger">
            <img className="home__image" src="./images/property5.jpg" alt="" />
            <div className="home_imageCardContainer">
              <div className="home_imageCardContainerOne">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="home_imageTextContainer">
                      <p className="home_imageText home_imageTextsmaler">
                        Find Your Dream Home With Us!!
                      </p>
                    </div>
                    <div className="header__search">
                      <input
                        className="header__searchInput"
                        type="text"
                        placeholder="Enter localities or landmarks here"
                      />
                      <div className="header__searchIcon">
                        <SearchIcon className="header__searchIconSetting" />
                        Search
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="home_imageCardContainerTwo">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="home_list">
                      <div className="home_listItem">
                        <span className="home_listItemTitle">
                          We Offer 3 Simple Steps.
                        </span>
                      </div>

                      <div className="home_listItemContainer">
                        <Grid container>
                          <Grid item xs={4} sm={4} md={4}>
                            <div className="home_listItemIcons">
                              <ApartmentIcon className="home_listItemIcon" />
                              <span className="home_listItemSubTitle">
                                Post/Search
                              </span>
                            </div>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4}>
                            <div className="home_listItemIcons">
                              <SupervisorAccountIcon className="home_listItemIcon" />
                              <span className="home_listItemSubTitle">
                                Visit/Connect
                              </span>
                            </div>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4}>
                            <div className="home_listItemIcons">
                              <ReceiptIcon className="home_listItemIcon" />
                              <span className="home_listItemSubTitle">
                                Sell/Register
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            {/* item over Images for Mobile only */}
            <div className="home_mobileContainer">
              <div className="home_imageCardContainerOne">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="home_imageTextContainer">
                      <p className="home_imageTextMob">
                        Find Your Dream Home With Us!!
                      </p>
                    </div>
                    <div className="header__searchMob">
                      <input
                        className="header__searchInput"
                        type="text"
                        placeholder="Enter localities or landmarks here"
                      />
                      <div className="header__searchIconMob">
                        <SearchIcon className="header__searchIconSettingMob" />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          {/* Trending Row */}
          <div className="home__rowHeader">
            <div className="home__rowTitleLine">Trending</div>
          </div>
          {/* Property card */}
          <div className="row  m-auto">{renderComponent}</div>
          {/* Button */}
          <div className="home__moreProperty">
            <Link to="/properties-list" className="home__morePropertyButton">
              More Properties
            </Link>
          </div>
          {/* Add */}
          <div className="home__add">
            <img
              src="https://tpc.googlesyndication.com/simgad/2963222261425929345"
              border="0"
              width="970"
              height="90"
              alt=""
              class="img_ad"
            />
          </div>
          {/*  Enquiry Form */}
          <div className="cardsix">
            <CardSix />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  common: {
    height: "100vh",
  },
};

const mapStateToProps = (state) => {
  return {
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(HomePage);
