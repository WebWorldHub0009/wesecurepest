// src/components/WhyChooseUs.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBug, FaLeaf, FaShieldAlt, FaUsers } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaBug size={32} />,
      title: "Effective Pest Control",
      desc: "We use advanced techniques to eliminate pests quickly and prevent future infestations, keeping your home and office safe.",
      active: true,
    },
    {
      icon: <FaLeaf size={32} />,
      title: "Eco-Friendly Solutions",
      desc: "Our plant-based and sustainable treatments ensure the safety of your family, pets, and the environment.",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Certified Safety Standards",
      desc: "All treatments are certified, safe, and follow strict protocols to protect your home and business.",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Trusted by Thousands",
      desc: "Over 5000 clients trust WeSecure Pest Control since 2010 for reliable, long-lasting results.",
    },
  ];

  return (
    <section className="bg-[#f3f9fb] py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-[#102036]">
      <div className="max-w-7xl mx-auto bg-[#f3f9fb]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold font-[italiana] text-[#1B4332] mb-2">
              Why Choose WeSecure Pest Control?
            </h2>
            <p className="text-lg text-gray-700 max-w-xl">
              Safe, reliable, and eco-friendly pest control services. See why thousands of homes and businesses trust WeSecure to protect their spaces.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-[#1B4332] text-white px-6 py-3 rounded-full hover:bg-[#007BFF] transition shadow-md font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Cards */}
        <div className="block md:hidden">
          {/* Mobile Slider */}
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {reasons.map((reason, idx) => (
              <SwiperSlide key={idx}>
                <Card reason={reason} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <Card key={idx} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Card component
const Card = ({ reason }) => (
  <div
    className={`rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl h-[50vh] ${
      reason.active
        ? "bg-[#1B4332] text-white"
        : "bg-[#dceeff] text-[#1C1C1C]"
    } animate-fade-in`}
  >
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-full mb-5 shadow-md ${
        reason.active
          ? "bg-white text-[#1B4332]"
          : "bg-[#1C1C1C] text-white"
      }`}
    >
      {reason.icon}
    </div>

    <div className="flex flex-col flex-1 justify-between">
      <h3 className="text-xl font-[italiana] font-semibold mb-3">{reason.title}</h3>
      <p className="text-sm leading-relaxed">{reason.desc}</p>
    </div>

    <Link
      to="/contact"
      className={`mt-6 px-5 py-2 rounded-full font-medium transition shadow ${
        reason.active
          ? "bg-white text-[#1B4332] hover:bg-[#e0ffe0]"
          : "bg-[#1B4332] text-white hover:bg-[#007BFF]"
      }`}
    >
      Learn More
    </Link>

    <style>
      {`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-in-out both;
        }
      `}
    </style>
  </div>
);
