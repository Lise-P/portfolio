import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Experiences.css";
interface Poste {
  id: number;
  titre: string;
  duree: string;
  resume: string;
}

function Experiences() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [experience, setExperience] = useState<Poste | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/postes/${id}`) // Fetch spécifique à une expérience
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur serveur : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setExperience(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]); // Met à jour en cas de changement d'ID

  if (loading) {
    return <p>⏳ Chargement...</p>;
  }

  if (error) {
    return <p>❌ Erreur : {error}</p>;
  }

  return (
    <>
      <Header />
      <div className="experience-page">
        <h1 className="page-title">Éxpérience professionnelles.</h1>
        <div className="experience-details">
          <h2>{experience?.titre}</h2>
          <p className="experience-duration">
            <strong>Durée :</strong> {experience?.duree}
          </p>
          <p className="experience-summary">
            <strong>Résumé :</strong> {experience?.resume}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Experiences;
