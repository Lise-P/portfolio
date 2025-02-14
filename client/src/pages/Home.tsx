import { useEffect, useState } from "react";
import photoLise from "../assets/images/photo_lise.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import cv from "../assets/files/Lise Pérard - développeuse web.pdf";
import github from "../assets/images/github_icon.svg";
import grimpette from "../assets/images/grimpette.jpg";
import labs from "../assets/images/labs.jpg";
import navigLogo from "../assets/images/location.png";
import perilovers from "../assets/images/perilovers.jpg";
import pixinthecity from "../assets/images/pixinthecity.jpg";
import wildbeers from "../assets/images/wildbeers.jpg";
import writingNotes from "../assets/images/writing_note.png";

interface Poste {
  id: number;
  titre: string;
  duree: string;
  resume: string;
}

function Home() {
  const [postes, setPostes] = useState<Poste[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [titre, setTitre] = useState("");
  const [duree, setDuree] = useState("");
  const [resume, setResume] = useState("");

  const [showScrollTop, setShowScrollTop] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      // biome-ignore lint/complexity/noForEach: <explanation>
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/postes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur serveur : ${response.status}`);
        }
        return response.json();
      })
      .then((data: Poste[]) => {
        setPostes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPoste = { titre, duree, resume };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/postes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPoste),
        },
      );

      if (response.ok) {
        const updatedPostes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/postes`,
        );
        const data = await updatedPostes.json();
        setPostes(data);
        setTitre("");
        setDuree("");
        setResume("");
      } else {
        setError("Erreur lors de l'ajout du poste.");
      }
    } catch (error) {
      setError("Erreur réseau ou serveur.");
    }
  };
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/postes/${id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        setPostes(postes.filter((poste) => poste.id !== id));
      } else {
        setError("Erreur lors de la suppression.");
      }
    } catch (error) {
      setError("Erreur réseau ou serveur.");
    }
  };

  if (loading) {
    return <p>⏳ Chargement des postes...</p>;
  }

  if (error) {
    return <p>❌ Erreur : {error}</p>;
  }

  return (
    <>
      <Header />
      <main>
        <nav className="nav2">
          <img src={navigLogo} alt="navigation logo" id="navigLogo" />
          <ul>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                À propos.
              </a>
            </li>
            <li>
              <a
                href="#passions"
                className={activeSection === "passions" ? "active" : ""}
              >
                Mes passions.
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                className={activeSection === "experiences" ? "active" : ""}
              >
                Expériences.
              </a>
            </li>
            <li>
              <a
                href="#figure_xp"
                className={activeSection === "figure_xp" ? "active" : ""}
              >
                Liste expériences.
              </a>
            </li>
            <li>
              <a
                href="#projets"
                className={activeSection === "projets" ? "active" : ""}
              >
                Projets.
              </a>
            </li>
          </ul>
        </nav>
        <div className="separator" />
        <section id="about">
          <h2>À propos. </h2>
          <div className="about_container">
            <p className="text_about">
              <span className="text_lise">
                Lise Pérard - Développeuse web Full stack.
              </span>
              <br />
              <br />
              En reconversion professionnelle dans le développement web, je mets
              désormais à profit mes compétences techniques et mon expérience en
              gestion de projet pour répondre aux enjeux numériques
              d'aujourd'hui. Au fil de mes années d'expérience, j'ai appris à
              allier rigueur technique et approche centrée sur l'humain, ce qui
              me permet aujourd'hui de concevoir des solutions numériques
              réellement adaptées aux besoins des utilisateurs/utilisatrices et
              des parties prenantes. <br />
              Je suis convaincue que l’innovation et la réussite des projets
              numériques passent par une vision collaborative, intégrant à la
              fois les aspects humains et technologiques.
            </p>
            <img src={photoLise} alt="Lise" id="photo_lise" />
          </div>
        </section>
        <div className="separator" />
        <section id="passions">
          <h2>Mes passions.</h2>
          <p className="text_about">
            J'aime le code mais pas que ! Mes passions pour mieux me connaître
            et peut-être nous trouver un point commun ?
          </p>
          <ul>
            <li>
              Voyages 🌏 : Asie du Sud-est (2015, 2016, 2017, 2019) & Europe
            </li>
            <li>
              Sports 🏋️‍♂️: bloc/escalade, musculation, course à pied,
              yoga/Pilates…
            </li>
            <li>Société 🏘️: enjeux écologiques, sociaux, économiques...</li>
            <li>Détente 🎉: Pop culture, séries, Memes, Geoguessr </li>
          </ul>
        </section>
        <div className="separator" />
        <section id="experiences">
          <h2>Ajouter une expérience.</h2>
          <div className="xp_container">
            <img src={writingNotes} alt="notes rédigées" id="write_notes" />
            <form className="experience-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Titre</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Entrez le titre de votre expérience"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration">Durée</label>
                <input
                  type="text"
                  id="duration"
                  placeholder="Entrez la durée de l'expérience"
                  value={duree}
                  onChange={(e) => setDuree(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="summary">Résumé</label>
                <input
                  id="summary"
                  placeholder="Entrez le résumé de votre expérience"
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Soumettre
              </button>
            </form>
          </div>
        </section>
        <div className="separator" />
        <section id="figure_xp">
          <h2>Liste des expériences.</h2>
          <p className="text_about">
            Retrouvez ici mes précédentes expériences professionnelles. Pour
            mieux me découvrir,{" "}
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              className="styled-link"
            >
              téléchargez mon CV.
            </a>
          </p>
          <div className="cards_xp">
            {postes.length > 0 ? (
              postes.map((poste) => (
                <figure className="experience-card" key={poste.id}>
                  <Link
                    to={`/experience/${poste.id}`}
                    className="experience-link"
                  >
                    <h3>{poste.titre}</h3>
                    <p>
                      <strong>Durée :</strong> {poste.duree}
                    </p>
                    <p>
                      <strong>Résumé :</strong> {poste.resume}
                    </p>
                  </Link>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => handleDelete(poste.id)}
                  >
                    🗑️ Supprimer
                  </button>
                </figure>
              ))
            ) : (
              <p>Aucun poste trouvé.</p>
            )}
          </div>
        </section>
        <div className="separator" />
        <section id="projets">
          <h2>Projets.</h2>
          <p className="text_about">
            Retrouvez ici mes projets codés avec amour et beaucoup de café ☕.
          </p>
          <div className="projet_container">
            <div className="projets">
              <h3>Street Art Hunters</h3>
              <p className="technos">#HTML #CSS #React #NodeJS</p>
              <p>
                Application de chasse aux oeuvres de street art : partez à la
                découverte des oeuvres de street art sur Lyon et ses alentours.
                Si vous découvrez une oeuvre, ajoutez-la via un formulaire et
                retrouvez-la sur la carte. Gagnez des points à chaque soumission
                de photos et tentez d'être le contributeur n°1 !
              </p>
              <br />
              <a
                href="https://github.com/WildCodeSchool-2024-09/pixinthecity"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Logo GitHub" className="github-logo" />
              </a>
            </div>
            <div>
              <img
                src={pixinthecity}
                alt="pix in the city"
                className="extrait_site"
              />
            </div>
          </div>
          <div className="projet_container">
            <div className="projets">
              <h3>Wild beers</h3>
              <p className="technos">#HTML #CSS #React #TS</p>
              <p>
                Site de référencement de brasseries : vous partez en vacances en
                Europe et vous avez soif ? Parcourez la carte interactive de
                Wild beers et découvrez les brasseries autour de vous. Vous
                aimez une brasserie ? Mettez-la en favoris et retrouvez ses
                infos. Vous pouvez filtrer les brasseries par pays, région et
                même ville.
              </p>
              <br />
              <a
                href="https://github.com/WildCodeSchool-2024-09/js-lyon-2024-09-jaune-P2-wildBeers"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Logo GitHub" className="github-logo" />
              </a>
            </div>
            <div>
              <img src={wildbeers} alt="wild beers" className="extrait_site" />
            </div>
          </div>
          <div className="projet_container">
            <div className="projets">
              <h3>Grimpette</h3>
              <p className="technos">#HTML #CSS #React #NodeJS</p>
              <p>
                Réseau social entre grimpeurs en bloc : vous grimpez toujours
                tout seul et c'est nul ? On est d'accord ! Avec Grimpette,
                rencontrez d'autres grimpeurs et grimpeuses de la région et
                retrouvez-vous à la salle de blocs pour grimper ensemble.
                Indiquez vos horaires et vos salles préférées. Retrouvez aussi
                des articles et des événements autour du bloc.
              </p>
              <br />
              <a
                href="https://github.com/Lise-P/grimpette"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Logo GitHub" className="github-logo" />
              </a>
            </div>
            <div>
              <img src={grimpette} alt="grimpette" className="extrait_site" />
            </div>
          </div>
          <div className="projet_container">
            <div className="projets">
              <h3>Périlovers</h3>
              <p className="technos">#HTML #CSS #React #NodeJS</p>
              <p>
                Site de rencontre pour les amoureux du Périgore - design années
                2000. Envie de (re)découvrir cette magnifique région ? Alors
                Périlovers a ce qu'il vous faut ! Retrouvez plein d'événements
                et des gens avec qui dialoguer pour aller au musée de la
                charantaise ensemble.
              </p>
              <br />
              <a
                href="https://github.com/angelicalazaro/perilovers"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Logo GitHub" className="github-logo" />
              </a>
            </div>
            <div>
              <img src={perilovers} alt="perilovers" className="extrait_site" />
            </div>
          </div>
          <div className="projet_container">
            <div className="projets">
              <h3>LABS society</h3>
              <p className="technos">#HTML #CSS</p>
              <p>
                Site vitrine d’une agence web « LABS society ». Découvrez
                l'équipe pour votre projet web, faites connaissance avec
                Angélica, Bastien, Lise, Michael et Sébastien. Il y a même des
                fun facts !
              </p>
              <br />
              <a
                href="https://github.com/WildCodeSchool-2024-09/js-lyon-0924-P1-labs"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Logo GitHub" className="github-logo" />
              </a>
            </div>
            <div>
              <img src={labs} alt="labs society" className="extrait_site" />
            </div>
          </div>
        </section>
        <button
          type="button"
          id="scrollTop"
          className={showScrollTop ? "show" : ""}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ⬆️
        </button>
      </main>

      <Footer />
    </>
  );
}

export default Home;
