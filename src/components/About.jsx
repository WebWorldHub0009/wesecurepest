// src/components/AboutSection.jsx
import React from "react";
import { FaLeaf, FaShieldAlt, FaBug, FaUsers } from "react-icons/fa";
import aboutImg from "../assets/home/wp1.jpg";

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F9F9F9] to-white px-6 md:px-12 py-10 overflow-hidden font-opensans">
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-raleway text-[#1B4332] leading-snug">
            Protecting Your Home, <br /> Building a Pest-Free Future
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#3CB371]">
              WeSecure Pest Control
            </span>
            , we combine advanced eco-friendly solutions with certified
            expertise to safeguard your spaces. Our mission is not only to
            remove pests but to create a healthier, safer, and more comfortable
            environment for your family and business.
          </p>

          {/* Promise Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E6F4EA] text-[#1B4332] mb-3 group-hover:scale-110 transition">
                <FaShieldAlt className="text-xl" />
              </div>
              <h3 className="text-base font-semibold font-raleway text-[#1B4332]">
                Certified Safety
              </h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Family-safe treatments, approved & trusted standards.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E6F4EA] text-[#1B4332] mb-3 group-hover:scale-110 transition">
                <FaLeaf className="text-xl" />
              </div>
              <h3 className="text-base font-semibold font-raleway text-[#1B4332]">
                Eco-Friendly
              </h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Sustainable & plant-based solutions safe for nature.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFF4E5] text-[#C27803] mb-3 group-hover:scale-110 transition">
                <FaBug className="text-xl" />
              </div>
              <h3 className="text-base font-semibold font-raleway text-[#1B4332]">
                Guaranteed Results
              </h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Long-lasting protection with 100% satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About WeSecure Pest Control"
            className="rounded-2xl shadow-2xl object-cover w-full h-[420px] md:h-[500px]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 shadow-xl rounded-2xl px-6 py-3 border border-gray-200 flex items-center gap-3 text-sm md:text-base font-medium">
            <FaUsers className="text-[#3CB371] text-lg" />
            <span className="text-gray-800 whitespace-nowrap">
              Trusted by <span className="font-semibold text-[#3CB371]">5000+</span> Clients Since 2010
            </span>
          </div>
        </div>
      </div>

      {/* Highlight Text */}
      <div className="relative z-10 text-center mt-16 max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-opensans">
          With a proven record of serving{" "}
          <span className="font-semibold text-[#3CB371]">
            thousands of homes & businesses
          </span>
          , WeSecure Pest Control delivers innovative solutions that guarantee a
          healthier, pest-free future.
        </p>
        {/* Animated Underline Bar */}
        <div className="w-32 h-1 bg-gradient-to-r from-[#3CB371] to-[#FFD700] mx-auto mt-6 animate-pulse rounded-full"></div>
      </div>
    </section>
  );
}
