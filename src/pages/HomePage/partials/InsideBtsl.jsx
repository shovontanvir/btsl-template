import React from "react";

import img1 from "../../../assets/images/blogone.jpg";
import img2 from "../../../assets/images/blogtwo.png";
import img3 from "../../../assets/images/blogthree.png";
import img4 from "../../../assets/images/blogfour.png";
import rightarrowdark from "../../../assets/images/rightarrowblack.png";
import rightarrowlight from "../../../assets/images/rightarrowwhite.png";
import leftarrowdark from "../../../assets/images/leftarrowblack.png";
import leftarrowlight from "../../../assets/images/leftarrowwhite.png";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const InsideBtsl = ({ theme }) => {
  const swiperRef = useRef();
  return (
    <section
      className={`lg:pl-48 px-5 ${
        theme === "dark" ? "bg-[#222]" : "bg-[#F4F4F4]"
      } bg-cover bg-center py-28 `}
    >
      <div className="flex justify-between">
        <h1
          className={`pb-28 lg:text-6xl text-5xl font-blackerdisplay ${
            theme === "dark" ? "text-[#fff]" : "text-[#000]"
          }`}
        >
          Inside BTSL
        </h1>
        <div className="lg:pr-48 pr-5 pt-1">
          <button className="gap-10 flex items-center">
            <div className="relative group">
              <div
                className={`w-8 aspect-square border ${
                  theme === "dark"
                    ? "border-white group-hover:bg-[#d9d9d9]/20"
                    : "border-black group-hover:bg-black/20"
                } rounded-full absolute -right-2 top-1 group-hover:w-14  group-hover:aspect-video transition-all duration-500`}
              ></div>
              <img
                src={theme !== "dark" ? rightarrowdark : rightarrowlight}
                alt=""
                className="w-10 relative"
                onClick={() => swiperRef.current?.slidePrev()}
              />
            </div>
            <div className="relative group">
              <div
                className={`w-8 aspect-square border ${
                  theme === "dark"
                    ? "border-white group-hover:bg-[#d9d9d9]/20"
                    : "border-black group-hover:bg-black/20"
                } rounded-full absolute -left-2 top-1 group-hover:w-14  group-hover:aspect-video transition-all duration-500`}
              ></div>
              <img
                src={theme !== "dark" ? leftarrowdark : leftarrowlight}
                alt=""
                className="w-10 relative"
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>
          </button>
        </div>
      </div>

      <div className="">
        <Swiper
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          onInit={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default InsideBtsl;
