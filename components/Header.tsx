"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-darkPrimary px-5 py-7 lg:px-0">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width="100"
            height="100"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-4 text-white lg:flex">
          <li className="flex items-center gap-2">
            <input
              placeholder="Search Character..."
              className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-[#292929] px-6 py-2 text-base text-white transition hover:border-[#fff]"
              type="text"
            />

            <button className="rounded-lg bg-primary px-3 py-2">Search</button>
          </li>
          <li className="cursor-pointer duration-100 hover:text-primary">
            About
          </li>
          <div className="cursor-pointer">
            <FaGithub size={25} />
          </div>
        </ul>

        {/* Hamburger Icon */}
        <div className="text-white lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute left-0 right-0 top-40 flex h-full flex-col items-center gap-4 bg-darkPrimary px-4 py-5 text-white md:hidden">
            <li className="bg-darkSecondary w-full cursor-pointer py-4 text-center hover:text-primary">
              About
            </li>

            <div className="cursor-pointer">
              <FaGithub size={25} />
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
