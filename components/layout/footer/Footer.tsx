import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Section - Logo & Socials */}
        <div>
          <h2 className="text-xl font-bold">WEB LOGO</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>

          {/* Social icons */}
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-gray-500 text-sm">
            Copyright Design Agency 2022
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Address</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Design Agency Head Office. <br />
            Airport Road <br />
            United Arab Emirate
          </p>
        </div>
      </div>
    </footer>
  );
}
