// src/components/ServiceHero.jsx
import React from "react";
import { FaLeaf, FaShieldAlt, FaBug, FaHandsHelping } from "react-icons/fa";
import bg from "../assets/home/wp3.jpg"; // replace with your service bg

const features = [
  {
    icon: <FaShieldAlt className="text-[#3CB371] text-2xl" />,
    title: "Assured Protection",
    desc: "Advanced methods with guaranteed pest-free results.",
  },
  {
    icon: <FaLeaf className="text-[#3CB371] text-2xl" />,
    title: "Eco-Safe Solutions",
    desc: "Green-certified treatments safe for family & pets.",
  },
  {
    icon: <FaBug className="text-[#3CB371] text-2xl" />,
    title: "Targeted Treatments",
    desc: "Custom plans designed for each pest problem.",
  },
  {
    icon: <FaHandsHelping className="text-[#3CB371] text-2xl" />,
    title: "Expert Support",
    desc: "Trusted by 1000+ happy homes & businesses.",
  },
];

const ServiceHero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center font-raleway">
      {/* Background with angled overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Service Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"> </div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#3CB371]/20 to-transparent mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-10">
        <p className="uppercase tracking-[0.25em] text-gray-300 text-sm mb-4">
          Premium Pest Control Services
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
          Creating{" "}
          <span className="relative text-[#3CB371] after:block after:h-[3px] after:w-3/4 after:bg-[#3CB371] after:mx-auto after:mt-1">
            Healthier Spaces
          </span>{" "}
          with Reliable Pest Solutions
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-4xl">
          Our service blends{" "}
          <span className="text-[#3CB371] font-semibold">
            safety, innovation, and eco-friendliness
          </span>{" "}
          to protect homes & businesses from every kind of pest challenge.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
         
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-[#3CB371] hover:border-[#3CB371] transition"
          >
            Get Free Quote
          </a>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="relative z-10 mt-4 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className=" p-6 text-center text-white shadow-lg border border-transparent hover:border-[#3CB371] hover:shadow-[#3CB371]/40 transition-transform hover:-rotate-1 hover:scale-105"
          >
            <div className="mb-3 flex justify-center">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Glow Effects */}
    
    </section>
  );
};

export default ServiceHero;
