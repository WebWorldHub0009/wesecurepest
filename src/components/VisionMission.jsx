// src/components/VisionMission.jsx
import React from "react";
import visionBg from "../assets/home/vq.jpg";
import mobileVisionBg from "../assets/home/v2.jpg";

const VisionMission = () => {
  return (
    <>
      <section
        className="relative hidden md:flex h-screen w-full bg-cover bg-center items-center font-['Raleway']"
        style={{
          backgroundImage: `url(${visionBg})`,
        }}
       >
        {/* Overlay with subtle animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0  animate-pulse"></div>
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 flex justify-end">
          <div className="w-full lg:w-1/2 text-white space-y-12 p-10 md:p-14 
            rounded-3xl  ]"> 
            {/* Vision */}
            <div>
              <h2 className="text-5xl md:text-6xl font-raleway font-bold tracking-wide 
                bg-gradient-to-r from-[#3CB371] to-[#2E8B57] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="mt-5 text-lg text-gray-200 leading-relaxed">
                To build healthier, pest-free, and hygienic environments by delivering 
                <span className="text-green-400 font-semibold"> eco-friendly </span> 
                pest management solutions that safeguard homes, businesses, and communities.
              </p>
            </div>
            {/* Divider */}
            <div className="h-[3px] w-28 bg-gradient-to-r from-[#3CB371] to-[#2E8B57] rounded-full"></div>
            {/* Mission */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-wide 
                bg-gradient-to-r from-[#3CB371] to-[#2E8B57] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-5 text-lg text-gray-200 leading-relaxed">
                To provide <span className="font-semibold">reliable and innovative</span> 
                pest control services using sustainable practices and expert professionals — 
                ensuring peace of mind and healthier spaces for every client.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 📱 Mobile View */}
      <section
        className="relative flex md:hidden h-screen w-full bg-cover bg-center items-center font-['Raleway']"
        style={{
          backgroundImage: `url(${mobileVisionBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative container mx-auto px-6 flex justify-center">
          <div className="w-full text-white space-y-8 p-6 rounded-2xl 
            backdrop-blur-md    text-center">
            {/* Vision */}
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3CB371] to-[#2E8B57] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="mt-3 text-base text-gray-200 leading-relaxed">
                To create safe, hygienic environments with 
                <span className="text-green-400 font-semibold"> eco-conscious pest management </span> 
                that protects homes and nature.
              </p>
            </div>
            {/* Divider */}
            <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-[#3CB371] to-[#2E8B57] rounded-full"></div>
            {/* Mission */}
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3CB371] to-[#2E8B57] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-3 text-base text-gray-200 leading-relaxed">
                To deliver modern, eco-friendly pest control with 
                <span className="font-semibold"> expertise and integrity</span>, 
                ensuring safe and healthy spaces for families and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
