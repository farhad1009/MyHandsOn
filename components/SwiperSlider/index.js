import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

export default function Index() {
    
    return (
        <>
            <Swiper
                spaceBetween={2}
                slidesPerView={1}
                autoplaydisableoninteraction={"false"}
                loop={true}
                pagination={{ clickable: true }}
                className="custom-class"
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                
                    <SwiperSlide>
                        <h1>Slider 1</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slider 2</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slider 3</h1>
                    </SwiperSlide>
               
            </Swiper>
            <div>
                <div className="custom-prev">Pre</div>
                <div className="custom-next">Next</div>
            </div>
        </>
    )
}
