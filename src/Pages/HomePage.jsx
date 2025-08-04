import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setContentVisible(false); // hide the main sections on mouse down
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col text-white font-sans relative overflow-hidden">
      <Navbar />

      {/* Roller cursor */}
      <div
        className="pointer-events-none fixed z-50 border border-white rounded-full w-8 h-8 transition-transform duration-75"
        style={{
          left: cursorPos.x - 16,
          top: cursorPos.y - 16,
        }}
      ></div>

      {contentVisible && (
        <>
          {/* Centered big text */}
          <main className="flex-grow flex items-center justify-center text-center">
            <h1 className="text-[10vw] font-extrabold tracking-tight">
              <span className="text-white">Trivaan</span>
              <span className="text-gray-500">.Ads.</span>
            </h1>
          </main>

          {/* Footer menu */}
          <section className="px-8 py-4 text-sm border-t border-gray-700">
            <ul className="flex justify-between px-40 text-xl font-semibold">
              {[
                "About",
                "Services",
                "Case Studies",
                "Pricing",
              ].map((label) => (
                <div key={label} className="flex gap-4 group">
                  <li className="transition-transform duration-300 group-hover:translate-x-2">
                    <a href="">{label}</a>
                  </li>
                  <FaArrowRight className="mt-2 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              ))}
            </ul>
          </section>

          {/* Full-screen section with text */}
          <section className="h-screen w-full p-20">
            <div className="h-full w-full  flex items-center">
              <p className="text-5xl font-sans text-center leading-tight">
                <span className="px-20">
                 <span> We are trendsetters in the fashion </span>industry, blending
                  innovative design with a passion for style.
                </span>
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
