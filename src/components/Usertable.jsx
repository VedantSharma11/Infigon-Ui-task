import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Progress from "./Progress";

const data = [
  {
    id: 1,
    name: "Mikey Lawrence",
    email: "heymikey@gmail.com",
    status: "Enrolled",
    enrolled: "Jan 4, 2022",
    progress: 70,
    rating: 4,
  },
  {
    id: 2,
    name: "Ashwin Santiago",
    email: "ashwin@gmail.com",
    status: "Enrolled",
    enrolled: "Jan 6, 2022",
    progress: 50,
    rating: 2.5,
  },
  {
    id: 3,
    name: "Riya Chaudhary",
    email: "riya@gmail.com",
    status: "Enrolled",
    enrolled: "Jan 10, 2022",
    progress: 80,
    rating: 4,
  },
  {
    id: 4,
    name: "Ranhul Yadav",
    email: "rahul556@yahoo.com",
    status: "Enrolled",
    enrolled: "Jan 2, 2022",
    progress: 30,
    rating: 2,
  },
  {
    id: 5,
    name: "Kiran Kumari",
    email: "kiran@hotmail.com",
    status: "Enrolled",
    enrolled: "Jan 7, 2022",
    progress: 90,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Kuldeep Singh",
    email: "kuldeep@gmail.com",
    status: "Enrolled",
    enrolled: "Jan 15, 2022",
    progress: 10,
    rating: 3,
  },
];

const Usertable = () => {
  return (
    <div>
      {/* table */}
      <div>
        <table className="w-full ">
          <thead>
            <tr className="font-semibold text-sm">
              <td className="border-b-2 pb-2">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  Customer
                  <IoMdArrowDown />
                </div>
              </td>
              <td className="border-b-2 pb-2">Status</td>
              <td className="border-b-2 pb-2">Enrolled</td>
              <td className="border-b-2 pb-2">Progress</td>
              <td className="border-b-2 pb-2">Rating</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="text-[14px] font-bold" key={item.id}>
                  <td className="border-b-2 py-3 w-96">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4" />
                      <FcBusinessman fontSize={35} className="bg-slate-400 rounded-2xl"/>
                      <div>
                        <p className="ml-2 text-[13px] font-bold">{item.name}</p>
                        <p className="ml-2 text-xs text-slate-400 font-medium">
                        {item.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b-2 py-3"><div className="flex items-center border-2 border-slate-900 rounded-xl min-w-fit max-w-fit px-2"><GoDotFill/>Enrolled</div></td>
                  <td className="border-b-2 py-3">{item.enrolled}</td>
                  <td className="border-b-2 py-3"><Progress wid={item.progress}/>{item.progress} %</td>
                  <td className="border-b-2 py-3"><div className="flex items-center gap-1 font-bold ">{item.rating}<FaStar/></div></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usertable;
