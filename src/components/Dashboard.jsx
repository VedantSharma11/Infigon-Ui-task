import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import { FiUploadCloud } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Usertable from "./Usertable";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId); 
  };
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex gap-5">
        <div className="p-6 border border-slate-300 rounded-md w-2/6">
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Websites monitored</h1>
            <BsThreeDotsVertical fontSize={15} className="cursor-pointer" />
          </div>
          <p className="text-[12px] mb-3">
            You're using 80% of available spots.
          </p>

          <img className="w-[300px]" src={img3} alt="img-1"></img>

          <h1 className="font-bold text-sm mt-5 mb-1">
            You've almost reached your limit
          </h1>
          <h1 className="text-[12px]">
            <span className="underline cursor-pointer">Upgrade plan</span> to
            monitor more websites.
          </h1>
        </div>
        <div className="p-6 border border-slate-300 rounded-md w-2/3">
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Customer breakdown</h1>
            <BsThreeDotsVertical fontSize={15} className="cursor-pointer" />
          </div>
          <p className="text-[12px] mb-3">
            Keep track of customers and their ratings.
          </p>

          <img className="w-[700px]" src={img4} alt="img-4"></img>
        </div>
      </div>

      {/* middle div */}

      <div className="p-6 border border-slate-300 rounded-md bg-slate-50">
        <div className="flex items-center justify-between mb-4">
          <h1 className="sm:font-thin md:font-semibold lg:font-bold">
            Customer movements
            <span className="sm:text-[6px] font-bold md:text-[8px] lg:text-[10px] ml-2 px-1 py-0.5 border-2 border-slate-900 rounded-2xl bg-white">
              240 monitored
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-slate-400 px-3 py-1.5 rounded-md cursor-pointer bg-white">
              <FiUploadCloud fontSize={17} />
              <span className="lg:ml-1 font-semibold sm:text-[12px] lg:text-sm md:text-xs sm:text-[8px]">Import</span>
            </div>
            <div className="flex items-center bg-slate-900 px-3 py-1.5 rounded-md text-white cursor-pointer">
              <FiPlus />
              <span className="lg:ml-1 font-semibold sm:text-[12px] lg:text-sm md:text-xs sm:text-[8px]">Add customer</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex rounded-md border border-slate-400">
            <div
              onClick={() => handleOptionClick('option1')}
              className={`border-r border-slate-400 p-2 font-semibold cursor-pointer rounded-l-md lg:text-sm md:text-[11px] sm:text-[9px] ${selectedOption === 'option1' ? 'bg-black text-white' : 'bg-white'}`}
            >
              View all
            </div>
            <div
              onClick={() => handleOptionClick('option2')}
              className={`border-r border-slate-400 p-2 font-semibold cursor-pointer lg:text-sm md:text-[11px] sm:text-[9px] ${selectedOption === 'option2' ? 'bg-black text-white' : 'bg-white'}`}
            >
              Monitored
            </div>
            <div
              onClick={() => handleOptionClick('option3')}
              className={`p-2 font-semibold cursor-pointer rounded-r-md lg:text-sm md:text-[11px] sm:text-[9px] ${selectedOption === 'option3' ? 'bg-black text-white' : 'bg-white'}`}
            >
              Unmonitored
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center rounded-md border border-slate-400 px-3 bg-white">
              <FiSearch />
              <input
                type="text"
                placeholder="Search"
                className="ml-2 outline-none sm:w-28 md:w-30 lg:w-64"
              ></input>
            </div>
            <div className="flex items-center border border-slate-400 px-3 py-1.5 rounded-md cursor-pointer bg-white">
              <IoFilter fontSize={17} />
              <span className="ml-1 font-semibold sm:text-[12px] md:text-xs lg:text-sm sm:text-[8px]">Filters</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}

      <div>
        <Usertable/>
      </div>
    </div>
  );
};

export default Dashboard;
