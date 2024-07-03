"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { navlinks } from "@/constant";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const handleLinkClick = (link: any) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-darkPrimary px-5 py-7 lg:px-0">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.png"
            alt="Logo"
            width="100"
            height="100"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-4 text-white lg:flex">
          {navlinks.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className={`${link.url === pathName ? "text-primary" : "text-white"} cursor-pointer duration-100 hover:text-primary`}
            >
              <li>{link.name} |</li>
            </Link>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="text-white lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="fixed left-0 right-0 top-24 z-50 flex h-full flex-col items-center gap-4 bg-darkPrimary px-4 py-5 text-white lg:hidden">
            {navlinks.map((link, i) => (
              <li
                onClick={() => handleLinkClick(link.url)}
                key={i}
                className="w-full cursor-pointer bg-darkSecondary py-4 text-center hover:text-primary"
              >
                {link.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
