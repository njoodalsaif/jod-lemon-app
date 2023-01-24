import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem";

const List = () => {
  const location = useLocation();
  const [dist, setDest] = useState(location.state.dist);
  const [option, setOption] = useState(location.state.option);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 xl:grid-cols-3 ">
          <div className=" w-[600px] xl:w-[550px] drop-shadow-md  h-[650px] m-4 rounded-md flex  flex-col justify-center px-2 bg-gradient-to-r from-cyan-200 to-blue-300  ">
            <h1 className="  text-2xl text-left font-semibold mb-3 text-gray-900">Search</h1>
            <div className=" items-start   flex flex-col  text-md xl:text-lg mb-3 text-gray-900">
              <label className="mb-1 font-semibold">Destination</label>
              <input className=" outline-none rounded-md py-2 px-2 w-full" placeholder={dist} type="text" />
            </div>
            <div className="flex flex-col items-start text-md xl:text-lg">
              <label className="font-semibold mb-1">Check-in Date</label>
              <span className="relative bg-white p-2 rounded-md font-semibold w-full cursor-pointer" onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && 
               <DateRange
                    onChange={item => setDate([item.selection])}
                    ranges={date}
                    minDate={new Date()}
                    className=" absolute shadow-md left-0 bottom-[-34px] shadow-md z-50"
               />
            }
            
            </div>
            <div className="  flex flex-col text-md  mb-3 text-gray-900 xl:text-xl">
              <label className="font-semibold mt-4 mb-2 text-left">Options</label>
              <div className=" flex flex-col items-center justify-center text-left">
                <div className="  grid grid-cols-2 gap-12">
                  <span className="flex flex-col items-start text-left">
                    Min price <small>(per night)</small>
                  </span>
                  <input type="number" className="ml-3  outline-none rounded-sm py-1 px-2 mb-4 w-[80px]"/>
                </div>
                <div className=" grid grid-cols-2 gap-12">
                  <span className="flex flex-col items-start text-left">
                    Max price <small>(per night)</small>
                  </span>
                  <input type="number" className="ml-3 rounded-sm outline-none py-1 px-2 mb-4 w-[80px]" />
                </div>
                <div className=" grid grid-cols-2 gap-12">
                  <span className="">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="ml-3 rounded-sm outline-none py-1 px-2 mb-4 w-[80px]"
                    placeholder={option.adult}
                  />
                </div>
                <div className=" grid grid-cols-2 gap-12 ">
                  <span className=" i">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="ml-3 rounded-sm py-1 outline-none px-2 mb-4 w-[80px]"
                    placeholder={option.children}
                  />
                </div>
                <div className=" grid grid-cols-2 gap-12">
                  <span className="">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="ml-3 rounded-sm py-1 px-2 outline-none mb-4 w-[80px]"
                    placeholder={option.room}
                  />
                </div>
              </div>
            </div>
            <button className="btn bg-blue-800 text-gray-200 text-xl drop-shadow-md">Search</button>
          </div>
          <div className="p-6 w-full col-span-2  ">
            <div className="flex flex-col gap-8">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
