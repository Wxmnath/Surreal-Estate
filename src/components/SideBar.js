import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};
function SideBar() {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title">Filter By City:</h5>

      <Link
        className="link-item"
        to={buildQueryString("query", { city: "Manchester" })}
      >
        Manchester
      </Link>
      <Link
        className="link-item"
        to={buildQueryString("query", { city: "Leeds" })}
      >
        Leeds
      </Link>
      <Link
        className="link-item"
        to={buildQueryString("query", { city: "Sheffield" })}
      >
        Sheffield
      </Link>
      <Link
        className="link-item"
        to={buildQueryString("query", { city: "Liverpool" })}
      >
        Liverpool
      </Link>
      <h5 className="sidebar-title">Sort By Price:</h5>
      <Link className="link-item" to={buildQueryString("sort", { price: -1 })}>
        Price Descending
      </Link>
      <Link className="link-item" to={buildQueryString("sort", { price: +1 })}>
        Price Ascending
      </Link>
    </div>
  );
}

export default SideBar;
