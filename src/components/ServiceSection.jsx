// src/components/ServicesSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// Replace these with real pest control images
import termiteImg from "../assets/home/wp1.jpg";
// import cockroachImg from "../assets/pest/cockroach.jpg";
// import ratsImg from "../assets/pest/rats.jpg";
// import fliesImg from "../assets/pest/flies.jpg";
// import bedbugImg from "../assets/pest/bedbug.jpg";
// import silverfishImg from "../assets/pest/silverfish.jpg";
// import antsImg from "../assets/pest/ants.jpg";
// import lizardImg from "../assets/pest/lizard.jpg";
// import snakeImg from "../assets/pest/snake.jpg";

const services = [
  {
    title: "Termite Control",
    slug: "termite-control",
    image: termiteImg,
    desc: "Specialized termite treatments to protect your property from structural damage, with long-term prevention strategies.",
  },
  {
    title: "Cockroach Control",
    slug: "cockroach-control",
    image: termiteImg,
    desc: "Cockroaches are bad for your business & they spread diseases. Protect your family & brand name.",
  },
  {
    title: "Rats Control",
    slug: "rats-control",
    image: termiteImg,
    desc: "Rats & mice can ruin your business and damage your brand identity. Stop them before they wreak havoc.",
  },
  {
    title: "Flies Control",
    slug: "flies-control",
    image: termiteImg,
    desc: "Got a lot of flies? They can be hazardous to humans. Stop their spread now.",
  },
  {
    title: "Bedbugs Treatment",
    slug: "bedbugs-treatment",
    image: termiteImg,
    desc: "Once they are in, they are hard to get rid of. Prevent bedbug infestation effectively.",
  },
  {
    title: "Silverfish Control",
    slug: "silverfish-control",
    image: termiteImg,
    desc: "Silverfish may damage fabrics like cotton, linen & silk. Protect your property from them.",
  },
  {
    title: "Ants Control",
    slug: "ants-control",
    image: termiteImg,
    desc: "Ants are bad for your business & brand image. Rid your properties of ants efficiently.",
  },
  {
    title: "Lizard Control",
    slug: "lizard-control",
    image: termiteImg,
    desc: "Providing lizard control services in factories, societies, malls, hospitals, schools, and more.",
  },
  {
    title: "Snake Control",
    slug: "snake-control",
    image: termiteImg,
    desc: "Unique snake repellent system ensures snakes stay away from your surroundings.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#1C1C1C] py-10 overflow-hidden">
   

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="font-cursive1 text-4xl md:text-6xl text-white ">
            Our <span className="text-[#2ECC71]">Pest Control Services</span>
          </h2>
          <p className="mt-6 font-body text-gray-300 leading-relaxed text-base md:text-lg">
            At <span className="text-[#2ECC71]">WeSecure Pest Control</span>, we provide
            advanced, safe, and eco-friendly pest management solutions for homes,
            businesses, and industries.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={`/services/${service.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group shadow-xl bg-black/20">
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

                  {/* Big Number */}
                  <div className="absolute top-6 left-6 font-cursive2 text-white text-5xl opacity-20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-cursive2 text-2xl md:text-3xl text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-gray-300 mt-2 opacity-90">
                      {service.desc}
                    </p>
                    <button className="mt-3 px-5 py-2 rounded-full bg-[#2ECC71] text-black font-semibold shadow-md hover:bg-green-600 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes bubbleFloat {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.7; }
          }
          .animate-bubbleGlow {
            animation: bubbleFloat infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
