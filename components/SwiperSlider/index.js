import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Index() {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y,]}
                spaceBetween={2}
                slidesPerView={1}
                autoplaydisableoninteraction={"false"}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="">
                    <div>SLIDE 1
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div>SLIDE 2
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div>SLIDE 3
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div>SLIDE 4
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div>SLIDE 5
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div>SLIDE 6
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div>SLIDE
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
