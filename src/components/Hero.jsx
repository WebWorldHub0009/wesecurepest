// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaShieldAlt,
  FaLeaf,
  FaUserShield,
  FaBug,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


// ✅ Pest Control Backgrounds
import heroImg1 from "../assets/home/wp1.jpg";
import heroImg2 from "../assets/home/wp2.jpg";
import heroImg3 from "../assets/home/wp3.jpg";
import heroImg4 from "../assets/home/wp4.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];

  // ✅ Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[90vh] md:h-[90vh] overflow-hidden font-sans">
      {/* Background Slideshow with Lazy Loading + Blur */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <LazyLoadImage
            key={index}
            src={img}
         
            className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-[2000ms] ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000b0] via-[#00000060] to-[#000000b0]"></div>
      </div>

      {/* ✅ Social Media (Desktop) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex-col gap-4 text-white z-50 hidden md:flex">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF className="hover:text-[#2ECC71] transition text-2xl cursor-pointer" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-[#2ECC71] transition text-2xl cursor-pointer" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-[#2ECC71] transition text-2xl cursor-pointer" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube className="hover:text-[#2ECC71] transition text-2xl cursor-pointer" />
        </a>
      </div>

      {/* ✅ Slider Dots (Desktop) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-50 hidden md:flex">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#2ECC71] scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>

      {/* ✅ Hero Text */}
      <div className="relative mt-16 z-20 flex flex-col top-12 items-center h-full text-center text-white px-4">
        {/* Small Tagline */}
        <h2 className="font-raleway text-[#2ECC71] text-sm md:text-xl tracking-widest uppercase font-semibold drop-shadow-lg">
          WeSecure Pest Control
        </h2>

        {/* Typewriter Heading */}
        <div className="mt-3 h-[60px] md:h-[80px] flex items-center justify-center">
          <h1 className="font-raleway text-2xl md:text-5xl font-extrabold uppercase leading-tight drop-shadow-xl">
            <Typewriter
              words={[
                "Protecting Homes, Preserving Health",
                "Eco-Friendly Pest Solutions",
                "Trusted Protection Since 2021",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h1>
        </div>

        {/* Description */}
        <p className="font-opensans mt-5 text-xs md:text-lg max-w-3xl md:max-w-4xl text-gray-200 leading-relaxed">
          From termites to mosquitoes — we provide safe, eco-friendly, and
          reliable pest control services for homes, offices, and industries.
          Your safety is our priority.
        </p>

        {/* ✅ Mobile Badges */}
        <div className="mt-6 flex md:hidden gap-2 md:gap-3 flex-wrap justify-center">
          <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-xs px-3 py-2 rounded-full shadow text-white">
            <FaUserShield className="text-[#2ECC71] text-sm" /> Certified Experts
          </span>
          <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-xs px-3 py-2 rounded-full shadow text-white">
            <FaLeaf className="text-[#2ECC71] text-sm" /> Eco-Friendly Solutions
          </span>
          <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-xs px-3 py-2 rounded-full shadow text-white">
            <FaShieldAlt className="text-[#2ECC71] text-sm" /> 100% Safe & Secure
          </span>
        </div>

        {/* ✅ Mobile Social + Dots */}
        <div className="mt-12 flex flex-col items-center gap-6 md:hidden">
          {/* Social */}
          <div className="flex gap-4 text-white">
            <FaFacebookF className="hover:text-[#2ECC71] transition text-lg cursor-pointer" />
            <FaTwitter className="hover:text-[#2ECC71] transition text-lg cursor-pointer" />
            <FaInstagram className="hover:text-[#2ECC71] transition text-lg cursor-pointer" />
            <FaYoutube className="hover:text-[#2ECC71] transition text-lg cursor-pointer" />
          </div>
          {/* Dots */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#2ECC71] scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Feature Cards (Desktop Only) */}
      <div className="absolute bottom-14 w-full hidden md:flex flex-wrap justify-center gap-6 px-4 z-20">
        {/* Termite Control */}
        <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl w-72 hover:scale-105 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaBug className="text-3xl text-[#2ECC71]" />
            <h3 className="font-raleway text-lg font-bold uppercase tracking-wide">
              Termite Control
            </h3>
          </div>
          <p className="font-opensans text-sm text-gray-200">
            Advanced anti-termite treatment to safeguard your furniture and
            property.
          </p>
        </div>

        {/* Rodents & Cockroaches */}
        <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl w-72 hover:scale-105 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaShieldAlt className="text-3xl text-[#2ECC71]" />
            <h3 className="font-raleway text-lg font-bold uppercase tracking-wide">
              Rodent & Cockroach
            </h3>
          </div>
          <p className="font-opensans text-sm text-gray-200">
            Long-lasting solutions for rodents, cockroaches, and household pests.
          </p>
        </div>

        {/* Mosquito & Bed Bugs */}
        <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl w-72 hover:scale-105 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaLeaf className="text-3xl text-[#2ECC71]" />
            <h3 className="font-raleway text-lg font-bold uppercase tracking-wide">
              Mosquito & Bed Bugs
            </h3>
          </div>
          <p className="font-opensans text-sm text-gray-200">
            Eco-friendly treatment for mosquitoes and bed bugs ensuring peaceful
            sleep.
          </p>
        </div>
      </div>
    </section>
  );
}
