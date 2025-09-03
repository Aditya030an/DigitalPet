


import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./photos/digitallogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close the services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const servicesMenu = document.getElementById("services-dropdown");
      if (servicesMenu && !servicesMenu.contains(event.target)) {
        setServicesOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-4 py-2 font-[lato] bg-white shadow-lg relative">
      {/* Logo Section */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-auto cursor-pointer transition-all duration-300 transform hover:scale-110"
        />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black text-2xl focus:outline-none z-50">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links & Contact Section */}
      <div className={`md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 flex flex-col md:flex-row transition-all duration-300 ${isOpen ? "flex" : "hidden"} z-40`}>
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">

          <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">
            Home
          </Link>

          {/* Services Dropdown with Premium Design */}
          <div className="relative group">
            {/* Parent Element (Trigger) */}
            <button
              className="flex items-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <FaChevronDown className="ml-1 text-sm" />
            </button>
          

            {/* Dropdown Menu */}
            <div
              id="services-dropdown"
              className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 transform scale-95 opacity-0 pointer-events-none 
                group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto 
                ${servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : ""}`}
            >
              <ul className="py-2">
                {[
                  "First aid and emergency advice",
                  "Disease diagnosis and treatment",
                  "Parasite control",
                  "Nutrition and diet guidance",
                  "Enclosure and husbandry setup",
                  "Breeding and neonatal care",
                  "Second opinion - expert's review",
                ].map((service, index, array) => (
                  <li
                    key={index}
                    className={`px-5 py-3 text-gray-700 transition-all duration-300 ease-in-out cursor-pointer 
                      ${index === 0 ? "rounded-t-lg" : ""} 
                      ${index === array.length - 1 ? "rounded-b-lg" : "border-b border-gray-200"} `}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/Rateus" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">
            Rate us
          </Link>

          {/* Contact Info */}
          <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300">
            <FaPhoneAlt className="text-xl" />
            <span className="text-lg font-semibold">+91 9424094362</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300">
  <FaEnvelope className="text-xl" />
  <a
    href="mailto:Digitalpetclinic@gmail.com"
    className="text-lg font-semibold"
  >
    Digitalpetclinic@gmail.com
  </a>
</div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
