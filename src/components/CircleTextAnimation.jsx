import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import arrow from "../assets/images/arrow.png";
import arrowwhite from "../assets/images/arrowwhite.png";

const CircleTextAnimation = ({ theme }) => {
  const text = "KNOW MORE ABOUT BTSL.KNOW MORE ABOUT BTSL. ";

  return (
    <>
      <div className="relative w-[200px] aspect-square flex justify-center rounded-full">
        <div className="absolute inset-8  bg-[#225FA9] rounded-full flex justify-center items-center">
          <img src={theme === "dark" ? arrowwhite : arrow} alt="" />
        </div>
        <div className="relative rounded-full animate-spin-slow">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className=" absolute inset-0 whitespace-nowrap "
              style={{ transform: `rotate(${i * 8.5}deg)` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default CircleTextAnimation;
