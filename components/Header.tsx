"use client";

import { useBoardStore } from "@/store/boardStore";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";

const Header = () => {
  const [searchString, setsearchString] = useBoardStore((state) => [
    state.searchString,
    state.setsearchString,
  ]);
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>

        <Image
          src={"https://links.papareact.com/c2cdd5"}
          alt="logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search box */}
          <form
            action=""
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="search"
              value={searchString}
              onChange={(e) => setsearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden></button>
          </form>
          {/* Avatar */}
          <Avatar name="yassir aittata" round size="50" color="#0055D1" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm  p-5 shadow-xl rounded-md w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          GPT is summerisng your day ...
        </p>
      </div>
    </header>
  );
};

export default Header;
