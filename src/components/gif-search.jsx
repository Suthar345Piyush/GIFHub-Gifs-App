import React from "react";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const  GifSearch = () => {
  const [query , setQuery] = useState([""]);
  const navigate  = useNavigate();


  const searchGIFs = async () => {
    if(query.trim() === "") {
      return;
    }

    navigate(`/search/${query}`);
  };

  return (
    <div className="flex relative">
      <input 
       type="text"
       value={query}
       onChange={(e) => setQuery(e.target.value)}
       placeholder="Search for GIFs"
       className="w-full pl-4 pr-13 py-5 text-xl text-black rounded-tl border border-gray-400 outline-none"
      />
      {query && (
        <button
         onClick={() => setQuery("")}
         className="absolute bg-gray-700 opacity-85 rounded-full right-20 mr-2 top-6"
        >
          <HiMiniXMark size={23} />
          </button>
          )}
      <button
       onClick={searchGIFs}
       className="bg-gradient-to-r  from-orange-500 via-red-600 to-purple-700 text-white px-4 py-2 rounded-tr rounded-br"
      >
       <FiArrowUpRight  size={33} className="-scale-x-100"/>
      </button>
    </div>
  )
};
export default GifSearch;
