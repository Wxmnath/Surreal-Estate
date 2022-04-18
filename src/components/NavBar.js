import { Link, React } from "react-router-dom";
import "../styles/NavBar.css";
import surrealEstateLogo from "../Surreal_Estate_Logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <img className="logo" src={surrealEstateLogo} alt="logo" />
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="/add-property">
          Add a Property
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
