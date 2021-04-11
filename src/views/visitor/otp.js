import React from "react";
import { Paper, TextField, Button, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { baseUrl } from "../../baseURL/baseURL";

// import Otp from './components/Otp';

function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyCount: "",
      name: "",
      about: "",
      email: "",
      mobile: "",
      skype: "",
      website: "",
      address: "",
      country: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      phone: "",
      countryCode: "",
      countryCodeValue: "",
      id: "",
      token: "",
      otpShow: false,
      otttpShow: false,
      otttptext: "Mobile verified",
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.profile.profile).length > 0) {
      const profile = nextProps.profile.profile;

      this.setState({
        propertyCount: this.props.property.totalCount,
        name: this.props.auth.user.name,
        country: profile.country,
        address: profile.address,
        about: profile.about,
        email: this.props.auth.user.email,
        mobile: profile.mobile + "",
        skype: profile.skype,
        website: profile.website,
        facebook: profile.socialMedia.facebook,
        twitter: profile.socialMedia.twitter,
        linkedin: profile.socialMedia.linkedin,
      });
    }
  }

  _getCode = async () => {
    const { email, phone, countryCode, countryCodeValue } = this.state;
    // this.setState({countryCode: countryCodeValue});
    // const textDetails = {
    //     countryCode
    // };
    // console.log("code", textDetails.countryCode)
    console.log("code", countryCodeValue);
    await axios
      .get(`${baseUrl}api/profile/otp`, {
        params: {
          email: email,
          phone: phone,
          countryCode: countryCodeValue,
        },
      })
      .then((data) => {
        console.log("ohhh", data.data._id);
        this.setState({ id: data.data.id });
        console.log("iddd", this.state.id);
      })
      .catch((err) => console.log(err));

    // await axios.get("http://localhost:3000/api/profile/all")
    //     .then(data => {
    //         console.log("oops", data.data.Text[0])
    //         this.setState({ id: data.data.Text[0].id })

    //     })
    //     .catch(err => console.log(err));
  };

  _verifyCode = async () => {
    const { id, token } = this.state;
    // console.log("iddd", id)
    await axios
      .get(`${baseUrl}api/profile/verify`, {
        params: {
          id: id,
          token: token,
        },
      })
      .then((data) => {
        console.log("ook", data);
        if (data.data === "OTP Verified.") {
          this.props.history.push("/agent/dashboard");
        } else {
          // const {otttptext} = this.state
          this.setState({ otttptext: "Plz enter correct otp" });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { otttptext } = this.state;
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(160, 160, 160, 0.2)",
          height: "100vh",
        }}
      >
        {/* <h3>By RpClan</h3> */}

        <Paper
          elevation={4}
          style={{ padding: 20, width: 300, marginBottom: 60 }}
        >
          {!this.state.otpShow ? (
            <h3 style={{ marginLeft: 10, color: "#9f9f9f" }}>
              GetRightProperty
            </h3>
          ) : (
            <IconButton
              onClick={() => {
                this.setState({ otpShow: false, otp: "" });
              }}
              size="small"
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          {!this.state.otttpShow ? (
            <div>
              {!this.state.otpShow ? (
                <h3>Enter your Phone Number</h3>
              ) : (
                <h3>Enter the OTP</h3>
              )}
              {this.state.otpShow ? (
                <p>
                  A One Time Password has been sent to your phone number for
                  verification puposes.
                </p>
              ) : null}

              <div>
                {
                  !this.state.otpShow ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "auto",
                        justifyContent: "space-around",
                      }}
                    >
                      {/* <TextField id="email" label="email" color="secondary" value={this.state.email} onChange={e =>
                                this.setState({ email: e.target.value })
                            } /> */}
                      <div
                        style={{
                          alignItems: "flex-end",
                          justifyContent: "center",
                          display: "flex",
                          marginRight: 10,
                          width: 60,
                        }}
                      >
                        <TextField
                          id="countryCode"
                          label="Code"
                          color="secondary"
                          value={this.state.countryCodeValue}
                          onChange={(e) =>
                            this.setState({ countryCodeValue: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <TextField
                          id="phone"
                          label="phone"
                          color="secondary"
                          value={this.state.phone}
                          onChange={(e) => {
                            if (
                              (e.target.value[e.target.value.length - 1] >=
                                "0" &&
                                e.target.value[e.target.value.length - 1] <=
                                  "9") ||
                              !e.target.value
                            ) {
                              this.setState({ phone: e.target.value });
                            }
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <TextField
                      id="token"
                      label="otp"
                      color="secondary"
                      value={this.state.token}
                      onChange={(e) => this.setState({ token: e.target.value })}
                    />
                  )
                  //  <input
                  //  token={this.state.token}
                  //  setOtp={val => this.setState({otp: val})}
                  //  />
                }

                {this.state.otpShow ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    Didn't receive an OTP?{" "}
                    <Button
                      onClick={() => this._getCode()}
                      color="primary"
                      style={{ textTransform: "none", fontSize: 15 }}
                    >
                      Resend OTP
                    </Button>
                  </div>
                ) : null}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 20,
                  }}
                >
                  <Button
                    variant="contained"
                    // disabled={(this.state.token.length!==10) || (this.state.countryCode===null) || (this.state.otpShow && this.state.token.length!==6)}
                    color="secondary"
                    style={{
                      color: "white",
                      marginLeft: "auto",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      if (this.state.otpShow) {
                        this._verifyCode();
                        this.setState({ otttpShow: true });
                        // this.props.history.push("/agent/dashboard");
                      } else {
                        this._getCode();
                        this.setState({ otpShow: true });
                      }
                    }}
                  >
                    Verify
                  </Button>
                </div>

                {!this.state.otpShow ? (
                  <p>
                    By tapping Verify an SMS may be sent. Message & data rates
                    may apply.
                  </p>
                ) : null}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginTop: 10,
                  }}
                >
                  <a href="#" style={{ textDecoration: "none", fontSize: 14 }}>
                    Terms of service
                  </a>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      fontSize: 14,
                      marginLeft: 10,
                    }}
                  >
                    User agreement
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <p>{otttptext}</p>
          )}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    errors: state.errors,
    auth: state.auth,
    profile: state.profile,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(App);
