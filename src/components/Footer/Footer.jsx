import React from "react";
import "./Footer.css";
import { Link, withRouter } from "react-router-dom";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { Grid } from "phoenix-component-2.0";

const Footer = (props) => {
  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <div className="footer">
          <div className="footer-second-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row pt-2">
                    <div className="col-md-3">
                      <div className="footer-parent-div">
                        <div className="footer-child-div">
                          <ul>
                            <li>Real estate in Mumbai</li>
                            <li>Real estate in Bengaluru</li>
                            <li>Real estate in Hyderabad</li>
                            <li>Real estate in Pune</li>
                            <li>Real estate in Chennai</li>
                            <li>Real estate in Delhi</li>
                            <li>Real estate in Gurgaon</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer-parent-div">
                        <div className="footer-child-div">
                          <ul>
                            <li>Real estate in Gurgaon</li>
                            <li>Real estate in Noida</li>
                            <li>Real estate in Kolkata</li>
                            <li>Real estate in Goa</li>
                            <li>Real estate in Thane</li>
                            <li>Real estate in Panjab</li>
                            <li>Real estate in Faridabad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer-parent-div">
                        <div className="footer-child-div">
                          <ul>
                            <li>Real estate in Mumbai</li>
                            <li>Real estate in Bengaluru</li>
                            <li>Real estate in Hyderabad</li>
                            <li>Real estate in Pune</li>
                            <li>Real estate in Chennai</li>
                            <li>Real estate in Delhi</li>
                            <li>Real estate in Gurgaon</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer-parent-div">
                        <div className="footer-child-div">
                          <ul>
                            <li>Real estate in Gurgaon</li>
                            <li>Real estate in Noida</li>
                            <li>Real estate in Kolkata</li>
                            <li>Real estate in Goa</li>
                            <li>Real estate in Thane</li>
                            <li>Real estate in Panjab</li>
                            <li>Real estate in Faridabad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Last Row */}
          <div className="footer__containerThree">
            <div className="footer__titleOne">
              <div className="footer__titleOneHeader">
                <p
                  className="header__logo"
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginTop: "10px",
                  }}
                >
                  <span
                    style={{
                      color: "#4bd80a",
                      marginTop: "0px",
                      fontSize: "22px",
                      marginRight: ".15rem",
                    }}
                  >
                    G
                  </span>
                  <span className="header_name">etRightProperty.Com</span>
                </p>
              </div>
              <p
                className="header__logoItemPart"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginTop: "10px",
                }}
              >
                GetRightProperty is a new home rental platform that makes it
                easier to find your new home without paying any brokerage. Use
                our verified listing to ensure you find your dream home by
                contacting the owners directly. In case you cannot find a
                property you are looking for, please post a requirement and
                we'll send you email notification with properties matching your
                requirements.
              </p>
            </div>
            <div className="footer__titleTwo">
              <p>
                <span
                  className="header__logoItem"
                  style={{
                    color: "#4bd80a",
                    marginTop: "0px",
                    fontSize: "22px",
                  }}
                >
                  C
                </span>
                <span className="header_name ">ontact Us</span>
              </p>
              <p className="header__logoItemPart" style={{ marginTop: "-5px" }}>
                Contact Us
              </p>
              <p className="header__logoItemPart" style={{ marginTop: "-5px" }}>
                Corporate Enquiry
              </p>
              <p className="header__logoItemPart" style={{ marginTop: "-5px" }}>
                Media
              </p>
              <p className="header__logoItemPart" style={{ marginTop: "-5px" }}>
                Youtube
              </p>
              <p className="header__logoItemPart" style={{ marginTop: "-5px" }}>
                Medium
              </p>
            </div>
            <div className="footer__titleTwo">
              <p>
                <span
                  className="header__logoItem"
                  style={{
                    color: "#4bd80a",
                    marginTop: "0px",
                    fontSize: "22px",
                  }}
                >
                  F
                </span>
                <span className="header_name ">ollow Us</span>
              </p>
              <p className="header__logoItemPart" style={{ marginTop: "-5px" }}>
                Share On Facebook
              </p>
              <p className="header__logoItemPart" style={{ marginTop: "-5px" }}>
                Share on Twitter
              </p>
              <p className="header__logoItemPart" style={{ marginTop: "-5px" }}>
                Share on Instagram
              </p>
            </div>
          </div>
          {/* last Line */}
          <div className="footer__containerFour">
            <p style={{ marginTop: "15px" }}>
              &copy; Get right property 2020 All Rights Reserved
            </p>
          </div>
        </div>
      </Grid>{" "}
    </Grid>
  );
};
export default Footer;
