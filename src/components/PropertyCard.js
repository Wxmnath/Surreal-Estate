import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PropertyCard(props) {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="property-card" data-testid="property-card">
      <div className="property-card__title" data-testid="property-title">
        {title}
      </div>
      <div className="property-card__price" data-testid="property-price">
        £:{price}
      </div>
      <div className="property-card__city" data-testid="property-city">
        {city}
      </div>
      <div className="property-card__type" data-testid="property-type">
        {/* <FontAwesomeIcon icon="fa-solid fa-house-chimney-blank" /> */}
        {type}
      </div>
      <div className="property-card__bedrooms" data-testid="property-bedrooms">
        Bedrooms:{bedrooms}
      </div>
      <div
        className="property-card__bathrooms"
        data-testid="property-bathrooms"
      >
        Bathroom(s):{bathrooms}
      </div>
      <div className="property-card__email" data-testid="property-email">
        <a href="mailto:someone@example.com">{email}</a>
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
