import React from "react";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-yellow-800">
      <div
        className="
      text-center pt-2 text-white text-2xl pb-2 flex items-center justify-center   "
      >
        <span>Copyright © 2023 Impressive Transport Services, LLC.</span>
      </div>
      <p className="flex items-center justify-center text-white text-3xl font-bold flex space-x-3  ">
        <PiFacebookLogoBold size={35} color="white" />
        <AiOutlineInstagram size={35} color="white" />
        <p> 317.600.2859</p>
      </p>
    </div>
  );
};

export default Footer;
