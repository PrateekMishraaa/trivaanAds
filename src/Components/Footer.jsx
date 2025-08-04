import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-20 py-16 space-y-16">
      {/* Top social + tagline */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Social icons & text */}
        <div className="flex-1 max-w-md">
          <ul className="flex space-x-6 mb-6">
            {[FaInstagram, FaFacebook, FaLinkedinIn, FaThreads, FaDribbble].map(
              (Icon, i) => (
                <li key={i} className="text-2xl hover:text-gray-400 transition">
                  <a href="">
                    <Icon />
                  </a>
                </li>
              )
            )}
          </ul>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Dive into a world of fresh content and exciting updates. Follow us
            and let’s embark on this adventure together.
          </p>
        </div>

        {/* Center tagline */}
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <p className="text-4xl md:text-6xl font-semibold text-center md:text-right">
            Rise. <span className="text-zinc-400">Shine.</span> Repeat.
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-700" />

      {/* Bottom: newsletter + links */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        {/* Newsletter */}
        <div className="flex-1 max-w-md space-y-6">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Stay Tuned</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Stay updated with the latest digital trends, insights, and expert
              advice from the RAFF team – delivered directly to your inbox.
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full border-b border-zinc-600 bg-transparent py-2 text-white focus:outline-none"
            />
            <button className="flex items-center justify-center gap-2 border border-zinc-500 rounded-full py-3 px-6 hover:bg-white hover:text-black transition">
              Send Message →
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-wrap md:justify-end gap-12 md:gap-20 text-sm">
          <div className="space-y-3 min-w-[120px]">
            <h4 className="font-semibold text-zinc-400 uppercase text-xs">
              Company
            </h4>
            <ul className="space-y-1 text-zinc-300">
              {[
                "About Us",
                "History",
                "Services",
                "Our Team",
                "Partners",
                "Case Studies",
                "Testimonials",
                "Pricing",
                "Blog",
              ].map((item, i) => (
                <li key={i}>
                  <a href="" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 min-w-[120px]">
            <h4 className="font-semibold text-zinc-400 uppercase text-xs">
              Case Studies
            </h4>
            <ul className="space-y-1 text-zinc-300">
              {["Tailoring", "Fabrics", "Workwear", "Shoes"].map((item, i) => (
                <li key={i}>
                  <a href="" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 min-w-[150px]">
            <h4 className="font-semibold text-zinc-400 uppercase text-xs">
              Services
            </h4>
            <ul className="space-y-1 text-zinc-300">
              {[
                "Exclusive Collections",
                "Trend Forecasting",
                "Wardrobe Revamp",
                "Alterations & Tailoring",
                "Personal Shopping",
                "Style Consultation",
                "Custom Couture",
              ].map((item, i) => (
                <li key={i}>
                  <a href="" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="w-full border-t border-zinc-600 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
          <span className="text-white">Trivaan</span>
          <span className="text-gray-500">.Ads.</span>
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-6 w-full md:w-auto">
          <div className="space-y-1">
            <ul className="text-zinc-400">
              <li>1234 Elm Street,</li>
              <li>Springfield, IL 62704, USA</li>
            </ul>
          </div>
          <div className="space-y-1">
            <ul className="text-zinc-400">
              <li>Support@raff.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div className="space-y-1">
            <ul className="text-zinc-400">
              <li>Monday, Aug 4, 2025</li>
              <li>11:00 AM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
