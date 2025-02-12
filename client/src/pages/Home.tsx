import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface Poste {
  id: number;
  titre: string;
  duree: string;
  resume: string;
}

function Home() {
  const [postes, setPostes] = useState<Poste[]>([]); // Stocker les postes
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState<string | null>(null); // Stocker une erreur éventuelle

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/postes`) // Modifier selon ton backend
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
        <h1>Page d'accueil</h1>
        <div>
          {postes.length > 0 ? (
            postes.map((poste) => (
              <div key={poste.id}>
                <h2>{poste.titre}</h2>
                <p>
                  <strong>Durée :</strong> {poste.duree}
                </p>
                <p>
                  <strong>Résumé :</strong> {poste.resume}
                </p>
                <hr />
              </div>
            ))
          ) : (
            <p>Aucun poste trouvé.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
