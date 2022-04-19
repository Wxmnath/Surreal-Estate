import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";

function SideBar() {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  const history = useHistory();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

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
      <form className="search-by-title" onSubmit={handleSearch}>
        <button className="search-by-title-button" type="submit">
          Search
        </button>
        <input
          className="search-by-title-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Property"
        />
      </form>
    </div>
  );
}

export default SideBar;
