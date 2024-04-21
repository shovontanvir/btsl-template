import React from "react";

const ServiceCard = ({ title, ad, aw, description, theme }) => {
  return (
    <div className="relative border-2 border-black dark:border-[#414141] group duration-700 h-[32rem] flex flex-col justify-center items-center  p-2">
      {/* <div className="h-full w-full relative"></div> */}
      <div className=" h-full w-full relative">
        <div className="absolute bg-[#225FA9] w-8 h-8 top-0 right-0  group-hover:w-full group-hover:h-full transition-all duration-700"></div>
        <div className="relative flex flex-col justify-center items-center h-full">
          <h1
            className={`font-blackerdisplay font-normal ${
              theme === "dark" ? "text-white" : "text-black"
            } text-4xl -rotate-90 text-center cursor-pointer group-hover:rotate-0 duration-700 ease-in-out group-hover:mb-12`}
          >
            {title}
          </h1>
          <p
            className={`font-syne font-normal text-xl ${
              theme === "dark" ? "text-white" : "text-black"
            } text-center px-4 hidden opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-700`}
          >
            {description}
          </p>
          <button>
            <img
              src={theme === "dark" ? aw : ad}
              className="absolute bottom-5 left-24 h-16 p-4  rotate-0 group-hover:rotate-45 duration-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
