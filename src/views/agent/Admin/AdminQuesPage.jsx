import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Input, TextArea, SelectList, CheckBox } from "../../../components";
import { Spinner } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../baseURL/baseURL";
import { CardSix } from "../../../components";
import SideContact from "../../../components/SideContact/SideContact";
import "./property.css";

class AdminQuesPage extends Component {
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
    // question: "",
    question: [],
    // answer: "",
    answer: [],
    reviewDes: [],
    reviewTitle: [],
    // reviewDes: "",
    // reviewTitle: "",
    quesmark: "",
    // reviewDesMark: "",
    // reviewTitleMark: "",
    errors: {},
    //   obej:[{
    //     answer: "",
    //     question: ""
    //   }
    //  ]
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
    // const value =
    //   currentTarget.type === "checkbox"
    //     ? currentTarget.checked
    //     : currentTarget.value;

    // const { quesmark } = this.state;

    // this.state.quesmark = currentTarget.value
    this.setState({
      quesmark: currentTarget.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // const { reviewDesMark, reviewTitleMark, reviewDes, reviewTitle } = this.state;
    // reviewDes.push(reviewDesMark);
    // reviewTitle.push(reviewTitleMark);

    const { quesmark, question } = this.state;
    console.log("question", question);
    question.push(quesmark);
    //     if(question != null){
    //     question.push(quesmark);
    //       this.setState({
    // ...state,
    // question: [...question, quesmark]
    //       })
    //     }else {
    //       question: []
    //     }

    // const {quesmark} = this.state;
    // const {obej} = this.state;
    // obej.push({question : quesmark, answer: ""})
    // onChange={(e) => this.setState({ obej: {question: {list}, answer: e.target.value } })}
    //add
    this.setState({
      redirect: true,
      question,
      // reviewTitle,
      // reviewDes
      // obej
    });
    //add

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
      question,
      // reviewTitle,
      // reviewDes,
      answer: this.state.answer,
      reviewTitle: this.state.reviewTitle,
      reviewDes: this.state.reviewDes,
      // obej,
      approve: this.state.approve,
    };
    console.log("app", propertyDetails.question);
    // this.props.updateProperty(propertyDetails);
    //add

    axios
      .put(`${baseUrl}api/property/${propertyDetails.id}`, propertyDetails)
      .then((response) => {
        // setUserSession(response.data.token, response.data.user);
        console.log(response);
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

    console.log("hi");
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
        question: property.question == null ? [] : property.question,
        answer: property.answer == null ? [] : property.answer,
        reviewTitle: property.reviewTitle == null ? [] : property.reviewTitle,
        reviewDes: property.reviewDes == null ? [] : property.reviewDes,
        // obej: property.obej,
        approve: property.approve,
      });
    }
  }

  render() {
    const { question, answer, id } = this.state;
    if (this.state.redirect) {
      console.log("Currentapprove", this.state.approve);
      return (
        <Redirect
          to={{
            pathname: "/properties-list",
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
    let renderContent;
    let statusColor = this.state.status === "rent" ? "warning" : "success";

    if (Object.keys(property).length > 0) {
      renderContent = (
        <React.Fragment>
          <div className="propertydisplay">
            {/* big Screen */}
            <div className="bigScreen">
              <div className="propertydisplay__header">
                <div className="Colmn">
                  <p className="propertydisplay__title">{this.state.title}</p>
                  <p className="light_ashFont">
                    Project: {this.state.apartName}
                  </p>
                </div>
                <p className="propertydisplay__price">
                  <small>&#8377;</small>
                  <strong>{this.state.price} Lakhs</strong>
                </p>
              </div>
              <div className="propertydisplay__bodypart">
                <div className="propertydisplay__body">
                  <div className="propertydisplay__bodyOne">
                    <div className="propertydisplay__bodyOneImagePart">
                      <img
                        src={`${baseUrl}uploads/${this.state.imgUrl}`}
                        alt="Responsive"
                      />
                    </div>
                    <div className="propertydisplay__bodyOneDetailPart">
                      <span
                        className={`badge badge-${statusColor}`}
                        style={{ height: "20px" }}
                      >
                        {this.state.status}
                      </span>
                      <div className="propertydisplay__bodyOneDetailPartOne">
                        <div className="propertydisplay__bodyOneDetailPartOneColumn">
                          <p className="propertydisplay__bodyColumntitleOne">
                            BHK
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {this.state.bhk}
                          </p>
                          <p className="propertydisplay__bodyColumntitleOne">
                            Possession
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {/* {this.state.possession} */}
                            Ready-to-move
                          </p>
                          <p className="propertydisplay__bodyColumntitleOne">
                            Property Type
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {/* {this.state.possession} */}
                            Apartment
                          </p>
                          <p className="propertydisplay__bodyColumntitleOne">
                            Floor
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {this.state.floor}
                          </p>
                          <p className="propertydisplay__bodyColumntitleOne">
                            Parking
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {this.state.garages}
                          </p>
                        </div>
                      </div>
                      <div className="propertydisplay__bodyOneDetailParttwo">
                        <div className="propertydisplay__bodyOneDetailPartOneColumn">
                          <p className="propertydisplay__bodyColumntitleOne">
                            Area
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {this.state.area} sq.ft.
                          </p>
                          <p className="propertydisplay__bodyColumntitleOne">
                            Price
                          </p>
                          <div className="propertydisplay__bodyColumntitleTwoPrice">
                            <small
                              style={{ marginTop: "-14px", marginRight: "5px" }}
                            >
                              &#8377;
                            </small>
                            <p className="propertydisplay__bodyColumntitleTwo">
                              {this.state.price} L
                            </p>
                          </div>
                          <p className="propertydisplay__bodyColumntitleOne">
                            Launched Date
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {/* {this.state.possession} */}
                            May-2021
                          </p>
                          <p className="propertydisplay__bodyColumntitleOne">
                            Furnishing
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {this.state.furnishing}
                          </p>
                          <p className="propertydisplay__bodyColumntitleOne">
                            Locality
                          </p>
                          <p className="propertydisplay__bodyColumntitleTwo">
                            {this.state.locality}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="propertydisplay__bodyTwoLonger">
                    <div className="propertydisplay__bodyTwoPart">
                      <p className="propertydisplay__bodyTwoPartTitle">
                        Unit Configuration
                      </p>
                      <div className="propertydisplay__bodyTwoPartTable">
                        <div className="propertydisplay__bodyTwoPartTableContainerOne">
                          <p
                            className="propertydisplay__bodyTwoPartTableTitle"
                            //style={{ paddingLeft: "10px" }}
                          >
                            Unit Types
                          </p>
                          <p className="">
                            <span
                              style={{
                                color: "#323333",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              1 BHK Apartment{" "}
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "13px" }}
                            >
                              Availability*:
                            </span>{" "}
                            <span style={{ color: "black", fontSize: "13px" }}>
                              Sold out
                            </span>
                          </p>
                          <p className="">
                            <span
                              style={{
                                color: "#323333",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              2 BHK Apartment{" "}
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "13px" }}
                            >
                              Availability*:
                            </span>{" "}
                            <span style={{ color: "black", fontSize: "13px" }}>
                              Sold out
                            </span>
                          </p>
                          <p className="">
                            <span
                              style={{
                                color: "#323333",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              3 BHK Apartment{" "}
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "13px" }}
                            >
                              Availability*:
                            </span>{" "}
                            <span style={{ color: "black", fontSize: "13px" }}>
                              Yes
                            </span>
                          </p>
                        </div>
                        <div className="propertydisplay__bodyTwoPartTableContainerOne">
                          <p className="propertydisplay__bodyTwoPartTableTitle">
                            Super Built-Up Area
                          </p>
                          <p className="" style={{ marginTop: "2px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              598 sq.ft
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "12px" }}
                            >
                              (55.56 sq.m)
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "2px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              1157 - 1264 sq.ft
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "12px" }}
                            >
                              (107.49 - 117.43 sq.m)
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "2px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              1404 - 1533 sq.ft
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "12px" }}
                            >
                              (130.44 - 142.42 sq.m)
                            </span>{" "}
                          </p>
                        </div>

                        <div className="propertydisplay__bodyTwoPartTableContainerOne">
                          <p className="propertydisplay__bodyTwoPartTableTitle">
                            Carpet Area
                          </p>

                          <p className="" style={{ marginTop: "2px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              384 sq.ft
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "12px" }}
                            >
                              (35.67 sq.m)
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "2px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              776 - 809 sq.ft
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "12px" }}
                            >
                              (72.09 - 75.16 sq.m)
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "2px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "14px",
                                fontWeight: "400",
                              }}
                            >
                              943 - 1047 sq.ft
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{ color: "#979b9b", fontSize: "12px" }}
                            >
                              (87.61 - 97.27 sq.m)
                            </span>{" "}
                          </p>
                        </div>

                        <div className="propertydisplay__bodyTwoPartTableContainerOne">
                          <p className="propertydisplay__bodyTwoPartTableTitle">
                            Price
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <span
                              style={{
                                color: "#323333",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              NA{" "}
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <span
                              style={{
                                color: "#323333",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              NA{" "}
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <small style={{ marginTop: "-8px" }}>&#8377;</small>
                            <span
                              style={{
                                color: "#323333",
                                fontSize: "18px",
                                fontWeight: "500",
                                marginTop: "10px",
                              }}
                            >
                              87.29 L - 94.77 L
                            </span>{" "}
                          </p>
                        </div>
                        <div className="propertydisplay__bodyTwoPartTableContainerTwo">
                          <p className="propertydisplay__bodyTwoPartTableTitle">
                            Floor Plans
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "17px",
                                fontWeight: "400",
                              }}
                            >
                              NA
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "17px",
                                fontWeight: "400",
                              }}
                            >
                              NA
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "17px",
                                fontWeight: "400",
                              }}
                            >
                              NA
                            </span>{" "}
                          </p>
                        </div>
                        <div className="propertydisplay__bodyTwoPartTableContainerTwo">
                          <p className="propertydisplay__bodyTwoPartTableTitle">
                            Live-in Tour
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "17px",
                                fontWeight: "400",
                              }}
                            >
                              NA
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "17px",
                                fontWeight: "400",
                              }}
                            >
                              NA
                            </span>{" "}
                          </p>
                          <p className="" style={{ marginTop: "20px" }}>
                            <span
                              style={{
                                color: "#696b6b",
                                fontSize: "17px",
                                fontWeight: "400",
                              }}
                            >
                              NA
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="propertydisplay__bodyTwoPart">
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "40px",
                          }}
                        >
                          <a
                            href="https://www.quikr.com/coworking"
                            target="_blank"
                            className="propertydisplay__bodypart"
                          >
                            <div
                              style={{
                                width: "70px",
                                height: "40px",
                                marginTop: "10px",
                              }}
                            >
                              <img
                                class="cf-lazyload"
                                data-src="https://teja8.kuikr.com//cfassets/images/cowork_banner_img.jpg"
                                src="https://teja8.kuikr.com//cfassets/images/cowork_banner_img.jpg"
                                data-loaded="true"
                              />
                            </div>
                            <div
                              className="propertydisplay__bodyOneDetailPartOneColumn"
                              style={{ marginLeft: "20px", marginTop: "15px" }}
                            >
                              <img
                                data-src="https://teja8.kuikr.com//cfassets/images/cowork_logo.jpg"
                                style={{ width: "140px", height: "25px" }}
                                src="https://teja8.kuikr.com//cfassets/images/cowork_logo.jpg"
                                data-loaded="true"
                              />
                              <p style={{ color: "#696b6b", fontSize: "13px" }}>
                                Discover India's largest and most loved
                                coworking network
                              </p>
                            </div>
                          </a>
                          <p
                            className="explore"
                            style={{
                              marginRight: "20px",
                              marginTop: "35px",
                            }}
                          >
                            <span style={{ paddingTop: "10px" }}>
                              Explore Now
                            </span>
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          <img
                            src="https://tpc.googlesyndication.com/simgad/9380399435543827338"
                            border="0"
                            width="728"
                            height="90"
                            alt=""
                            class="img_ad"
                          ></img>
                        </div>
                        <p className="propertydisplay__bodyTwoPartTitle">
                          Location
                        </p>
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          <img
                            style={{
                              display: "block",
                              width: "100%",
                              minHeight: "100%",
                            }}
                            class="cf-lazyload"
                            data-src="https://teja8.kuikr.com/cfassets/images/cf_listing_default-map.webp"
                            src="https://teja8.kuikr.com/cfassets/images/cf_listing_default-map.webp"
                            data-loaded="true"
                          />
                          <span class="mapproname" id="mapImgName">
                            {this.state.title}
                          </span>
                        </div>
                      </div>
                      {/* <div className="propertydisplay__bodyTwo"> */}
                      <img
                        class="cf-lazyload"
                        src="https://teja10.kuikr.com/restatic/1611129440.jpg"
                        data-loaded="true"
                        style={{ marginTop: "30px" }}
                      />
                      {/* </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                  <div
                    className="propertydisplay__bodyTwo"
                    style={{ marginTop: "30px" }}
                  >
                    <div className="propertydisplay__bodyOneDetailPartOneColumn">
                      <p className="propertydisplay__bodyTwoPartTitle">
                        {this.state.title} Developers
                      </p>
                      <span style={{ color: "#979b9b", fontSize: "15px" }}>
                        The history of {this.state.title} since establishment in
                        1980 by Mr. Tallam R Rajan had been one of culture,
                        ambition and a vision of a sustainable India. Grounded
                        in trust and loyalty, these values have become the solid
                        foundation for the emergence of Shilpa Group Company.
                      </span>{" "}
                      <span
                        style={{
                          color: "#979b9b",
                          fontSize: "15px",
                          marginTop: "50px",
                        }}
                      >
                        {this.state.title} is a Group Company with focus and
                        dynamism. The axiom that underlies our work is to
                        continually realize and surpass our clients’
                      </span>{" "}
                      <span
                        style={{
                          color: "#979b9b",
                          fontSize: "15px",
                          marginTop: "30px",
                        }}
                      >
                        No. 05, 6th 'A' Main, 27th Cross, Jayanagar 3rd Block,
                        Bangalore, Karnataka, INDIA.
                        <br />
                        {this.state.address}
                      </span>{" "}
                      <span
                        style={{
                          color: "#979b9b",
                          fontSize: "15px",
                          marginTop: "20px",
                        }}
                      >
                        Projects in Bangalore
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="enquiry" style={{ marginTop: "150px" }}>
                  <SideContact />
                </div>
              </div>
              <div
                className="propertydisplay__footer"
                style={{ marginTop: "310px" }}
              >
                <p className="propertydisplay__bodyTwoPartTitle">
                  Amenities - {this.state.title}
                </p>
                <div className="propertydisplay__bodyColumntitleTwoPriceAmenities">
                  <span
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Indoor
                  </span>
                  <div
                    className="propertydisplay__bodypart"
                    style={{ marginLeft: "154px" }}
                  >
                    <div
                      className="propertydisplay__bodyOneDetailPartOneColumn"
                      style={{ width: "200px" }}
                    >
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        24Hrs Backup Electricity
                      </span>{" "}
                    </div>

                    <div
                      className="propertydisplay__bodyOneDetailPartOneColumn"
                      style={{ width: "200px" }}
                    >
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Intercom
                      </span>{" "}
                    </div>

                    <div
                      className="propertydisplay__bodyOneDetailPartOneColumn"
                      style={{ width: "200px" }}
                    >
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Jacuzzi Steam Sauna
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="propertydisplay__bodyColumntitleTwoPriceAmenities">
                  <span
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Society
                  </span>
                  <div
                    className="propertydisplay__bodypart"
                    style={{ marginLeft: "150px" }}
                  >
                    <div
                      className="propertydisplay__bodyOneDetailPartOneColumn"
                      style={{ width: "200px" }}
                    >
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Landscaped Garden
                      </span>{" "}
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Party Area
                      </span>{" "}
                    </div>

                    <div
                      className="propertydisplay__bodyOneDetailPartOneColumn"
                      style={{ width: "200px" }}
                    >
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Lift
                      </span>{" "}
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Play Area
                      </span>{" "}
                    </div>

                    <div
                      className="propertydisplay__bodyOneDetailPartOneColumn"
                      style={{ width: "200px" }}
                    >
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Avenue Tree Plantation
                      </span>{" "}
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Swimming Pool
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <p className="propertydisplay__bodyTwoPartTitle">
                    Specifications - {this.state.title}
                  </p>
                  <span
                    style={{
                      color: "#404141",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    General
                  </span>{" "}
                </div>
                <span
                  style={{
                    color: "#404141",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Structure
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  - R.C.C. framed structure with porotherm block walls.
                </span>{" "}
                {/* </div> */}
                <span
                  style={{
                    color: "#404141",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Flooring
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  Common Area
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  - Lift lobby : Granite/Vitrified tiles flooring.
                  <br />
                  - Staircase: Kota Stone Flooring
                  <br />- Corridors : Vitrified tiles flooring.
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                    marginTop: "20px",
                  }}
                >
                  Apartment
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  - Foyer : Vitrified Tiles
                  <br />- Living & Dining : Vitrified Tiles
                </span>{" "}
                <p className="propertydisplay__bodyTwoPartTitle">
                  More About - {this.state.title}
                </p>
                <p
                  className="propertydisplay__bodyTwoPartTitle"
                  style={{ marginTop: "-5px" }}
                >
                  Project Highlights
                </p>
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  - Old Madras Road, Bengaluru
                  <br />
                  - Mid-segment project
                  <br />- Thoughtfully designed landscapes and architecture
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "12px",
                    fontWeight: "400",
                    marginTop: "10px",
                  }}
                >
                  The information provided herein have been collected from
                  publicly available sources, and is yet to be verified as per
                  RERA guidelines.*
                </span>{" "}
              </div>
              <div className="box_containerType7">
                <div className="Row">
                  <p className="black__title">
                    Do you want to rate/review this product?
                  </p>
                  <Link
                    className="color__Button"
                    to={`/agent/RateReview/${id}`}
                    style={{
                      marginLeft: "100px",
                      marginTop: "15px",
                      color: "white",
                      fontWeight: "500",
                      width: "300px",
                    }}
                  >
                    {" "}
                    Click Here!
                  </Link>
                </div>
                <div
                  className="separator"
                  style={{
                    width: "900px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                ></div>
              </div>
              <div className="box_containerType6">
                <div className="Row">
                  <div
                    style={{
                      width: "400px",
                      float: "right",
                      marginLeft: "10px",
                    }}
                  >
                    <p className="black__title">
                      Have doubts regarding this property?
                      <br />
                      <span
                        style={{
                          fontSize: "12px",
                          padding: "2px",
                        }}
                      >
                        Write to us!
                      </span>
                    </p>
                  </div>
                  <div
                    style={{
                      width: "400px",
                      float: "left",
                      marginTop: "-10px",
                    }}
                  >
                    <form onSubmit={this.onFormSubmit}>
                      <TextArea
                        classes="col-md-12"
                        name="question"
                        placeholder="Type your question here"
                        onChange={this.handleInputQuestionChange}
                        // value={this.state.question}
                        // error={this.props.errors.question}
                      />
                      <button
                        type="submit"
                        className="color__Button"
                        style={{ width: "93%" }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="separator"
                style={{
                  width: "900px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              ></div>
              <p className="black__title">
                Related Question about this property
              </p>
              {question != null &&
                question.map((list, index) => {
                  return (
                    <div
                      className="box_containerType6"
                      style={{ marginLeft: "20px" }}
                      key={index}
                    >
                      <p className="black__title box_backgroundColored">
                        {list}?
                      </p>
                      {/* </div>
            <div style={{ width: "100%", float: "left", marginTop: "10px" }}> */}
                      <span
                        style={{
                          fontSize: "12px",
                          padding: "2px",
                          marginLeft: "10px",
                        }}
                      >
                        {answer[index]}
                      </span>
                    </div>
                  );
                })}
            </div>
            {/* small Screen start*/}
            <div className="smaller_screen">
              <div className="sm_image">
                <img
                  src={`${baseUrl}uploads/${this.state.imgUrl}`}
                  alt="Responsive"
                />
              </div>
              <div className="propertyMob__header">
                <p className="propertydisplay__title">{this.state.title}</p>

                <div
                  className="Row"
                  style={{
                    justifyContent: "space-between",
                    marginTop: "-20px",
                  }}
                >
                  <p className="light_ashFont">
                    Project: {this.state.apartName}
                  </p>
                  <p className="mob__price">
                    <small>&#8377;</small>
                    <strong>{this.state.price} Lakhs</strong>
                  </p>
                </div>
              </div>
              <div className="ovrview">
                <span
                  className={`badge badge-${statusColor}`}
                  style={{ height: "20px", margin: "10px" }}
                >
                  {this.state.status}
                </span>
                <div className="ovrview_con">
                  <div className="Colmn">
                    <p className="sm_lightFont">BHK</p>
                    <p className="bg_blckFont">{this.state.bhk}</p>
                    <p className="sm_lightFont">Possession</p>
                    <p className="bg_blckFont">
                      {/* {this.state.possession === "" ? "Ready-to-move" : this.state.possession} */}
                      Ready-to-move
                    </p>
                    <p className="sm_lightFont">Property Type</p>
                    <p className="bg_blckFont">
                      {this.state.apartType === ""
                        ? "Apartment"
                        : this.state.apartType}
                    </p>
                    <p className="sm_lightFont">Floor</p>
                    <p className="bg_blckFont">{this.state.floor}</p>
                    <p className="sm_lightFont">Parking</p>
                    <p className="bg_blckFont">{this.state.garages}</p>
                  </div>
                </div>
                <div className="ovrview_con">
                  <div className="Colmn">
                    <p className="sm_lightFont">Area</p>
                    <p className="bg_blckFont">{this.state.area} sq.ft.</p>
                    <p className="sm_lightFont">Price</p>
                    <div className="Row">
                      <small style={{ marginTop: "-14px", marginRight: "5px" }}>
                        &#8377;
                      </small>
                      <p className="bg_blckFont">{this.state.price} L</p>
                    </div>
                    <p className="sm_lightFont">Launched Date</p>
                    <p className="bg_blckFont">
                      {/* {this.state.possession} */}
                      May-2021
                    </p>
                    <p className="sm_lightFont">Furnishing</p>
                    <p className="bg_blckFont">{this.state.furnishing}</p>
                    <p className="sm_lightFont">Locality</p>
                    <p className="bg_blckFont">{this.state.locality}</p>
                  </div>
                </div>
              </div>
              <div className="light_borderBox">
                <p className="font_backcolor">Features</p>
                <div className="Colmn">
                  <div className="row_marginHeight">
                    <div className="colmn_width50">
                      <p className="light_ashFont">Direction Facing</p>
                      <p className="light_ashFont">Bedrooms</p>
                      <p className="light_ashFont">Bathrooms</p>
                      <p className="light_ashFont">Balcony</p>
                      <p className="light_ashFont">Near by</p>
                      <p className="light_ashFont">Listed by</p>
                      <p className="light_ashFont">Brokerage Terms</p>
                    </div>
                    <div className="colmn_width50Left">
                      <p className="black_Font16">{this.state.facing}</p>
                      <p className="black_Font16">{this.state.beds}</p>
                      <p className="black_Font16">{this.state.baths}</p>
                      <p className="black_Font16">{this.state.balcony}</p>
                      <p className="black_Font16">
                        {this.state.nearBy1},{this.state.nearBy2}
                      </p>
                      <p className="black_Font16">Rpclan</p>
                      <p className="black_Font16">No</p>
                    </div>
                  </div>
                  <div className="Colmn">
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        href="https://www.quikr.com/coworking"
                        target="_blank"
                        className="Row"
                      >
                        <div
                          style={{
                            width: "70px",
                            height: "30px",
                            marginTop: "10px",
                          }}
                        >
                          <img
                            class="cf-lazyload"
                            data-src="https://teja8.kuikr.com//cfassets/images/cowork_banner_img.jpg"
                            src="https://teja8.kuikr.com//cfassets/images/cowork_banner_img.jpg"
                            data-loaded="true"
                          />
                        </div>
                        <div
                          className="Colmn"
                          style={{ marginLeft: "20px", marginTop: "15px" }}
                        >
                          <img
                            data-src="https://teja8.kuikr.com//cfassets/images/cowork_logo.jpg"
                            style={{ width: "140px", height: "25px" }}
                            src="https://teja8.kuikr.com//cfassets/images/cowork_logo.jpg"
                            data-loaded="true"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                      }}
                    >
                      <img
                        src="https://tpc.googlesyndication.com/simgad/9380399435543827338"
                        border="0"
                        width="100%"
                        height="30px"
                        alt=""
                        class="img_ad"
                      ></img>
                    </div>
                    <p className="font_backcolor" style={{ marginTop: "10px" }}>
                      Location
                    </p>
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          width: "100%",
                          minHeight: "100%",
                        }}
                        class="cf-lazyload"
                        data-src="https://teja8.kuikr.com/cfassets/images/cf_listing_default-map.webp"
                        src="https://teja8.kuikr.com/cfassets/images/cf_listing_default-map.webp"
                        data-loaded="true"
                      />
                      <span class="mapproname" id="mapImgName">
                        {this.state.title}
                      </span>
                    </div>
                  </div>
                  <img
                    class="cf-lazyload"
                    src="https://teja10.kuikr.com/restatic/1611129440.jpg"
                    data-loaded="true"
                    style={{ marginTop: "30px" }}
                  />
                </div>
              </div>
              <div className="light_amentyBorder" style={{ marginTop: "30px" }}>
                <div className="Colmn">
                  <p className="black_font">{this.state.title} Developers</p>
                  <span style={{ color: "#979b9b", fontSize: "15px" }}>
                    The history of {this.state.title} since establishment in
                    1980 by Mr. Tallam R Rajan had been one of culture, ambition
                    and a vision of a sustainable India. Grounded in trust and
                    loyalty, these values have become the solid foundation for
                    the emergence of Shilpa Group Company.
                  </span>{" "}
                  <span
                    style={{
                      color: "#979b9b",
                      fontSize: "15px",
                      marginTop: "50px",
                    }}
                  >
                    {this.state.title} is a Group Company with focus and
                    dynamism. The axiom that underlies our work is to
                    continually realize and surpass our clients’
                  </span>{" "}
                  <span
                    style={{
                      color: "#979b9b",
                      fontSize: "15px",
                      marginTop: "30px",
                    }}
                  >
                    No. 05, 6th 'A' Main, 27th Cross, Jayanagar 3rd Block,
                    Bangalore, Karnataka, INDIA.
                    <br />
                    {this.state.address}
                  </span>{" "}
                  <span
                    style={{
                      color: "#979b9b",
                      fontSize: "15px",
                      marginTop: "20px",
                    }}
                  >
                    Projects in Bangalore
                  </span>{" "}
                </div>
              </div>
              <div className="light_amnSociety" style={{ marginTop: "10px" }}>
                <p className="black_font">Amenities - {this.state.title}</p>
                <div className="Row" style={{ width: "70%" }}>
                  <span
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Indoor
                  </span>
                  <div className="Row" style={{ marginLeft: "15px" }}>
                    <div className="Colmn" style={{ width: "33%" }}>
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        24Hrs Backup Electricity
                      </span>{" "}
                    </div>

                    <div className="Colmn" style={{ width: "33%" }}>
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Intercom
                      </span>{" "}
                    </div>

                    <div className="Colmn" style={{ width: "33%" }}>
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Jacuzzi Steam Sauna
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="Row" style={{ width: "70%" }}>
                  <span
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Society
                  </span>
                  <div className="Row" style={{ marginLeft: "15px" }}>
                    <div className="column" style={{ width: "33%" }}>
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Landscaped Garden
                      </span>{" "}
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Party Area
                      </span>{" "}
                    </div>

                    <div className="Colmn" style={{ width: "33%" }}>
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Lift
                      </span>{" "}
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "50px",
                        }}
                      >
                        Play Area
                      </span>{" "}
                    </div>

                    <div className="Colmn" style={{ width: "33%" }}>
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Avenue Tree Plantation
                      </span>{" "}
                      <span
                        style={{
                          color: "#696b6b",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Swimming Pool
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <p className="black_font">
                    Specifications - {this.state.title}
                  </p>
                  <span
                    style={{
                      color: "#404141",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    General
                  </span>{" "}
                </div>
                <span
                  style={{
                    color: "#404141",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Structure
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  - R.C.C. framed structure with porotherm block walls.
                </span>{" "}
                <span
                  style={{
                    color: "#404141",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Flooring
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  Common Area
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  - Lift lobby : Granite/Vitrified tiles flooring.
                  <br />
                  - Staircase: Kota Stone Flooring
                  <br />- Corridors : Vitrified tiles flooring.
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                    marginTop: "20px",
                  }}
                >
                  Apartment
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  - Foyer : Vitrified Tiles
                  <br />- Living & Dining : Vitrified Tiles
                </span>{" "}
                <p className="black_font">More About - {this.state.title}</p>
                <p className="black_font" style={{ marginTop: "-5px" }}>
                  Project Highlights
                </p>
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  - Old Madras Road, Bengaluru
                  <br />
                  - Mid-segment project
                  <br />- Thoughtfully designed landscapes and architecture
                </span>{" "}
                <span
                  style={{
                    color: "#696b6b",
                    fontSize: "12px",
                    fontWeight: "400",
                    marginTop: "10px",
                  }}
                >
                  The information provided herein have been collected from
                  publicly available sources, and is yet to be verified as per
                  RERA guidelines.*
                </span>{" "}
              </div>
              <div className="rate_reviewBox">
                <div className="Column">
                  <p className="rate_font">
                    Do you want to rate/review this product?
                  </p>
                  <Link
                    className="color__Button"
                    to={`/agent/RateReview/${id}`}
                    style={{
                      color: "white",
                      fontWeight: "500",
                      width: "93%",
                      marginLeft: "10px",
                    }}
                  >
                    {" "}
                    Click Here!
                  </Link>
                </div>
                <div
                  className="separator"
                  style={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                ></div>
              </div>
              <div className="ques_ansBox">
                <div className="Colmn">
                  <div
                    style={{
                      width: "100%",
                      float: "right",
                    }}
                  >
                    <p className="rate_font">
                      Have doubts regarding this property?
                      <br />
                      <span
                        style={{
                          fontSize: "12px",
                          padding: "2px",
                        }}
                      >
                        Write to us!
                      </span>
                    </p>
                  </div>
                  <div
                    style={{ width: "100%", float: "left", marginTop: "-10px" }}
                  >
                    <form onSubmit={this.onFormSubmit}>
                      <TextArea
                        classes="col-md-12"
                        name="question"
                        placeholder="Type your question here"
                        onChange={this.handleInputQuestionChange}
                        // value={this.state.question}
                        // error={this.props.errors.question}
                      />
                      <button
                        type="submit"
                        className="color__Button"
                        style={{ width: "93%" }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="separator"
                style={{ width: "100%", marginTop: "20px" }}
              ></div>
              <p className="rate_font">Related Posts about this property</p>
              {question != null &&
                question.map((list, index) => {
                  return (
                    <div className="related_posts" key={index}>
                      <p className="black__title box_backgroundColored">
                        {list}?
                      </p>
                      {/* </div>
            <div style={{ width: "100%", float: "left", marginTop: "10px" }}> */}
                      <span
                        style={{
                          fontSize: "12px",
                          padding: "2px",
                          marginLeft: "10px",
                        }}
                      >
                        {answer[index]}
                      </span>
                    </div>
                  );
                })}
            </div>
            {/* small screen end */}
          </div>
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

    return <div style={{ marginTop: "50px" }}>{renderContent}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(AdminQuesPage);
