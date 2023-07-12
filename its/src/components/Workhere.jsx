import React from "react";

const Workhere = () => {
  return (
    <div className="w-full py-5 px-4 bg-blue-900">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white  ">
        <div>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold   ">
            {" "}
            Work With Us
          </h1>
          <p className=" py-10 text-lg	 ">
            Our business has always depended on the experience of quality
            contractors and fleet operators like you who are committed to
            delivering our customers’ freight on time, every time.
          </p>
          <div className="py-6">
            <button className="bg-orange-500 hover:bg-orange-900 text-white font-bold py-3 px-20 border border-yellow-900 mt-6 mb-3 rounded">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workhere;
