import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PropertyCard(props) {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="property-card" data-testid="property-card">
      <div className="property-card__title" data-testid="property-title">
        Title:{title}
      </div>

      <div className="property-card__type" data-testid="property-type">
        {/* <FontAwesomeIcon icon="fa-solid fa-house-chimney-blank" /> */}
        Type:{type}
      </div>

      <div
        className="property-card__bathrooms"
        data-testid="property-bathrooms"
      >
        Bathrooms:{bathrooms}
      </div>

      <div className="property-card__bedrooms" data-testid="property-bedrooms">
        Bedrooms:{bedrooms}
      </div>

      <div className="property-card__price" data-testid="property-price">
        Price:{price}
      </div>

      <div className="property-card__city" data-testid="property-city">
        City:{city}
      </div>

      <div className="property-card__email" data-testid="property-email">
        <a href="mailto:someone@example.com">Email:{email}</a>
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
