import React from 'react'
import AwardCard from '../partials/AwardCard'
import AwardsData from '../../../DummyData/AwardsData'

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Awards = ({theme}) => {
  return (
    <div className={`lg:px-48 px-5 ${theme === "dark" ? "bg-blackbg" : "bg-lightbg"} py-20 `}>
      <h1 className={`${theme === "dark" ? "text-white" : "text-black"} lg:text-6xl text-5xl font-blackerdisplay`}>
        Our Awards
      </h1>
      <div>
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
            {AwardsData.map((item) => (
              <SwiperSlide className='justify-between'>
              <AwardCard theme={theme}
                key={item.id}
                Awardnum={item.Awardnum}
                Award={item.Award}
                Awardname={item.Awardname}
                Awardyear={item.Awardyear}

                
              />
              </SwiperSlide>
            ))}
            
            </Swiper>
            
          </div>
        </div>
        
    </div>
  )
}

export default Awards