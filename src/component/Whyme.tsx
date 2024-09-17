const Whyme = () => {
  const features = [
    {
      id: "01",
      title: "Expertise",
      description:
        "I bring a wealth of experience and expertise to the table With a.",
    },
    {
      id: "02",
      title: " Reliability",
      description:
        "Meeting deadlines and exceeding expectations is my priority.",
    },
    {
      id: "03",
      title: "Versatility",
      description:
        "I excel in [specific skills, e.g., content development, project management, etc.],",
    },

    {
      id: "04",
      title: "Professionalism",
      description:
        "With a strong work ethic and attention to detail, I approach every project.",
    },
  ];
  return (
    <div>
      <section className=" relative h-[900px]  sm:h-[690px] w-auto mx-0 md:mx-0  py-12 md:py-24 lg:py-32 bg-lightmode dark:bg-black -mb-1 md:mb-0 flex justify-center items-center lg:gap-6 xl:gap-0 ">
        <div className="container relative grid gap-10 px-4 md:grid-cols-2 md:gap-0 md:px-0  lg:px-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
              Why Hire Me For Your <br />{" "}
              <span className="text-spantext"> Next Project ?</span>
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-sm lg:text-base xl:text-lg text-gray-500">
              I am a Full Stack Developer with expertise in Blockchain. I can
              realize the vision of your product. I am proficient with both
              Front-End and Back-End Development. Using React for Front-End and
              Node with Express for Back-End. Apart from this, I have experience
              in Blockchain Development with expertise in Ethereum. My portfolio
              demonstrates my ability to meet deadlines, exceed expectations,
              and deliver outstanding work.
            </p>
          </div>

          <div className="  bg-feturelg  dark:bg-feature rounded-2xl px-2 sm:-px-10 2xl:mx-16">
            <div className="grid grid-cols-2 gap-4 w-full  mt-10 sm:mt-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative flex justify-center items-center sm:-mx-4 2xl:-mx-10 ${
                    index % 2 === 0 ? "-top-12 sm:-top-8" : "top-10 sm:top-14 "
                  } `}
                >
                  <div className="relative rounded-xl bg-muted p-0 sm:p-8 border   shadow-lg  bg-white dark:bg-[#14202b]  dark:border-gray-800 text-center z-10  -px-0 sm:px-0 -py-8 sm:-py-0 sm:mx-6 2xl:mx-12">
                    <div className="absolute inset-0 flex items-center justify-center z-0 text-gray-400 dark:text-gray-600 text-5xl -mt-28 2xl:-mt-28">
                      {feature.id}
                    </div>
                    <div className="relative z-10 p-2">
                      <h3 className=" text-base sm:text-lg font-semibold  text-black dark:text-white">
                        {feature.title}
                      </h3>
                      <p className=" text-muted-foreground text-gray-800 dark:text-gray-400 text-sm sm:text-md">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src="assets/icons/whymebgimg.svg"
            alt="Small Image 2"
            className="absolute sm:-left-6 2xl:left-10 -bottom-28 w-28  left-0 sm:-bottom-24 sm:w-32"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Whyme;
