import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "./Context/ThemeContext";

const AfterHome = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="relative flex h-[40vh] flex-col items-center justify-center bg-lightmode dark:bg-[#050811] md:h-[80vh]">
      <div className="moving-border1 dark:moving-border m-8 mb-16 mt-16 w-full sm:m-16 lg:!mx-44 2xl:!mx-52">
        <div className="bg-[#f0f0f0] p-6 dark:bg-[#050811]">
          <div className="trapezoid1 flex items-center justify-center rounded-lg border-2 border-[#2e8fc8] bg-white shadow-[#000000] dark:border-[#28374e] dark:bg-[#10131b]">
            <p className="2xl:text-md text-center text-lg text-black dark:text-white sm:p-6 md:text-2xl">
              With <span className="text-spantext">over 6 years </span> of
              experience, having{" "}
              <span className="text-spantext">led the tech team</span> at
              <a href="https://www.poolz.finance/" target="_blank">
                {
                  themeContext?.theme === "dark" ? 
                  <Image
                    src="/assets/images/PoolzFinanceWhite.png"
                    alt="Poolz Finance"
                    width={160}
                    height={36}
                    className="ml-2 inline object-scale-down hover:scale-125"
                  />
                  :
                  <Image
                    src="/assets/images/PoolzFinanceBlack.png"
                    alt="Poolz Finance"
                    width={160}
                    height={36}
                    className="ml-2 inline object-scale-down hover:scale-125"
                  />
                }
              </a>
              , I've built applications and smart contracts that securely handle{" "}
              <span className="text-spantext">over $100M</span> in transaction
              flow, ensuring seamless user experiences.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/assets/icons/afterhomebg.svg"
        alt="Small Image 2"
        width={100}
        height={100}
        className="absolute left-12 top-[22rem] mix-blend-difference dark:mix-blend-exclusion"
      />
    </div>
  );
};

export default AfterHome;
