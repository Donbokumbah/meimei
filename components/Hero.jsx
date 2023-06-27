import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Link from "next/link";

const slides = [
  {id: 1,img: "/img/slide1.jpg"},
  {id: 2,img: "/img/slide2.jpg"},
  {id: 3,img: "/img/slide3.jpg"}
]

const Hero = () => {

  return (
    <div className=" relative text-white text-[20px] w-full max-w-[1280] mx-auto px-3 md:px-3 py-1 md:py-1 h-2/4">
      <Carousel autoPlay={true} 
      infiniteLoop={true} dynamicHeight={true}
      showStatus={false} 
      showThumbs={false}
      renderArrowPrev={(handleClick, hasPrev) => (
        <div 
        onClick={handleClick}
        className="absolute md:left-[15px]
        md:top-[65px] md:border md:rounded-full border rounded-full
         bg-black/[0.07] md:bottom-0 top-[62px] bottom-0
        left-[10px] z-10 w-[20px] h-[20px] md:w-[35px] md:h-[35px]
        flex items-center justify-center cursor-pointer
        ">
          <AiOutlineArrowLeft className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
        </div>
      )}
      renderArrowNext={(handleClick,hasNext) => (
        <div 
        onClick={handleClick}
        className="absolute md:right-[15px]
        md:top-[65px] md:border md:rounded-full border rounded-full
         bg-black/[0.07] md:bottom-0 top-[62px] bottom-0
        right-[10px] z-10 w-[20px] h-[20px] md:w-[35px] md:h-[35px]
        flex items-center justify-center cursor-pointer
        ">
          <AiOutlineArrowRight className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
        </div>
      )}
      >
        {slides.map((i) =>{
          return (
            <div key={i.id} className="flex justify-center items-center md:h-[30vh] h-[20vh] bg-black/[0.9]">
            <img src={i.img} className="aspect-[7/10] 
            md:aspect-auto object-cover opacity-50 md:h-[30vh] h-[20vh] bg-black/[0.9]" />
              
              <Link href="/cart" className="px-[14px] md:px-[40px] 
              py-[15px] md:py-[30px] font-Montserrat bg-white/[0.2] 
             text-white w-30 h-10 md:w-80 md:h-20 flex justify-center items-center
              text-[15px] md:text-[30px] uppercase font-bold
              rounded-sm border-white border border-opacity-50 cursor-pointer hover:opacity-90
              absolute
              ">
                  Order Now
              </Link>

          </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero;


