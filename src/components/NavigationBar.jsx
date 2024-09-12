import React from "react";
import Logo from "./Logo";

const NavigationBar = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <div className="flex items-center mb-2 gap-4">
        <a
          href="https://www.ycombinator.com/companies/overlap"
          target="_blank"
          className="sm:hidden"
        >
          <span>Find on YCombinator</span>
        </a>
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/overlap-explore-conversations/id6449747632"
        >
          <span className="border-2 rounded-full px-3 py-1 hover:bg-ligthGrey">
            Download
          </span>
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
