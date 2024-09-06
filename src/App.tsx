import "./App.css";
import About from "./component/About";
import ContactUs from "./component/ContactUS";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Testimonial from "./component/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Testimonial />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
