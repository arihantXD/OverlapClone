import React from "react";
import {
  MdOutlinePlaylistAdd,
  MdOutlineAccessTime,
  MdOutlineIosShare,
} from "react-icons/md";

const FeatureSection = () => {
  return (
    <div className="px-4">
      <div className="border-y-2 flex items-center sm:flex-col sm:items-start gap-7 md:gap-5 py-5 px-2 [&>div]:flex [&>div]:flex-col [&>div]:items-center sm:[&>div]:items-start">
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:gap-3">
            <MdOutlinePlaylistAdd className="text-xl " />
            <span className="text-base font-medium">
              Personalized Playlists
            </span>
          </div>
          <span className="text-center sm:text-start pt-5 md:pt-2 sm:pt-2">
            Just enter a topic, and our AI delivers a playlist tailored to your
            interests
          </span>
        </div>
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:gap-3">
            <MdOutlineAccessTime className="text-xl" />
            <span className="text-base font-medium ">Time-Saving</span>
          </div>
          <span className="text-center sm:text-start pt-5 md:pt-2 sm:pt-2">
            Skip the full episode get a 5-minute highlight reel based on your
            preferences
          </span>
        </div>
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:gap-3">
            <MdOutlineIosShare className="text-xl" />
            <span className="text-base font-medium">Effortless Sharing</span>
          </div>
          <span className="text-center sm:text-start pt-5 md:pt-2 sm:pt-2">
            Discover and easily share your favorite podcast clips with friends
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
