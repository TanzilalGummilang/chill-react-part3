export default function FooterLayout() {
  return (
    <footer className="py-8 lg:py-14 border-t border-other__outline-border/23">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col gap-1 lg:gap-3">
          <img src="/images/logo.png" alt="Chill Film Title and Series" className="h-6 lg:h-11 w-fit" />
          <p className="text-xs lg:text-base text-text__light-secondary__b">
            &copy; 2023 Chill. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-0.5 2xl:gap-20 w-full lg:w-fit">
          <div className="flex lg:flex-col justify-between lg:gap-2">
            <h2 className="text-base font-bold">Genre</h2>
            <button className="bg-inherit border-none lg:hidden">
              <img src="/images/vector.svg" alt="expand" className="rotate-[-90deg] bg-inherit" />
            </button>
            <ul className="hidden lg:grid gap-y-2 gap-x-6 lg:grid-cols-4 text-text__light-secondary__b">
              {genres.map((genre) => (
                <li key={genre.href}>
                  <a href="#">{genre.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex lg:flex-col justify-between lg:gap-2">
            <h2 className="text-base font-bold">Bantuan</h2>
            <button className="bg-inherit border-none lg:hidden">
              <img src="/images/vector.svg" alt="expand" className="rotate-[-90deg] bg-inherit" />
            </button>
            <ul className="hidden lg:grid gap-y-2 gap-x-6 text-text__light-secondary__b">
              {helpItems.map((help) => (
                <li key={help.href}>
                  <a href="#">{help.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

const genres = [
  { name: "Aksi", href: "aksi" },
  { name: "Drama", href: "drama" },
  { name: "Komedi", href: "komedi" },
  { name: "Sains & Alam", href: "sains-dan-alam" },
  { name: "Anak-anak", href: "anak-anak" },
  { name: "Fantasi Ilmiah", href: "fantasi-ilmiah" },
  { name: "Petualangan", href: "petualangan" },
  { name: "Thriller", href: "thriller" },
  { name: "Anime", href: "anime" },
  { name: "Kejahatan", href: "kejahatan" },
  { name: "Perang", href: "perang" },
  { name: "Britania", href: "britania" },
  { name: "KDrama", href: "kdrama" },
  { name: "Romantis", href: "romantis" },
];

const helpItems = [
  { name: "FAQ", href: "faq" },
  { name: "Kontak Kami", href: "kontak-kami" },
  { name: "Privasi", href: "privasi" },
  { name: "Syarat & Ketentuan", href: "syarat-dan-ketentuan" },
];
