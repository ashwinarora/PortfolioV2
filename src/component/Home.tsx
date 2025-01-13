import { useContext } from "react";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "./Context/ThemeContext";
const Home = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;
  return (
    <div id="home">
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center bg-homebglight px-4 py-12 dark:bg-homebg sm:min-h-[96vh] sm:px-6 lg:px-8">
        {/* Left Background Image */}
        <img
          src="assets/icons/homeleftbg.svg"
          alt="Left Background"
          className="absolute left-0 top-0 h-56 w-56 mix-blend-difference dark:invert-0 sm:h-80 sm:w-80 lg:h-[30rem] lg:w-[30rem] xl:h-[20rem] xl:w-[30rem] 2xl:h-[30rem] 2xl:w-[32rem]"
        />
        {/* Right Background Image */}
        <img
          src="assets/icons/homerightbg.svg"
          alt="Right Background"
          className="absolute right-0 top-0 h-56 w-56 mix-blend-difference dark:invert-0 sm:h-80 sm:w-80 lg:h-[30rem] lg:w-[30rem] xl:h-[20rem] xl:w-[30rem] 2xl:h-[30rem] 2xl:w-[32rem]"
        />
        {/* Left Ring Image */}
        <img
          src="assets/icons/homeringleft.svg"
          alt="Left Ring"
          className="2xl:h-[ 11rem] absolute -left-10 bottom-0 h-36 w-36 sm:bottom-0 sm:h-60 sm:w-60 lg:h-[10rem] lg:w-[10rem] 2xl:w-[20rem]"
        />
        {/* Small Box Bottom Right */}
        <img
          src="assets/icons/homebgbox.svg"
          alt="Bottom Box"
          className="absolute bottom-14 right-20 w-[6rem] mix-blend-difference dark:mix-blend-normal sm:bottom-24 sm:right-80 lg:bottom-[10rem] lg:right-[10rem] 2xl:bottom-32 2xl:right-96"
        />

        <img
          src="assets/icons/homebgbox1.svg"
          alt="Top Box"
          className="absolute left-16 top-32 w-[6rem] mix-blend-difference dark:mix-blend-normal sm:left-96 sm:top-[10rem] lg:left-[20rem] 2xl:left-[32rem] 2xl:top-[8rem]"
        />

        <img
          src="assets/icons/homeringright.svg"
          alt="Right Ring"
          className="absolute bottom-0 right-0 h-36 w-36 sm:bottom-0 sm:h-60 sm:w-60 lg:h-[10rem] lg:w-[10rem] 2xl:h-[11rem] 2xl:w-[20rem]"
        />
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 text-center">
          <div className="relative">
            <div className="card example-2">
              <div className="inner relative z-10 rounded-full bg-white px-8 py-2 text-black shadow-lg dark:bg-gray-800 dark:text-white">
                Hello
              </div>
            </div>
            <div className="absolute -right-3 -top-3 h-4 w-4 sm:-right-3 sm:-top-2">
              <img src="assets/images/hello.svg" alt="Hello Icon" />
            </div>
          </div>

          <h1 className="w-full text-3xl font-bold tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            I'm{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Ashwin Arora
            </span>{" "}
            <br />
            <div className="relative mx-auto grid w-full grid-cols-[1fr_1fr] text-left dark:text-white">
              <div className="flex flex-row-reverse">
                <div className="w-[95%] min-[400px]:w-[85%] min-[470px]:w-[70%] min-[550px]:w-[60%] min-[640px]:w-[90%] min-[700px]:w-[80%] min-[800px]:w-[70%] min-[900px]:w-[60%] min-[1024px]:w-[70%] min-[1110px]:w-[60%] min-[1280px]:w-[70%] min-[1340px]:w-[60%] min-[1440px]:w-[55%] min-[1500px]:w-[50%] min-[1550px]:w-[48%]">
                  <Typewriter
                    options={{
                      strings: [
                        `Full Stack`,
                        `BlockChain`,
                        `React`,
                        `TypeScript`,
                        `NodeJS`,
                        `Solidity`,
                        `PostgreSQL`,
                        `MongoDB`,
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
                </div>
              </div>
              <div className="">Developer</div>
            </div>
          </h1>

          {/* Hire Me Button */}
          <div className="mt-6">
            <button
              className="inline-flex cursor-pointer items-center rounded-full bg-[#37b0e0] px-4 py-2 text-sm font-medium text-white transition-colors hover:border hover:shadow-2xl focus:ring-offset-2 sm:text-base lg:text-lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
