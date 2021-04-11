import React from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../baseURL/baseURL";
import { Input, TextArea, SelectList, CheckBox } from "../../components/";

// added
import * as actions from "../../store/actions";
import { Popup } from "..";

class CardSix extends React.Component {
  state = {
    id: "",
    nameEnquiry: "",
    emailEnquiry: "",
    mobileEnquiry: "",
  };

  handleInputChange = ({ currentTarget }) => {
    const value = currentTarget.value;

    this.setState({
      [currentTarget.name]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // const {
    //     id,
    // } = this.props;
    //add
    // this.setState({
    //   approve: "UnApproved"
    // });
    //add

    const enquiryDetails = {
      // id: id,
      nameEnquiry: this.state.nameEnquiry,
      emailEnquiry: this.state.emailEnquiry,
      mobileEnquiry: this.state.mobileEnquiry,
    };
    console.log("enquiry", enquiryDetails);
    axios
      .post(`${baseUrl}api/property/enquiry`, enquiryDetails)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  render() {
    const {
      id,
      title,
      agentId,
      agentName,
      status,
      imgUrl,
      address,
      price,
      text,
      propertyId,
      area,
      beds,
      baths,
      garages,
      // added2
      // deleteProperty
      approveid,
    } = this.props;
    console.log("rp", id);

    return (
      <div
        className="card shadow-lg"
        style={{
          width: "300px",
          height: "350px",
        }}
      >
        <div className="card-body">
          <div
          // style={{ backgroundColor: "InfoBackground" }}
          >
            {/* <h5 style={{ alignItems: "center", textEmphasisColor: "white" }}> Enquire Here! </h5> */}
          </div>

          <form onSubmit={this.onFormSubmit} className="pb-3">
            <div className="card-text">
              <Input
                classes="col-md-18"
                label="Name"
                name="nameEnquiry"
                placeholder="name..."
                style={{ width: "100%" }}
                onChange={this.handleInputChange}
                value={this.state.nameEnquiry}
                //   error={this.props.errors.nameEnquiry}
              />

              <Input
                classes="col-md-18"
                label="mobile"
                name="mobileEnquiry"
                placeholder="mobile..."
                onChange={this.handleInputChange}
                value={this.state.mobileEnquiry}
                // validate={this.startWithNonZero}
                // error={this.props.errors.mobileEnquiry}
              />

              <Input
                classes="col-md-118"
                label="email"
                name="emailEnquiry"
                placeholder="email..."
                onChange={this.handleInputChange}
                value={this.state.emailEnquiry}
                // error={this.props.errors.emailEnquiry}
              />

              <button
                type="submit"
                className="btn btn-block btn-primary mt-0"
                style={{ backgroundColor: "#10ad7e" }}
              >
                Request Call Back
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CardSix;
