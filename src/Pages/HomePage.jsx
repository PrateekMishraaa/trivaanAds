import React from "react";
import Navbar from "../Components/Navbar.jsx";

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between text-white font-sans">
      <Navbar />

      {/* Centered big text */}
      <main className="flex-grow flex items-center justify-center text-center">
        <h1 className="text-[10vw] font-extrabold tracking-tight">
          <span className="text-white">Trivaan</span>
          <span className="text-gray-500">.Ads.</span>
        </h1>
      </main>

     
      <footer className="  px-8 py-4 text-sm border-t border-gray-700">
        <ul className="flex justify-between px-40 text-xl font-semibold">
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Case Studies</a></li>
            <li><a href="">Pricing</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
