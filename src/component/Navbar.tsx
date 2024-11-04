import { useContext, useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeContext } from "./ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#project" },
    { name: "About Me", href: "#about" },
    { name: "Contact Us", href: "#contact" },
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

  const handleLinkClick = (name: any) => {
    setActiveLink(name);
  };

  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-white/30 backdrop-blur-sm dark:bg-bgPrimary/30 border-b border-gray-300 dark:border-gray-800"
          : "bg-gray-50 dark:bg-bgPrimary border-b border-gray-350 dark:border-[#181818]"
      } p-1 sm:p-2 sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:px-20">
        <a
          href="/#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => {
            setActiveLink("");
          }}
        >
          <img
            src="assets/icons/fav.png"
            className="h-8"
            alt="Logo"
            loading="lazy"
          />
          <p className="text-black dark:text-white font-semibold text-xl">
            ASHWIN ARORA
          </p>
        </a>

        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2 h-6 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isNavOpen ? "true" : "false"}
        >
          {isNavOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div
          className={`${
            isNavOpen
              ? "block absolute top-12 right-8 sm:top-14 sm:right-12"
              : "hidden"
          } md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-black shadow-2xl border border-gray-600  md:dark:bg-transparent dark:border-gray-700 md:mr-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block py-2 px-3 md:p-0 rounded md:bg-transparent text-sm 2xl:text-xl ${
                    activeLink === link.name
                      ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500 text-sm"
                  }`}
                  aria-current={activeLink === link.name ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value="dark"
                className="sr-only peer"
                onChange={themeContext.toggleTheme}
                checked={themeContext.theme === "dark"}
              />
              <span
                className={`${
                  isNavOpen ? "ml-3 mb-2" : ""
                } text-xl font-medium text-gray-900 dark:text-gray-300 `}
              >
                {themeContext.theme === "light" ? (
                  <FaMoon className="text-gray-600 dark:text-white transition-transform duration-300 hover:scale-125 active:scale-90" />
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
