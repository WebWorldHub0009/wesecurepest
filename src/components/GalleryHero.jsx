// src/components/GalleryHero.jsx
import React from "react";
import  {Link } from "react-router-dom";
import bg from "../assets/home/g.jpg";

const GalleryHero = () => {
  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] font-[Raleway] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${bg})`, // Pest control bg
        }}
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#3CB371] drop-shadow-lg">
          Capturing Our Journey
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-gray-200 text-base md:text-lg max-w-3xl leading-relaxed">
          A gallery of <span className="text-[#3CB371] font-semibold">real moments</span> where 
          <span className="text-[#3CB371] font-semibold"> We Secure Pest Control </span> 
          restored peace, safety, and hygiene for families, businesses, and communities.
        </p>

        {/* Premium Sub-text */}
        <p className="mt-3 text-gray-400 italic text-sm md:text-base">
          Every picture tells a story of{" "}
          <span className="text-[#3CB371]">trust, care, and transformation.</span>
        </p>

        {/* Decorative Line */}
        <div className="mt-6 w-40 h-[3px] bg-gradient-to-r from-transparent via-[#3CB371] to-transparent rounded-full" />

        {/* Breadcrumb with Routing */}
        <div className="mt-6 text-sm md:text-base text-gray-400 tracking-wider uppercase">
          <Link to="/home" className="hover:text-[#3CB371] transition-colors">
            Home
          </Link>{" "}
          / <span className="text-[#3CB371]">Gallery</span>
        </div>
      </div>

      {/* Floating Premium Effects */}
    
    </section>
  );
};

export default GalleryHero;
