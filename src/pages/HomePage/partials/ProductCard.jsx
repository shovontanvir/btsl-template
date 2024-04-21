import React from "react";

const ProductCard = ({ image, Producttitle, description, theme }) => {
  return (
    <div className="group text-center p-2 ">
      <div className="relative overflow-hidden">
        <img
          src={image}
          className="w-full transition-all duration-500 hover:bg-blue-300 group-hover:scale-150"
        />
        <div className="absolute inset-0 p-5 -bottom-10 group-hover:bottom-0">
          <div className=" bg-[#225FA9]/50 flex items-center justify-center  opacity-0 group-hover:opacity-100 duration-300 w-full h-full">
            <h1 className={`font-prata text-3xl font-normal text-white`}>
              {Producttitle}
            </h1>
          </div>
        </div>
      </div>
      <button
        className={`text-lg font-light font-prata ${
          theme === "dark" ? "text-white" : "text-black"
        } py-5 invisible group-hover:visible hover:text-[#225FA9] dark:hover:text-[#225FA9]`}
      >
        Read More
      </button>
    </div>
  );
};

export default ProductCard;
