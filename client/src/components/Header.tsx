import { Link } from "react-router-dom";
import "../styles/Header.css";
import logolise from "../assets/images/lise_logo.png";
function Header() {
  return (
    <>
      <nav className="header">
        <img src={logolise} alt="logo_lise" id="logo_lise" />
        <p className="header-tagline">
          Lise Pérard <br />
          <span>
            <em>Développeuse web Full stack</em>
          </span>
        </p>
        <h1 className="title_header">
          <Link to="/">
            <span>Home.</span>
          </Link>
        </h1>
        {/* Menu qui prend un tiers de l'écran */}
        <div className="nav">
          <div className="nav-wrapper">
            <nav className="nav_header">
              <Link to="/">Home.</Link>
              <br />
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
