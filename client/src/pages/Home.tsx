import { useEffect, useState } from "react";
import photoLise from "../assets/images/photo_lise.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Home.css";
import { Link } from "react-router-dom";
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
    e.preventDefault(); // Empêcher le rechargement de la page

    const newPoste = { titre, duree, resume };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/postes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPoste), // Envoyer les données du formulaire en JSON
        },
      );

      if (response.ok) {
        // Après l'ajout, on recharge la liste des postes via une requête GET
        const updatedPostes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/postes`,
        );
        const data = await updatedPostes.json();
        setPostes(data); // Met à jour l'état avec les données actuelles
        setTitre(""); // Réinitialiser les champs du formulaire
        setDuree("");
        setResume("");
      } else {
        setError("Erreur lors de l'ajout du poste.");
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
        <section>
          <h2>À propos. </h2>
          <div className="about_container">
            <p className="text_about">
              En reconversion dans le développement web, j’ajoute une expertise
              technique à mes compétences en accompagnement et coordination pour
              concevoir des solutions numériques adaptées aux besoins des
              parties prenantes. Forte d’expériences variées et d’une grande
              capacité d’adaptation, mon ambition est d’allier technique et
              humain au service de projets porteurs de sens.
            </p>
            <img src={photoLise} alt="Lise" className="photo_lise" />
          </div>
        </section>
        <div className="separator" />
        <section>
          <h2>Expériences.</h2>
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
        </section>
        <div className="separator" />
        <section>
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
                </figure>
              ))
            ) : (
              <p>Aucun poste trouvé.</p>
            )}
          </div>
        </section>
        <div className="separator" />
        <section>
          <h2>Projets.</h2>
          <div className="projets">
            <h3>Street Art Hunters</h3>
            <p className="technos">#HTML #CSS #React #NodeJS</p>
            <p>
              Application de chasse aux oeuvres de streetart : partez à la
              découverte des oeuvres de street art sur Lyon et ses alentours. Si
              vous découvrez une oeuvre, ajoutez-la via un formulaire et
              retrouvez-la sur la carte. Gagnez des points à chaque soumission
              de photos et tentez d'être le premier contributeur
            </p>
          </div>
          <div className="projets">
            <h3>Wild beers</h3>
            <p className="technos">#HTML #CSS #React #TS</p>
            <p>
              Site de référencement de brasseries : vous partez en vacances en
              Europe et vous avez soif ? Parcourez la carte interactive de Wild
              beers et découvrez les brasseries autour de vous. Vous aimez une
              brasserie ? Mettez-la en favoris et retrouvez toutes ces infos.
              Vous pouvez filtrer les brasseries par pays, région et même ville.
            </p>
          </div>
          <div className="projets">
            <h3>Grimpette</h3>
            <p className="technos">#HTML #CSS #React #NodeJS</p>
            <p>
              Réseau social entre grimpeurs en bloc : vous grimpez toujours tout
              seul et c'est nul ? On est d'accord ! Avec Grimpette, rencontrez
              d'autres grimpeurs et grimpeuses de la région et retrouvez-vous à
              la salle de blocs pour grimper ensemble. Indiquez vos horaires et
              vos salles préférées. Retrouvez aussi des articles et des
              événements autour du bloc.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
