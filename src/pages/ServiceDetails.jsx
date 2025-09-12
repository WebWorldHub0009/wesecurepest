// src/pages/ServiceDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import {
  FaLeaf,
  FaCheckCircle,
  FaInfoCircle,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import services from "../pages/service"; 
import SehanBadge from "../components/Badge";
import ServiceCards from "../components/ServiceCard";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Service Not Found
      </div>
    );
  }

  return (
    <>
    <div className="font-[Raleway] relative">
      {/* Background Grid SVG Pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10 text-eco-green"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black/70 via-[#14532d]/80 to-black/70"></div>
        <div className="relative z-10 text-left px-6 md:px-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#3CB371]">
          {service.title} – Service Details
        </h2>

        {/* Image + Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={service.image}
            alt={service.title}
            className="rounded-2xl shadow-2xl border-4 border-[#3CB371]/30"
          />
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {service.desc}
            {service.details}
          </p>
        </div>

        {/* Features & Benefits */}
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div className="bg-gradient-to-br from-white to-[#f7fff9] p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold text-[#3CB371] mb-6 flex items-center gap-2">
              <FaLeaf /> Key Features
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              {service.features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#3CB371] mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-white to-[#f7fff9] p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold text-[#3CB371] mb-6 flex items-center gap-2">
              <FaShieldAlt /> Benefits
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              {service.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#3CB371] mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Treatment Steps */}
        <div className="mt-10">
          <h3 className="text-4xl font-bold text-[#3CB371] text-center mb-6">
            Treatment Steps
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {service.treatmentSteps.map((step, i) => (
              <div
                key={i}
                className="p-8 bg-white text-lg rounded-2xl shadow-lg border border-[#3CB371]/20 hover:shadow-2xl transition"
              >
                <h4 className="text-2xl font-bold text-[#14532d] mb-4">
                  Step {i + 1}
                </h4>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-10 bg-gradient-to-r from-[#e8f9f0] via-white to-[#e8f9f0] p-12 rounded-2xl shadow-2xl">
          <h3 className="text-4xl font-bold text-[#14532d] mb-10 text-center flex items-center justify-center gap-3">
            <FaInfoCircle /> Additional Information
          </h3>
          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            <div className="space-y-6">
              <p className="text-xl">
                <FaClock className="inline text-[#3CB371] mr-2" />
                <span className="font-semibold text-[#14532d]">Duration:</span>{" "}
                {service.extraInfo.duration}
              </p>
              <p className="text-xl">
                <FaShieldAlt className="inline text-[#3CB371] mr-2" />
                <span className="font-semibold text-[#14532d]">Validity:</span>{" "}
                {service.extraInfo.validity}
              </p>
              <p className="text-xl">
                <FaLeaf className="inline text-[#3CB371] mr-2" />
                <span className="font-semibold text-[#14532d]">
                  Suitable For:
                </span>{" "}
                {service.extraInfo.suitableFor}
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#14532d] mb-3">
                Conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                {service.extraInfo.conditions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <p className="mt-6 text-xl">
                <FaLeaf className="inline text-[#3CB371] mr-2" />
                <span className="font-semibold text-[#14532d]">After Care:</span>{" "}
                {service.extraInfo.afterCare}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <SehanBadge/>
    <ServiceCards/>
   </>
  );
}
