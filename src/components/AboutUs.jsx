// import React from "react";
// import Navbar from "./Navbar";
// import Carousel from "./Carousel";

import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowForward } from "react-icons/io";

// const slides = [
//   "https://img.freepik.com/free-photo/man-with-tools-truck-worker-uniform-faulty-truck_1157-46521.jpg?w=826&t=st=1689093512~exp=1689094112~hmac=fe54195e4b34a3ddd56eeb2c78a892b4e80ac6454b562e6adcc1ab622617aac3",
//   "https://img.freepik.com/free-photo/truck-driver-opening-reservoir-tank-refuel-truck-holding-thumbs-up_342744-1274.jpg?w=826&t=st=1689093602~exp=1689094202~hmac=cc5689f7b29909d80aeaca589a51de8eb906c9419537cea5418e0137ed6c7007", // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FjYvzxN5jMl9ag0mJI8nTW250MM0yZRDN4rG4xn4U9HM0yPCJNYVu0k0nHJ_lruDWh4&usqp=CAU",
//   "https://img.freepik.com/free-photo/african-american-delivery-woman-checking-address-package-taking-notes-while-sitting-van_637285-1250.jpg?size=626&ext=jpg&ga=GA1.1.99867302.1688138105&semt=ais",
//   "https://img.freepik.com/free-photo/side-view-mechanic-checking-truck_23-2149426542.jpg?size=626&ext=jpg&ga=GA1.1.99867302.1688138105&semt=ais]",
// ];

export const AboutUs = () => {
  return (
    <div className="">
      <div className="bg-white gap-8">
        <Navbar />

        <div className="flex">
          <div className="w-3/4">
            <h1 className="text-cyan-600 font-xlbold decoration-4 text-left text-7xl ml-20 my-20">
              About Us{" "}
            </h1>
            <div className=" text-left mt-10 mb-10 px-10 leading-relaxed">
              <p className="ml-10 mb-10">
                Headquartered in Indianapolis, IN., Impressive Transport, LLC is
                a transportation and logistics company. We are engaged primarily
                in hauling truckload shipments of general commodities in both
                interstate and intrastate commerce.
              </p>
              <h2 className="ml-10 mb-10 font-bold">
                Our Truckload Segment is comprised of the following three
                operating fleets:
              </h2>
              <div className="ml-10 text-sm text-left w-auto">
                <p className="mb-2 text-md leading-relaxed   ">
                  <span className=" mb-10">
                    <IoIosArrowForward
                      className="inline mr-2 "
                      size={20}
                      color="orange"
                    />
                    Dedicated Services (“Dedicated”) Fleet provides truckload
                    services required by a specific customer, generally for a
                    distribution center or manufacturing facility Regional
                    Short-Haul (“Regional”) Fleet transports a variety of
                    consumer
                  </span>{" "}
                </p>
                <p className="mb-2 text-md leading-relaxed  ">
                  <span className=" mb-10">
                    <IoIosArrowForward
                      className="inline mr-2 "
                      size={20}
                      color="orange"
                    />
                    AHDJKJFKO Services (“Dedicated”) Fleet provides truckload
                    services required by a specific customer, generally for a
                    distribution center or manufacturing facility Regional
                    Short-Haul (“Regional”) Fleet transports a variety of
                    consumer
                  </span>{" "}
                </p>
                <p className="mb-2 text-md leading-relaxed   ">
                  <sp className=" mb-10  ">
                    <IoIosArrowForward
                      className="inline mr-2 "
                      size={0}
                      color="orange"
                    />
                    Dedicated Services (“Dedicated”) Fleet provides truckload
                    services required by a specific customer, generally for a
                    distribution center or manufacturing facility Regional
                    Short-Haul (“Regional”) Fleet transports a variety of
                    consumer nondurable products and other commodities in
                    truckload quantities within geographic regions across the
                    United States using dry van trailers Medium-to-Long-Haul Van
                    (“Van”) Fleet provides comparable truckload van service over
                    irregular route
                  </sp>{" "}
                </p>
              </div>
              <p className="ml-10 mt-20">
                Our Truckload fleets operate throughout the 48 contiguous U.S.
                states pursuant to operating authority, both common and
                contract, granted by the U.S. Department of Transportation
                (“DOT”) and pursuant to intrastate authority granted by various
                U.S. states. We also have authority to operate in several
                provinces of Canada. The principal types of freight we transport
                include retail store merchandise, consumer products, grocery
                products and manufactured products. We focus on transporting
                consumer nondurable products that generally ship more
                consistently throughout the year and whose volumes are generally
                more stable during a slowdown in the economy.
              </p>
            </div>
          </div>
          <div>
            <div className=">w-full h-full mt-20 mr-4 flex-start justify-center ">
              <div className="bg-zinc-200 rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Work with us!</h2>
                <p className="mb-6">
                  Feel safe and confident driving on the road + get more family
                  time!
                </p>
                <button
                  className="bg-yellow-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                >
                  Apply Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
