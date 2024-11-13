"use client"

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Wrapper from "./wrapper/Wrapper";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <section className="bg-[#074643ef]">
        <nav className="flex justify-between items-center shadow-md pb-4 px-8 bg-[#d6d6d662] text-white">
          <div className="mt-4 font-bold text-xl hover:scale-105 duration-300">
            <h1>
              My <span className="text-yellow-400">Portfolio</span>
            </h1>
          </div>
          <ul className="hidden md:flex space-x-9 mt-4 font-bold">
            <Link href="/">
              <li className="hover:bg-[#074643] hover:text-yellow-400 px-3 py-1 hover:scale-105 duration-500 rounded-lg">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="hover:bg-[#074643] hover:text-yellow-400 px-3 py-1 hover:scale-105 duration-500 rounded-lg">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:bg-[#074643] hover:text-yellow-400 px-3 py-1 hover:scale-105 duration-500 rounded-lg">
                Contact
              </li>
            </Link>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <FaBars
              className="text-white text-xl cursor-pointer mt-3"
              onClick={toggleMenu}
            />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } fixed top-0 w-2/4 h-full bg-[#728f8d] text-white space-y-6 py-4 px-6 transition-all duration-300 z-10`}
        >
          <div className="flex justify-between">
            <h1 className="text-md font-bold">
              My <span className="text-yellow-400">Portfolio</span>
            </h1>
            <FaTimes
              className="text-white text-xl cursor-pointer mt-1"
              onClick={toggleMenu}
            />
          </div>
          <ul className="space-y-4 mt-10">
            <Link href="/">
              <li onClick={toggleMenu} className="hover:text-yellow-400 hover:scale-110 duration-300">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li onClick={toggleMenu} className="hover:text-yellow-400 hover:scale-110 duration-300">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li onClick={toggleMenu} className="hover:text-yellow-400 hover:scale-110 duration-300">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
}