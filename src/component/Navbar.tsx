import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={
        "border-gray-200 bg-gray-50 dark:bg-bgPrimary dark:border-gray-700 border-b h-16 p-1 sm:h-24 sm:p-4"
      }
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="assets/icons/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
        </a>

        {/* Hamburger button */}
        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2  h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isNavOpen ? "true" : "false"}
        >
          {isNavOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          <span className="sr-only">Toggle navigation</span>
        </button>

        {/* Navbar links */}
        <div
          className={`${
            isNavOpen ? "block absolute top-12 right-8" : "hidden"
          }   md:block md:w-auto`}
          id="navbar-solid-bg "
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 md:mr-16">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent text-xl"
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
