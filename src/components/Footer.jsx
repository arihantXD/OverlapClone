import React from "react";

const Footer = () => {
  return (
    <div className="my-7 px-4 sm:my-4">
      <div className="flex gap-7 items-center sm:flex-col sm:items-start sm:gap-3">
        <a href="https://www.ycombinator.com/companies/overlap" target="_blank">
          <img className="w-64" src="/overlapBackedByYc.svg" alt="" />
        </a>
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/overlap-explore-conversations/id6449747632"
        >
          <img className="w-24" src="/appleStore.svg" alt="" />
        </a>
      </div>
      <p className="mt-3">
        Overlap is an AI-powered podcast assistant. Ask it about any topic or
        person, and it’ll give you a custom podcast playlist of clips relevant
        to what you asked for. It is a breakthrough way to listen to podcasts.
      </p>
    </div>
  );
};

export default Footer;
