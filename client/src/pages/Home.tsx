import { useEffect, useState } from "react";
import photoLise from "../assets/images/photo_lise.webp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Home.css";
import cv from "../assets/files/Lise Pérard - développeuse web.pdf";
import contact from "../assets/images/contact.jpg";
import github from "../assets/images/github_icon.svg";
import grimpette from "../assets/images/grimpette.jpg";
import hobby from "../assets/images/hobby.webp";
import labs from "../assets/images/labs.jpg";
import navigLogo from "../assets/images/location.png";
import perilovers from "../assets/images/perilovers.jpg";
import pixinthecity from "../assets/images/pixinthecity.jpg";
import wildbeers from "../assets/images/wildbeers.jpg";
import linkedin from "../assets/images/linkedinicon.svg";
import mail from "../assets/images/mail.png";

function Home() {
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
            <img src={photoLise} alt="Lise" className="photo_lise" />
          </div>
        </section>
        <section>
          <h2>Me contacter.</h2>
          <p className="text_about">
            Retrouvez-moi par mail, sur GitHub & LinkedIn.
          </p>
          <div className="about_container">
            <div className="contact_logos">
              <a href="mailto:liseprd@gmail.com">
                <img
                  src={mail}
                  alt="Envoyer un mail"
                  className="logo_contact"
                />
              </a>

              <a
                href="https://github.com/Lise-P"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" className="logo_contact" />
              </a>
              <a
                href="https://linkedin.com/in/lise-perard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="logo_contact" />
              </a>
            </div>
            <img src={contact} alt="logo contact" className="photo_lise" />
          </div>
        </section>
        <section id="passions">
          <h2>Mes passions.</h2>
          <p className="text_about">
            J'aime le code mais pas que ! Mes passions pour mieux me connaître
            et peut-être nous trouver un point commun ?
          </p>
          <div className="about_container">
            <ul>
              <li>Voyages 🌏 : Asie du Sud-est & Europe</li>
              <li>Sports 🏋️‍♂️: bloc, musculation, course à pied, yoga…</li>
              <li>Société 🏘️: enjeux écologiques, socio-économiques...</li>
              <li>Détente 🎉: Pop culture, séries, Memes, Geoguessr </li>
            </ul>
            <img src={hobby} alt="hobby" className="photo_lise" />
          </div>
        </section>
        <section id="figure_xp">
          <h2>Liste des expériences.</h2>
          <p className="text_about">
            Retrouvez ici mes précédentes expériences professionnelles. Pour
            mieux me découvrir,
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
            <figure className="experience-card">
              <h3>Chargée de projet - CSF - Lyon</h3>
              <p>
                <strong>Durée :</strong> Octobre 2021 à avril 2024
              </p>
              <p>
                <strong>Résumé :</strong> Accompagnement et formation
                individuels et collectifs du public sur des enjeux de
                consommation, de logement et de santé - gestion du site internet
                - gestion administrative, optimisation des outils et process.
              </p>
            </figure>
            <figure className="experience-card">
              <h3>Chargée de mobilisation - Afev - Lyon</h3>
              <p>
                <strong>Durée :</strong> Juillet 2020 à juillet 2021
              </p>
              <p>
                <strong>Résumé :</strong> Développement et mise en œuvre de
                stratégies de campagnes de mobilisation de 500 bénévoles/an -
                Organisation d’événements et de formations - Management et
                formation de 6 volontaires.
              </p>
            </figure>
            <figure className="experience-card">
              <h3>Coordinatrice de projet - Anciela - Lyon</h3>
              <p>
                <strong>Durée :</strong> Septembre 2016 à juillet 2019
              </p>
              <p>
                <strong>Résumé :</strong> Accompagnement de porteurs de projet -
                organisation d'événements sur l'écologie et la solidarité -
                alimentation et gestion du site web et réseaux sociaux -
                coordination, rédaction/suivi d’articles (presse, web…)
              </p>
            </figure>
          </div>
        </section>
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
                href="https://github.com/Lise-P/wild_brewery"
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
                des articles et des événements autour du bloc. - EN COURS -
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
              <p className="technos">#HTML #CSS #React #Express</p>
              <p>
                Site de rencontre pour les amoureux du Périgord - design années
                2000. Envie de (re)découvrir cette magnifique région ? Alors
                Périlovers a ce qu'il vous faut ! Retrouvez plein d'événements
                et des gens avec qui dialoguer pour aller au musée de la
                charentaise ensemble.
              </p>
              <br />
              <a
                href="https://github.com/Lise-P/perilovers"
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
                href="https://github.com/Lise-P/labs_society"
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
