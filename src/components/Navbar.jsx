import { useEffect, useState } from "react";
import { FaAlignRight, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants/data";
import { motion } from "framer-motion";

const NavItems = ({ activeLink }) => {
  return (
    <>
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
        {navLinks.map(({ id, href, name }) => (
          <motion.li
            key={id}
            className="font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.a
              href={href}
              className={`nav-link text-lg md:text-base ${activeLink === href.slice(1) ? "nav-link-active" : ""}`}
              aria-current={activeLink === href.slice(1) ? "location" : undefined}
            >
              {name}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(() => window.location.hash.slice(1) || "home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      //Close mobile menu on scroll.
      if (isOpen) {
        setIsOpen(false);
      }

      const marker = window.scrollY + window.innerHeight * 0.35;
      const visibleSection = navLinks.reduce((active, { href }) => {
        const section = document.getElementById(href.slice(1));
        return section && section.offsetTop <= marker ? href.slice(1) : active;
      }, "home");
      setActiveLink(visibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <header
        className={`site-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? "site-nav-scrolled" : ""}`}
      >
        <div className="mx-auto px-6 sm:px-8 md:px-10">
          <div className="flex justify-between items-center py-5">
            <a href="#home" className="flex items-center">
              <img
                src="logo.png"
                alt="Logo"
                className="w-12 h-12 hover:scale-105 transition-transform"
              />
            </a>

            <div className="flex items-center gap-4">
              <nav className="sm:flex hidden">
                <NavItems activeLink={activeLink} />
              </nav>
              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-toggle"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
                <span className="sr-only">{theme === "dark" ? "Light mode" : "Dark mode"}</span>
              </button>
              <button
                onClick={toggleMenu}
                className="nav-menu-toggle sm:hidden flex"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <FaTimes size={25} /> : <FaAlignRight size={25} />}
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`site-mobile-menu absolute left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="p-5">
            <NavItems activeLink={activeLink} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
