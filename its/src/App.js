import React from "react";
import Company from "./components/Company";
import Intro from "./components/";
import Navbar from "./components/Navbar";
import Standards from "./components/Standards";
import Workhere from "./components/Workhere";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Carousel from "./components/Carousel";
import { FaSlideshare } from "react-icons/fa";

function App() {
  return (
    <div>
      <Intro />
      <Standards />
      <Company />
      <Workhere />

      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
