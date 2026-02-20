import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <Link className="nav-btn" to="/">
          Home
        </Link>
        <Link className="nav-btn" to="/variables">
          Characteristics
        </Link>
      </div>
    </header>
  );
}

export default Header;
