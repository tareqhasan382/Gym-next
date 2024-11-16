import React from "react";
import { MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" w-full h-auto ">
      <div className="  w-full pt-8 px-4 md:px-6 flex flex-col md:flex-row justify-between md:justify-around gap-8">
        {/* Footer Section */}
        <div className="flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left">
          <h1 className=" text-xl font-extrabold uppercase inline-block whitespace-nowrap text-green-500 outline outline-1 outline-black p-2 bg-green-100 ">
            Fitness Gym
          </h1>
          {/* className="w-[150px] md:w-[200px] h-16 object-cover px-1 " */}
          <p className="text-sm md:text-base">
            Far far away, behind the word mountains,
          </p>
          <p className="text-sm md:text-base">
            far from the countries Vokalia and Consonantia.
          </p>
          <div className="flex items-center gap-4 text-2xl">
            <FaFacebook color="#4285f4" />
            <FaInstagram color="#E1306C" />

            <FaLinkedin color="#0a66c2" />

            <FaYoutube color="#CD201F" />
          </div>
        </div>

        {/* Policy Section */}
        <div className=" flex flex-col items-start gap-4 text-center md:text-left">
          <p className=" font-bold text-lg md:text-2xl">Policy</p>
          <h4 className="text-sm md:text-base">About Us</h4>
          <h4 className="text-sm md:text-base">Refund Policy</h4>
          <h4 className="text-sm md:text-base">Terms and Condition</h4>
          <h4 className="text-sm md:text-base">Privacy Policy</h4>
        </div>

        {/* Quick Links Section */}
        <div className=" flex flex-col items-start gap-4 text-center md:text-left">
          <p className=" font-bold text-lg md:text-2xl">Quick Links</p>
          <h4 className="text-sm md:text-base">Blogs</h4>
          <h4 className="text-sm md:text-base">Free Live Class</h4>
          <h4 className="text-sm md:text-base">Upcoming Live Class</h4>
          <h4 className="text-sm md:text-base">All Courses</h4>
        </div>

        {/* Contact Us Section */}
        <div className=" flex flex-col items-start gap-4 text-center ">
          <p className=" font-bold text-lg md:text-2xl">Contact Us</p>
          <div className="flex flex-col gap-4">
            {/* Phone Number */}
            <div className=" flex items-center  gap-2 text-sm md:text-base">
              <IoCallOutline className="text-lg" />
              <a href="tel:+8801989342794" className="hover:text-blue-600">
                +880 1989342794
              </a>
            </div>

            {/* Email */}
            <div className=" flex items-center  gap-2 text-sm md:text-base">
              <IoMailOpenOutline className="text-lg" />
              <a
                href="mailto:tareqhasan382@gmail.com"
                className="hover:text-blue-600"
              >
                tareqhasan382@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm md:text-base">
              <MapPin className="text-lg" />

              <span>Mirpur, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" my-6 text-center lg:text-base text-[12px] ">
        <span>Copyright © {currentYear} </span>
        <span className=" font-semibold ">www.xyz.com</span>
        <span> All rights reserved.</span>
      </h1>
    </footer>
  );
};

export default Footer;
