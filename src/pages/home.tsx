import { useEffect, useState } from "react";
import Arrow from "../components/Elements/Arrow";
import Heading from "../components/Elements/Heading";
import FilmCard from "../components/Fragments/Card/FilmCard";
import { BannerWithAction } from "../components/Fragments/Hero/BannerWithAction";
import { retrieveFilms, type StoredFilm } from "../services/film";
import { addUserFilm } from "../services/user-film";

export default function HomePage() {
  const [films, setFilms] = useState<StoredFilm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const continueWatching = films.slice(0, 6);
  const topRated = films.slice(6, 14);
  const trending = films.slice(14, 22);
  const newRelease = films.slice(22, 30);

  useEffect(() => {
    retrieveFilms()
      .then((data) => setFilms(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function handleAddUserFilm(id: StoredFilm["id"], title: StoredFilm["title"]) {
    const confirmAdd = window.confirm(`Tambahkan film ${title} ke daftar anda?`);
    if (confirmAdd) {
      addUserFilm(id);
    }
  }

  return (
    <main className="space-y-10 lg:space-y-20 mb-10 lg:mb-20">
      <section className="hero">
        <BannerWithAction
          title={heroTitle}
          description={heroDescription}
          backgroundImage={heroImage}
        />
      </section>
      <section className="continue-watching container">
        <Heading
          level="h2"
          className="section-title mb-4 lg:mb-6"
        >
          Lanjutkan Menonton
        </Heading>
        <div className="carousel-arrow-wrapper relative">
          <Arrow direction="left" />
          <ul className="film-list flex overflow-x-auto no-scrollbar gap-4 lg:gap-6">
            {continueWatching.map((film) => (
              <FilmCard
                key={film.id}
                isLandscape={true}
                onClick={() => handleAddUserFilm(film.id, film.title)}
              >
                <FilmCard.Header
                  isNewEpisode={film.isNewEpisode}
                  isTop10={film.isTop10}
                />
                <FilmCard.Body
                  image={film.image}
                  title={film.title}
                />
                <FilmCard.Footer
                  title={film.title}
                  rating={film.rating}
                />
              </FilmCard>
            ))}
          </ul>
          <Arrow direction="right" />
        </div>
      </section>
      <section className="top-rated container">
        <Heading
          level="h2"
          className="section-title mb-4 lg:mb-6"
        >
          Top Rating Hari Ini
        </Heading>
        <div className="carousel-arrow-wrapper relative">
          <Arrow direction="left" />
          <ul className="film-list flex overflow-x-auto no-scrollbar gap-4 lg:gap-6">
            {topRated.map((film) => (
              <FilmCard
                key={film.id}
                onClick={() => handleAddUserFilm(film.id, film.title)}
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
          <Arrow direction="right" />
        </div>
      </section>
      <section className="trending container">
        <Heading
          level="h2"
          className="section-title mb-4 lg:mb-6"
        >
          Film Trending
        </Heading>
        <div className="carousel-arrow-wrapper relative">
          <Arrow direction="left" />
          <ul className="film-list flex overflow-x-auto no-scrollbar gap-4 lg:gap-6">
            {trending.map((film) => (
              <FilmCard
                key={film.id}
                onClick={() => handleAddUserFilm(film.id, film.title)}
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
          <Arrow direction="right" />
        </div>
      </section>
      <section className="new-release container">
        <Heading
          level="h2"
          className="section-title mb-4 lg:mb-6"
        >
          Rilis Baru
        </Heading>
        <div className="carousel-arrow-wrapper relative">
          <Arrow direction="left" />
          <ul className="film-list flex overflow-x-auto no-scrollbar gap-4 lg:gap-6">
            {newRelease.map((film) => (
              <FilmCard
                key={film.id}
                onClick={() => handleAddUserFilm(film.id, film.title)}
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
          <Arrow direction="right" />
        </div>
      </section>
    </main>
  );
}

const heroTitle = `Duty After School`;
const heroDescription = `Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.`;
const heroImage = `/images/unseen-histories-bTF3gkd2L28-unsplash.jpg`;
