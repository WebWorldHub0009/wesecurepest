import React from "react";
import { FaCalendarAlt, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
// import ant from "../assets/Ant.png"
import { Link } from "react-router-dom";

export default function BookingSteps() {
  return (
    <section className="bg-white py-12 px-4 text-center relative overflow-hidden">
      {/* Heading */}
      <h4 className="text-green-500 uppercase text-sm font-semibold mb-2">
        HOW IT WORKS
      </h4>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
        Simply Book Online And Pay On The Day
      </h2>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center relative">
          <div className="flex items-center justify-center bg-green-100 w-24 h-24 rounded-full shadow-md mb-4">
            <FaCheckCircle className="text-green-500 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">1. Create a Booking</h3>
          <p className="text-gray-600 mt-1 max-w-xs">
            Quickly book online or by phone
          </p>
          {/* Arrow */}
          <div className="hidden md:block absolute top-1/2 right-[-3rem] w-8 h-px bg-gray-300" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center relative">
          <div className="flex items-center justify-center bg-green-100 w-24 h-24 rounded-full shadow-md mb-4">
            <FaCalendarAlt className="text-green-500 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">2. Save the Date</h3>
          <p className="text-gray-600 mt-1 max-w-xs">
            Confirm your price & service date
          </p>
          {/* Arrow */}
          <div className="hidden md:block absolute top-1/2 right-[-3rem] w-8 h-px bg-gray-300" />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center relative">
          <div className="flex items-center justify-center bg-green-100 w-24 h-24 rounded-full shadow-md mb-4">
            <FaMoneyBillWave className="text-green-500 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">3. Pay in Person</h3>
          <p className="text-gray-600 mt-1 max-w-xs">
            Pay on the day with EFTPOS or cash
          </p>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative mt-12 bg-green-600 text-white rounded-xl px-8 py-6 flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-4 md:mb-0">
          Get Started With South Delhi Pest Control Services Today
        </h3>
        <Link
          to={"/price"}
          className="bg-white text-green-600   font-bold py-2 px-6 rounded-full hover:bg-green-0 transition-colors"
        >
          Book Now!
        </Link>

        {/* Decorative Bugs */}
     
      </div>
    </section>
  );
}
