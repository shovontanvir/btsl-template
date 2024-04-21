import React from "react";
import AchivementCount from "./AchivementCount";
import arrow from "../../../assets/images/arrow.png";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap/gsap-core";
import { transform } from "framer-motion";
import CircleTextAnimation from "../../../components/CircleTextAnimation";

// import { useTypewriter, Cursor } from 'react-simple-typewriter'

const LandingPage = ({ theme }) => {
  return (
    <section className="" id="home">
      <div
        className={` lg:px-48 md:px-24 pl-5 h-screen bg-fixed ${
          theme !== "dark" ? "bg-whitehb" : "bg-darkhb"
        }  bg-cover bg-center`}
      >
        <div
          className={`pt-72 flex h-full text-left justify-between ${
            theme !== "dark" ? "text-black" : "text-white"
          } `}
        >
          <div className="font-blackerdisplay">
            <h1 className=" lg:text-6xl md:text-5xl text-3xl gap-5 mb-3">
              {" "}
              We Enrich Lives <br /> Through EXPERIENCE{" "}
            </h1>
            <TypeAnimation
              className="text-[#225FA9] lg:text-6xl text-3xl"
              sequence={[
                "<  CLOUD  />",
                1000,
                "<  E-COMMERCE  />",
                1000,
                "<  WEB  />",
                1000,
                "<  SOFTWARE  />",
                1000,
                "<  DESKTOP  />",
                1000,
                "<  HARDWARE  />",
                1000,
                "<  MOBILE  />",
                1000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </div>
          <div className="h-full flex items-end pb-20">
            <CircleTextAnimation theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
