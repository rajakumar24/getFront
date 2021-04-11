import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Input, TextArea, SelectList, CheckBox } from "../../../components";
// import { AgentMenu } from "..";
import { Spinner } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { baseUrl } from "../../../baseURL/baseURL";

class AdminPropertyPage extends Component {
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
    //add
    // this.setState({
    //  approve: "Approved"
    // });
    //add
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    //add
    this.setState({
      redirect: true,
      // approve: "Approved"
    });
    //add
    console.log("appy", this.state.approve);

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
    };
    console.log("app", propertyDetails.approve);
    // this.props.updateProperty(propertyDetails);
    //add

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

  //add
  // const red = this.state.redirect;

  //   if (this.state.redirect === true) {
  //     return (
  //         <Redirect

  //             to={{
  //                 pathname: '/Admin',

  //             }}
  //         />
  //     );
  // }
  //add

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
      });
    }
  }

  render() {
    //add
    // const red = this.state.redirect;

    if (this.state.redirect) {
      console.log("Currentapprove", this.state.approve);
      return (
        <Redirect
          to={{
            pathname: "/Admin",
            // state: { Currentapprove : this.state.approve },

            // {currentId2: id}
          }}
        />
      );
    }
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

    if (Object.keys(property).length > 0) {
      renderContent = (
        <form onSubmit={this.onFormSubmit}>
          <div className="basic-info">
            <strong className="text-muted">Basic information</strong>
            <div className="form-row">
              <Input
                classes="col-md-6"
                label="Title"
                name="title"
                placeholder="property title..."
                onChange={this.handleInputChange}
                value={this.state.title}
                error={this.props.errors.title}
              />

              <Input
                classes="col-md-6"
                label="Price $$"
                name="price"
                placeholder="price..."
                onChange={this.handleInputChange}
                value={this.state.price}
                validate={this.numbersOnly}
                error={this.props.errors.price}
              />
              <Input
                classes="col-md-12"
                label="Image Url"
                name="imgUrl"
                placeholder="property title..."
                onChange={this.handleInputChange}
                value={this.state.imgUrl}
                error={this.props.errors.imgUrl}
              />
              <TextArea
                classes="col-md-12"
                label="Description"
                name="description"
                placeholder="description..."
                onChange={this.handleInputChange}
                value={this.state.description}
                error={this.props.errors.description}
              />
            </div>
          </div>

          <br />

          <div className="location">
            <strong className="text-muted">Location</strong>

            <a
              className="bg-primary text-white ml-3 px-2"
              href="https://www.latlong.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              lat, lng <i className=" fa fa-question-circle" />
            </a>
            <div className="form-row">
              <Input
                classes="col-md-8"
                label="Address"
                name="address"
                placeholder="1234 Main St..."
                onChange={this.handleInputChange}
                value={this.state.address}
                error={this.props.errors.address}
              />

              <Input
                classes="col-md-2"
                label="Latitude"
                name="lat"
                placeholder="latitude..."
                onChange={this.handleInputChange}
                value={this.state.lat}
                error={this.props.errors.lat}
              />
              <Input
                classes="col-md-2"
                label="Longitude "
                name="lng"
                placeholder="longitude ..."
                onChange={this.handleInputChange}
                value={this.state.lng}
                error={this.props.errors.lng}
              />
            </div>

            <SelectList
              label="Country"
              name="country"
              options={options}
              onChange={this.handleInputChange}
              value={this.state.country}
              error={this.props.errors.country}
            />

            <div className="form-row">
              <Input
                classes="col-md-6"
                label="State"
                name="state"
                placeholder="state..."
                onChange={this.handleInputChange}
                value={this.state.state}
                error={this.props.errors.state}
              />
              <Input
                classes="col-md-4"
                label="City"
                name="city"
                placeholder="city..."
                onChange={this.handleInputChange}
                value={this.state.city}
                error={this.props.errors.city}
              />
              <Input
                classes="col-md-2"
                label="Zip"
                name="zip"
                placeholder="zip..."
                onChange={this.handleInputChange}
                value={this.state.zip}
                validate={this.numbersOnly}
                error={this.props.errors.zip}
              />
            </div>
          </div>

          <br />

          <div className="details">
            <strong className="text-muted">Details</strong>
            <div className="form-row">
              <SelectList
                classes="col-md-6"
                options={propertyType}
                label="Property Type"
                name="propertyType"
                onChange={this.handleInputChange}
                value={this.state.propertyType}
                error={this.props.errors.propertyType}
              />

              <SelectList
                classes="col-md-6"
                options={propertyStatus}
                label="Status"
                name="status"
                onChange={this.handleInputChange}
                value={this.state.status}
                error={this.props.errors.status}
              />
            </div>

            <div className="form-row">
              <Input
                classes="col-md-6"
                label="Beds"
                name="beds"
                placeholder="beds..."
                onChange={this.handleInputChange}
                value={this.state.beds}
                validate={this.numbersOnly}
                error={this.props.errors.beds}
              />

              <Input
                classes="col-md-6"
                label="Baths"
                name="baths"
                placeholder="baths..."
                onChange={this.handleInputChange}
                value={this.state.baths}
                validate={this.numbersOnly}
                error={this.props.errors.baths}
              />
            </div>

            <div className="form-row">
              <Input
                classes="col-md-6"
                label="Area m2"
                name="area"
                placeholder="area..."
                onChange={this.handleInputChange}
                value={this.state.area}
                validate={this.numbersOnly}
                error={this.props.errors.area}
              />

              <Input
                classes="col-md-6"
                label="Garages"
                name="garages"
                placeholder="garage..."
                onChange={this.handleInputChange}
                value={this.state.garages}
                validate={this.numbersOnly}
                error={this.props.errors.garages}
              />
            </div>
          </div>

          <br />

          <div className="features mb-5">
            <strong className="text-muted">Features</strong>
            <p className="mb-3" />

            <div className="form-row">
              <CheckBox
                name="ac"
                label="Air conditioning"
                onChange={this.handleInputChange}
                checked={this.state.ac}
              />

              <CheckBox
                name="gym"
                label="Gym"
                onChange={this.handleInputChange}
                checked={this.state.gym}
              />
            </div>
            <div className="form-row">
              <CheckBox
                name="bar"
                label="Bar"
                onChange={this.handleInputChange}
                checked={this.state.bar}
              />

              <CheckBox
                name="internet"
                label="Internet"
                onChange={this.handleInputChange}
                checked={this.state.internet}
              />
            </div>

            <div className="form-row">
              <CheckBox
                name="microwave"
                label="Microwave"
                onChange={this.handleInputChange}
                checked={this.state.microwave}
              />

              <CheckBox
                name="smoking"
                label="Smoking allowed"
                onChange={this.handleInputChange}
                checked={this.state.smoking}
              />
            </div>

            <div className="form-row">
              <CheckBox
                name="fireplace"
                label="Fireplace or fire pit"
                onChange={this.handleInputChange}
                checked={this.state.fireplace}
              />

              <CheckBox
                name="toaster"
                label="Toaster"
                onChange={this.handleInputChange}
                checked={this.state.toaster}
              />
            </div>

            <div className="form-row">
              <CheckBox
                name="tennis"
                label="Tennis Courts"
                onChange={this.handleInputChange}
                checked={this.state.tennis}
              />

              <CheckBox
                name="tv"
                label="Cable TV"
                onChange={this.handleInputChange}
                checked={this.state.tv}
              />
            </div>
          </div>
          <br />
          {/* <SelectList
                classes="col-md-6"
                options={ApproveStatus}
                label="Status"
                name="status"
                onChange={this.handleInputChange}
                value={this.state.approve}
                error={this.props.errors.approve}
              /> */}
          <Input
            classes="col-md-6"
            label="approve"
            name="approve"
            placeholder="approve..."
            onChange={this.handleInputChange}
            value={this.state.approve}
            error={this.props.errors.approve}
          />
          <br />
          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>
        </form>
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
      <div className="container-fluid">
        <div className="row">
          {/* left section */}
          {/* add */}
          {/* <AgentMenu /> */}
          {/* add */}
          {/* <!-- right section --> */}
          <div className="m-auto col-lg-8 col-md-8 col-sm-12  p-2">
            {/* <!-- Add New Property --> */}
            <div className="title text-center display-4 mb-4">
              Edit Property
            </div>
            {renderContent}
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

export default connect(mapStateToProps, actions)(AdminPropertyPage);
