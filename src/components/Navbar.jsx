import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsToggles } from "react-icons/bs";
import { FiDownloadCloud } from "react-icons/fi";


const Navbar = () => {
  return (
    <div className="flex justify-between h-16 items-center mb-6">
      <div>
        <h1 className="font-bold text-2xl">Customer Analytics</h1>
      </div>
      <div className="flex items-center gap-4">
        <FiSearch fontSize={18}/>
        <div className="flex items-center border border-slate-400 px-3 py-1.5 rounded-md cursor-pointer">
          <BsToggles fontSize={17}/>
          <span className="ml-1 font-semibold text-sm">Customize</span>
        </div>
        <div className="flex items-center bg-slate-900 px-3 py-1.5 rounded-md text-white cursor-pointer">
          <FiDownloadCloud />
          <span className="ml-1 font-semibold text-sm">Export</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
