import React from "react";

let titleText = "HydroShark";

const MarqeeLanding = ({ textColor }) => {
  return (
    <div class="absolute overflow-hidden [--offset:40vw] [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] ">
      <div
        style={{ color: textColor }}
        class="w-fit flex relative transform-[translate3d(var(--move-initial),0,0)] animate-marquee [animation-play-state:running]"
        aria-hidden="true"
      >
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
      </div>

      <div
        style={{ color: textColor }}
        class="w-fit flex relative transform-[translate3d(var(--move-initial),0,0)] animate-marquee [animation-play-state:running] [animation-direction:reverse]"
        aria-hidden="true"
      >
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
      </div>
      <div
        style={{ color: textColor }}
        class="w-fit flex relative transform-[translate3d(var(--move-initial),0,0)] animate-marquee [animation-play-state:running]"
        aria-hidden="true"
      >
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
      </div>
      <div
        style={{ color: textColor }}
        class="w-fit flex relative transform-[translate3d(var(--move-initial),0,0)] animate-marquee [animation-play-state:running] [animation-direction:reverse]"
        aria-hidden="true"
      >
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
        <span class="text-[10vw] p-[0_2vw]">{titleText}</span>
      </div>
    </div>
  );
};

export default MarqeeLanding;
