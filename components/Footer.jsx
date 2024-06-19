"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const navItems = [
  {
    title: "Explore",
    path: "/explore",
  },
  {
    title: "Athletes",
    path: "/athletes",
  },
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Media",
    path: "/media",
  },
];

const altItems = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Shop",
    path: "/shop",
  },
];

const Footer = () => {
  return (
    <div className=" flex flex-col w-full items-center bg-[#181818] py-8 h-[50vh] z-50 relative">
      <div class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className="flex flex-row justify-between items-start w-10/12">
        <div className=" h-[10vh] w-[10vh] relative">
          <Image src="/hydroshark.png" layout="fill" />
        </div>
        <div className="w-3/12 flex flex-row justify-between">
          <div className=" flex flex-col items-start gap-y-1">
            {navItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className=" text-xs group cursor-pointer text-[#DEE2E6]"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className=" flex flex-col items-start gap-y-1">
            {altItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className=" text-xs group cursor-pointer text-[#DEE2E6]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row w-1/12 justify-between items-center">
          <a onClick={() => {}}>
            <FaInstagram className="text-[#DEE2E6] text-base" />
          </a>
          <a onClick={() => {}}>
            <FaXTwitter className="text-[#DEE2E6] text-base" />
          </a>
          <a onClick={() => {}}>
            <FaFacebook className="text-[#DEE2E6] text-base" />
          </a>
          <a onClick={() => {}}>
            <AiOutlineYoutube className="text-[#DEE2E6] text-base" />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col items-center -mt-8">
        <p
          style={{
            transform: `perspective(1000px) rotateX(45deg)`,
          }}
          className=" text-[12rem] text-[#DEE2E6]"
        >
          HYDROSHARK
        </p>
      </div>
      <div className="w-full mt-6 flex absolute bottom-0 p-2 flex-col-reverse items-center  md:flex-row md:justify-between">
        <p className="text-center text-xs text-[#DEE2E6]">
          &copy; {new Date().getFullYear()} Hydroshark. All rights reserved.
        </p>
        <div className="flex flex-row text-sm justify-end w-full  md:w-3/12 mb-4 md:mb-0 text-[#DEE2E6]">
          <p className="text-[12px]">Developed and Maintained By </p>
          <a
            href="https://theinfinitysolutions.net"
            className="underline font-bold text-[12px] ml-2"
          >
            The Infinity Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;