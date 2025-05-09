import React, { useEffect, useState } from "react";
import illustration from "../assets/Img/Herosection.png";

const Hero: React.FC = () => {
  const [ signup, useSigh] = useState();
  return (
    <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Book trusted help for <span className="text-green-600">CampusTask</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Connect with fellow students to get things done quickly and affordably within your university.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full max-w-md px-6 py-3 border border-gray-300 rounded-full shadow-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>
        </div>

        {/* Right Side: Image */}
        <div>
          <img
            src={illustration}
            alt="Students helping each other"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
