import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Input, TextArea, SelectList, CheckBox } from "../../../components";
// import { AgentMenu } from "..";
import { Spinner } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { baseUrl } from "../../../baseURL/baseURL";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from "phoenix-component-2.0/card";
// import { Link } from "react-router-dom";

class RateReview extends Component {
  state = {
    id: "",
    apartType: "",
    apartName: "",
    bhk: "",
    floor: "",
    totalFloor: "",
    propertyAge: "",
    facing: "",
    nearBy1: "",
    nearBy2: "",
    nearBy3: "",
    locality: "",
    landmark: "",
    expectedPrice: "",
    expectedDeposit: "",
    availableFrom: "",
    furnishing: "",
    balcony: "",
    title: "",
    imgUrl: "",
    price: "",
    description: "",
    address: "",
    lat: "",
    lng: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    propertyType: "",
    status: "",
    beds: "",
    baths: "",
    area: "",
    garages: "",
    waterSupply: "",
    security: "",
    lift: "",
    clubHouse: "",
    swimmingPool: "",
    playArea: "",
    fireSafety: "",
    park: "",
    powerBackUp: "",
    houseKeeping: "",
    ac: "",
    gym: "",
    bar: "",
    internet: "",
    microwave: "",
    smoking: "",
    fireplace: "",
    toaster: "",
    tennis: "",
    tv: "",
    loading: false,
    redirect: false,
    approve: "",
    question: [],
    answer: [],
    reviewDes: [],
    reviewTitle: [],
    //  reviewDes: "",
    // reviewTitle: "",
    reviewDesMark: "",
    reviewTitleMark: "",
    errors: {},
  };

  componentWillMount() {
    this.props.getProperty(this.props.match.params.id, this.props.history);
  }
  componentWillUnmount() {
    this.props.clearError();
  }

