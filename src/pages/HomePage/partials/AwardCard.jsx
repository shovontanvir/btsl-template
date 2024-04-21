import React from "react";

const AwardCard = ({ Awardnum, Award, Awardname, Awardyear, theme }) => {
  return (
    <div className="text-center">
      <div className=" border-b-2 border-[#969696] py-10 relative">
        <div className="absolute bg-white w-4 aspect-square rounded-full left-1/2 -bottom-2"></div>
        <h1
          className={` ${
            theme === "dark" ? "stroketextawardswhite" : "stroketextawardsdark"
          } font-Poppins text-9xl `}
        >
          {Awardnum}
        </h1>
      </div>
      <div className="py-10">
        <p
          className={`font-prata text-lg ${
            theme === "dark" ? "text-white" : "text-black"
          } pb-5`}
        >
          {Award}
        </p>
        <h1 className="font-blackerdisplay text-2xl text-[#606060]">
          {Awardname}
        </h1>
        <h1
          className={`my-3 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          |
        </h1>
        <p className="font-bodoni72 border-indigo-300 text-[#225FA9] font-normal text-2xl">
          {Awardyear}
        </p>
      </div>
    </div>
  );
};

export default AwardCard;
