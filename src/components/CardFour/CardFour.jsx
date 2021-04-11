import React from "react";

import { Link } from "react-router-dom";
// added
import * as actions from "../../store/actions";
import { Popup } from "../../components";
import { baseUrl } from "../../baseURL/baseURL";

class CardFour extends React.Component {
  // added
  deleteProperty = (id) => {
    this.props.deleteProperty(id);
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
    let statusColor = status === "rent" ? "warning" : "success";

    return (
      <React.Fragment>
        <div className="row">
          <div className="row shadow-sm border p-4 mb-3">
            <div className="col-lg-4 col-md-4 col-sm-8">
              <h4>{title}</h4>
              <span className={`badge badge-${statusColor}`}>{status}</span>

              <img
                className="card-img-top"
                src={`${baseUrl}uploads/${imgUrl}`}
                alt="Card cap"
              />
            </div>
            <div className="col-lg-8 col-md-8  col-sm-8">
              <strong>Address:</strong>
              <Link
                to={`/agent-profile/${agentId}`}
                className="float-right badge badge-primary p-2"
              >
                Agent: {agentName}
              </Link>

              {/* added 1 */}
              <div className="w-75 d-flex justify-content-around   ">
                <Link
                  to={`/agent/AdminMaster/${id}`}
                  className="btn btn-primary"
                >
                  <i className="fa fa-edit" /> Edit
                </Link>
                <strong>{approveid}</strong>
                <Popup
                  buttonLabel="delete"
                  modelTitle={`${title}`}
                  deleteProperty={this.deleteProperty}
                  id={id}
                />
              </div>
              {/* added1 */}
              <br />
              <small className="text-muted">{address}</small>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <span className="badge badge-success">Price: ${price}</span>
                  <br />
                  <p className="my-3">{text}</p>
                  <Link
                    to={`/property-detail/${propertyId}`}
                    className="btn btn-primary"
                  >
                    Visit Property
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Area:{" "}
                      <span className="badge badge-secondary float-right">
                        {area} m<sup>2</sup>
                      </span>
                    </li>
                    <li className="list-group-item">
                      Beds:{" "}
                      <span className="badge badge-secondary float-right">
                        {beds}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Baths:{" "}
                      <span className="badge badge-secondary float-right">
                        {baths}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Garages:
                      <span className="badge badge-secondary float-right">
                        {garages}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardFour;
