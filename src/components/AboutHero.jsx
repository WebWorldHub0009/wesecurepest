// src/components/AboutHero.jsx
import React from "react";
import { FaLeaf, FaShieldAlt, FaBug, FaCheckCircle } from "react-icons/fa";
import bg from "../assets/home/apet.jpg";

const features = [
  {
    icon: <FaShieldAlt className="text-green-400 text-xl" />,
    title: "Certified Safety",
    desc: "Treatments approved & safe for your family.",
  },
  {
    icon: <FaLeaf className="text-green-400 text-xl" />,
    title: "Eco-Friendly",
    desc: "Solutions that care for both nature & home.",
  },
  {
    icon: <FaBug className="text-green-400 text-xl" />,
    title: "Effective Results",
    desc: "Long-lasting pest-free protection guaranteed.",
  },
  {
    icon: <FaCheckCircle className="text-green-400 text-xl" />,
    title: "Trusted Experts",
    desc: "Years of proven experience & satisfied clients.",
  },
];

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center font-raleway py-15">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Pest Control Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="uppercase tracking-widest text-gray-300 text-sm mb-4">
          WE SECURE PEST CONTROL
        </p>
        <h1 className="text-2xl md:text-4xl max-w-5xl font-bold font-raleway text-white leading-tight">
          Safeguarding Homes, Businesses, and Families with{" "}
          <span className="text-green-400">Trusted Pest Solutions</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          At We Secure Pest Control, we deliver eco-friendly, reliable, and
          effective pest solutions that ensure a safer, healthier environment.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition"
          >
            Get a Free Inspection →
          </a>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="relative z-10 mt-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className=" rounded-2xl p-5 text-center text-white hover:scale-105 transition"
          >
            <div className="mb-3 flex justify-center">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;
