import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions";
import { Popup } from "../../components";
import { baseUrl } from "../../baseURL/baseURL";

class CardFive extends React.Component {
  deleteProperty = (id) => {
    this.props.deleteProperty(id);
  };

  render() {
    const {
      id,
      apartName,
      title,
      agentId,
      agentName,
      propertyType,
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
      // deleteProperty
      approveid,
    } = this.props;

    let statusColor = status === "rent" ? "warning" : "success";

    return (
      <React.Fragment>
        <div>
          <div className="Card">
            <div className="Column">
              <div className="title__box">
                <div>
                  <p className="green__title">{title}</p>
                  <p className="light__title">{address}</p>
                </div>
                <div className="Row">
                  <p className="black__title">{approveid}</p>
                  <p className="black__title">
                    <span></span>
                    {area} sqft{" "}
                  </p>
                  <p className="black__title">&#8377; {price} Lakhs</p>
                </div>
              </div>
              <div className="Row">
                <div className="body__box" style={{ width: "300px" }}>
                  <img src={`${baseUrl}uploads/${imgUrl}`} alt="" />
                </div>
                <div className="body__box" style={{ width: "375px" }}>
                  <span
                    className={
                      status === "rent"
                        ? "badge badge-warning"
                        : "badge badge-success"
                    }
                    style={{ marginLeft: "5px" }}
                  >
                    {status}
                  </span>
                  <div className="flex__flow">
                    <div>
                      <p className="black__title">Type- {propertyType}</p>
                      <p className="black__title">Bedrooms- {beds} </p>
                    </div>
                    <div>
                      <p className="black__title">Parking- {garages} </p>
                      <p className="black__title">sqft- {area} </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "0px 20px",
                    }}
                  >
                    <button
                      className="color__Button"
                      style={{
                        width: "150px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        // window.location.href = `/property-detail/${propertyId}`;
                        window.location.href = `/agent/AdminQues/${id}`;
                      }}
                    >
                      Visit Property
                    </button>
                    <button
                      className="color__Button"
                      style={{
                        width: "185px",
                        height: "30px",
                      }}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/agent-profile/${agentId}`;
                      }}
                    >
                      {/* <i className="fa fa-edit" />{" "}
                        <span style={{ marginLeft: "5px" }}>
                          {" "}
                          Edit Property
                        </span> */}
                      Get Owner Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="footer__box">
                <div className="Row">
                  <p
                    style={{
                      fontSize: "12px",
                      padding: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    Nearby:
                  </p>
                  <div className="text__backgorund">
                    <p
                      style={{
                        fontSize: "12px",
                        padding: "2px",
                      }}
                    >
                      whitefield
                    </p>
                  </div>
                  <div className="text__backgorund">
                    <p
                      style={{
                        fontSize: "12px",
                        padding: "2px",
                      }}
                    >
                      Marathalhalli
                    </p>
                  </div>
                  <div className="text__backgorund">
                    <p
                      style={{
                        fontSize: "12px",
                        padding: "2px",
                      }}
                    >
                      Hopefarm
                    </p>
                  </div>
                  <div className="Row" style={{ float: "right" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        padding: "5px",
                        marginLeft: "5px",
                      }}
                    >
                      Description:
                    </p>
                    <div className="text__backgorund">
                      <p
                        style={{
                          fontSize: "12px",
                          padding: "2px",
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CardSmaller">
            <div class="property_Card Column">
              <div className="imageContainer">
                <img src={`${baseUrl}uploads/${imgUrl}`} alt="" />
              </div>
              <div className="title__box">
                <div>
                  <p className="green__title">{apartName}</p>
                  <p className="light__title">{title}</p>
                </div>
                <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                  <span
                    className={
                      status === "rent"
                        ? "badge badge-warning"
                        : "badge badge-success"
                    }
                    style={{
                      height: "20px",
                    }}
                  >
                    {status}
                  </span>
                </div>
              </div>
              <div className="Row" style={{ height: "30px" }}>
                <p className="black__title">
                  <span></span>
                  {area} sqft{" "}
                </p>
                <p className="black__title">&#8377; {price} Lakhs</p>
              </div>
              <div
                className="flex__flowSmaller"
                style={{ paddingTop: "-20px" }}
              >
                <p className="black__title">Type- {propertyType}</p>
                <p className="black__title">Bedrooms- {beds} </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0px 20px",
                }}
              >
                <button
                  className="color__Button"
                  style={{
                    width: "130px",
                    height: "30px",
                  }}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/agent/AdminQues/${id}`;
                  }}
                >
                  <p className="button__title">Visit Property</p>
                </button>
                <button
                  className="color__Button"
                  style={{
                    width: "155px",
                    height: "30px",
                  }}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/agent-profile/${agentId}`;
                  }}
                >
                  <p className="button__title">Get Owner Details</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardFive;
