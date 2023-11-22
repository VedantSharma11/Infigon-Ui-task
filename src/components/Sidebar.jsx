import React from "react";
import { SiWhitesource } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuHome } from "react-icons/lu";
import { FiGrid } from "react-icons/fi";
import { IoMdTimer } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { TbGraphFilled } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-white w-42 sm:w-48 md:w-52 lg:w-60 xl:w-80 p-5 fixed">
      <div className="flex items-center">
        <SiWhitesource fontSize={30} />
        <span className="text-lg ml-2 font-bold">Untitled UI</span>
      </div>
      {/* top */}

      <div className="flex-1">
        <div className="mt-6">
          <h4 className="font-thin text-[10px] mb-2 tracking-widest">DASHBOARD</h4>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <LuHome fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2 ">Overview</span>
            </div>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <FiGrid fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2">Current projects</span>
            </div>
        </div>
        <div className="mt-6">
          <h4 className="font-thin text-[10px] mb-2 tracking-widest">CUSTOMERS</h4>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <IoMdAnalytics fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2">Analytics</span>
            </div>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <FaUserGroup fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2">Audience</span>
            </div>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <HiDocumentReport fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2">Reporting</span>
            </div>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <MdOutlineCategory fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2">Categories</span>
            </div>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <TbGraphFilled fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2">Projections</span>
            </div>
        </div>
        <div className="mt-6">
          <h4 className="font-thin text-[10px] mb-2 tracking-widest">REPORTS</h4>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <FaDatabase fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2">Overview</span>
            </div>
            <div className="flex items-center hover:bg-slate-700 px-4 rounded-md cursor-pointer">
              <IoMdTimer fontSize={20}/>
              <span className="ml-2 font-bold text-sm my-2">Scheduled reports</span>
            </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col">
        <div className="flex items-center hover:bg-slate-700 rounded-md cursor-pointer p-2">
          <IoSettingsOutline fontSize={20} />
          <span className="text-sm ml-2">Settings</span>
        </div>
        <div className="flex mt-5 items-center">
          <FcBusinessman fontSize={35} className="bg-neutral-100 rounded-2xl" />
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="ml-2 text-xs font-bold">Vedant Sharma</p>
              <p className="ml-2 text-xs text-slate-300">hello@vedant.com</p>
            </div>

            <BsThreeDotsVertical className="cursor-pointer" fontSize={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
