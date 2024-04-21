import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { useRef } from "react";
import ProductData from "../../../DummyData/ProductData";
import ProductCard from "./ProductCard";
import rightarrowdark from "../../../assets/images/rightarrowblack.png";
import rightarrowlight from "../../../assets/images/rightarrowwhite.png";
import leftarrowdark from "../../../assets/images/leftarrowblack.png";
import leftarrowlight from "../../../assets/images/leftarrowwhite.png";

const Product = ({ theme }) => {
  const swiperRef = useRef();
  return (
    <section className="bg-productbg h-full" id="products">
      <div
        class={`justify-center items-center ${
          theme !== "dark" ? "bg-white/95" : "bg-black/90"
        }`}
      >
        <div className="lg:px-48 px-5 py-14 flex justify-between">
          <h1
            className={`font-blackerdisplay font-normal lg:text-6xl text-5xl ${
              theme === "dark" ? "text-white" : "text-black"
            } lg:pt-6 pt-0`}
          >
            Our Products
          </h1>
          <div className="flex">
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

        <div className=" lg:pl-48 px-5 relative ">
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            // loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            onInit={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper"
          >
            {ProductData.map((item, index) => (
              <SwiperSlide
                className={`justify-between ${
                  index % 2 === 0 ? "mt-0" : "mt-32"
                } `}
              >
                <ProductCard
                  theme={theme}
                  key={item.id}
                  image={item.image}
                  Producttitle={item.Producttitle}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Product;
