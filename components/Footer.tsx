import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
import { footerSocials } from "@/constant";
const Footer = () => {
  return (
    <footer className="bg-darkSecondary p-5">
      <div className="flex flex-col items-center justify-center text-white">
        <h2 className="text-center">
          Find an issue with this page?{" "}
          <span className="cursor-pointer text-primary hover:underline">
            Fix it on Github
          </span>
        </h2>

        <div className="flex flex-col items-center py-4">
          <h3 className="inline-flex items-center gap-2">
            Copyright{" "}
            <span>
              <FaRegCopyright />
            </span>{" "}
            2024 Naruto
          </h3>

          <h3 className="inline-flex items-center gap-2">
            Created with <RiNextjsFill size={25} /> by{" "}
            <Link href="https://cpizarra.vercel.app/">
              <span className="text-emerald-500 hover:underline">
                Cesar Pizarra
              </span>
            </Link>
          </h3>
        </div>

        <div className="flex items-center gap-4">
          {footerSocials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary"
            >
              {React.createElement(social.logo, { size: 20 })}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
