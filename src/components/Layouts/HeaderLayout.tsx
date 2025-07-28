export default function HeaderLayout() {
  return (
    <header className="container w-full flex justify-between py-4 lg:py-6">
      <div className="flex items-center gap-3 lg:gap-20">
        <a href="#" className="overflow-hidden w-full max-w-6 lg:max-w-fit">
          <img src="/images/logo.png" alt="Chill Film Title and Series" className="h-5 lg:h-11 w-fit max-w-none" />
        </a>
        <nav className="flex gap-4 lg:gap-20 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href="#"
              className="lg:text-lg"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1.5 lg:gap-2">
        <img src="/images/avatar.png" alt="My Profile" className="h-5 lg:h-10 w-fit" />
        <img src="/images/vector.svg" alt="Profile Menu" className="h-1.5 lg:h-2 w-fit" />
      </div>
    </header>
  );
}

const navLinks = [
  {
    href: "series",
    name: "Series",
  },
  {
    href: "film",
    name: "Film",
  },
  {
    href: "my-list",
    name: "Daftar Saya",
  },
];
