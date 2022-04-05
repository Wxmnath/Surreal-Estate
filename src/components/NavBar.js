import "../styles/NavBar.css";
import surrealEstateLogo from "../Surreal_Estate_Logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <img className="logo" src={surrealEstateLogo} alt="logo" />
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
}

export default NavBar;
