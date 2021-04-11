import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Input, TextArea, SelectList, CheckBox } from "../../../components/";
import VerticalTabs from "../AgentMenuNew";
import { Spinner } from "reactstrap";
import axios from "axios";
import { baseUrl } from "../../../baseURL/baseURL";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./EditPropertyPage.css";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

class EditPropertyPage extends Component {
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
    approve: "",
    // question: "",
    // answer: "",
    question: [],
    answer: [],
    // reviewTitle: "",
    // reviewDes: "",
    reviewTitle: [],
    reviewDes: [],
    //   obej:[{
    //     answer: "",
    //     question: ""
    //   }
    //  ],
    ansmark: "",
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

  handleInputQuestionChange = ({ currentTarget }) => {
    this.setState({
      ansmark: currentTarget.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const { ansmark, answer } = this.state;
    // if (ansmark != null) {
    //   this.state.answer = this.state.answer || [];
    //   this.state.answer.push(ansmark);
    // } else {
    //   return alert("Please Enter Your Answer First1!");
    // }
    console.log("ansmark", ansmark);
    answer.push(ansmark);
    this.setState({
      answer,
    });

    // const { obej } = this.state;

    console.log("question", this.state.answer);
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
      approve: this.state.approve,
      question: this.state.question,
      reviewTitle: this.state.reviewTitle,
      reviewDes: this.state.reviewDes,
      answer,
      //obej
    };

    // this.props.updateProperty(propertyDetails);
    axios
      .put(`${baseUrl}api/property/${propertyDetails.id}`, propertyDetails)
      .then((response) => {
        // setUserSession(response.data.token, response.data.user);
        console.log(response);
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
        approve: property.approve,
        question: property.question == null ? [] : property.question,
        answer: property.answer == null ? [] : property.answer,
        reviewTitle: property.reviewTitle == null ? [] : property.reviewTitle,
        reviewDes: property.reviewDes == null ? [] : property.reviewDes,
        //obej:property.obej
      });
      console.log("ques", this.state.garages);
    }
  }

