import { useContext, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeContext } from "../Themecontext";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    { name: "Projects", href: "#project" },
    { name: "About Me", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (name: any) => {
    setActiveLink(name);
  };
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-bgPrimary dark:border-[#181818] border-b p-1 sm:p-2 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-black shadow-2xl border border-rose-800 md:dark:bg-transparent dark:border-gray-700 md:mr-0">
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

            <label className="inline-flex items-center cursor-pointer float-end">
              {/* <FaSun className="text-yellow-500 dark:text-gray-500 mr-2" /> */}
              <input
                type="checkbox"
                value="dark"
                className="sr-only peer"
                onChange={themeContext.toggleTheme}
                checked={themeContext.theme === "dark"}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              {/* <FaMoon className="text-gray-700 dark:text-yellow-400 ml-2" /> */}
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {themeContext.theme === "light" ? "Light Mode" : "Dark Mode"}
              </span>
            </label>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
