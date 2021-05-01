import React, { Component } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Input, TextArea, SelectList, CheckBox } from "../../../components/";
import VerticalTabs from "../AgentMenuNew";
import Button from "@material-ui/core/Button";
//
import axios from "axios";
import Pusher from "pusher-js";
import Spinner from "react-spinkit";
import { Container, Row, Col } from "react-bootstrap";
import "./Add.css";
import Map from "./location/Location";
import { baseUrl } from "../../../baseURL/baseURL";
import { withStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from "phoenix-component-2.0/card";
import Select from "@material-ui/core/Select";
import DatePicker from "./DateField";
//
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

class AddPropertyPage extends Component {
  state = {
    //
    images: [],
    selectedFile: [],
    loading: false,
    //
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
    imgUrl: [],
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
    approve: "",
    // question: "",
    // answer: "",
    question: [],
    answer: [],
    // reviewTitle: "",
    // reviewDes: "",
    reviewTitle: [],
    reviewDes: [],
    // reviewTitle: "",
    // reviewDes: "",
    //   obej:[{
    //     answer: "",
    //     question: ""
    //   }
    //  ],
    count: 0,
    Imagename: "",
    errors: {},
  };

  // componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });

  //   axios.get('http://localhost:3001/api/property/getImages').then(({ data }) => {
  //     this.setState({
  //       images: [...data, ...this.state.images],
  //       loading: false,
  //     });
  //   });

  //   const pusher = new Pusher('fafe4d5c56b45906d6fd', {
  //     cluster: 'ap2',
  //     encrypted: true,
  //   });

  //   const channel = pusher.subscribe('gallery');
  //   channel.bind('upload', data => {
  //     this.setState({
  //       images: [data.image, ...this.state.images],
  //     });
  //   });
  // }

  //
  fileChangedHandler = (event) => {
    //const file = event.target.files[0];
    this.setState({
      selectedFile: [...this.state.selectedFile, ...event.target.files],
    });
    //this.setState({ selectedFile: file });
  };

  uploadImage = (event) => {
    event.preventDefault();
    // var ApartmntfirstWord = this.state.apartName.replace(/ .*/, "");
    // var cityFirstWord = this.state.city.replace(/ .*/, "");
    // if (this.state.count === 0) {
    //   return this.setState({
    //     Imagename: `${ApartmntfirstWord + cityFirstWord}`,
    //     count: this.state.count + 1,
    //   });
    // } else if (this.state.count === 1) {
    //   this.setState({
    //     Imagename: `${ApartmntfirstWord + cityFirstWord + this.state.status}`,
    //     count: this.state.count + 1,
    //   });
    // } else if (this.state.count === 2) {
    //   this.setState({
    //     Imagename: `${
    //       ApartmntfirstWord + cityFirstWord + this.state.propertyType
    //     }`,
    //     count: this.state.count + 1,
    //   });
    // } else {
    //   this.setState({
    //     Imagename: `${ApartmntfirstWord + cityFirstWord + this.state.locality}`,
    //     count: this.state.count + 1,
    //   });
    // }

    console.log("title", this.state.selectedFile);

    if (!this.state.selectedFile) return;

    this.setState({
      loading: true,
    });
    for (let index = 0; index < this.state.selectedFile.length; index++) {
      const element = this.state.selectedFile[index];
      const fd = new FormData();
      fd.append("image", element, element.name);
      console.log("titlefd", fd);
      axios.post(`${baseUrl}api/property/upload`, fd).then(({ data }) => {
        console.log("images", data);
        this.setState({
          images: [data.fileName, ...this.state.images],
          loading: false,
          imgUrl: [data.fileName, ...this.state.imgUrl],
        });
      });
    }
    // const formData = new FormData();
    // // formData.append("image", this.state.selectedFile, this.state.Imagename);
    // Object.values(this.state.selectedFile).forEach(function (file, index) {
    //   formData.append(index, file);
    // });
    // console.log("dataformData", formData);
    // axios.post(`${baseUrl}api/property/upload`, formData).then(({ data }) => {
    //   console.log("data", data);
    //   this.setState({
    //     images: [data.fileName, ...this.state.images],
    //     loading: false,
    //     imgUrl: data.fileName,
    //   });
    // });
  };
  //
  mapInfo = (lat, long) => {
    this.setState({
      lat: lat,
      lng: long,
    });
  };

  handleInputChange = ({ currentTarget }) => {
    const value =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;

    this.setState({
      [currentTarget.name]: value,
    });
  };
  handleDateField = (event) => {
    console.log("dateValue", event.target.value);
    this.setState({
      ...this.state,
      availableFrom: event.target.value,
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    //add
    this.setState({
      approve: "UnApproved",
    });
    //add
    const propertyDetails = {
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
      lat: this.state.lat,
      lng: this.state.lng,
      country: this.state.country,
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
      answer: this.state.answer,
      reviewTitle: this.state.reviewTitle,
      reviewDes: this.state.reviewDes,
      // obej: this.state.obej
    };

    this.props.addProperty(propertyDetails);
  };

  startWithNonZero = (e) => {
    const price = e.currentTarget.value;

    if (isNaN(price) || price === "0") {
      e.currentTarget.value = "";
    }

    if (price) {
    }
  };
  numbersOnly = (e) => {
    const value = e.currentTarget.value;

    if (isNaN(value)) {
      e.currentTarget.value = "";
    }
  };
  componentWillUnmount() {
    this.props.clearError();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  handleTitle = () => {
    this.setState({
      ...this.state,
      title: `Well designed ${this.state.bhk} apartment, ${this.state.landmark} sqft carpet area, is available in ${this.state.locality} . Its in ${this.state.apartName} .`,
    });
  };
  render() {
    console.log("dataImageselectedFile", this.state.selectedFile);
    console.log("dataImage", this.state.images);
    console.log("dataurl", this.state.imgUrl);
    //
    // const image = (url, index) => (
    //   <img alt="" className="photo" key={index} src={url} />
    // );
    // const images = this.state.images.map(e => image(e.secure_url, e._id));
    //

    if (Object.keys(this.props.message.msg).length > 0) {
      toast.success(this.props.message.msg);
    }

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
    const propertyTypeSell = [
      { label: "Select", value: "" },
      { label: "Apartment", value: "Apartment" },
      { label: "Builder Floor", value: "Builder Floor" },
      { label: "Plot", value: "Plot" },
      { label: "House/Villa", value: "House/Villa" },
    ];
    const propertyTypeRent = [
      { label: "Select", value: "" },
      { label: "Apartment", value: "Apartment" },
      { label: "Builder Floor", value: "Builder Floor" },
      { label: "House/Villa", value: "House/Villa" },
    ];
    const bhkType = [
      { label: "Select", value: "" },
      { label: "1 RK", value: "1 RK" },
      { label: "1 BHK ", value: "1 BHK" },
      { label: "2 BHK", value: "2 BHK" },
      { label: "3 BHK", value: "3 BHK" },
      { label: "4 BHK", value: "4 BHK" },
      { label: "4+ BHK", value: "4+ BHK" },
    ];
    const floorType = [
      { label: "Select", value: "" },
      { label: "Ground", value: "Ground" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
    ];
    const totalFloorType = [
      { label: "Select", value: "" },
      { label: "Ground Only", value: "Ground Only" },
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
    const availableFor = [
      { label: "Select", value: "" },
      { label: "Resale", value: "Resale" },
      { label: "New", value: "New" },
    ];
    const FacingType = [
      { label: "Select", value: "" },
      { label: "North", value: "North" },
      { label: "South", value: "South" },
      { label: "East", value: "East" },
      { label: "West", value: "West" },
      { label: "Don't Know", value: "Don't Know" },
    ];
    const furnishingType = [
      { label: "Select", value: "" },
      { label: "Fully-furnished", value: "Fully-furnished" },
      { label: "Semi-furnished", value: "Semi-furnished" },
      { label: "Unfurnished", value: "Unfurnished" },
    ];
    const parkingType = [
      { label: "Select", value: "" },
      { label: "Bike", value: "Bike" },
      { label: "Car", value: "Car" },
      { label: "Both", value: "Both" },
      { label: "None", value: "None" },
    ];
    const propertyStatus = [
      { label: "Select", value: "" },
      { label: "Rent", value: "Rent" },
      { label: "Sell", value: "Sell" },
    ];
    return (
      <div className="dashboard">
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
            <div className="card_Container">
              <Card>
                <div className="sidebar__titleContainerSecond">
                  <p className="sidebar__title">Post Property</p>
                </div>
                <CardBody>
                  <div
                    class="cardGlobal Column"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div
                      className="Column"
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <form onSubmit={this.onFormSubmit}>
                        <p className="sidebar__title">
                          Tell us about your property
                        </p>
                        <div className="colored_separator"></div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              List property for*
                            </p>
                          </div>
                          <div style={{ width: "60%" }}>
                            <div
                              class="col-sm-12 col-xs-12"
                              style={{
                                float: "left",
                                marginLeft: "10px",
                                marginTop: "-27px",
                                marginBottom: "-10px",
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Property Type*
                            </p>
                          </div>
                          <div style={{ width: "60%" }}>
                            <div
                              class="col-sm-12 col-xs-12"
                              style={{
                                float: "left",
                                marginLeft: "10px",
                                marginTop: "-27px",
                                marginBottom: "-10px",
                              }}
                            >
                              <SelectList
                                propertyTypeSell
                                options={
                                  this.state.status == "Sell"
                                    ? propertyTypeSell
                                    : propertyTypeRent
                                }
                                style={{ width: "100%" }}
                                name="propertyType"
                                onChange={this.handleInputChange}
                                value={this.state.propertyType}
                                error={this.props.errors.propertyType}
                              />
                            </div>
                          </div>
                        </div>
                        {this.state.status == "Sell" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Available For*
                              </p>
                            </div>
                            <div style={{ width: "60%" }}>
                              <div
                                class="col-sm-12 col-xs-12"
                                style={{
                                  float: "left",
                                  marginLeft: "10px",
                                  marginTop: "-27px",
                                  marginBottom: "-10px",
                                }}
                              >
                                <SelectList
                                  options={availableFor}
                                  style={{ width: "100%" }}
                                  name="propertyAge"
                                  onChange={this.handleInputChange}
                                  value={this.state.propertyAge}
                                  error={this.props.errors.propertyAge}
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Available From*
                            </p>
                          </div>
                          <div style={{ width: "60%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <DatePicker
                                availableFrom={this.state.availableFrom}
                                handleDateField={this.handleDateField}
                              />
                              {/* <input
                                type="text"
                                id="plot"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                required=""
                                placeholder="dd-mm-yyyy"
                                name="availableFrom"
                                onChange={this.handleInputChange}
                                value={this.state.availableFrom}
                                error={this.props.errors.availableFrom}
                              /> */}
                            </div>
                          </div>
                        </div>
                        <p className="sidebar__title">Property Details</p>
                        <div className="colored_separator"></div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">City*</p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">Locality*</p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Project Name*
                            </p>
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
                                placeholder="Project Name"
                                onChange={this.handleInputChange}
                                value={this.state.apartName}
                                error={this.props.errors.apartName}
                              />
                            </div>
                          </div>
                        </div>
                        {this.state.propertyType != "Plot" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Unit Types*
                              </p>
                            </div>
                            <div style={{ width: "60%" }}>
                              <div
                                class="col-sm-12 col-xs-12"
                                style={{
                                  float: "left",
                                  marginLeft: "10px",
                                  marginTop: "-27px",
                                  marginBottom: "-10px",
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
                        ) : (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Plot Area*
                              </p>
                            </div>
                            <div style={{ width: "60%" }}>
                              <div
                                class="input-group col-sm-12 col-xs-12"
                                style={{ float: "left", marginLeft: "10px" }}
                              >
                                <input
                                  type="text"
                                  id="plot"
                                  class="form-control input-md"
                                  style={{ width: "100%" }}
                                  required=""
                                  placeholder="Plot area in sq.ft"
                                  name="bhk"
                                  onChange={this.handleInputChange}
                                  value={this.state.bhk}
                                  error={this.props.errors.bhk}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              {this.state.propertyType != "Plot"
                                ? "Built Up*"
                                : "Plot Length"}
                            </p>
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
                                placeholder={
                                  this.state.propertyType != "Plot"
                                    ? "Built Up area in sq.ft"
                                    : "Enter Plot Length"
                                }
                                onChange={this.handleInputChange}
                                value={this.state.area}
                                validate={this.numbersOnly}
                                error={this.props.errors.area}
                              />
                            </div>
                          </div>
                        </div>{" "}
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              {this.state.propertyType != "Plot"
                                ? "Carpet Area*"
                                : "Plot Breadth"}
                            </p>
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
                                placeholder={
                                  this.state.propertyType != "Plot"
                                    ? "Carpet area in sq.ft"
                                    : "Enter Plot Breadth"
                                }
                                onChange={this.handleInputChange}
                                value={this.state.landmark}
                                error={this.props.errors.landmark}
                              />
                            </div>
                          </div>
                        </div>
                        <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          Gallery-Upload Photos
                        </p>
                        <div className="colored_separator"></div>
                        {/* <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">Image URL</p>
                          </div>
                          <div style={{ width: "60%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                type="text"
                                id="imgUrl"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                required=""
                                name="imgUrl"
                                placeholder="Your Image URL"
                                //  onChange={this.handleInputChange}
                                value={this.state.imgUrl[]}
                                error={this.props.errors.imgUrl}
                              />
                            </div>
                          </div>
                        </div> */}
                        <div className="image_dottedBorder">
                          <div
                            style={{
                              width: "100%",
                              padding: "10px",
                              // margin: "10px",
                              // marginLeft: "20px",
                            }}
                          >
                            <form onSubmit={(e) => this.uploadImage(e)}>
                              <div
                                className="dottedBorder"
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                <div className="row_colmn">
                                  <div className="lightbg_box">
                                    <label htmlFor="myInput">
                                      <AddAPhotoIcon
                                        style={{ fontSize: "40px" }}
                                      />
                                    </label>
                                    <input
                                      id="myInput"
                                      multiple
                                      className="image_upload"
                                      style={{ display: "none" }}
                                      type="file"
                                      onChange={this.fileChangedHandler}
                                      //id="gallery-image"
                                      accept=".jpg, .jpeg, .png"
                                    />
                                  </div>
                                  <div className="box_wdhgt">
                                    <p className="light_ashFont">
                                      Photos 0/15 Increase your chances of
                                      getting genuine responses by adding
                                      atleast 5 images. Hall, Bedroom, Kitchen,
                                      and Bathroom images will be ideal to add
                                      for a home
                                    </p>
                                  </div>
                                </div>
                                <button
                                  className="login__signInButton"
                                  style={{ width: "100%", height: "30px" }}
                                >
                                  Upload!
                                </button>
                              </div>
                            </form>
                          </div>
                          <div
                            className="dottedBorder"
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            {this.state.loading ? (
                              <div className="loading-indicator">
                                <Spinner name="spinner" />
                              </div>
                            ) : this.state.images.length > 0 ? (
                              <div
                                style={{
                                  overflowX: "auto",
                                  width: "100%",
                                }}
                              >
                                <div
                                  className="Row"
                                  style={{
                                    height: "130px",
                                    marginLeft: "0px",
                                  }}
                                >
                                  {this.state.images.map((url, i) => {
                                    return (
                                      <img
                                        key={i}
                                        src={`${baseUrl}uploads/${url}`}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            ) : (
                              <p> Your images will appear here!</p>
                            )}
                          </div>
                        </div>
                        <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          Property Price
                        </p>
                        <div className="colored_separator"></div>
                        {this.state.status == "Sell" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Sale Price*
                              </p>
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
                        ) : null}
                        {this.state.status != "Sell" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Deposit Price*
                              </p>
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
                                  placeholder="Deposit price"
                                  onChange={this.handleInputChange}
                                  value={this.state.expectedDeposit}
                                  error={this.props.errors.expectedDeposit}
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {this.state.status != "Sell" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Rent Price*
                              </p>
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
                                  placeholder="Rent price"
                                  onChange={this.handleInputChange}
                                  value={this.state.price}
                                  validate={this.startWithNonZero}
                                  error={this.props.errors.price}
                                />
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          More Information of your property
                        </p>
                        <div className="colored_separator"></div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              About Property*
                            </p>
                          </div>
                          <div style={{ width: "60%" }}>
                            <div
                              class="col-sm-12 col-xs-12"
                              style={{
                                float: "left",
                                marginLeft: "10px",
                                marginTop: "-30px",
                              }}
                            >
                              <TextArea
                                type="text"
                                id="title"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                required=""
                                name="title"
                                placeholder="About property(Min 30 characters)*"
                                onChange={this.handleInputChange}
                                value={this.state.title}
                                error={this.props.errors.title}
                              />
                            </div>
                            {this.state.bhk != "" &&
                            this.state.landmark != "" &&
                            this.state.locality &&
                            this.state.apartName != "" ? (
                              <p>
                                Well designed {this.state.bhk} apartment,{" "}
                                {this.state.landmark} sqft carpet area, is
                                available in {this.state.locality}. Its in{" "}
                                {this.state.apartName}.
                                <a onClick={this.handleTitle}>Use this.</a>
                              </p>
                            ) : null}
                          </div>
                        </div>
                        {this.state.propertyType != "Plot" &&
                        this.state.propertyType != "House/Villa" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Property On Floor*
                              </p>
                            </div>
                            <div style={{ width: "60%" }}>
                              <div
                                class="col-sm-12 col-xs-12"
                                style={{
                                  float: "left",
                                  marginLeft: "10px",
                                  marginTop: "-27px",
                                  marginBottom: "-10px",
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
                        ) : null}
                        {this.state.propertyType != "Plot" &&
                        this.state.propertyType != "House/Villa" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Total Floors*
                              </p>
                            </div>
                            <div style={{ width: "60%" }}>
                              <div
                                class="col-sm-12 col-xs-12"
                                style={{
                                  float: "left",
                                  marginLeft: "10px",
                                  marginTop: "-27px",
                                  marginBottom: "-10px",
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
                        ) : null}
                        {this.state.propertyType != "Plot" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                Furnishing*
                              </p>
                            </div>
                            <div style={{ width: "60%" }}>
                              <div
                                class="col-sm-12 col-xs-12"
                                style={{
                                  float: "left",
                                  marginLeft: "10px",
                                  marginTop: "-27px",
                                  marginBottom: "-10px",
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
                        ) : null}
                        {this.state.propertyType != "Plot" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                No of Bedroom(s)*
                              </p>
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
                        ) : null}
                        {this.state.propertyType != "Plot" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                No of Bathroom(s)*
                              </p>
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
                        ) : null}
                        <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          Additional Details
                        </p>
                        <div className="colored_separator"></div>
                        {this.state.propertyType != "Plot" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">
                                No of Balconies
                              </p>
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
                        ) : null}
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">Facing</p>
                          </div>
                          <div style={{ width: "60%" }}>
                            <div
                              class="col-sm-12 col-xs-12"
                              style={{
                                float: "left",
                                marginLeft: "10px",
                                marginTop: "-27px",
                                marginBottom: "-10px",
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
                        {this.state.propertyType != "Plot" ? (
                          <div
                            className="row"
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="input_width">
                              <p className="label__titleAddproperty">Parking</p>
                            </div>
                            <div style={{ width: "60%" }}>
                              <div
                                class="col-sm-12 col-xs-12"
                                style={{
                                  float: "left",
                                  marginLeft: "10px",
                                  marginTop: "-27px",
                                  marginBottom: "-10px",
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
                        ) : null}
                        <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          Society Amenities
                        </p>
                        <div className="colored_separator"></div>
                        {/* <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Bedroom(s)*
                            </p>
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
                        </div> */}
                        <div>
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
                        {/* <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          Locality Details
                        </p>
                        <div className="colored_separator"></div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Address Line
                            </p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">State</p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">Country</p>
                          </div>
                          <div style={{ width: "60%" }}>
                            <div
                              class="col-sm-12 col-xs-12"
                              style={{
                                float: "left",
                                marginLeft: "10px",
                                marginTop: "-27px",
                                marginBottom: "-10px",
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">PIN Code</p>
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
                        <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          NearBy Property Details
                        </p>
                        <div className="colored_separator"></div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              NearBy Line 1
                            </p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              NearBy Line 2
                            </p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              NearBy Line 3
                            </p>
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
                        <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          Rental details about your property
                        </p>
                        <div className="colored_separator"></div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Expected Price*
                            </p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Expected Deposit*
                            </p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Expected Rent*
                            </p>
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
                          <div className="input_width">
                            <p className="label__titleAddproperty">
                              Description
                            </p>
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
                        <p
                          className="sidebar__title"
                          style={{ marginTop: "20px" }}
                        >
                          Locate-Your Property
                        </p>
                        <div className="colored_separator"></div>
                        <div
                          className="dottedBorder"
                          style={{
                            width: "100%",
                            height: "400px",
                            margin: "10px",
                          }}
                        >
                          <h5>Set Your Location Based On Property!</h5>
                          <Map
                            mapinfo={(lat, long) => this.mapInfo(lat, long)}
                          />
                        </div> */}
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
                    </div>
                  </div>
                </CardBody>
              </Card>
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
    message: state.message,
    errors: state.errors,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(AddPropertyPage);
