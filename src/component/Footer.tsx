import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white  shadow dark:bg-footerbg ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:items-center sm:justify-between ">
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
              <p className="text-black dark:text-white font-semibold text-xl">
                ASHWIN ARORA
              </p>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="hover:underline me-4 md:me-6">
                  About Me
                </a>
              </li>
              <li>
                <a href="#project" className="hover:underline me-4 md:me-6">
                  Project
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="flex h-8 w-20 gap34 items-center justify-center -mt-3 sm:mt-0">
              <a
                className="mr-4 hover:scale-110 transition  transform duration-200 "
                rel="noreferrer"
                href="https://www.linkedin.com/in/ashwin-arora/"
                target="_blank"
              >
                {/* <img src="assets/icons/linkdin.svg" alt="" /> */}
                <i className="text-black text-3xl   dark:text-white ">
                  <FaLinkedin />
                </i>
              </a>
              <a
                href="https://github.com/ashwinarora/"
                rel="noreferrer"
                target="_blank"
                className="hover:scale-110 transition transform duration-200 "
              >
                {/* <img src="assets/icons/facebook.svg" alt="" /> */}
                <i className="text-black text-3xl dark:text-white">
                  <BsGithub />
                </i>
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <div className="flex justify-between">
              <p>Ashwini Arora Portfolio ©  </p>
              <ul className="flex flex-wrap items-center mb-6  text-xs sm:text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-1 sm:gap-3">
                <li>Privacy Policy</li>
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
