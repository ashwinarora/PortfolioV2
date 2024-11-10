import { startDate } from "./constants";

const calculateExperience = () => {
  const currentDate = new Date();
  const thisStartDate = new Date(startDate);
  thisStartDate.setFullYear(thisStartDate.getFullYear() + 1); // adding 1 year to the start date
  thisStartDate.setMonth(thisStartDate.getMonth() + 1); // adding 1 month to the start date

  // Calculate the difference in milliseconds
  const differenceInMilliseconds =
    currentDate.getTime() - thisStartDate.getTime();

  // Convert milliseconds to total years and months
  const years = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
  );
  const remainingMonths = Math.floor(
    (differenceInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.44), // approx. 30.44 days in a month
  );

  // Convert months to a decimal part and add to years
  const experience = years + remainingMonths / 12;

  // Format the result to one decimal place for readability
  return parseFloat(experience.toFixed(1));
};

function calculateLinesOfCode(): number {
  const locPerDay = 100; // Average LOC per productive day
  const codingDaysPerYear = 250; // 50 weeks * 5 days
  const variationAmplitude = 25; // Amplitude for sine-based variation

  const currentDate = new Date();
  // currentDate.setDate(currentDate.getDate() + 1); // adding 1 day to the current date

  // Calculate the difference in days between start and current date
  const differenceInMilliseconds = currentDate.getTime() - startDate.getTime();
  const totalDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );

  // Calculate the approximate number of coding days based on productive days per year
  const yearsOfExperience = totalDays / 365.25;
  const totalCodingDays = Math.floor(yearsOfExperience * codingDaysPerYear);

  // Calculate LOC with sine wave variation
  let totalLOC = 0;
  for (let i = 0; i < totalCodingDays; i++) {
    // Apply a sine-based variation to the daily LOC
    let variation = Math.floor(variationAmplitude * Math.sin(i * 0.1));
    variation = variation < -20 ? 0 : variation;
    const dailyLOC = locPerDay + variation;
    totalLOC += dailyLOC;
  }

  return totalLOC;
}

function calculateHours(): number {
  const hourPerDay = 7; // Average LOC per productive day
  const codingDaysPerYear = 300; // 50 weeks * 5 days
  const variationAmplitude = 3; // Amplitude for sine-based variation

  const currentDate = new Date();
  // currentDate.setDate(currentDate.getDate() + 1); // adding 1 day to the current date

  // Calculate the difference in days between start and current date
  const differenceInMilliseconds = currentDate.getTime() - startDate.getTime();
  const totalDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );

  // Calculate the approximate number of coding days based on productive days per year
  const yearsOfExperience = totalDays / 365.25;
  const totalCodingDays = Math.floor(yearsOfExperience * codingDaysPerYear);

  // Calculate LOC with sine wave variation
  let totalLOC = 0;
  for (let i = 0; i < totalCodingDays; i++) {
    // Apply a sine-based variation to the daily LOC
    let variation = Math.floor(variationAmplitude * Math.sin(i * 0.1));
    variation = variation < -1 ? 0 : variation;
    const dailyLOC = hourPerDay + variation;
    totalLOC += dailyLOC;
  }

  return totalLOC;
}

function calculateCoffeeCups(): number {
  const coffeePerDay = 1; // Average LOC per productive day
  const codingDaysPerYear = 275; // 50 weeks * 5 days
  const variationAmplitude = 2; // Amplitude for sine-based variation

  const currentDate = new Date();
  // currentDate.setDate(currentDate.getDate() + 1); // adding 1 day to the current date

  // Calculate the difference in days between start and current date
  const differenceInMilliseconds = currentDate.getTime() - startDate.getTime();
  const totalDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );

  // Calculate the approximate number of coding days based on productive days per year
  const yearsOfExperience = totalDays / 365.25;
  const totalCodingDays = Math.floor(yearsOfExperience * codingDaysPerYear);

  // Calculate LOC with sine wave variation
  let totalLOC = 0;
  for (let i = 0; i < totalCodingDays; i++) {
    // Apply a sine-based variation to the daily LOC
    let variation = Math.floor(variationAmplitude * Math.sin(i * 0.1));
    variation = variation < 0 ? 0 : variation;
    const dailyLOC = coffeePerDay + variation;
    totalLOC += dailyLOC;
  }

  return totalLOC;
}

function toHumanReadable(number: number): string {
  return new Intl.NumberFormat("en-US").format(number);
}

const About = () => {
  const statistics = [
    {
      icon: "assets/icons/reward.svg",
      value: calculateExperience() + " years",
      label: "Years of Experience",
    },
    {
      icon: "assets/icons/bag.svg",
      value: toHumanReadable(calculateLinesOfCode()) + "+",
      label: "Lines of Code",
    },
    {
      icon: "assets/icons/client.svg",
      value: toHumanReadable(calculateHours()) + "+",
      label: "Hours of Coding"
    },
    { icon: "assets/icons/watch.svg",
      value: toHumanReadable(calculateCoffeeCups()) + "+",
      label: "Cups of Coffee"
    },
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
