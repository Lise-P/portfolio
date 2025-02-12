import "../styles/Footer.css";
import github from "../assets/images/github_icon.svg";
import linkedin from "../assets/images/linkedinicon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="logos">
        <a
          href="https://github.com/Lise-P"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/lise-perard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <div className="copyright">
        <p>Tous droits réservés - Lise Pérard</p>
      </div>
    </footer>
  );
}

export default Footer;
