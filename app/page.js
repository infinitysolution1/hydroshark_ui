"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Transition from "@/components/Transition";
import { motion, useScroll } from "framer-motion";
import {
  CanSceneTransition,
  LandingSceneLemon,
  ReplaceScene,
} from "@/components/CanModel";
import { flavorData } from "@/utils/consts";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import BackgroundRipple from "@/components/BackgroundRipple";
import HomeSection3 from "@/components/HomeSection3";

export default function Home() {
  const ref = useRef();
  const [currentFlavour, setCurrentFlavour] = useState(0);

  return (
    <Transition>
      <div
        ref={ref}
        className="flex min-h-screen bg-[#f0f2f4] w-screen z-20 flex-col overflow-hidden relative items-center "
      >
        <div className="h-[8vh] w-[8vh] absolute right-[10vw] top-[50vh] animate-rotate -mt-2 ">
          <Image src={"/asset5.png"} layout="fill" />
        </div>

        <div class="absolute overflow-hidden [--offset:40vw] bg-black rotate-[4deg] top-[75vh] z-40 [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] ">
          <div
            class="min-w-screen w-[100vw] flex flex-row py-1 items-center relative  transform-[translate3d(var(--move-initial),0,0)] animate-marqueebanner [animation-play-state:running]"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"225mg caffine"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"Electrolytes"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"vitamins"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"minerals"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"225mg caffine"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"minerals"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
          </div>
        </div>
        <div class="absolute overflow-hidden [--offset:40vw] bg-black rotate-[-4deg] top-[75vh] z-40 [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] ">
          <div
            class="min-w-screen w-[100vw] flex flex-row py-1 items-center relative  transform-[translate3d(var(--move-initial),0,0)] animate-marqueebanner [animation-play-state:running]"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"225mg caffine"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"Electrolytes"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"vitamins"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"minerals"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"225mg caffine"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"minerals"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span class="text-sm p-[0_2vw] text-white">{"0g sugar"}</span>
            <span className="h-2 w-2 rounded-full bg-white"></span>
          </div>
        </div>

        <div className="absolute left-[25vw] z-50 h-[60vh] w-[50vw]">
          <motion.div
            initial={{ y: "70vh" }}
            animate={{ y: "30vh", opacity: [0, 1, 1] }}
            className="z-20 w-full h-full"
            transition={{ duration: 2.5, delay: 3.5, times: [0, 0.3, 1] }}
          >
            <LandingSceneLemon />
          </motion.div>
        </div>

        <div className="fixed left-0 top-[5vh]">
          <p className="text-[14rem] text-black/5 leading-[13rem]">
            HYDROSHARK
          </p>
          <p className="text-[14rem] text-black/5 leading-[13rem]">
            HYDROSHARK
          </p>
          <p className="text-[14rem] text-black/5 leading-[13rem]">
            HYDROSHARK
          </p>
          <p className="text-[14rem] text-black/5 leading-[13rem]">
            HYDROSHARK
          </p>
        </div>

        <div className="flex flex-row h-[90vh] w-screen px-[5vw] overflow-hidden pt-[5vh] relative ">
          {/* <div className=" absolute bg-transparent top-[20vh] w-[60vw] left-[20vw] overflow-hidden h-[60vh]">
            <video
              src="/bgwatervideo.mp4"
              autoPlay
              muted
              loop={false}
              playsInline
              duration={2.5}
              className="w-full h-screen object-cover"
            />
          </div> */}

          <div className="flex flex-col w-1/2 items-start">
            <h2 className=" text-black text-[5rem] font-bold leading-[5rem]">
              {"One stop for all your"} <span>Hydration</span> {"needs"}
            </h2>
            <div className=" w-7/12 flex flex-col mt-[5vh]">
              <div className="flex flex-row justify-between items-center">
                <p className=" text-black text-base">Energy</p>
                <div className="w-9/12 border-[1px] border-[#181818] h-[1vh] rounded-full">
                  <div className="w-11/12 bg-black h-full rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <p className=" text-black text-base">Caffeine</p>
                <div className="w-9/12 border-[1px] border-[#181818] h-[1vh] rounded-full">
                  <div className="w-/12 bg-black h-full rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <p className=" text-black text-base">Fatigue</p>
                <div className="w-9/12 border-[1px] border-[#181818] h-[1vh] rounded-full">
                  <div className="w-3/12 bg-black h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end w-1/2 ">
            <div className="flex flex-row justify-between w-10/12 px-8">
              <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
                <div className="w-full h-full animate-rotate absolute">
                  <Image src={"/caffeine_curved.png"} layout="fill" />
                </div>
                <div className=" w-[10vh] h-[10vh] relative">
                  <Image src={"/logo_caffeine.png"} layout="fill" />
                </div>
              </div>
              <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
                <div className="w-full h-full animate-rotate absolute">
                  <Image src={"/vitamins_curved.png"} layout="fill" />
                </div>
                <div className=" w-[10vh] h-[10vh] relative">
                  <Image src={"/logo_vitamins.png"} layout="fill" />
                </div>
              </div>
              <div className="h-[15vh] w-[15vh] relative flex flex-col items-center justify-center">
                <div className="w-full h-full animate-rotate absolute">
                  <Image src={"/zerosugar_curved.png"} layout="fill" />
                </div>
                <div className=" w-[10vh] h-[10vh] relative">
                  <Image src={"/logo_sugar.png"} layout="fill" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-end mt-[5vh]">
              <p className=" text-black text-xl font-semibold ">
                Why choose Hydroshark?
              </p>
              <p className="text-black/80 mt-1 w-7/12 text-[0.75rem] text-end leading-[1rem]">
                {
                  "Hydroshark is a new energy drink that is designed to keep you"
                }
                <span> hydrated</span> {"and energized throughout the day"}
              </p>
            </div>
          </div>
        </div>

        <RevealOnScroll
          threshold={0.2}
          addedClasses="flex flex-row justify-between items-center h-screen z-20 w-[100vw] px-[5vw] relative overflow-hidden "
        >
          <div className="h-[8vh] w-[8vh] absolute right-[20vw] top-[10vh] animate-rotate -mt-2 ">
            <Image src={"/asset5.png"} layout="fill" />
          </div>
          <div className="h-[8vh] w-[8vh] absolute left-[10vw] top-[50vh] animate-rotate -mt-2 ">
            <Image src={"/asset5.png"} layout="fill" />
          </div>
          <div className="h-[8vh] w-[8vh] absolute right-[30vw] top-[80vh] animate-rotate -mt-2 ">
            <Image src={"/asset5.png"} layout="fill" />
          </div>
          <div className=" absolute right-0 -z-10 bottom-0">
            <BackgroundRipple
              currentColor={
                flavorData[currentFlavour].id == 1 ? "#308918" : "#dfd434"
              }
            />
          </div>
          <div className=" absolute left-0 -z-10 top-0">
            <BackgroundRipple
              currentColor={
                flavorData[currentFlavour].id == 1 ? "#308918" : "#dfd434"
              }
            />
          </div>

          <div className="flex flex-row justify-center mt-[10vh]  items-center">
            <div className="flex flex-col items-end w-1/3">
              <p className=" text-xs text-[#5C6262]">DISCOVER OUR DRINKS</p>
              <h2
                className={` text-[4rem] font-semibold ${
                  flavorData[currentFlavour].id == 1
                    ? "text-[#308918]"
                    : "text-[#dfd434]"
                } `}
              >
                {flavorData[currentFlavour].title}
              </h2>
              <div className="flex flex-col items-end">
                <p className=" text-xs text-cyan-600">Quantity</p>
                <p className=" text-base text-black">
                  {flavorData[currentFlavour].quanity}
                </p>
              </div>
              <div className="flex flex-col items-end mt-[10vh]">
                <p className=" text-xs text-cyan-600">Ingredients</p>
                <p className=" text-base text-end text-black">
                  {flavorData[currentFlavour].ingredients}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center  w-1/3 px-[5vw]">
              <div className=" border-[1px] border-[#5C6262] border-dashed z-0 w-full h-[60vh] p-2 flex flex-col rounded-[2rem] items-center justify-center">
                <div className="w-full h-full relative border-[1px] border-[#5C6262]/40 rounded-[3rem]">
                  <ReplaceScene
                    scene={
                      flavorData[currentFlavour].id == 1 ? "lemon" : "mango"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center mt-4 z-20 items-center gap-x-4">
                <button
                  onClick={() => {
                    setCurrentFlavour((currentFlavour - 1) % 2);
                  }}
                  className=" p-2 cursor-pointer rounded-full border-[0.5px] border-[#5C6262]"
                >
                  <FaArrowLeft className="text-[#5C6262]" />
                </button>
                <p
                  className={` text-[1rem] font-semibold ${
                    flavorData[currentFlavour].id == 1
                      ? "text-[#308918]"
                      : "text-[#dfd434]"
                  } `}
                >
                  {flavorData[currentFlavour].title}
                </p>
                <button
                  onClick={() => {
                    setCurrentFlavour((currentFlavour + 1) % 2);
                  }}
                  className=" p-2 cursor-pointer rounded-full border-[0.5px] border-[#5C6262]"
                >
                  <FaArrowRight className="text-[#5C6262]" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start w-1/3">
              <p className=" text-xs text-[#5C6262]">
                EXPERIANCE HYDRATION WITH OUR{" "}
                <span
                  className={` font-semibold ${
                    flavorData[currentFlavour].id == 1
                      ? "text-[#308918]"
                      : "text-[#dfd434]"
                  } `}
                >
                  {flavorData[currentFlavour].title}
                </span>{" "}
                FlAVOUR
              </p>
              <p className=" text-black text-xl">
                {flavorData[currentFlavour].description}
              </p>

              <div className="flex flex-col w-9/12 items-start border-y-[1px] border-dashed border-[#5C6262] mt-[10vh] py-2">
                <div className="flex flex-row w-full justify-between items-center border-b-[0.5px] border-[#5C6262]">
                  <div className=" flex flex-col w-1/2 items-center justify-center p-6 border-r-[1px] border-[#5C6262]">
                    <p className=" text-xs text-cyan-600">Temperature</p>
                    <p className=" text-2xl text-black">{"15-20°C"}</p>
                  </div>
                  <div className=" flex flex-col w-1/2  items-center justify-center p-6">
                    <p className=" text-xs text-cyan-600">Calories</p>
                    <p className=" text-2xl text-black">{"99 Kcal"}</p>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between items-center ">
                  <div className=" flex flex-col w-1/2  items-center justify-center p-6 border-r-[1px] border-[#5C6262]">
                    <p className=" text-xs text-cyan-600">Caffeine</p>
                    <p className=" text-2xl text-black">{"0 mg"}</p>
                  </div>
                  <div className=" flex flex-col w-1/2  items-center justify-center p-6">
                    <p className=" text-xs text-cyan-600">Vitamins</p>
                    <p className=" text-2xl text-black">{"B - 2,6,12"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <HomeSection3 />
      </div>
    </Transition>
  );
}
