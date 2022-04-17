import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="side-bar-list">
        <Link className="link-item" to={`/?query={"city": "Manchester"}`}>
          <li>Manchester</li>
        </Link>
        <Link className="link-item" to={`/?query={"city": "Leeds"}`}>
          <li>Leeds</li>
        </Link>
        <Link className="link-item" to={`/?query={"city": "Sheffield"}`}>
          <li>Sheffield</li>
        </Link>
        <Link className="link-item" to={`/?query={"city": "Liverpool"}`}>
          <li>Liverpool</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
