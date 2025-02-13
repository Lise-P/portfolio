import { Link } from "react-router-dom";
import "../styles/Header.css";
import logolise from "../assets/images/lise_logo.png";
function Header() {
  return (
    <>
      <nav className="header">
        <img src={logolise} alt="logo_lise" id="logo_lise" />
        <p className="header-tagline">
          Lise Pérard <br /> Développeuse web Full stack
        </p>
        <h1 className="title_header">
          <Link to="/">
            <span>Home.</span>
          </Link>

          <Link to="/Login">
            <span>Se connecter.</span>
          </Link>
        </h1>
        {/* Affichage mobile/tablette */}
        <input id="toggle" type="checkbox" />
        <label htmlFor="toggle" className="hamburger">
          <div className="top-bun" />
          <div className="meat" />
          <div className="bottom-bun" />
        </label>
        {/* Menu qui prend un tiers de l'écran */}
        <div className="nav">
          <div className="nav-wrapper">
            <nav className="nav_header">
              <Link to="/">Home.</Link>
              <br />
              <Link to="/Login">Se connecter.</Link>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
