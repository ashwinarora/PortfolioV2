import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white shadow dark:bg-footerbg">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
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
            <ul className="text-md mb-6 flex flex-wrap items-center font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
              <li>
                <a href="#about" className="me-4 hover:underline md:me-6">
                  About Me
                </a>
              </li>
              <li>
                <a href="#project" className="me-4 hover:underline md:me-6">
                  Project
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="gap34 -mt-3 flex h-8 w-20 items-center justify-center sm:mt-0">
              <a
                className="mr-4 transform transition duration-200 hover:scale-110 active:scale-90"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ashwin-arora/"
                target="_blank"
              >
                <i className="text-3xl text-black dark:text-white">
                  <FaLinkedin />
                </i>
              </a>
              <a
                href="https://github.com/ashwinarora/"
                rel="noreferrer"
                target="_blank"
                className="transform transition duration-200 hover:scale-110 active:scale-90"
              >
                <i className="text-3xl text-black dark:text-white">
                  <BsGithub />
                </i>
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto" />
          <span className="block text-xs text-gray-500 dark:text-gray-400 sm:text-center">
            <div className="flex justify-between">
              <p>Ashwin Arora Portfolio ©  </p>
              <ul className="mb-6 flex flex-wrap items-center justify-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 sm:mb-0 sm:gap-3 sm:text-sm">
                <li>Privacy Policy</li>
                <span className="rounded-full bg-gray-300 p-1 text-xl text-gray-600 dark:bg-[#192127]"></span>
                <li>Terms Of Service</li>
              </ul>
            </div>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
