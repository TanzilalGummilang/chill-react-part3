export interface FilmProps {
  image?: string;
  title?: string;
  rating?: string;
  isNewEpisode?: boolean,
  isTop10?: boolean,
}

export const continueWatching: FilmProps[] = [
  {
    image: "/images/movies-series/image-01.png",
    title: "Title",
    rating: "4/5",
    isNewEpisode: true,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-02.png",
    title: "Title",
    rating: "4/5",
    isNewEpisode: true,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-01.png",
    title: "Title",
    rating: "4/5",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-02.png",
    title: "Title",
    rating: "4/5",
    isNewEpisode: false,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-01.png",
    title: "Title",
    rating: "4/5",
    isNewEpisode: false,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-02.png",
    title: "Title",
    rating: "4/5",
    isNewEpisode: false,
    isTop10: false,
  },
];

export const topRated: FilmProps[] = [
  {
    image: "/images/movies-series/image-11.png",
    isNewEpisode: true,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-12.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-03.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-04.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-05.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-06.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-07.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-08.png",
    isNewEpisode: false,
    isTop10: true,
  },
];

export const trending: FilmProps[] = [
  {
    image: "/images/movies-series/image-09.png",
    isNewEpisode: true,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-10.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-11.png",
    isNewEpisode: true,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-12.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-03.png",
    isNewEpisode: true,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-04.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-05.png",
    isNewEpisode: false,
    isTop10: true,
  },
  {
    image: "/images/movies-series/image-06.png",
    isNewEpisode: true,
    isTop10: true,
  },
];

export const newRelease: FilmProps[] = [
  {
    image: "/images/movies-series/image-03.png",
    isNewEpisode: true,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-04.png",
    isNewEpisode: true,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-05.png",
    isNewEpisode: true,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-06.png",
    isNewEpisode: true,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-07.png",
    isNewEpisode: true,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-08.png",
    isNewEpisode: true,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-09.png",
    isNewEpisode: true,
    isTop10: false,
  },
  {
    image: "/images/movies-series/image-10.png",
    isNewEpisode: true,
    isTop10: false,
  },
];
