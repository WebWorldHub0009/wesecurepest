import React from "react";
import bg from "../assets/home/wp2.jpg";

const services = [
  { title: "Termite Control" },
  { title: "Cockroach Control" },
  { title: "Rats Control" },
  { title: "Flies Control" },
  { title: "Bedbugs Treatment" },
  { title: "Silverfish Control" },
  { title: "Ants Control" },
  { title: "Lizard Control" },
  { title: "Snake Control" },
];

const EstimateSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-green-50">
      
      {/* Left Image Side */}
      <div
        className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[500px] lg:min-h-[700px] p-6 lg:p-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70 z-0" />
        <div className="relative z-10 text-center lg:text-left text-white space-y-4 lg:space-y-6 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 font-raleway">
            Go Green with WeSecure
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Ensure a safe and healthy environment for your clients & employees.
            Eco-friendly pest control solutions you can trust.
          </p>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 font-raleway mb-6 border-b border-[#3CB371] pb-2">
            Request an Estimate
          </h2>

          <form
            action="https://formsubmit.co/Wesecurepestcontrolservice@gmail.com"
            method="POST"
            className="grid grid-cols-1 gap-4 sm:gap-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.wesecurepestcontrol.com" />

            {/* Name */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                name="Name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Phone *</label>
              <input
                type="tel"
                name="Phone"
                required
                placeholder="Enter your phone"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Address *</label>
              <input
                type="text"
                name="Address"
                required
                placeholder="Enter your address"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Select Service *</label>
              <select
                name="Service"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              >
                {services.map((s, idx) => (
                  <option key={idx} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                name="Message"
                rows="4"
                placeholder="Describe your requirement"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#3CB371] to-[#1E90FF] text-white font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 w-full sm:w-auto"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default EstimateSection;
