import { React, useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/PropertyCard.css";

function Properties() {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    return axios
      .get("http://localhost:3000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);

        setAlert({ message: "Properties found!", isSuccess: true });
      })
      .catch(() => {
        setAlert({
          message: "server error, try again soon",
          isSuccess: false,
        });
      });
  }, []);
  return (
    <div>
      <h2>Properties Page</h2>
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          title={property.title}
          city={property.city}
          type={property.type}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          price={property.price}
          email={property.email}
        />
      ))}
    </div>
  );
}

export default Properties;
