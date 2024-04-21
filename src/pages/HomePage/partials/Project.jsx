import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef } from "react";
import ProjectsData from "../../../DummyData/ProjectsData";
import ProjectCard from "./ProjectCard";

const Project = ({ theme }) => {
  const swiperRef = useRef();
  return (
    <section
      className={` ${
        theme === "dark" ? "bg-blackbg" : "bg-lightbg"
      } dark:bg-repeat py-10`}
      id="projects"
    >
      <div
        className={`lg:px-48 px-5 pt-14 flex flex-col lg:flex-row ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <h1 className="basis-1/2 font-blackerdisplay font-normal lg:text-5xl text-5 lg:pb-0 pb-5">
          Our Project
        </h1>
        <p className="basis-2/3 font-prata font-normal text-lg lg:text-right">
          Cinzel is the all-in-one WordPress theme to create your amazing dream
          website. Easy to use, highly customizable and modern, with 29+
          detailed prebuilt websites.
        </p>
      </div>

      <div className=" lg:pl-52 px-5 relative py-14 ">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          onInit={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          {ProjectsData.map((item) => (
            <SwiperSlide className="justify-between ">
              <ProjectCard
                theme={theme}
                key={item.id}
                image={item.image}
                altDesc={item.heading}
                heading={item.heading}
                subHeading={item.subHeading}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
