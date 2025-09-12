// src/pages/Gallery.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryHero from "../components/GalleryHero";

// Pest Control Gallery Images
import img1 from "../assets/home/wp3.jpg";

// Gallery Items for We Secure Pest Control
const galleryItems = [
  {
    image: img1,
    title: "Termite Treatment",
    caption: "Protecting wooden structures with long-lasting solutions.",
    details: [
      "Eco-friendly anti-termite treatment",
      "Protects furniture, doors & flooring",
      "Safe for kids & pets",
    ],
  },
  {
    image: img1,
    title: "Cockroach Control",
    caption: "Ensuring hygienic kitchens and food spaces.",
    details: [
      "Odorless gel & spray treatment",
      "Targets hidden breeding spots",
      "Long-lasting protection",
    ],
  },
  {
    image: img1,
    title: "Rodent Management",
    caption: "Keeping homes & warehouses safe from rodents.",
    details: [
      "Humane & effective methods",
      "Sealing of entry points",
      "Food-grade safe solutions",
    ],
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const thumbContainerRef = useRef(null);

  useEffect(() => {
    setFadeKey((prev) => prev + 1);
  }, [activeIndex]);

  const { image, title, caption, details } = galleryItems[activeIndex];

  return (
    <>
      <GalleryHero />
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-[#f9f9f9] font-[Raleway]">
        {/* Main Gallery */}
        <section className="max-w-7xl mx-auto py-8 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={fadeKey}
                  src={image}
                  alt={title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setShowModal(true)} // 👈 open modal on click
                  className="w-full h-[420px] md:h-[500px] object-cover rounded-xl shadow-2xl cursor-pointer hover:opacity-90 transition"
                />
              </AnimatePresence>
            </div>

            {/* Text Details + Thumbnails */}
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                Case Study #{activeIndex + 1}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3CB371] mb-2">
                {title}
              </h2>
              <p className="text-gray-700 text-lg mb-3">{caption}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
                {details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="mt-4 flex gap-4">
                <a
                  href="/services"
                  className="bg-[#3CB371] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#2E8B57] transition"
                >
                  View Services
                </a>
                <a
                  href="/contact"
                  className="bg-[#1A1A1A] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#3CB371] transition"
                >
                  Contact Us
                </a>
              </div>

              {/* Thumbnails */}
              <div className="mt-6">
                <div
                  ref={thumbContainerRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide px-1 py-4"
                  style={{ scrollBehavior: "smooth", maxWidth: "100%" }}
                >
                  {galleryItems.map((item, idx) => (
                    <motion.img
                      key={idx}
                      src={item.image}
                      alt={item.title}
                      onClick={() => setActiveIndex(idx)}
                      whileHover={{ scale: 1.05 }}
                      className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition duration-300 ${
                        activeIndex === idx
                          ? "border-[#3CB371] scale-105 shadow-md"
                          : "border-transparent hover:border-[#3CB371] opacity-70 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Modal for Image */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <img
              src={image}
              alt={title}
              className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-[#3CB371] text-white p-2 rounded-full hover:bg-[#2E8B57] transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
