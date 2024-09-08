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
      <section className="w-full testmonila relative  py-12 md:py-24 lg:py-32">
        <img
          src="assets/icons/testimonialrightbg.svg"
          alt="Small Image 2"
          className="absolute  top-16   right-0 "
        />
        <img
          src="assets/icons/testimonialleftbg.svg"
          alt="Small Image 2"
          className="absolute  top-52  left-0 "
        />
        <div className="container mx-auto px-8 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              What Our <span className="text-spantext"> Clients Say</span>
            </h2>
            <p className="mx-auto max-w-4xl text-gray-500 md:text-lg lg:text-base xl:text-lg">
              A real-time multiplayer TicTacToe game where two players can bet
              ETH and the winner take all. A state channel is created between
              the two players to enable 'Off-Chain'.
            </p>
          </div>
          <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:mx-20">
            {testimonials.map((testimonial, index) => (
              <div>
                <Card key={index}>
                  <div className="space-y-4">
                    <img className="w-6" src={testimonial.icon} alt="" />
                    <p className="text-lg font-medium leading-relaxed text-gray-500">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </Card>
                <div className="flex items-center gap-4 mt-4 ">
                  <div className="rounded-full bg-primary p-1 text-white">
                    <img className="w-8" src={testimonial.img} alt="" />
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
      className={`testimonial-card shadow-lg min-w-fit rounded-xl p-6 ${className}`}
    >
      {children}
    </div>
  );
}
export default Testimonial;
