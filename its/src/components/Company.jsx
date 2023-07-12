import React from "react";
import Demotruck from "../images/demotruck.jpeg";

const Company = () => {
  return (
    <div className="w-full py-10 px-4 text-center ">
      <div className="max-w-[1240px] mx-auto ">
        {/* <img className="w-[500px] mx-auto my-4" src={Demotruck} alt="/" /> */}
        <div className="flex flex-col justify-center">
          {/* <p className="text-yellow-500 font-bold px-2">
            PROVIDING EXCEPTIONAL TRANSPORTATION
          </p> */}
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-7 text-blue-900">
            Who We Are
          </h1>
          <p className="text-center py-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            aliquam officia officiis deserunt error. Labore omnis libero sed
            ullam. Non, molestiae? Rem atque ipsa nisi sed, architecto
            consequuntur mollitia accusantium? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Provident aliquam officia officiis
            deserunt error. Labore omnis libero sed ullam. Non, molestiae? Rem
            atque ipsa nisi sed, architecto consequuntur mollitia accusantium?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            aliquam officia officiis deserunt error. Labore omnis libero sed
            ullam. Non, molestiae? Rem atque ipsa nisi sed, architecto
            consequuntur mollitia accusantium? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Provident aliquam officia officiis
            deserunt error. Labore omnis libero sed ullam. Non, molestiae? Rem
            atque ipsa nisi sed, architecto consequuntur mollitia accusantium?
          </p>
          <div className="py-4 flex flex-col items-center ">
            <button className="bg-orange-500 hover:bg-orange-900 text-white font-bold py-3 px-20 border border-yellow-900 mt-6 mb-3 rounded">
              Apply Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
