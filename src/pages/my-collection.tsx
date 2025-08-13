import { useEffect, useState } from "react";
import Heading from "../components/Elements/Heading";
import FilmCard from "../components/Fragments/Card/FilmCard";
import { getFilms, removeFilm } from "../services/film";
import type { Film } from "../data/film";
import { useAuth } from "../contexts/AuthContext";

export default function MyCollection() {
  const { isLoggedIn } = useAuth();
  const [myFilms, setMyFilms] = useState(getFilms());

  useEffect(() => {
    setMyFilms(getFilms());
  }, [])

  function handleRemoveFilm(id: Film["id"], title: Film["title"]) {
    const confirmRemove = window.confirm(`Hapus film ${title} dari daftar?`);
    if (confirmRemove) {
      alert(`Film ${title} dihapus.`);
      removeFilm(id);
      setMyFilms(getFilms());
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
            {isLoggedIn && myFilms.map((film) => (
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