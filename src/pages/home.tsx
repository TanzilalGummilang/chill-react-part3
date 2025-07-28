import Arrow from "../components/Elements/Arrow";
import Heading from "../components/Elements/Heading";
import FilmCard from "../components/Fragments/Card/FilmCard";
import { BannerWithAction } from "../components/Fragments/Hero/BannerWithAction";
import { continueWatching, newRelease, topRated, trending } from "../data/film";

export default function HomePage() {
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
            {continueWatching.map((film, index) => (
              <FilmCard key={index} isLandscape={true}>
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
            {topRated.map((film, index) => (
              <FilmCard key={index}>
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
            {trending.map((film, index) => (
              <FilmCard key={index}>
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
            {newRelease.map((film, index) => (
              <FilmCard key={index}>
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
