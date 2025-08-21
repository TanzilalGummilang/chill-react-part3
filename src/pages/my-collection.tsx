import { useEffect, useState } from "react";
import Heading from "../components/Elements/Heading";
import FilmCard from "../components/Fragments/Card/FilmCard";
import { getUserFilms, removeUserFilm } from "../services/user-film";
import type { StoredFilm } from "../services/film";
import { useAuth } from "../contexts/AuthContext";

export default function MyCollection() {
  const { isLoggedIn } = useAuth();
  const [userFilms, setUserFilms] = useState<StoredFilm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUserFilms()
      .then((data) => setUserFilms(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function handleRemoveFilm(id: StoredFilm["id"], title: StoredFilm["title"]) {
    const confirmRemove = window.confirm(`Hapus film ${title} dari daftar?`);
    if (confirmRemove) {
      removeUserFilm(id)
        .then(() => getUserFilms())
        .then(data => setUserFilms(data))
        .catch(error => console.error(error));
    }
  }

  return (
    <main className="space-y-10 lg:space-y-20 mt-5 mb-10 lg:mt-10 lg:mb-20">
      <section className="new-release container">
        <Heading
          level="h1"
          className="section-title mb-4 lg:mb-6"
        >
          Daftar Saya
        </Heading>
        <div className="carousel-arrow-wrapper relative">
          <ul className="film-list grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 lg:gap-6">
            {isLoggedIn && userFilms.map((film) => (
              <FilmCard
                key={film.id}
                onClick={() => handleRemoveFilm(film.id, film.title)}
              >
                <FilmCard.Header
                  isNewEpisode={film.isNewEpisode}
                  isTop10={film.isTop10}
                />
                <FilmCard.Body
                  image={film.image}
                  title={film.title}
                />
              </FilmCard>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}