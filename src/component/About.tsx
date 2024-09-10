const About = () => {
  const statistics = [
    {
      icon: "assets/icons/reward.svg",
      value: "23+",
      label: "Years of Experience",
    },
    {
      icon: "assets/icons/bag.svg",
      value: "325+",
      label: "Completed Projects",
    },
    { icon: "assets/icons/client.svg", value: "279+", label: "Happy Clients" },
    { icon: "assets/icons/watch.svg", value: "1,632+", label: "Hours of Work" },
  ];
  return (
    <div>
      {" "}
      <section className="w-full py-12 md:py-4 lg:py-4 bg-black text-white  ">
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <div className="flex flex-col items-center justify-center">
            <div className="relative rounded-full overflow-hidden w-full max-w-sm ml-6 mx:m-auto ">
              <img
                src="/assets/images/aboutring.svg"
                alt="Profile"
                className="object-cover w-full h-auto"
                style={{ aspectRatio: "1 / 1" }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col gap-0 justify-center items-center">
            <div className="text-center space-y-4 mx-10 sm:mx-0">
              <h2 className="text-3xl font-bold flex   gap-2 -mt-4">
                <img src="assets/icons/star.svg" alt="Star Icon" />
                <span>About Me</span>
              </h2>
              <p className="text-gray-500 max-w-md mx-auto text-justify">
                I am a Full Stack Developer with expertise in Blockchain. I can
                realize the vision of your product. I am proficient with both
                Front-End and Back-End Development. Using React for Front-End
                and Node with Express for Back-End. Apart from this, I have
                experience in Blockchain Development with expertise in Ethereum.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center m-auto px-4 sm:px-8 mt-10 sm:mt-0">
          <div className="flex flex-wrap  sm:flex-row justify-center lg:gap-28  items-center bg-[#061116]  p-0 sm:p-10 rounded-lg border border-gray-800">
            {statistics.map((stat, index) => (
              <div
                className="flex items-center justify-center  sm:gap-11"
                key={index}
              >
                <div className="text-center mx-2 sm:mx-4">
                  <div className="flex items-center justify-center">
                    <div className="text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <img src={stat.icon} alt="" />
                    </div>
                  </div>

                  <p className="text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>

                <div
                  className={`hidden sm:flex items-center justify-center gap-4 ${
                    index < statistics.length - 1
                      ? "border-r h-7 border-[#373e56]"
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
