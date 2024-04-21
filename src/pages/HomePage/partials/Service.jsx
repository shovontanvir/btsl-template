import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceData from '../../../DummyData/ServiceData'

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Service = ({theme}) => {
  return (
    <section className={`lg:px-48 lg:py-10 py-0 px-5 h-auto ${theme === "dark" ? "bg-servicebgdark" : "bg-servicebglight"} bg-cover bg-center `}id='services'>
       <div className={`font-blackerdisplay text-black ${theme === "dark" ? "text-white" : "text-black"} font-normal lg:text-6xl text-5xl pt-16`}> 
            <h1>
            Services We Offer
            </h1>
       </div>
       <div className="relative py-10 ">
          <Swiper
          breakpoints={{
            '640': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 2,
              
            },
            '1024': {
              slidesPerView: 4,
              
            },
          
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]} 
          className="mySwiper"
          >
          {ServiceData.map((item) => (
            <SwiperSlide className='justify-between'>
            <ServiceCard theme={theme}
              key={item.id}
              title={item.title}
              description={item.description}
              ad={item.ad}
              aw={item.aw}
            />
            </SwiperSlide>
          ))}
          
          </Swiper>
          
        </div>
        
        

        
    </section>
  )
}

export default Service