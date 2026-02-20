import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/variables">Characteristics</Link>
      </div>
    </header>
  );
}

export default Header;
