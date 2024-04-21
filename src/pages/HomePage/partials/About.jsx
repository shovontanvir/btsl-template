import React from "react";
import AchivementCount from "./AchivementCount";
import slidearrow from "../../../assets/images/slidearrow.png";

const About = ({ theme }) => {
  return (
    <section
      className={` ${theme == "dark" ? "bg-[#181818]" : "bg-[#F4F4F]"} pt-20`}
      id="about"
    >
      <div className="lg:px-48 md:px-24 px-5">
        <div
          className={`flex flex-col lg:flex-row justify-between items-center rounded-xl ${
            theme == "dark" ? "bg-[#090909]" : "bg-[#F9F9F9]"
          }`}
        >
          <div className="py-20 flex-1">
            <h1
              className={`font-blackerdisplay font-normal lg:text-6xl text-5xl lg:px-11 px-5 ${
                theme == "dark" ? "text-white" : "text-black"
              } `}
            >
              Our <br /> Achievements
            </h1>
          </div>
          <div className="justify-center  lg:py-0 py-10 flex lg:pr-5 pr-0 pt-0 lg:pt-2 ">
            <AchivementCount theme={theme} />
          </div>
        </div>
        <div
          className={`lg:py-14 py-10 text-center ${
            theme == "dark" ? "text-white" : "text-black"
          } `}
        >
          <h1 className=" font-blackerdisplay lg:text-5xl text-3xl ">
            About Us
          </h1>
          <p className=" font-blackerdisplay justify-between lg:text-xl text-lg lg:py-10 py-10 lg:px-24 px-5 !leading-[3rem]">
            From Consumer centric to Enterprise, Telecom and Government, B-Trac
            Solutions Ltd. works alongside our clients to design and develop
            mobile, web and desktop software applications. Our solutions are
            founded in user-centered design that emphases on client first, while
            leveraging the Cloud, Big Data and Internet of Things to deliver
            context-aware and adaptive experience.We also have our own research
            and development center with a goal to offer unmatched quality and
            cost-effectiveness for our clients
          </p>
        </div>
      </div>
      <div>
        <p className="loopslider stroketext bg-[#225FA9] text-7xl py-10 text-white">
          <infinity>
            <div className="flex">
              <h1 className="flex px-20 font-blackerdisplaybold">
                Design & Development Craft{" "}
                <img src={slidearrow} className="h-20 p-4 " />
              </h1>
              <h1 className="flex font-blackerdisplaybold">
                Design & Development Craft{" "}
                <img src={slidearrow} className="h-20 p-4" />
              </h1>
              <h1 className="flex px-20 font-blackerdisplaybold">
                Design & Development Craft{" "}
                <img src={slidearrow} className="h-20 p-4" />
              </h1>
              <h1 className="flex font-blackerdisplaybold ">
                Design & Development Craft{" "}
                <img src={slidearrow} className="h-20 p-4" />
              </h1>
            </div>
          </infinity>
        </p>
      </div>
    </section>
  );
};

export default About;
