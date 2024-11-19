import { useContext, useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeContext } from "./Context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { Sections } from "../App";

const Navbar = ({activeSection}: {activeSection: Sections}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#project", section: "project" },
    { name: "About Me", href: "#about", section: "about" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  return (
    <nav
      className={`${
        isScrolled
          ? "border-b border-gray-300 bg-white/30 backdrop-blur-sm dark:border-gray-800 dark:bg-bgPrimary/30"
          : "border-gray-350 border-b bg-gray-50 dark:border-[#181818] dark:bg-bgPrimary"
      } sticky top-0 z-50 p-1 transition-all duration-300 sm:p-2`}
    >
      <div className="mx-auto flex flex-wrap items-center justify-between p-4 md:px-20">
        <a
          href="/#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="assets/icons/fav.png"
            className="h-8"
            alt="Logo"
            loading="lazy"
          />
          <p className="text-xl font-semibold text-black dark:text-white">
            ASHWIN ARORA
          </p>
        </a>

        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex h-6 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-solid-bg"
          aria-expanded={isNavOpen ? "true" : "false"}
        >
          {isNavOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div
          className={`${
            isNavOpen
              ? "absolute right-8 top-12 block sm:right-12 sm:top-14"
              : "hidden"
          } md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-600 bg-gray-50 font-medium shadow-2xl dark:border-gray-700 dark:bg-black md:mr-0 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent rtl:space-x-reverse">
            {navLinks.map((link) => (
              <li key={link.section}>
                <button
                  onClick={() => {
                    document.getElementById(link.section)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block rounded px-3 py-2 text-sm md:bg-transparent md:p-0 2xl:text-xl cursor-pointer ${
                    activeSection === link.section
                      ? "bg-blue-700 text-white md:text-blue-700 md:dark:text-blue-500"
                      : "text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  }`}
                  aria-current={activeSection === link.section ? "page" : undefined}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <label className="inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                value="dark"
                className="peer sr-only"
                onChange={themeContext.toggleTheme}
                checked={themeContext.theme === "dark"}
              />
              <span
                className={`${
                  isNavOpen ? "mb-2 ml-3" : ""
                } text-xl font-medium text-gray-900 dark:text-gray-300`}
              >
                {themeContext.theme === "light" ? (
                  <FaMoon className="text-gray-600 transition-transform duration-300 hover:scale-125 active:scale-90 dark:text-white" />
                ) : (
                  <FaSun className="text-white transition-transform duration-300 hover:scale-125 active:scale-90" />
                )}
              </span>
            </label>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
