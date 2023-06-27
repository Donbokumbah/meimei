import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './Products';

const RelatedProducts = ({products}) => {
    const responsive = {
        Desktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 2
        }
      };

  return (
    <div>
        <div className='mb-1'>You might be interested in</div>
        <Carousel responsive={responsive}
        itemClass='py-[1rem]' containerClass='-my-[1rem]'
        >

          {products?.data?.map((product) => (
            <div key={product.id} className=" mx-3 hover:transform hover:scale-110 transition duration-500">
            <Products 
            data={product}
            />
            </div>
          ))}
        </Carousel>
    </div>
  )
}

export default RelatedProducts