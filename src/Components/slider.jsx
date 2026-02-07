import React from 'react';
import Slider from 'react-slick';

import '../style/slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/slider.jpg"
import image2 from "../assets/slider1.jpg"
import image3 from "../assets/slider3.jpg"
import image4 from "../assets/slider4.jpg"
import leftArrow from "../assets/leftArow.png"
import rightArrow from "../assets/rightArrow.png"


export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src={rightArrow} alt="Next" className="rightArrow"/>
      </div>
    );
  };
  
  export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src={leftArrow} alt="Previous" className="leftArrow"/>
      </div>
    );
  };


const ProjectShowcase = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: i => (
            <div className="custom-dot"></div>
          ),
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
    
      return (
        <section className="project-showcase">
          <div className="text-content-slider">
            <h2 className="slider-title">Our Services</h2>
            <p className="slider-description">
            High-Quality Tiling Services Tailored to Your Needs. Transforming Homes and Businesses with Precision and Style
            </p>
          </div>
          <Slider {...settings} className='main-container'>
            <div className="slider-item">
            <a href="link/to/detail-page3">
            <img src={image3} alt="" className='slider-image'/>
            {/* lazy loading of image */}
            {/* <LazyLoadImage
            src={image3}
            alt=""
            className="slider-image"
            effect="blur"
            threshold={200}
            /> */}
            
              </a>
              <div className="item-name">Commercial</div>
            </div>
            <div className="slider-item">
            <a href="./services">
              {/* lazy loading of image */}
              <img src={image1} alt="" className='slider-image'/>
            {/* <LazyLoadImage
            src={image1}
            alt=""
            className="slider-image"
            effect="blur"
            threshold={200}
            /> */}
              </a>
                <span className="item-name">Kitchen</span>
            </div>
            <div className="slider-item">
            <a href="link/to/detail-page3">

              {/* lazy loading of image */}
              <img src={image2} alt="" className='slider-image'/>
            {/* <LazyLoadImage
            src={image2}
            alt=""
            className="slider-image"
            effect="blur"
            threshold={200}
            /> */}
              </a>
                <span className="item-name">Bathroom</span>
            </div>
            <div className="slider-item">
            <a href="link/to/detail-page3">

              {/* lazy loading of image */}
              <img src={image4} alt="" className='slider-image'/>
            {/* <LazyLoadImage
            src={image4}
            alt=""
            className="slider-image"
            effect="blur"
            threshold={200}
            /> */}
              </a>
                <span className="item-name">Floor</span>
            </div>
          </Slider>
        </section>
      );
    };

export default ProjectShowcase;
