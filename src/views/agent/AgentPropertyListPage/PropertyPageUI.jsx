import React from "react";
import { Link } from "react-router-dom";
import { Popup } from "../../../components";
import Button from "@material-ui/core/Button";
import { baseUrl } from "../../../baseURL/baseURL";

class PropertyPageUI extends React.Component {
  render() {
    const { dataList, deleteProperty } = this.props;
    return (
      <div>
        {dataList.map((property) => {
          return (
            // card Container
            <div>
              <div className="Card">
                <div className="Column">
                  <div className="title__box">
                    <div>
                      <p className="green__title">{property.title}</p>
                      <p className="light__title">{property.address}</p>
                    </div>
                    <div className="Row">
                      <p className="black__title">
                        <span></span>
                        {property.area} sqft{" "}
                      </p>
                      <p className="black__title">
                        &#8377; {property.price} Lakhs
                      </p>
                    </div>
                  </div>
                  <div className="Row">
                    <div className="body__box" style={{ width: "300px" }}>
                      <img
                        src={`${baseUrl}uploads/${property.imgUrl}`}
                        alt=""
                      />
                    </div>
                    <div className="body__box" style={{ width: "375px" }}>
                      <span
                        className={
                          property.status === "rent"
                            ? "badge badge-warning"
                            : "badge badge-success"
                        }
                        style={{ marginLeft: "5px" }}
                      >
                        {property.status}
                      </span>
                      <div className="flex__flow">
                        <div>
                          <p className="black__title">
                            Type- {property.propertyType}
                          </p>
                          <p className="black__title">
                            Bedrooms- {property.beds}{" "}
                          </p>
                        </div>
                        <div>
                          <p className="black__title">
                            Parking- {property.garages}{" "}
                          </p>
                          <p className="black__title">sqft- {property.area} </p>
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
                            width: "130px",
                            height: "30px",
                          }}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/property-detail/${property._id}`;
                          }}
                        >
                          View Details
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
                            window.location.href = `/agent/edit-property/${property._id}`;
                          }}
                        >
                          {/* <i className="fa fa-edit" />{" "}
                        <span style={{ marginLeft: "5px" }}>
                          {" "}
                          Edit Property
                        </span> */}
                          Edit Property
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="CardSmaller">
                <div class="property_Card Column">
                  <div className="imageContainer">
                    <img src={`${baseUrl}uploads/${property.imgUrl}`} alt="" />
                  </div>
                  <div className="title__box">
                    <div>
                      <p className="green__title">{property.apartName}</p>
                      <p className="light__title">{property.title}</p>
                    </div>
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                      <span
                        className={
                          property.status === "rent"
                            ? "badge badge-warning"
                            : "badge badge-success"
                        }
                        style={{
                          height: "20px",
                        }}
                      >
                        {property.status}
                      </span>
                    </div>
                  </div>
                  <div className="Row" style={{ height: "30px" }}>
                    <p className="black__title">
                      <span></span>
                      {property.area} sqft{" "}
                    </p>
                    <p className="black__title">
                      &#8377; {property.price} Lakhs
                    </p>
                  </div>
                  <div
                    className="flex__flowSmaller"
                    style={{ paddingTop: "-20px" }}
                  >
                    <p className="black__title">
                      Type- {property.propertyType}
                    </p>
                    <p className="black__title">Bedrooms- {property.beds} </p>
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
                        window.location.href = `/agent/AdminQues/${property._id}`;
                      }}
                    >
                      View Details
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
                        window.location.href = `/agent/edit-property/${property._id}`;
                      }}
                    >
                      {/* <i className="fa fa-edit" />{" "}
                        <span style={{ marginLeft: "5px" }}>
                          {" "}
                          Edit Property
                        </span> */}
                      Edit Property
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PropertyPageUI;
