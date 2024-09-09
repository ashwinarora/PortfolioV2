const AfterHome = () => {
  return (
    <div className="flex items-center h-[80vh] justify-center flex-col ">
      <div className=" ml-10 mt-10 moving-border w-full">
        <div className=" rounded-lg border-2 border-[#28374e] bg-[#0f0f11] shadow-inner shadow-[#000000] flex items-center justify-center">
          <p className="text-white text-2xl text-center p-6">
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
