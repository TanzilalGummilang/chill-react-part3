export interface Film {
  id: string;
  image?: string;
  title?: string;
  rating?: string;
  isNewEpisode?: boolean,
  isTop10?: boolean,
}

export const continueWatching: Film[] = [
  { id: "1", image: "/images/movies-series/image-01.png", title: "The Shadow Code", rating: "4/5", isNewEpisode: true, isTop10: true },
  { id: "2", image: "/images/movies-series/image-02.png", title: "Neon Skies", rating: "3/5", isNewEpisode: true, isTop10: false },
  { id: "3", image: "/images/movies-series/image-01.png", title: "Midnight Echo", rating: "5/5", isNewEpisode: false, isTop10: true },
  { id: "4", image: "/images/movies-series/image-02.png", title: "Crimson Horizon", rating: "2/5", isNewEpisode: false, isTop10: false },
  { id: "5", image: "/images/movies-series/image-01.png", title: "Whispering Steel", rating: "4/5", isNewEpisode: false, isTop10: false },
  { id: "6", image: "/images/movies-series/image-02.png", title: "Echoes of Tomorrow", rating: "3/5", isNewEpisode: false, isTop10: false },
];

export const topRated: Film[] = [
  { id: "7", image: "/images/movies-series/image-11.png", title: "Crimson Mirage", rating: "4/5", isNewEpisode: true, isTop10: true },
  { id: "8", image: "/images/movies-series/image-12.png", title: "The Last Horizon", rating: "2/5", isNewEpisode: false, isTop10: true },
  { id: "9", image: "/images/movies-series/image-03.png", title: "Shadow Pulse", rating: "5/5", isNewEpisode: false, isTop10: true },
  { id: "10", image: "/images/movies-series/image-04.png", title: "Neon Abyss", rating: "3/5", isNewEpisode: false, isTop10: true },
  { id: "11", image: "/images/movies-series/image-05.png", title: "Echoes of Eternity", rating: "4/5", isNewEpisode: false, isTop10: true },
  { id: "12", image: "/images/movies-series/image-06.png", title: "Steel Horizon", rating: "2/5", isNewEpisode: false, isTop10: true },
  { id: "13", image: "/images/movies-series/image-07.png", title: "Frozen Empire", rating: "5/5", isNewEpisode: false, isTop10: true },
  { id: "14", image: "/images/movies-series/image-08.png", title: "Midnight Shift", rating: "3/5", isNewEpisode: false, isTop10: true },
];

export const trending: Film[] = [
  { id: "15", image: "/images/movies-series/image-09.png", title: "Phantom Circuit", rating: "4/5", isNewEpisode: true, isTop10: true },
  { id: "16", image: "/images/movies-series/image-10.png", title: "Storm Breaker", rating: "5/5", isNewEpisode: false, isTop10: true },
  { id: "17", image: "/images/movies-series/image-11.png", title: "Red Dusk", rating: "3/5", isNewEpisode: true, isTop10: true },
  { id: "18", image: "/images/movies-series/image-12.png", title: "Glass Horizon", rating: "4/5", isNewEpisode: false, isTop10: true },
  { id: "19", image: "/images/movies-series/image-03.png", title: "Pulse Runner", rating: "2/5", isNewEpisode: true, isTop10: true },
  { id: "20", image: "/images/movies-series/image-04.png", title: "Silver Nova", rating: "5/5", isNewEpisode: false, isTop10: true },
  { id: "21", image: "/images/movies-series/image-05.png", title: "Deepwave", rating: "4/5", isNewEpisode: false, isTop10: true },
  { id: "22", image: "/images/movies-series/image-06.png", title: "Iron Pulse", rating: "3/5", isNewEpisode: true, isTop10: true },
];

export const newRelease: Film[] = [
  { id: "23", image: "/images/movies-series/image-03.png", title: "Neon Trails", rating: "5/5", isNewEpisode: true, isTop10: false },
  { id: "24", image: "/images/movies-series/image-04.png", title: "Echo Storm", rating: "2/5", isNewEpisode: true, isTop10: false },
  { id: "25", image: "/images/movies-series/image-05.png", title: "Crimson Depths", rating: "4/5", isNewEpisode: true, isTop10: false },
  { id: "26", image: "/images/movies-series/image-06.png", title: "Shadow Drift", rating: "3/5", isNewEpisode: true, isTop10: false },
  { id: "27", image: "/images/movies-series/image-07.png", title: "Ice Veil", rating: "5/5", isNewEpisode: true, isTop10: false },
  { id: "28", image: "/images/movies-series/image-08.png", title: "Zero Dawnfall", rating: "2/5", isNewEpisode: true, isTop10: false },
  { id: "29", image: "/images/movies-series/image-09.png", title: "Titan's Oath", rating: "4/5", isNewEpisode: true, isTop10: false },
  { id: "30", image: "/images/movies-series/image-10.png", title: "Lunar Code", rating: "3/5", isNewEpisode: true, isTop10: false },
];
