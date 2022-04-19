import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
import { FaBed, FaBath } from "react-icons/fa";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function PropertyCard(props) {
  const { title, type, bathrooms, bedrooms, price, city } = props;

  return (
    <div className="property-card" data-testid="property-card">
      <div className="property-card__title" data-testid="property-title">
        {title}
      </div>
      <div className="property-card__price" data-testid="property-price">
        <RiMoneyPoundCircleFill /> {price}
      </div>
      <div className="property-card__city" data-testid="property-city">
        {city}
      </div>
      <div className="property-card__type" data-testid="property-type">
        {type}
      </div>
      <div className="property-card__bedrooms" data-testid="property-bedrooms">
        <FaBed /> {bedrooms}
      </div>
      <div
        className="property-card__bathrooms"
        data-testid="property-bathrooms"
      >
        <FaBath /> {bathrooms}
      </div>
      <div className="property-card__email" data-testid="property-email">
        <a href="mailto:someone@example.com">
          {" "}
          <MdEmail />
          {"Email "}
        </a>
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
};