  render() {
    const { property } = this.props.property;
    console.log("property", property);
    const options = [
      { label: "Select", value: "" },
      { label: "India", value: "india" },
      { label: "USA", value: "usa" },
      { label: "UK", value: "uk" },
    ];
    const apartmentType = [
      { label: "Select", value: "" },
      { label: "Apartment", value: "apartment" },
      { label: "Flat", value: "flat" },
      { label: "House", value: "house" },
      { label: "Independent House/Villa", value: "cottage" },
    ];
    const propertyType = [
      { label: "Select", value: "" },
      { label: "Apartment", value: "apartment" },
      { label: "Flat", value: "flat" },
      { label: "House", value: "house" },
      { label: "Independent House/Villa", value: "cottage" },
    ];
    const bhkType = [
      { label: "Select", value: "" },
      { label: "1 RK", value: "1rk" },
      { label: "1 BHK ", value: "1bhk" },
      { label: "2 BHK", value: "2bhk" },
      { label: "3 BHK", value: "3bhk" },
      { label: "4 BHK", value: "4bhk" },
      { label: "4+ BHK", value: "5bhk" },
    ];
    const floorType = [
      { label: "Select", value: "" },
      { label: "Ground", value: "0rk" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
    ];
    const totalFloorType = [
      { label: "Select", value: "" },
      { label: "Ground Only", value: "0rk" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
    ];
    const propertyAgeType = [
      { label: "Select", value: "" },
      { label: "Under Construction", value: "0rk" },
      { label: "Less than a Year", value: "0" },
      { label: "1 to 3 year", value: "1" },
      { label: "3 to 5 year", value: "3" },
      { label: "5 to 10 year", value: "5" },
      { label: "More than 10 year", value: "more" },
    ];
    const FacingType = [
      { label: "Select", value: "" },
      { label: "North", value: "N" },
      { label: "South", value: "S" },
      { label: "East", value: "E" },
      { label: "West", value: "W" },
      { label: "Don't Know", value: "D" },
    ];
    const furnishingType = [
      { label: "Select", value: "" },
      { label: "Fully-furnished", value: "ff" },
      { label: "Semi-furnished", value: "sf" },
      { label: "Unfurnished", value: "E" },
    ];
    const parkingType = [
      { label: "Select", value: "" },
      { label: "Bike", value: "b" },
      { label: "Car", value: "c" },
      { label: "Both", value: "bh" },
      { label: "None", value: "n" },
    ];
    const propertyStatus = [
      { label: "Select", value: "" },
      { label: "Rent", value: "rent" },
      { label: "Sale", value: "sale" },
    ];

    let renderContent;

    if (Object.keys(property).length > 0) {
      renderContent = (
        <div
          class="cardGlobal Column"
          style={{ width: "97%", height: "97%", margin: "10px" }}
        >
          <div className="Column">
            <div className="sidebar__titleContainerSecond">
              <p className="sidebar__title">Edit Your Property</p>
            </div>
            <img
              src={`${baseUrl}uploads/${property.imgUrl}`}
              alt=""
              style={{ width: "60%", height: "250px" }}
            />
          </div>

          <div
            className="Column"
            style={{
              marginTop: "30px",
            }}
          >
            <form onSubmit={this.onFormSubmit}>
              <p className="sidebar__title">Property Details</p>
              <div className="colored_separator"></div>
              <div
                className="row"
                style={{
                  width: "100%",
                }}
              >
                <div style={{ width: "30%" }}>
                  <p className="label__title">Apartment Type*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={propertyType}
                      style={{ width: "100px" }}
                      name="propertyType"
                      onChange={this.handleInputChange}
                      value={this.state.propertyType}
                      error={this.props.errors.propertyType}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Apartment Name*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="apartName"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="apartName"
                      placeholder="Apartment Name"
                      onChange={this.handleInputChange}
                      value={this.state.apartName}
                      error={this.props.errors.apartName}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Property Title*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="title"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="title"
                      placeholder="Property Title"
                      onChange={this.handleInputChange}
                      value={this.state.title}
                      error={this.props.errors.title}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Property Status*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={propertyStatus}
                      style={{ width: "100%" }}
                      name="status"
                      onChange={this.handleInputChange}
                      value={this.state.status}
                      error={this.props.errors.status}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">BHK Type*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={bhkType}
                      style={{ width: "100%" }}
                      name="bhk"
                      onChange={this.handleInputChange}
                      value={this.state.bhk}
                      error={this.props.errors.bhk}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Floor*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={floorType}
                      style={{ width: "100%" }}
                      name="floor"
                      onChange={this.handleInputChange}
                      value={this.state.floor}
                      error={this.props.errors.floor}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Total Floor*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={totalFloorType}
                      style={{ width: "100%" }}
                      name="totalFloor"
                      onChange={this.handleInputChange}
                      value={this.state.totalFloor}
                      error={this.props.errors.totalFloor}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Property Age*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={propertyAgeType}
                      style={{ width: "100%" }}
                      name="propertyAge"
                      onChange={this.handleInputChange}
                      value={this.state.propertyAge}
                      error={this.props.errors.propertyAge}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Facing</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={FacingType}
                      style={{ width: "100%" }}
                      name="facing"
                      onChange={this.handleInputChange}
                      value={this.state.facing}
                      error={this.props.errors.facing}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Property Size*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="area"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="area"
                      placeholder="Property Size in sq.ft"
                      onChange={this.handleInputChange}
                      value={this.state.area}
                      validate={this.numbersOnly}
                      error={this.props.errors.area}
                    />
                  </div>
                </div>
              </div>

              <p className="sidebar__title" style={{ marginTop: "20px" }}>
                Locality Details
              </p>
              <div className="colored_separator"></div>
              <div
                className="row"
                style={{
                  width: "100%",
                }}
              >
                <div style={{ width: "30%" }}>
                  <p className="label__title">Address Line</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="address"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="address"
                      placeholder="Enter Your Address"
                      onChange={this.handleInputChange}
                      value={this.state.address}
                      error={this.props.errors.address}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Street/Area</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="locality"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="locality"
                      placeholder="Enter Your locality"
                      onChange={this.handleInputChange}
                      value={this.state.locality}
                      error={this.props.errors.locality}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Landmark</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="landmark"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="landmark"
                      placeholder="Enter Your landmark"
                      onChange={this.handleInputChange}
                      value={this.state.landmark}
                      error={this.props.errors.landmark}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">City</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="city"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="city"
                      placeholder="Your City"
                      onChange={this.handleInputChange}
                      value={this.state.city}
                      error={this.props.errors.city}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">State</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="state"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="state"
                      placeholder="Your state"
                      onChange={this.handleInputChange}
                      value={this.state.state}
                      error={this.props.errors.state}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Country</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    // class="input-group col-sm-12 col-xs-12"
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      name="country"
                      options={options}
                      onChange={this.handleInputChange}
                      value={this.state.country}
                      error={this.props.errors.country}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">PIN Code</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="zip"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="zip"
                      placeholder="Your PIN Code"
                      onChange={this.handleInputChange}
                      value={this.state.zip}
                      validate={this.numbersOnly}
                      error={this.props.errors.zip}
                    />
                  </div>
                </div>
              </div>
              <p className="sidebar__title" style={{ marginTop: "20px" }}>
                NearBy Property Details
              </p>
              <div className="colored_separator"></div>
              <div
                className="row"
                style={{
                  width: "100%",
                }}
              >
                <div style={{ width: "30%" }}>
                  <p className="label__title">NearBy Line 1</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="nearBy1"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="nearBy1"
                      placeholder="Your NearBy Line 1"
                      onChange={this.handleInputChange}
                      value={this.state.nearBy1}
                      error={this.props.errors.nearBy1}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">NearBy Line 2</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="nearBy2"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="nearBy2"
                      placeholder="Your NearBy Line 2"
                      onChange={this.handleInputChange}
                      value={this.state.nearBy2}
                      error={this.props.errors.nearBy2}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">NearBy Line 3</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="nearBy3"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="nearBy3"
                      placeholder="Your NearBy Line 3"
                      onChange={this.handleInputChange}
                      value={this.state.nearBy3}
                      error={this.props.errors.nearBy3}
                    />
                  </div>
                </div>
              </div>
              <p className="sidebar__title" style={{ marginTop: "20px" }}>
                Rental details about your property
              </p>
              <div className="colored_separator"></div>
              <div
                className="row"
                style={{
                  width: "100%",
                }}
              >
                <div style={{ width: "30%" }}>
                  <p className="label__title">Expected Price*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="expectedPrice"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="expectedPrice"
                      placeholder="Expected Price"
                      onChange={this.handleInputChange}
                      value={this.state.expectedPrice}
                      error={this.props.errors.expectedPrice}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Expected Deposit*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="expectedDeposit"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="expectedDeposit"
                      placeholder="Expected Price"
                      onChange={this.handleInputChange}
                      value={this.state.expectedDeposit}
                      error={this.props.errors.expectedDeposit}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Expected Rent*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="price"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="price"
                      placeholder="Price"
                      onChange={this.handleInputChange}
                      value={this.state.price}
                      validate={this.startWithNonZero}
                      error={this.props.errors.price}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Furnishing*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={furnishingType}
                      style={{ width: "100%" }}
                      name="furnishing"
                      onChange={this.handleInputChange}
                      value={this.state.furnishing}
                      error={this.props.errors.furnishing}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Parking*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      float: "left",
                      marginLeft: "25px",
                      marginTop: "-27px",
                      marginBottom: "-10px",
                      width: "388px",
                    }}
                  >
                    <SelectList
                      options={parkingType}
                      style={{ width: "100%" }}
                      name="garages"
                      onChange={this.handleInputChange}
                      value={this.state.garages}
                      error={this.props.errors.garages}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Description</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="description"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="description"
                      placeholder="Description"
                      onChange={this.handleInputChange}
                      value={this.state.description}
                      error={this.props.errors.description}
                    />
                  </div>
                </div>
              </div>
              <p className="sidebar__title" style={{ marginTop: "20px" }}>
                Amenities
              </p>
              <div className="colored_separator"></div>
              <div
                className="row"
                style={{
                  width: "100%",
                }}
              >
                <div style={{ width: "30%" }}>
                  <p className="label__title">Bathroom(s)*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="baths"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="baths"
                      placeholder="bathrooms"
                      onChange={this.handleInputChange}
                      value={this.state.baths}
                      validate={this.numbersOnly}
                      error={this.props.errors.baths}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Bedroom(s)*</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="beds"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="beds"
                      placeholder="bedrooms"
                      onChange={this.handleInputChange}
                      value={this.state.beds}
                      validate={this.numbersOnly}
                      error={this.props.errors.beds}
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
                <div style={{ width: "30%" }}>
                  <p className="label__title">Balcony</p>
                </div>
                <div style={{ width: "60%" }}>
                  <div
                    class="input-group col-sm-12 col-xs-12"
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    <input
                      type="text"
                      id="balcony"
                      class="form-control input-md"
                      style={{ width: "100%" }}
                      required=""
                      name="balcony"
                      placeholder="balcony"
                      onChange={this.handleInputChange}
                      value={this.state.balcony}
                      validate={this.numbersOnly}
                      error={this.props.errors.balcony}
                    />
                  </div>
                </div>
              </div>

              <div style={{ marginLeft: "90px" }}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="security"
                        onChange={this.handleInputChange}
                        checked={this.state.security}
                      />
                    }
                    label="Gated Security"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="lift"
                        onChange={this.handleInputChange}
                        checked={this.state.lift}
                      />
                    }
                    label="Lift"
                  />

                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="waterSupply"
                        onChange={this.handleInputChange}
                        checked={this.state.waterSupply}
                      />
                    }
                    label="Water Supply"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="swimmingPool"
                        onChange={this.handleInputChange}
                        checked={this.state.swimmingPool}
                      />
                    }
                    label="Swimming Pool"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="fireSafety"
                        onChange={this.handleInputChange}
                        checked={this.state.fireSafety}
                      />
                    }
                    label="Visitor Parking"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="park"
                        onChange={this.handleInputChange}
                        checked={this.state.park}
                      />
                    }
                    label="Park"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="clubHouse"
                        onChange={this.handleInputChange}
                        checked={this.state.clubHouse}
                      />
                    }
                    label="Club House"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="tennis"
                        onChange={this.handleInputChange}
                        checked={this.state.tennis}
                      />
                    }
                    label="Tennis Courts"
                  />

                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="powerBackUp"
                        onChange={this.handleInputChange}
                        checked={this.state.powerBackUp}
                      />
                    }
                    label=" Power Backup"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="gym"
                        onChange={this.handleInputChange}
                        checked={this.state.gym}
                      />
                    }
                    label="Gym"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="houseKeeping"
                        onChange={this.handleInputChange}
                        checked={this.state.houseKeeping}
                      />
                    }
                    label="House Keeping"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="ac"
                        onChange={this.handleInputChange}
                        checked={this.state.ac}
                      />
                    }
                    label="Air conditioning"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="smoking"
                        onChange={this.handleInputChange}
                        checked={this.state.smoking}
                      />
                    }
                    label="Smoking Area"
                  />

                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="bar"
                        onChange={this.handleInputChange}
                        checked={this.state.bar}
                      />
                    }
                    label="Bar"
                  />

                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="microwave"
                        onChange={this.handleInputChange}
                        checked={this.state.microwave}
                      />
                    }
                    label="Microwave"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="playArea"
                        onChange={this.handleInputChange}
                        checked={this.state.playArea}
                      />
                    }
                    label="Children Play Area"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="fireplace"
                        onChange={this.handleInputChange}
                        checked={this.state.fireplace}
                      />
                    }
                    label="Fire Safety"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="toaster"
                        onChange={this.handleInputChange}
                        checked={this.state.toaster}
                      />
                    }
                    label="Toaster"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="internet"
                        onChange={this.handleInputChange}
                        checked={this.state.internet}
                      />
                    }
                    label="Internet"
                  />
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        name="tv"
                        onChange={this.handleInputChange}
                        checked={this.state.tv}
                      />
                    }
                    label="Cable TV"
                  />
                </FormGroup>
              </div>
              <button
                type="submit"
                className="color__Button"
                style={{
                  width: "90%",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Submit
              </button>
            </form>
            <div className="separator"></div>
            <div style={{ width: "20%" }}>
              <p className="label__title">Customer Updates</p>
            </div>
            <div style={{ width: "100%" }}>
              {this.state.question != null &&
                this.state.question.map((list, index) => {
                  console.log("list", list);
                  return (
                    <div key={index}>
                      <div
                        className="row"
                        style={{
                          width: "100%",
                        }}
                      >
                        <div style={{ width: "20%" }}>
                          <p className="label__title">Question</p>
                        </div>
                        <div style={{ width: "60%" }}>
                          <div
                            class="input-group col-sm-12 col-xs-12"
                            style={{ float: "left", marginLeft: "10px" }}
                          >
                            <p className="label__title">{list}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{
                          width: "100%",
                        }}
                      >
                        <div style={{ width: "20%" }}>
                          <p className="label__title">Answer</p>
                        </div>
                        <div style={{ width: "60%" }}>
                          <div
                            class="input-group col-sm-12 col-xs-12"
                            style={{ float: "left", marginLeft: "10px" }}
                          >
                            <input
                              type="text"
                              id="answer"
                              class="form-control input-md"
                              style={{ width: "100%" }}
                              name="answer"
                              placeholder="Enter Your Answer"
                              onChange={this.handleInputQuestionChange}
                              value={
                                this.state.answer[index] !== "answer"
                                  ? this.state.answer[index]
                                  : this.state.ansmark
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
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
    console.log("ansmarkstate", this.state.ansmark);
    return (
      <div className="dashboard" style={{ height: "2780px" }}>
        <div className="dashboard__Container" style={{ height: "2780px" }}>
          <div className="row">
            <div className="dashboard__columnOne">
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
                      </Button>
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
            </div>
            {/* property card start */}
            <div
              // className="shadow"
              style={{
                width: "65%",
                height: "2760px",
                padding: "1px",
                overflowY: "auto",
                margin: "3%",
              }}
            >
              {renderContent}
            </div>
            {/*  property card end  */}
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

export default connect(mapStateToProps, actions)(EditPropertyPage);
