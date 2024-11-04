const AfterHome = () => {
  return (
    <div className=" relative bg-lightmode dark:bg-[#050811]  flex items-center h-[40vh] md:h-[80vh] justify-center flex-col  ">
      <div className=" m-8 mb-16 sm:m-16 lg:!mx-44 mt-16 moving-border1 dark:moving-border w-full 2xl:!mx-52 ">
        <div className="bg-[#f0f0f0] dark:bg-[#050811] p-6 ">
          <div className=" rounded-lg border-2 border-[#2e8fc8] dark:border-[#28374e] trapezoid1 bg-white dark:bg-[#10131b]  shadow-[#000000] flex items-center justify-center">
            <p className="text-black dark:text-white text-sm md:text-2xl text-center sm:p-6 2xl:text-md">
              Currently at Full stack Application, Previously at Ashwin Arora.
              And I'm here To Help You Move Your Business Forward <br /> With
              <span className="text-spantext"> Full Stack Application</span>
            </p>
          </div>
        </div>
      </div>
      <img
        src="assets/icons/afterhomebg.svg"
        alt="Small Image 2"
        className="absolute left-12 top-[22rem] mix-blend-difference dark:mix-blend-exclusion"
      />
      <img
        className=" absolute -bottom-8 right-12 sm:-bottom-10 sm:right-28 w-[8rem] h-[10rem] md:bottom-24 md:right-44  2xl:bottom-32 2xl:right-80  z-10"
        src="assets/icons/cursor.svg"
        alt="cursor"
      />
    </div>
  );
};

export default AfterHome;
