"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Athletes = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#f0f2f4] flex flex-col z-40 items-center">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <div className=" flex flex-col items-center w-11/12 ">
        <div className=" w-full bg-[#495057] z-20 h-[60vh] mt-[2.5vh] flex flex-row justify-between items-center px-[5vw]">
          <div className=" h-[30vh] w-[30vh] relative">
            <Image src="/hydroshark.png" layout="fill" />
          </div>

          <div className="flex">
            <h3 className=" text-[6rem] text-white">ATHLETES</h3>
          </div>
        </div>

        <div className=" h-[50vh] w-full flex flex-row justify-between items-center mt-[5vh]">
          <div className=" w-6/12 h-[50vh] relative group">
            <Image src={"/athlete1.jpeg"} layout="fill" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className=" text-white text-4xl">{"Athlete 1"}</h3>
              <p className=" text-white/80 text-base">Sport</p>
            </div>
          </div>
          <div className=" w-[22.5%] h-[50vh] relative group">
            <Image src={"/athlete2.jpeg"} layout="fill" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className=" text-white text-4xl">{"Athlete 2"}</h3>
              <p className=" text-white/80 text-base">Sport</p>
            </div>
          </div>
          <div className="w-[22.5%] h-[50vh] relative group">
            <Image src={"/athlete3.jpeg"} layout="fill" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className=" text-white text-4xl">{"Athlete 3"}</h3>
              <p className=" text-white/80 text-base">Sport</p>
            </div>
          </div>
        </div>

        <div className=" h-[20vh] bg-black/90 w-full flex mt-[5vh] flex-row gap-x-8 items-center justify-center">
          <div className=" h-[10vh] w-[10vh] relative">
            <Image src="/hydroshark.png" layout="fill" />
          </div>
          <h3 className=" text-[] italic text-4xl">
            {"Experience the Hydroshark Difference"}
          </h3>
        </div>

        <div className=" h-[50vh] w-full flex flex-row justify-between items-center my-[5vh]">
          {[4, 2, 3, 4].map((item, index) => {
            return (
              <div className="w-[23%] h-[50vh] relative group">
                <Image src={`/athlete${item}.jpeg`} layout="fill" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className=" text-white text-4xl">{`Athlete ${item}`}</h3>
                  <p className=" text-white/80 text-base">Sport</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Athletes;