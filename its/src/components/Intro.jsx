import React from "react";
import Typed from "react-typed";
import Navbar from "./Navbar";

const Intro = () => {
  return (
    <div className=" w-full h-90 border-r border-gray-200 py-6 bg-[url('https://veltriinc.com/wp-content/uploads/2017/03/American-Open-Road-Truck.jpg')] bg-no-repeat bg-cover">
      <Navbar />
      <div className="max-w-[1240px] mx-auto mt-[96px] h-screen flex flex-col justify-center items-right">
        <div className="">
          <p className="md:text-4xl sm:text-3xl text-7xl font-bold px-2">
            We pride ourselves on being
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold font-mono"
            strings={["Reliable", "Efficient", "Dependable"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></Typed>
        </div>
        <div className="py-3">
          <button className="bg-orange-500 hover:bg-orange-900 text-white font-bold py-3 px-8 border border-yellow-900 mt-6 mb-3 rounded">
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
