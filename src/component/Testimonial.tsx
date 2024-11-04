const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      name: "Marley Bator",
      title: "CEO, Lirante",
      img: "assets/images/marley.svg",
      icon: "assets/icons/testimonial-icon.svg",
    },
    {
      quote:
        "A real-time multiplayer TicTacToe game where two players can bet ETH and the winner take all. A state channel is created between the two players to enable.",
      name: "Jayesh Patil",
      title: "CEO, Lirante",
      img: "assets/images/jayesh.svg",
      icon: "assets/icons/testimonial-icon.svg",
    },
    {
      quote:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
      name: "Kadin Torff",
      title: "CEO, Lirante",
      img: "assets/images/kadin.svg",
      icon: "assets/icons/testimonial-icon.svg",
    },
  ];

  return (
    <div>
      <section className="relative w-full bg-lightbg py-12 dark:bg-testmonila md:py-16 lg:py-24">
        <img
          src="assets/icons/testimonialrightbg.svg"
          alt="Small Image 2"
          className="absolute right-3 top-16"
          loading="lazy"
        />
        <img
          src="assets/icons/testimonialleftbg.svg"
          alt="Small Image 2"
          className="absolute bottom-0 left-0 sm:top-52"
          loading="lazy"
        />
        <div className="container mx-auto px-8 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              What Our <span className="text-spantext">Clients Say</span>
            </h2>
            <p className="mx-auto max-w-4xl text-gray-500 md:text-lg lg:text-base xl:text-lg">
              A real-time multiplayer TicTacToe game where two players can bet
              ETH and the winner take all. A state channel is created between
              the two players to enable 'Off-Chain'.
            </p>
          </div>
          <div className="grid gap-6 pt-8 sm:grid-cols-2 md:mx-28 lg:mx-16 lg:grid-cols-3 2xl:mx-44">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Card>
                  <div className="space-y-4">
                    <img
                      className="w-6"
                      src={testimonial.icon}
                      alt="img"
                      loading="lazy"
                    />
                    <p className="text-sm font-medium leading-relaxed text-gray-500 md:text-base">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </Card>
                <img
                  src="assets/icons/msgicon.svg "
                  className="-mt-1 ml-8 mix-blend-color-dodge dark:mix-blend-normal"
                />
                <div className="ml-3 flex items-center gap-3">
                  <div className="bg-primary rounded-full p-1 text-white">
                    <img className="w-10" src={testimonial.img} alt="" />
                  </div>
                  <div>
                    <p className="font-medium text-spantext">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

function Card({ children, className }: any) {
  return (
    <div
      className={`min-w-fit rounded-lg border border-transparent bg-white p-6 text-white dark:bg-testimonialcard dark:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default Testimonial;
