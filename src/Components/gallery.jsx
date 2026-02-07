import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import proj1 from "../assets/project1.jpg"
import proj2 from "../assets/project2.jpg"
import proj3 from "../assets/project3.jpg"
import proj4 from "../assets/project4.jpg"
import proj5 from "../assets/project5.jpg"
import proj6 from "../assets/project6.jpg"



import "../style/gallery.css"
function Gallery() {
  return (
    <div className="gallery-container">
        <div className="text-contentGallery">
            <h2 className="titleGallery">Recent Repairs & Tune-Ups</h2>
            <p className="descriptionGallery">
            See Real mower repairs, servicing and blade shrarpening done in our workshop.
         </p>
        </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
            // enabled:true,
            delay: 2500, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after interactions
          }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
            {/* <div className="overlay">
                <h2>Kitchen</h2>
                <p>Designed By Zuhak Tiling</p>
            </div> */}
          <img src={proj1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        {/* <div className="overlay">
                <h2>Bathroom</h2>
                <p>Designed By Zuhak Tiling</p>
            </div> */}
          <img src={proj2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
        {/* <div className="overlay">
                <h2>Commercial</h2>
                <p>Designed By Zuhak Tiling</p>
            </div> */}
          <img src={proj3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            {/* <div className="overlay">
                <h2>Floor</h2>
                <p>Designed By Zuhak Tiling</p>
            </div> */}
          <img src={proj4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            {/* <div className="overlay">
                <h2>Floor</h2>
                <p>Designed By Zuhak Tiling</p>
            </div> */}
          <img src={proj5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            {/* <div className="overlay">
                <h2>Floor</h2>
                <p>Designed By Zuhak Tiling</p>
            </div> */}
          <img src={proj6} alt="slide_image" />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
   
      </Swiper>
       
    </div>
  );
}

export default Gallery;