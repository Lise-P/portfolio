import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <nav className="login-nav">
        <Link to="/" className="home-link">
          Home
        </Link>
      </nav>
      <div className="login-form">
        <h1>Connexion.</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre adresse mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          <Link to="/">
            <button type="submit" className="submit-btn">
              Se connecter
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
