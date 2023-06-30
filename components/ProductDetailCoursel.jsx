import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailCoursel = ({images}) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] max-auto sticky top-[50px]">
         <Carousel 
        infiniteLoop={true}
         dynamicHeight={true}
        showStatus={false} 
        showIndicators={false}
        thumbWidth={50}
        className='max-h-[100%] overflow-auto'
        >
            {images?.map((i) => (
                <img
                key={i.id} src={i.attributes.url} alt={i.attributes.name} />
            ))}
        </Carousel>
    </div>
  )
}

export default ProductDetailCoursel