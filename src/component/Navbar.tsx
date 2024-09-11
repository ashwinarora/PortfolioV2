import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Navigation links as an array of objects
  const navLinks = [
    { name: "About Me", href: "#", current: true },
    { name: "Projects", href: "#", current: false },
    { name: "Contact Us", href: "#", current: false },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-bgPrimary dark:border-gray-700 border-b p-1 sm:p-2 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="assets/icons/logo.svg"
            className="h-8"
            alt="Logo"
            loading="lazy"
          />
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

        {/* Navbar links */}
        <div
          className={`${
            isNavOpen
              ? "block absolute top-12 right-8 sm:top-14 sm:right-12"
              : "hidden"
          } md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-black shadow-2xl border border-rose-800 md:dark:bg-transparent dark:border-gray-700 md:mr-16">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`block py-2 px-3 md:p-0 rounded md:bg-transparent text-xl ${
                    link.current
                      ? "text-white md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  }`}
                  aria-current={link.current ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
