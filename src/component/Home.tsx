import { useContext } from "react";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "../Themecontext";
const Home = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;
  return (
    <div id="home">
      <div className="flex min-h-[70vh] sm:min-h-[90vh] flex-col items-center justify-center  bg-lightmode dark:bg-homebg px-4 py-12 sm:px-6 lg:px-8 relative">
        {/* Left Background Image */}
        <img
          src="assets/icons/homeleftbg.svg"
          alt="Left Background"
          className="absolute w-56 h-56 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem] xl:w-[30rem] xl:h-[20rem] 2xl:w-[32rem] 2xl:h-[30rem] top-0 left-0 invert dark:invert-0"
        />
        {/* Right Background Image */}
        <img
          src="assets/icons/homerightbg.svg"
          alt="Right Background"
          className="absolute w-56 h-56 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem]  xl:w-[30rem] xl:h-[20rem] 2xl:w-[32rem] 2xl:h-[30rem] right-0 top-0 invert dark:invert-0"
        />
        {/* Left Ring Image */}
        <img
          src="assets/icons/homeringleft.svg"
          alt="Left Ring"
          className="absolute w-36 h-36 sm:w-60 sm:h-60 lg:w-[10rem] lg:h-[10rem] 2xl:w-[20rem] 2xl:h-[ 11rem]  -left-10 bottom-0 sm:bottom-0 "
        />
        {/* Small Box Bottom Right */}
        <img
          src="assets/icons/homebgbox.svg"
          alt="Bottom Box"
          className="absolute w-[6rem] right-20 bottom-14 sm:right-80  sm:bottom-24 lg:right-[10rem] lg:bottom-[10rem] 2xl:right-96 2xl:bottom-32 invert dark:invert-0"
        />

        <img
          src="assets/icons/homebgbox1.svg"
          alt="Top Box"
          className="absolute w-[6rem] top-32 sm:top-[10rem] 2xl:top-[8rem] left-16 sm:left-96 lg:left-[20rem] 2xl:left-[32rem] invert dark:invert-0"
        />

        <img
          src="assets/icons/homeringright.svg"
          alt="Right Ring"
          className="absolute w-36 h-36 sm:w-60 sm:h-60 lg:w-[10rem] lg:h-[10rem] 2xl:w-[20rem] 2xl:h-[11rem] right-0 bottom-0 sm:bottom-0"
        />
        <div className="mx-auto flex flex-col justify-center items-center gap-4 text-center">
          <div className="relative">
            <div className="card example-2">
              <button className="text-white rounded-full border py-2 px-8 inner relative z-10 border-gray-800">
                Hello
              </button>
            </div>
            <div className="absolute -top-3 -right-3 sm:-top-2 sm:-right-3 w-4 h-4">
              <img src="assets/images/hello.svg" alt="Hello Icon" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black dark:text-white">
            I'm <span className="text-cyan-500">Ashwin Arora,</span> <br />
            <div className="">
              <div className="relative bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text ">
                <h1 className="">
                  <Typewriter
                    options={{
                      strings: [
                        `<span> Full Stack </span> <span className="text-black">Application </span>`,
                        `React <span className="text-black">Application </span>`,
                        `Javascript <span className="text-black"">Application </span>`,
                        `BlockChain <span className="text-black">Application </span>`,
                      ],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: "typewriterpara",
                      cursorClassName: `${
                        themeContext.theme === "light"
                          ? "customCursorlg"
                          : "customCursor"
                      }  `,
                    }}
                  />
                </h1>
              </div>
            </div>
          </h1>

          {/* Hire Me Button */}
          <div className="mt-6">
            <button className="inline-flex items-center bg-[#37b0e0] text-white px-4 py-2 text-sm sm:text-base lg:text-lg font-medium transition-colors focus:ring-offset-2 hover:shadow-2xl hover:border rounded-full cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
