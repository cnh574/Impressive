import React from "react";
// import { AiFillSafetyCertificate } from "react-icons/ai";
// import { FaTrophy } from "react-icons/fa";
// import { FaThumbsUp } from "react-icons/fa";

import { FaTrophy, FaThumbsUp } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Standards = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-[1240px] mx-auto py-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 text-white">
            <FaTrophy size={80} className="w-12 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-center mb-4">Quality</h2>
            <p className="text-center text-sm italic">
              Quality is the customers' perception of the value of our services.
              At Impressive Transport Service, LLC, we provide error-free, value-added care and
              service that meets and/or exceeds both the needs and legitimate
              expectations of those served.
            </p>
          </div>

          <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 text-white">
            <AiFillSafetyCertificate size={80} className="w-12 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-center mb-4">Safety</h2>
            <p className="text-center text-sm italic">
              From day one, safety has been the highest priority at Impressive Transport, LLC.
              Safety for our employees, customers, and motoring public will
              always remain our primary focus in all the policies, procedures,
              and programs that govern our business.
            </p>
          </div>

          <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 text-white">
            <FaThumbsUp size={80} className="w-12 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-center mb-4">
              Exceptional Service
            </h2>
            <p className="text-center text-sm italic">
              As one of the industry’s most dynamic carriers, Impressive, LLC
              continues to expand our diverse portfolio of specialty operations
              to meet your unique needs. We'll solve your unique transportation
              and needs whether regional or across the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;
