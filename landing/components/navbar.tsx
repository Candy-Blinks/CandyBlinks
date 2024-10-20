"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import React from "react";
import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
  const [barState, setBarState] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex items-center fixed top-0 w-full px-5 min-h-30 justify-between z-10 transition py-5 ${
        barState ? "bg-slate-950" : ""
      } ${isTop ? "lg:bg-transparent" : "backdrop-blur-md shadow-lg "}`}
    >
      <div>
        <span className="lg:ml-5 text-3xl text-red-400 font-bold dm-sans ">
          Candy Blinks
        </span>
      </div>
      <div
        className={`transition ease-out lg:static absolute lg:min-h-fit min-h-screen lg:w-auto w-full top-[100%] left-0 py-10 lg:py-0  ${
          barState ? "bg-slate-950" : "hidden lg:block"
        }`}
      >
        <ul className={`flex-col lg:flex-row flex items-center lg:gap-0`}>
          <li className={`${barState ? "block" : "lg:block hidden"}`}>
            <Link
              className={`lg:text-xl text-3xl dm-sans m-4 hover:text-slate-400 text-slate-100 transition duration-200 `}
              href="#home"
              onClick={() => {
                setBarState(false);
              }}
            >
              Home
            </Link>
          </li>
          <li className={`${barState ? "block mt-8" : "lg:block hidden"}`}>
            <Link
              className={` lg:text-xl text-3xl  dm-sans m-4 hover:text-slate-400 text-slate-100 transition duration-200 `}
              href="#about"
              onClick={() => {
                setBarState(false);
              }}
            >
              About
            </Link>
          </li>
          <li className={`${barState ? "block mt-8" : "lg:block hidden"}`}>
            <Link
              className={` lg:text-xl text-3xl  dm-sans m-4 hover:text-slate-400 text-slate-100 transition duration-200`}
              href="#partners"
              onClick={() => {
                setBarState(false);
              }}
            >
              Partners
            </Link>
          </li>
          <li className={`${barState ? "block mt-8" : "lg:block hidden"}`}>
            <Link
              className={` lg:text-xl text-3xl  dm-sans m-4 hover:text-slate-400 text-slate-100 transition duration-200`}
              href="https://docs.candyblinks.fun/"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setBarState(false);
              }}
            >
              Whitepaper
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className={`${barState ? "block" : "lg:block hidden"}`}>
          <div className="z-999 lg:block hidden ">
            <div className="flex gap-2 items-center">
              <Link
                className="text-xl bg-red-400 hover:bg-red-500 text-white dm-sans font-bold py-2 px-4 rounded duration-200 transition"
                href="/whitelist"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <ul className="flex items-center">
          <li
            className={`ml-5 m-3 text-2xl cursor-pointer hover:text-slate-200 text-slate-100 transition duration-200 
              `}
          >
            {barState ? (
              <GrClose
                onClick={() => {
                  setBarState(!barState);
                }}
              />
            ) : (
              <FaBars
                onClick={() => {
                  setBarState(!barState);
                }}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
