// src/components/ContactHero.jsx
import React from "react";
import bgImage from "../assets/home/cbg.jpg"; 

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center text-white font-raleway bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Get In <span className="text-[#3CB371]">Touch</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          Have questions about pest control? Our experts are just a call away.  
          We provide <span className="text-[#2b8f58] font-semibold">24/7 support</span> to ensure your home & business stay pest-free.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+918585989686"
            className="px-6 py-3 bg-[#3CB371] text-white rounded-full font-semibold shadow-lg hover:bg-[#34a060] transition-all duration-300"
          >
            Call Us Now
          </a>
          <a
            href="mailto:Wesecurepestcontrolservice@gmail.com"
            className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            Send an Email
          </a>
        </div>
      </div>

      {/* Bottom Overlay Shape */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111] via-[#000000aa] to-transparent"></div>
    </section>
  );
};

export default ContactHero;
