import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./CardOne.css";
import { baseUrl } from "../../baseURL/baseURL";

class CardOne extends React.Component {
  render() {
    const {
      img,
      title,
      price,
      description,
      area,
      beds,
      baths,
      garages,
      propertyId,
      btnText,
    } = this.props;

    return (
      // <Link to={`/${title}/${propertyId}`}>
      <Link to={`/property-detail/${propertyId}`}>
        <div
          className="product"
          style={{ backgroundImage: `url(${baseUrl}uploads/${img})` }}
        >
          <div className="product__imageContainer">
            {/* <div className="product__info"> */}
            <p className="product__title">{title}</p>
            <p className="product__price">
              <small>&#8377;</small>
              <strong>{price} Lakhs</strong>
            </p>{" "}
            {/* </div> */}
            {/* <p className="product__description">{description}</p> */}
            {/* <Link to={`/property-detail/${propertyId}`}>
            <img
              className={`product__img ${"product__imgLarge"}`}
              src={`${baseUrl}uploads/${img}`}
              alt=""
            />
          </Link> */}
          </div>
          {/* <Link to={`/property-detail/${propertyId}`}>{btnText}</Link> */}
        </div>
      </Link>
      //      <div className="product__imgContainer">
      // </div>
      // </Redirect>
      // </Link>

      // <div
      //   className="card shadow-lg"
      //   style={{
      //     width: "360px",
      //   }}
      // >
      //   <img
      //     className="card-img-top"
      //     style={{ width: "100%", height: "250px" }}
      //     src={`http://localhost:3001/uploads/${img}`}
      //   />
      //   <div className="card-body">
      //     <h5 className="card-title">
      //       {title}
      //       <span className="float-right badge badge-success">
      //         Price: ${price}
      //       </span>
      //     </h5>

      //     <div className="card-text">
      //       <ul className="list-group">
      //         <li className="list-group-item">
      //           Area:
      //           <span className="badge badge-secondary float-right">
      //             {area} m<sup>2</sup>
      //           </span>
      //         </li>
      //         <li className="list-group-item">
      //           Beds:
      //           <span className="badge badge-secondary float-right">
      //             {beds}
      //           </span>
      //         </li>
      //         <li className="list-group-item">
      //           Baths:
      //           <span className="badge badge-secondary float-right">
      //             {baths}
      //           </span>
      //         </li>
      //         <li className="list-group-item">
      //           Garages:
      //           <span className="badge badge-secondary float-right">
      //             {garages}
      //           </span>
      //         </li>
      //       </ul>
      //     </div>
      //     <Link
      //       to={`/property-detail/${propertyId}`}
      //       className="btn btn-primary mt-3"
      //     >
      //       {btnText}
      //     </Link>
      //   </div>
      // </div>
    );
  }
}

export default CardOne;
