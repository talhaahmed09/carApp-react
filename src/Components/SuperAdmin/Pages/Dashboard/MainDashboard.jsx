import React from "react";
import { Avatar, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MainTable from "./MainTable";
import { CreateBtn } from "../../../Buttons";

const MainDashboard = () => {
  return (
    <>
      <Toolbar />

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        <div className="col-span-1  lg:col-span-2">
          <div className="mainSearchInput relative ">
            <span className="absolute left-4 translate-y-[12px]   ">
              <SearchIcon />
            </span>
            <input
              className="w-full ps-5 p-3 h-full  bg-transparent "
              type="text"
              name="search"
              placeholder="Search Company, Vehicles or File"
            />
          </div>
          <h1 className="mb-0 py-3 primaryTextcolor font-semibold text-xl">
            In the last 30 days,
          </h1>
          <div className="counter grid lg:grid-cols-3  grid-cols-1 gap-2">
            <div className="counterBox">
              <p className="numberCounter">3000</p>
              <p className="TxtCounter">Vehicles</p>
            </div>

            <div className="counterBox">
              <p className="numberCounter">3000</p>
              <p className="TxtCounter">Vehicles</p>
            </div>

            <div className="counterBox">
              <p className="numberCounter">3000</p>
              <p className="TxtCounter">Vehicles</p>
            </div>
          </div>

          <h1 className="mb-0 py-3 primaryTextcolor font-semibold text-xl">
            All Details
          </h1>

          <div className="grid lg:grid-cols-2  grid-cols-1">
            <div className="flex items-end	">
              <p className="mb-0 text-xs text-gray-300">
                Companies, Vehicles,Experts,etc
              </p>
            </div>

            <div>
              <div className="mainSearchInput relative ">
                <span className="absolute left-1 translate-y-[5px]   ">
                  <SearchIcon />
                </span>
                <input
                  className="w-full ps-4 p-2 h-full  bg-transparent "
                  type="text"
                  name="search"
                  placeholder="Search Company, Vehicles or File"
                />
              </div>
            </div>
          </div>

          <MainTable />
        </div>

        <div className="viewAllvehicle p-3">
          <h1 className="mb-0 text-center py-3 primaryTextcolor font-semibold text-xl">
            Recent Vehicles Added
          </h1>
          {/* list avatar  */}
          <div className="grid lg:grid-cols-4  grid-cols-4 items-center mt-3">
            <div className="flex items-center col-span-2">
              <Avatar />
              <h1 className="mb-0 primaryTextcolor text-xs ps-2 ">
                Vehicles Name
              </h1>
            </div>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              C-Name
            </h1>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              Location
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-4 items-center mt-3">
            <div className="flex items-center col-span-2">
              <Avatar />
              <h1 className="mb-0 primaryTextcolor text-xs ps-2 ">
                Vehicles Name
              </h1>
            </div>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              C-Name
            </h1>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              Location
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-4 items-center mt-3">
            <div className="flex items-center col-span-2">
              <Avatar />
              <h1 className="mb-0 primaryTextcolor text-xs ps-2 ">
                Vehicles Name
              </h1>
            </div>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              C-Name
            </h1>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              Location
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-4 items-center mt-3">
            <div className="flex items-center col-span-2">
              <Avatar />
              <h1 className="mb-0 primaryTextcolor text-xs ps-2 ">
                Vehicles Name
              </h1>
            </div>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              C-Name
            </h1>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              Location
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-4 items-center mt-3">
            <div className="flex items-center col-span-2">
              <Avatar />
              <h1 className="mb-0 primaryTextcolor text-xs ps-2 ">
                Vehicles Name
              </h1>
            </div>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              C-Name
            </h1>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              Location
            </h1>
          </div>
          {/* list avatar  */}
          <div className="grid lg:grid-cols-4 grid-cols-4 items-center mt-3">
            <div className="flex items-center col-span-2">
              <Avatar />
              <h1 className="mb-0 primaryTextcolor text-xs ps-2 ">
                Vehicles Name
              </h1>
            </div>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              C-Name
            </h1>
            <h1 className="mb-0 primaryTextcolor text-xs text-slate-400 ps-2 ">
              Location
            </h1>
          </div>
          <div className="mt-4 flex justify-center">
            <CreateBtn name="View All Vehicles" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
