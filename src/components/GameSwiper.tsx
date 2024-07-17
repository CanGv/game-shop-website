
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { SwiperSlide, Swiper } from 'swiper/react';
import Elden_Ring from "../assets/Elden_Ring.jpg";
import It_Takes_Two from "../assets/It_Takes_Two.jpg";
import Star_Wars_Jedi_Fallen_Order from "../assets/Star_Wars_Jedi_Fallen_Order.jpg";
import Valorant from "../assets/Valorant.jpg";
import PUBG from "../assets/PUBG.jpg";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import Swiper styles
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"

// Install Swiper modules
function GameSwiper() {
    return (
        <>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 80,
                    depth: 200,
                    modifier: 1.8,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper Swiper"
            >
                <SwiperSlide>
                    <img src={PUBG} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Elden_Ring} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={It_Takes_Two} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Valorant} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Star_Wars_Jedi_Fallen_Order} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default GameSwiper
