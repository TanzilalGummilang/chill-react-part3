import type { Film } from "../../../data/film";

interface FilmCardProps {
  isLandscape?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

interface HeaderProps {
  isNewEpisode: Film["isNewEpisode"];
  isTop10: Film["isTop10"];
}

interface BodyProps {
  image: Film["image"];
  title: Film["title"];
}

interface FooterProps {
  title: Film["title"];
  rating: Film["rating"];
}

export function FilmCard({
  children,
  isLandscape = false,
  onClick
}: FilmCardProps) {
  const orientation = isLandscape
    ? "aspect-video w-full max-w-72 lg:max-w-80"
    : "aspect-[10/16] w-full max-w-32 lg:max-w-60";

  return (
    <li 
      onClick={onClick} 
      className={`btn film-card ${orientation} shrink-0`}
    >
      <div className="film-image-wrapper relative h-full w-full overflow-hidden rounded-sm">
        {children}
      </div>
    </li>
  )
}

function Header({
  isNewEpisode,
  isTop10
}: HeaderProps) {
  return (
    <div className="film-tag text-2xs lg:text-xs">
      {isNewEpisode && (
        <div
          className="bg-main__primary-300 absolute top-1.5 lg:top-3 left-1.5 lg:left-3 py-0.5 lg:py-1.5 px-2 lg:px-3 rounded-full"
        >
          <p>Episode Baru</p>
        </div>
      )}
      {isTop10 && (
        <div
          className="bg-error__pressed absolute top-0 right-1.5 lg:right-3 h-9 lg:h-11.5 max-w-6 lg:max-w-7.5 px-0.5 pt-2 lg:pt-2 text-center rounded-bl-sm rounded-tr-sm"
        >
          <p className="leading-3 lg:leading-4">Top 10</p>
        </div>
      )}
    </div>
  );
}

function Body({
  image,
  title
}: BodyProps) {
  return (
    <img
      src={image}
      alt={title ?? ""}
      className="w-full h-full object-cover object-center"
    />
  );
}

function Footer({
  title,
  rating
}: FooterProps) {
  return (
    <div className="film-overlay absolute bottom-0 flex justify-between w-full text-sm lg:text-lg px-2 lg:px-2.5 pb-2">
      <p className="film-title">{title}</p>
      <p className="film-rating flex gap-1">
        <img src="/images/star.svg" alt="Rating" />
        {rating}
      </p>
    </div>
  );
}

const FilmCardParts = Object.assign(FilmCard, {
  Header,
  Body,
  Footer
});

export default FilmCardParts;