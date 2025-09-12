// src/pages/Contact.jsx
import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

import bg from "../assets/home/bug1.png"; 
import ContactHero from "../components/ContactHero";
import MapSection from "../components/MapSection";

const Contact = () => {
  return (
    <>
      <ContactHero/>
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#f5f5f5] text-[#1C1C1C] mt-1 font-raleway">
        {/* Left Panel: Info */}
        <div className="w-full lg:w-1/2 bg-white px-8 py-16 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 pb-3 inline-block border-b-4 border-[#3CB371] text-[#3CB371]">
            Let’s Connect
          </h2>
          <p className="text-lg text-[#5E5E5E] mb-10 leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#3CB371]">
              We Secure Pest Control
            </span>
            , we provide eco-friendly pest management solutions to protect your
            home & business with care and precision.
          </p>

          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <h4 className="font-semibold mb-1 text-[#3CB371]">
                Contact Number
              </h4>
              
              <p>📞 +91 8585989686</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-[#3CB371]">Emails</h4>
              <p>✉️ Wesecurepestcontrolservice@gmail.com</p>
              <p>✉️ Info@wesecurepestcontrol.com</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-[#3CB371]">Website</h4>
              <p className="flex items-center gap-2">
                <FaGlobe className="text-[#3CB371]" />{" "}
                www.wesecurepestcontrol.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-[#3CB371]">
                Office Address
              </h4>
              <p className="leading-relaxed">
                Plot No. A - 27, Ground Floor, Nearby Sona Modern Public School,
                Devli Road, Khanpur Village Extension, Sangam Vihar, New Delhi,
                Delhi 110080
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-[#3CB371]">Udyam ID</h4>
              <p>UDYAM-DL-03-0066726</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-5 text-2xl text-[#4B4B4B]">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-[#3CB371] transition-colors cursor-pointer"
                />
              )
            )}
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
          <div className="absolute inset-0 bg-black/80" />

          {/* Form */}
          <form
            action="https://formsubmit.co/Wesecurepestcontrolservice@gmail.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3 className="text-2xl font-bold text-[#3CB371] mb-6 border-b-2 border-[#3CB371] inline-block">
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />

              {/* Services Dropdown */}
              <select
                name="service"
                required
                className="bg-transparent border-b border-gray-400 text-white py-2 focus:border-[#3CB371] outline-none"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select Service
                </option>
                <option value="Termite Control" className="text-black">
                  Termite Control
                </option>
                <option value="Cockroach Control" className="text-black">
                  Cockroach Control
                </option>
                <option value="Rats Control" className="text-black">
                  Rats Control
                </option>
                <option value="Flies Control" className="text-black">
                  Flies Control
                </option>
                <option value="Bedbugs Treatment" className="text-black">
                  Bedbugs Treatment
                </option>
                <option value="Silverfish Control" className="text-black">
                  Silverfish Control
                </option>
                <option value="Ants Control" className="text-black">
                  Ants Control
                </option>
                <option value="Lizard Control" className="text-black">
                  Lizard Control
                </option>
                <option value="Snake Control" className="text-black">
                  Snake Control
                </option>
              </select>

              {/* Area Dropdown */}
              <select
                name="area"
                required
                className="bg-transparent border-b border-gray-400 text-white py-2 focus:border-[#3CB371] outline-none"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select Area
                </option>
                <option value="Home" className="text-black">
                  Home
                </option>
                <option value="Commercial Space" className="text-black">
                  Commercial Space
                </option>
                <option value="Office" className="text-black">
                  Office
                </option>
                <option value="Industrial" className="text-black">
                  Industrial
                </option>
                <option value="Hospitality" className="text-black">
                  Hospitality
                </option>
                <option value="Others" className="text-black">
                  Others
                </option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#3CB371] text-black py-3 font-semibold rounded-full hover:bg-[#34a060] transition duration-300 shadow-lg"
            >
              ✨ Send Message
            </button>

            {/* Formsubmit config */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.wesecurepestcontrol.com/"
            />
          </form>
        </div>
      </section>
      <MapSection/>
    </>
  );
};

export default Contact;
