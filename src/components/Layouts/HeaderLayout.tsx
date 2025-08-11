import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { logout } from "../../services/auth";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  href: string;
  onClick?: () => void;
};

interface AccountMenuProps {
  items: MenuItem[];
}

export default function HeaderLayout() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin logout?");
    if (!confirmed) return;
    logout();
    setIsLoggedIn(false);
  };

  const menuItems = isLoggedIn ? loggedInItems(handleLogout) : guestItems;

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
        <div
          className="flex items-center gap-1.5 lg:gap-2 cursor-pointer relative"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Avatar isLoggedIn={isLoggedIn} />
          {dropdownOpen && (
            <div className="absolute top-6 lg:top-14 right-0 mt-2 bg-other__page-header shadow-lg rounded-lg py-1 lg:py-2 min-w-32 lg:min-w-40 z-10 border border-white/20">
              <AccountMenu items={menuItems} />
            </div>
          )}
        </div>
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

const loggedInItems = (onLogout: () => void): MenuItem[] => [
  { label: "Profil Saya", href: "#" },
  { label: "Keluar", href: "#", onClick: onLogout },
];

const guestItems: MenuItem[] = [
  { label: "Sign In", href: "/login" },
];

function Avatar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const avatar = isLoggedIn ? "/images/avatar.png" : "/images/avatar-guest.png";
  return (
    <div className="flex items-center gap-1.5 lg:gap-2">
      <img src={avatar} alt="My Profile" className="h-5 lg:h-10 w-fit rounded-full" />
      <img src="/images/vector.svg" alt="Profile Menu" className="h-1.5 lg:h-2 w-fit" />
    </div>
  );
}

function AccountMenu({ items }: AccountMenuProps) {
  return (
    <ul>
      {items.map(({ label, href, onClick }) => (
        <li key={label}>
          <Link
            to={href}
            className="block px-3 py-3 lg:px-4 lg:py-4 hover:bg-main__primary-300"
            onClick={(e) => {
              if (onClick) {
                e.preventDefault();
                onClick();
              }
            }}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
