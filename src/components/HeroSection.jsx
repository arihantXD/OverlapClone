import React from "react";
import { GoArrowDown } from "react-icons/go";
import { IoMdStarOutline } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="flex sm:flex-col my-8 sm:my-4 gap-8 sm:gap-4">
      <img
        className="w-[20%] sm:w-full sm:h-[300px] sm:object-contain sm:rotate-0 sm:ml-0 ml-20 rotate-12"
        src="/phone.png"
        alt=""
      />
      <div className="mt-20 md:mt-12 sm:mt-0  px-3">
        <span className="text-3xl md:text-2xl sm:text-2xl font-semibold sm:font-medium">
          Personalize Your Podcast Experience
        </span>
        <span className="block text-xl mt-1 sm:text-base">
          AI Search on Podcasts and more
        </span>
        <span className="text-xl text-blue block mt-1 sm:text-base">
          - With Overlap
        </span>
        <div className="mt-2 flex gap-5 w-80 sm:w-full [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:py-1 [&>div]:px-4 [&>div]:gap-2 [&>div]:rounded-full">
          <div className="bg-grey hover:bg-ligthGrey">
            <a
              className="flex gap-2 items-center"
              target="_blank"
              href="https://apps.apple.com/us/app/overlap-explore-conversations/id6449747632"
            >
              <span className="font-medium">Download</span>
              <GoArrowDown className="text-blue" />
            </a>
          </div>
          <div className="bg-grey">
            <span>Ratings</span>
            <div className="flex items-center text-base">
              <IoMdStarOutline />
              <span className="text-base font-semibold">4.7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
