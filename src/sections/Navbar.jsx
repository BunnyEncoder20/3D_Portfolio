import React from "react";
import { navLinks } from "../constants";

// NavItems Compoenent
const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toogleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="https://www.linkedin.com/in/varun-verma-1547442a5/"
            target="_black"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Varun Verma
          </a>

          {/* Hamburger Button */}
          <button
            onClick={toogleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="toogle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toogle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