  handleInputChange = ({ currentTarget }) => {
    const value =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;

    this.setState({
      [currentTarget.name]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const {
      reviewDesMark,
      reviewTitleMark,
      reviewDes,
      reviewTitle,
    } = this.state;
    //    this.setState(prevState => {
    //        const temp = prevState.reviewDes;
    //        temp.push(reviewDesMark);
    //        return {
    //         reviewDes:temp
    //        }
    //    })
    reviewDes.push(reviewDesMark);
    reviewTitle.push(reviewTitleMark);

    // const {quesmark} = this.state;
    // const {obej} = this.state;
    // obej.push({question : quesmark, answer: ""})
    // onChange={(e) => this.setState({ obej: {question: {list}, answer: e.target.value } })}
    //add
    this.setState({
      redirect: true,
      reviewDes,
      reviewTitle,
    });

    // console.log("hiopppy", this.state.reviewDes)
    //  console.log("hiopppy", this.state.reviewTitle)

    const propertyDetails = {
      id: this.state.id,
      apartType: this.state.apartType,
      apartName: this.state.apartName,
      bhk: this.state.bhk,
      floor: this.state.floor,
      totalFloor: this.state.totalFloor,
      propertyAge: this.state.propertyAge,
      facing: this.state.facing,
      nearBy1: this.state.nearBy1,
      nearBy2: this.state.nearBy2,
      nearBy3: this.state.nearBy3,
      locality: this.state.locality,
      landmark: this.state.landmark,
      expectedPrice: this.state.expectedPrice,
      expectedDeposit: this.state.expectedDeposit,
      availableFrom: this.state.availableFrom,
      furnishing: this.state.furnishing,
      balcony: this.state.balcony,
      title: this.state.title,
      imgUrl: this.state.imgUrl,
      price: this.state.price,
      description: this.state.description,
      address: this.state.address,
      country: this.state.country,
      lat: this.state.lat,
      lng: this.state.lng,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      propertyType: this.state.propertyType,
      status: this.state.status,
      beds: this.state.beds,
      baths: this.state.baths,
      area: this.state.area,
      garages: this.state.garages,
      waterSupply: this.state.waterSupply,
      security: this.state.security,
      lift: this.state.lift,
      clubHouse: this.state.clubHouse,
      swimmingPool: this.state.swimmingPool,
      playArea: this.state.playArea,
      fireSafety: this.state.fireSafety,
      park: this.state.park,
      powerBackUp: this.state.powerBackUp,
      houseKeeping: this.state.houseKeeping,
      ac: this.state.ac,
      gym: this.state.gym,
      bar: this.state.bar,
      internet: this.state.internet,
      microwave: this.state.microwave,
      smoking: this.state.smoking,
      fireplace: this.state.fireplace,
      toaster: this.state.toaster,
      tennis: this.state.tennis,
      tv: this.state.tv,
      // question: this.state.question,
      question: this.state.question,
      answer: this.state.answer,
      // obej,
      reviewTitle,
      reviewDes,
      approve: this.state.approve,
    };
    console.log("hiopppy", propertyDetails);

    axios
      .put(`${baseUrl}api/property/${propertyDetails.id}`, propertyDetails)
      .then((response) => {
        console.log("response", response);
        this.props.getProperty(this.props.match.params.id, this.props.history);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  numbersOnly = (e) => {
    const price = e.currentTarget.value;

    if (isNaN(price) || price === "0") {
      e.currentTarget.value = "";
    }

    if (price) {
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }

    // console.log("hi")
    if (Object.keys(nextProps.property.property).length > 0) {
      const property = nextProps.property.property;
      this.setState({
        id: property._id,
        apartType: property.apartType,
        apartName: property.apartName,
        bhk: property.bhk,
        floor: property.floor,
        totalFloor: property.totalFloor,
        propertyAge: property.propertyAge,
        facing: property.facing,
        nearBy1: property.nearBy1,
        nearBy2: property.nearBy2,
        nearBy3: property.nearBy3,
        locality: property.locality,
        landmark: property.landmark,
        expectedPrice: property.expectedPrice,
        expectedDeposit: property.expectedDeposit,
        availableFrom: property.availableFrom,
        furnishing: property.furnishing,
        balcony: property.balcony,
        title: property.title,
        imgUrl: property.imgUrl,
        price: property.price + "",
        description: property.description,
        address: property.address,
        country: property.country,
        lat: property.mapLocation.lat,
        lng: property.mapLocation.lng,
        state: property.state,
        city: property.city,
        zip: property.zip + "",
        propertyType: property.propertyType,
        status: property.status,
        beds: property.beds + "",
        baths: property.baths + "",
        area: property.area + "",
        garages: property.garages + "",
        waterSupply: property.features.waterSupply,
        security: property.features.security,
        lift: property.features.lift,
        clubHouse: property.features.clubHouse,
        swimmingPool: property.features.swimmingPool,
        playArea: property.features.playArea,
        fireSafety: property.features.fireSafety,
        park: property.features.park,
        powerBackUp: property.features.powerBackUp,
        houseKeeping: property.features.houseKeeping,
        ac: property.features.ac,
        gym: property.features.gym,
        bar: property.features.bar,
        internet: property.features.internet,
        microwave: property.features.microwave,
        smoking: property.features.smoking,
        fireplace: property.features.fireplace,
        toaster: property.features.toaster,
        tennis: property.features.tennis,
        tv: property.features.tv,
        question: property.question,
        answer: property.answer,
        // reviewTitle: property.reviewTitle,
        // reviewDes: property.reviewDes,
        // obej: property.obej,
        approve: property.approve,
      });
      if (property.reviewTitle && property.reviewDes) {
        this.setState({
          reviewTitle: property.reviewTitle,
          reviewDes: property.reviewDes,
        });
      }
      //   console.log("hip", property.reviewTitle)
    }
  }

  render() {
    const { reviewDes, reviewTitle } = this.state;

    // const {obej} = this.state;
    //add
    // const red = this.state.redirect;
    // console.log("ghfiiiii", reviewTitle)

    // if (this.state.redirect) {
    //   console.log("Currentapprove", this.state.approve)
    //   return (
    //     <Redirect

    //       to={{
    //         pathname: '/properties-list',

    //       }}
    //     />
    //   );
    // }
    //add

    const { property } = this.props.property;

    const options = [
      { label: "Select...", value: "" },
      { label: "India", value: "india" },
      { label: "USA", value: "usa" },
      { label: "UK", value: "uk" },
    ];
    const propertyType = [
      { label: "Select...", value: "" },
      { label: "Apartment", value: "apartment" },
      { label: "Flat", value: "flat" },
      { label: "House", value: "house" },
      { label: "Cottage", value: "cottage" },
    ];
    const propertyStatus = [
      { label: "Select...", value: "" },
      { label: "Rent", value: "rent" },
      { label: "Sale", value: "sale" },
    ];

    // const ApproveStatus = [
    //   { label: "Select...", value: "" },
    //   { label: "UnApproved", value: "UnApproved" },
    //   { label: "Approved", value: "Approved" }
    // ];

    let renderContent;
    let statusColor = this.state.status === "rent" ? "warning" : "success";

    if (Object.keys(property).length > 0) {
      renderContent = (
        <React.Fragment>
          <Card>
            <div className="sidebar__titleContainerSecond">
              <p className="sidebar__title">Rate this Property</p>
            </div>
            <CardBody>
              <div
                class="cardGlobal Column"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="imageContainerEditPage">
                  <img
                    src={`${baseUrl}uploads/${this.state.imgUrl}`}
                    alt="Responsive"
                  />
                </div>

                <div
                  className="Column"
                  style={{
                    marginTop: "45px",
                  }}
                >
                  <div className="row_colmn">
                    <p className="sidebar__title" style={{ color: "#4bd80a" }}>
                      {this.state.title}
                    </p>
                    <p className="sm_lightFont">
                      Description:-{this.state.description}
                    </p>
                  </div>
                  <div className="green_separator"></div>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <p className="side_title">Location</p>
                    </div>
                    <div
                      style={{
                        width: "55%",
                      }}
                    >
                      <div
                        className="light_font col-sm-12 col-xs-12"
                        style={{ float: "left", marginLeft: "10px" }}
                      >
                        {this.state.address}
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <p className="side_title">Price</p>
                    </div>
                    <div style={{ width: "55%" }}>
                      <div
                        class="light_font col-sm-12 col-xs-12"
                        style={{ float: "left", marginLeft: "10px" }}
                      >
                        {this.state.price} Lakhs
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <p className="side_title">Property Type: </p>
                    </div>
                    <div style={{ width: "55%" }}>
                      <div
                        class="light_font col-sm-12 col-xs-12"
                        style={{ float: "left", marginLeft: "10px" }}
                      >
                        {this.state.propertyType}
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <p className="side_title">Area:</p>
                    </div>
                    <div style={{ width: "55%" }}>
                      <div
                        class="light_font col-sm-12 col-xs-12"
                        style={{
                          float: "left",
                          marginLeft: "10px",
                        }}
                      >
                        {this.state.area} sq.ft
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <p className="side_title">BedRooms:</p>
                    </div>
                    <div style={{ width: "55%" }}>
                      <div
                        class="light_font col-sm-12 col-xs-12"
                        style={{
                          float: "left",
                          marginLeft: "10px",
                        }}
                      >
                        {this.state.beds}
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <p className="side_title">BathRooms:</p>
                    </div>
                    <div style={{ width: "55%" }}>
                      <div
                        class="light_font col-sm-12 col-xs-12"
                        style={{
                          float: "left",
                          marginLeft: "10px",
                        }}
                      >
                        {this.state.baths}
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "45%" }}>
                      <p className="side_title">Garages:</p>
                    </div>
                    <div style={{ width: "55%" }}>
                      <div
                        class="light_font col-sm-12 col-xs-12"
                        style={{
                          float: "left",
                          marginLeft: "10px",
                        }}
                      >
                        {this.state.garages}
                      </div>
                    </div>
                  </div>

                  <p className="sidebar__title" style={{ marginTop: "20px" }}>
                    Property Address:
                  </p>
                  <div>
                    <p
                      className="light_font"
                      style={{
                        fontSize: "13px",
                        marginLeft: "10px",
                        marginTop: "-10px",
                      }}
                    >
                      {this.state.address},{this.state.city},{this.state.state},
                      {this.state.country},{this.state.zip}
                    </p>
                  </div>

                  <p className="sidebar__title" style={{ marginTop: "20px" }}>
                    Property Features:
                  </p>
                  <div className="green_separator"></div>
                  <div
                    className="Colmn"
                    style={{
                      width: "100%",
                    }}
                  >
                    <ul>
                      {this.state.ac && <li>Air conditioning</li>}
                      {this.state.gym && <li>Gym</li>}
                      {this.state.bar && <li>Bar</li>}
                      {this.state.internet && <li>Internet</li>}
                      {this.state.microwave && <li>Microwave</li>}
                      {this.state.smoking && <li>Smoking allowed</li>}
                      {this.state.fireplace && <li>Fireplace or fire pit</li>}
                      {this.state.toaster && <li>Toaster</li>}
                      {this.state.tennis && <li>Tennis Courts</li>}
                      {this.state.tv && <li>Cable TV</li>}
                    </ul>
                  </div>

                  <div className="separator"></div>
                  <div style={{ width: "100%" }}>
                    <p className="black_font">Your Feedback</p>
                    <form onSubmit={this.onFormSubmit}>
                      <div
                        className="row"
                        style={{
                          width: "100%",
                        }}
                      >
                        <div className="input_width">
                          <p className="label__titleAddproperty">
                            Review title*
                          </p>
                        </div>
                        <div style={{ width: "60%" }}>
                          <div
                            class="input-group col-sm-12 col-xs-12"
                            style={{ float: "left", marginLeft: "10px" }}
                          >
                            <input
                              type="text"
                              id="reviewTitle"
                              class="form-control input-md"
                              style={{ width: "100%" }}
                              required=""
                              name="reviewTitle"
                              placeholder="enter review title"
                              onChange={(e) =>
                                this.setState({
                                  reviewTitleMark: e.target.value,
                                })
                              }
                              error={this.props.errors.reviewTitle}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{
                          width: "100%",
                        }}
                      >
                        <div className="input_width">
                          <p className="label__titleAddproperty">
                            Description*
                          </p>
                        </div>
                        <div style={{ width: "60%" }}>
                          <div
                            class="input-group col-sm-12 col-xs-12"
                            style={{
                              float: "left",
                              marginLeft: "10px",
                              marginTop: "-20px",
                            }}
                          >
                            <TextArea
                              classes="col-md-12"
                              name="reviewDes"
                              placeholder="enter review description"
                              style={{ width: "100%" }}
                              onChange={(e) =>
                                this.setState({ reviewDesMark: e.target.value })
                              }
                              // value={this.state.question}
                              error={this.props.errors.reviewDes}
                            />
                          </div>
                        </div>
                      </div>

                      <button type="submit" className="color__Button">
                        Submit
                      </button>
                    </form>
                  </div>
                  <div
                    className="green_separator"
                    style={{ marginTop: "30px" }}
                  ></div>
                  <div style={{ width: "50%" }}>
                    <p className="label__title">Customer Reviews</p>
                  </div>
                  <div style={{ width: "100%" }}>
                    {reviewTitle.length &&
                      reviewTitle.map((listss, index) => {
                        return (
                          <div className="container" key={index}>
                            <p>reviewTitle: {listss}</p>
                            <p>reviewDes: {reviewDes[index]}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </React.Fragment>
      );
    } else {
      renderContent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="dashboard__Container">
          <div className="row">
            <div className="SideMenu_Container">
              <Card>
                <div className="column">
                  <div className="sidebar__titleContainer">
                    <p className="sidebar__title">Manage Your Visit</p>
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
                          href="/"
                        >
                          Back to home
                        </Button>
                        <Button
                          name="flag1"
                          variant="contained"
                          // component={Link}
                          onClick={(e) => this.handlebuttonclick(e)}
                          color={this.state.flag1 ? "primary" : ""}
                          href="/properties-list"
                        >
                          Visit Other Properties
                        </Button>
                      </div>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="card_Container">{renderContent}</div>
          </div>
        </div>
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

export default connect(mapStateToProps, actions)(RateReview);
