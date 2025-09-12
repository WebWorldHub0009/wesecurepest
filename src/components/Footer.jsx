// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaTruckMoving,
  FaCertificate,
  FaContao,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bg from "../assets/home/footer.jpg"

// WeSecure Pest Control Services
const services = [
  { title: "Termite Control", slug: "termite-control" },
  { title: "Cockroach Control", slug: "cockroach-control" },
  { title: "Rats Control", slug: "rats-control" },
  { title: "Flies Control", slug: "flies-control" },
  { title: "Bedbugs Treatment", slug: "bedbugs-treatment" },
  { title: "Silverfish Control", slug: "silverfish-control" },
  { title: "Ants Control", slug: "ants-control" },
  { title: "Lizard Control", slug: "lizard-control" },
  { title: "Snake Control", slug: "snake-control" },
];

export default function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className="relative pt-12 pb-12 px-6 md:px-16 font-[poppins] text-black overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${bg})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/10  z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">

        {/* About Section */}
        <div className="flex flex-col space-y-4 text-black">
          <p className="text-2xl md:text-4xl font-raleway font-semibold text-green-900 tracking-wide">
            WeSecure Pest Control
          </p>

          <p className="leading-relaxed text-black text-lg mt-2">
            Professional pest control services to protect your home and business with safe, eco-friendly, and effective solutions.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              ["https://api.whatsapp.com/send/?phone=918585989686&text=Hello%20WeSecure%20Pest%20Control&type=phone_number&app_absent=0", FaWhatsapp],
            ].map(([url, Icon], i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-black transition duration-300">
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* Webmail Link */}
          <div className="mt-4">
            <a
              href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              <FaEnvelope /> Webmail
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-black">
          <h4 className="font-semibold font-raleway text-3xl mb-4 text-green-900">Quick Links</h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaTruckMoving />],
              ["Contact Us", "/contact", <FaContao />],
              ["Certificates", "/certificate", <FaCertificate />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-black hover:text-green-600 transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="font-semibold font-raleway text-3xl mt-6 mb-2 text-green-900">Business Info</h4>
          <ul className="space-y-2 text-black">
            <li>UDYAM: DL-03-0066726</li>
            {/* <li>Address: Plot No. A-27 Ground Floor, Nearby Sona Modern Public School, Devli Road, Khanpur Village Extension, Sangam Vihar, New Delhi, Delhi 110080</li> */}
            {/* <li>Phone: +91 8585989686</li> */}
          </ul>
        </div>

        {/* Services */}
        <div className="text-black">
          <h4 className="font-semibold font-raleway text-3xl mb-4 text-green-900">Our Services</h4>
          <ul className="space-y-3">
            {services.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaTruckMoving className="text-green-600" />
                <Link
                  to={`/services/${slug}`}
                  className="text-black hover:text-green-600 transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        {/* Contact Info */}
<div className="text-black">
  <h4 className="font-semibold text-3xl font-raleway mb-4 text-green-900">Contact Info</h4>
  <address className="not-italic leading-relaxed mb-2">
    Plot No. A-27 Ground Floor, Nearby Sona Modern Public School, Devli Road, Khanpur Village Extension, Sangam Vihar, New Delhi, Delhi 110080
  </address>

  {/* Emails */}
  <p className="text-sm mb-2 flex items-center gap-2">
    <FaEnvelope className="text-green-600" />
    <a href="mailto:Info@wesecurepestcontrol.com" className="hover:text-green-600 transition duration-300">
      Info@wesecurepestcontrol.com
    </a>
  </p>
  <p className="text-sm mb-2 flex items-center gap-2">
    <FaEnvelope className="text-green-600" />
    <a href="mailto:Wesecurepestcontrolservice@gmail.com" className="hover:text-green-600 transition duration-300">
      Wesecurepestcontrolservice@gmail.com
    </a>
  </p>

  <p className="text-sm mb-2 flex items-center gap-2">
    <FaPhoneAlt className="text-green-600" /> Owner: -
  </p>
  {["+91 8585989686"].map((num, i) => (
    <p key={i} className="text-sm mb-2 flex items-center gap-2">
      <FaPhoneAlt className="text-green-600" />
      <a href={`tel:${num.replace(/\s/g, "")}`} className="hover:text-green-600 transition duration-300">
        {num}
      </a>
    </p>
  ))}

  <div className="mb-4 flex justify-start items-center">
    <div>
    <Translator />
    </div>
  </div>
</div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-xs text-black border-t border-gray-400 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} WeSecure Pest Control. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-green-600 transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
