// src/components/HowItWorks.jsx
import React from "react";
import { FaBug, FaShieldAlt, FaHandHoldingMedical, FaLeaf, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  { id: 1, title: "Identify the Pest", description: "Our experts inspect your property and identify the pest species accurately.", icon: <FaBug size={28} className="text-white" />, color: "bg-green-600" },
  { id: 2, title: "Customized Treatment Plan", description: "We design a plan tailored to your property and type of infestation for maximum effectiveness.", icon: <FaShieldAlt size={28} className="text-white" />, color: "bg-yellow-600" },
  { id: 3, title: "Safe & Effective Execution", description: "Our trained team applies eco-friendly treatments safely and efficiently.", icon: <FaHandHoldingMedical size={28} className="text-white" />, color: "bg-red-600" },
  { id: 4, title: "Follow-Up & Prevention", description: "We ensure your space remains pest-free with follow-ups and preventive guidance.", icon: <FaLeaf size={28} className="text-white" />, color: "bg-blue-600" },
];

export default function HowItWorks() {
  return (
    <section className="relative py-10 bg-green-50 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8 px-6">
        <h2 className="text-4xl md:text-5xl font-raleway font-extrabold text-gray-900 tracking-tight">
          How <span className="text-green-600">WeSecure</span> Protects Your Home
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          A step-by-step approach to ensure your property remains safe, clean, and pest-free.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center text-center md:w-1/4 group">
            
          

            {/* Step Icon */}
            <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color} shadow-lg group-hover:scale-110 transform transition-all duration-500`}>
              {step.icon}
            </div>

            {/* Step Content */}
            <div className="mt-6 max-w-xs">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>

            {/* Hover Checkmark */}
            <div className="absolute -top-2 -right-2">
              <FaCheck className="text-green-500 hidden group-hover:block animate-bounce" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 text-center px-6">
        <p className="text-lg text-gray-700 font-medium mb-6">
          Protect your home and business with our professional pest control services.
        </p>
        <Link to="/contact">
          <button className="bg-[#1B4332] cursor-pointer text-white px-8 py-3 rounded-2xl text-lg  shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
            Book Your Service Now
          </button>
        </Link>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes drawLine {
            0% { width: 0%; height: 0%; }
            100% { width: 100%; height: 100%; }
          }
          .animate-drawLine {
            animation: drawLine 1.5s forwards;
          }
        `}
      </style>
    </section>
  );
}
