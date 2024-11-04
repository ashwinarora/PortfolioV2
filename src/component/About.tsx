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
      <section className="w-full bg-lightmode py-12 text-white dark:bg-black dark:text-black md:py-4 lg:py-4">
        <div className="mt-20 flex flex-col justify-center sm:flex-row md:gap-5 2xl:gap-10">
          <div className="flex flex-col items-center justify-center">
            <div className="mx:m-auto relative m-[inherit] ml-4 w-full max-w-sm overflow-hidden rounded-full sm:max-w-md">
              <img
                src="/assets/images/aboutring.svg"
                alt="Profile"
                className="h-auto w-full object-cover"
                style={{ aspectRatio: "1 / 1" }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-0 2xl:-mt-16">
            <div className="mx-10 space-y-4 text-center sm:mx-0">
              <h2 className="-mt-4 flex gap-2 text-3xl font-bold">
                <img
                  className="invert dark:invert-0"
                  src="assets/icons/star.svg"
                  alt="Star Icon"
                  loading="lazy"
                />
                <span className="text-black dark:text-white"> About Me</span>
              </h2>
              <p className="mx-auto max-w-lg text-justify text-sm text-gray-500 md:text-lg 2xl:text-lg">
                I am a Full Stack Developer with expertise in Blockchain. I can
                realize the vision of your product. I am proficient with both
                Front-End and Back-End Development. Using React for Front-End
                and Node with Express for Back-End. Apart from this, I have
                experience in Blockchain Development with expertise in Ethereum.
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 flex justify-center px-2 sm:mt-0 sm:px-8">
          <div className="flex flex-wrap items-center justify-center rounded-lg border border-gray-800 bg-lightmode p-2 dark:bg-[#061116] sm:flex-row sm:p-6 lg:gap-28">
            {statistics.map((stat, index) => (
              <div
                className="flex items-center justify-center sm:gap-11"
                key={index}
              >
                <div className="mx-2 text-center sm:mx-4">
                  <div className="flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full text-black dark:text-white">
                      <img src={stat.icon} alt="" />
                    </div>
                  </div>

                  <p className="text-lg font-bold text-black dark:text-white sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    {stat.label}
                  </p>
                </div>

                <div
                  className={`hidden items-center justify-center gap-4 sm:flex ${
                    index < statistics.length - 1
                      ? "h-7 border-r border-[#373e56]"
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
