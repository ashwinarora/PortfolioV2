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
      <section className=" relative  sm:h-[671px] w-auto mx-4 md:mx-10  py-12 md:py-24 lg:py-32 bg-black mb-40 md:mb-0 ">
        <div className="container relative grid gap-10 px-4 md:grid-cols-2 md:gap-0 md:px-6 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Why Hire Me For Your <br />{" "}
              <span className="text-spantext"> Next Project ?</span>
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-500">
              I’m Specialist In Full Stack Application. My Passion Is Solving
              Through User Experience And Research. <br /> I’ve successfully
              completed projects similar to yours, including [briefly mention
              notable projects or achievements]. My portfolio demonstrates my
              ability to meet deadlines, exceed expectations, and deliver
              outstanding work.
            </p>
          </div>

          <div className=" feature rounded-lg px-2 sm:-px-10">
            <div className="grid grid-cols-2 gap-4 w-full  mt-10 sm:mt-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative flex justify-center items-center ${
                    index % 2 === 0 ? "-top-12 sm:-top-8" : "top-10 sm:top-14 "
                  }`}
                >
                  <div className="relative rounded-lg bg-muted p-0 sm:p-8 bg-[#b3b3e21a] text-center z-10 -px-0 sm:px-0 -py-10 sm:-py-0 ">
                    <div className="absolute inset-0 flex items-center justify-center z-0 text-gray-600 text-5xl -mt-28">
                      {feature.id}
                    </div>
                    <div className="relative z-10 p-3">
                      <h3 className=" text-base sm:text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className=" text-muted-foreground text-gray-400">
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
            className="absolute sm:left-6 -bottom-40 w-32  left-0 sm:-bottom-48 sm:w-44"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Whyme;
