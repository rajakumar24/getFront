import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./location.css";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          name: "Current position",
          position: {
            lat: "13.0249127",
            lng: "77.6192336",
          },
        },
      ],
    };
  }

  onMarkerDragEnd = (coord, index) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState((prevState) => {
      const markers = [...this.state.markers];
      markers[index] = { ...markers[index], position: { lat, lng } };
      return { markers };
    });

    console.log("marker", this.state.markers);
  };

  // const {mapinfo} = this.props;
  getMap = (lat, lng) => {
    this.props.mapinfo(lat, lng);
  };

  getLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;

        let newState = Object.assign({}, this.state);
        newState.markers[0].position.lat = coords.latitude;
        newState.markers[0].position.lng = coords.longitude;

        this.setState(newState);
        console.log(
          "map",
          this.state.markers[0].position.lat,
          this.state.markers[0].position.lng
        );
      });
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const location = {
      latitude: this.state.markers[0].position.lat,
      longitude: this.state.markers[0].position.lng,
    };
  };

  render() {
    // console.log("current", marker.name)
    const { mapinfo } = this.props;
    return (
      <div className="Column">
        <div className="mapbox">
          <div className="mapbox11">
            <Map
              google={this.props.google}
              style={{
                width: "100%",
                height: "300px",
              }}
              zoom={14}
              initialCenter={{
                lat: this.state.markers[0].position.lat,
                lng: this.state.markers[0].position.lng,
              }}
            >
              {this.state.markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.position}
                  draggable={true}
                  onDragend={(t, map, coord) =>
                    this.onMarkerDragEnd(coord, index)
                  }
                  name={marker.name}
                />
              ))}
            </Map>
          </div>
          {/* <div className="button">
            <h6>Confirm Your Location Once!</h6>
            <div className="lat">
              {" "}
              lat:{this.state.markers[0].position.lat} <span id="lat"></span>
            </div>
            <div className="lon">
              lon:{this.state.markers[0].position.lng} <span id="lon"></span>
            </div>
            <button
              type="submit"
              className="button1"
              onClick={() =>
                this.getMap(
                  this.state.markers[0].position.lat,
                  this.state.markers[0].position.lng
                )
              }
            >
              submit
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBJwbHbMz7F_forUDbRYvLmIK3GtkeHRhA",
})(Maps);
