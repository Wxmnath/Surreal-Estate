import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
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
  const { search } = useLocation();

  useEffect(() => {
    return axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
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
  }, [search]);
  return (
    <div>
      <h2>Properties Page</h2>
      <SideBar />
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          title={property.title}
          price={property.price}
          city={property.city}
          type={property.type}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          email={property.email}
        />
      ))}
    </div>
  );
}

export default Properties;
