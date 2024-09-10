const AfterHome = () => {
  return (
    <div className="flex items-center h-[40vh] md:h-[80vh] justify-center flex-col ">
      <div className=" m-8 mb-16 sm:m-12 mt-16 moving-border w-full">
        {/* <div className=" rounded-lg border-2 border-[#28374e] trapezoid1 bg-[#0f0f11] shadow-inner shadow-[#000000] flex items-center justify-center"> */}
        <div className=" rounded-lg border-2 border-[#28374e] trapezoid1 bg-[#10131b]  shadow-[#000000] flex items-center justify-center">
          <p className="text-white text-sm md:text-2xl text-center sm:p-6">
            Currently at Full stack Application, Previously at Ashwin Arora. And
            I'm here To Help You Move Your Business Forward <br /> With
            <span className="text-spantext"> Full Stack Application</span>
          </p>
        </div>
      </div>
      <img
        src="assets/icons/afterhomebg.svg"
        alt="Small Image 2"
        className="absolute left-0 top-[68rem] "
      />
      {/* <span className="flex pl-96 relative">
        <img className=" absolute " src="assets/icons/cursor.svg" alt="" />
      </span> */}
    </div>
  );
};

export default AfterHome;
