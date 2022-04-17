import { React } from "react";
import PropertyCard from "./PropertyCard";

function Properties() {
  return (
    <div>
      <h2>Properties Page</h2>
      <PropertyCard title type bathrooms bedrooms price city email />
    </div>
  );
}

export default Properties;
