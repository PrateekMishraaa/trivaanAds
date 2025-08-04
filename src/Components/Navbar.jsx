import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-8 py-6 bg-black fixed ">
      {/* Logo */}
      <div className="text-white font-bold text-2xl tracking-widest italic">Trivaan</div>

      {/* Menu button */}
      <button className="flex items-center  px-4 py-2 text-white text-sm rounded gap-4 text-xl">
        Menu
        <div className="ml-2 flex flex-col gap-1">
          <div className="w-4 h-0.5 bg-white"></div>
          <div className="w-4 h-0.5 bg-white"></div>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
