import React from 'react';
import { useRouter } from 'next/router';
import Wrapper from '@/components/Wrapper';
import ProductDetailCoursel from '@/components/ProductDetailCoursel';
import RelatedProducts from '@/components/RelatedProducts';
import { fetchdata } from '@/utils/api';
import ReactMarkdown from 'react-markdown';
import {useSelector,useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '@/store/cartSlice';

// const slides = [
//   {
//     id: 1,
//     img: "/img/1.jpg",
//     name: "Grilled Chicken Sandwich",
//     ingredients: [
//         "2 cups all-purpose flour",
//         "2 cups sugar",
//         "3/4 cup unsweetened cocoa powder",
//         "2 teaspoons baking powder",
//         "1 1/2 teaspoons baking soda",
//         "1 teaspoon salt",
//         "1 cup milk",
//         "1/2 cup vegetable oil",
//         "2 large eggs",
//         "2 teaspoons vanilla extract",
//         "1 cup boiling water",
//         "1/2 cup unsalted butter, softened",
//         "1/2 cup heavy cream",
//         "8 ounces semisweet chocolate, chopped",
//         "1/2 cup fresh strawberries, sliced",
//         "Powdered sugar, for garnish"
//     ],
//     description: "Indulge in our mouth-watering cake dessert, freshly baked to perfection just for you! Made with the finest ingredients, our cakes are a heavenly treat for your taste buds. Whether you prefer classic flavors like chocolate and vanilla,or something more adventurous like strawberry or red velvet, we have something for everyone. Our cakes are perfect for any occasion, whether you're celebrating a birthday, anniversary, or just wantto satisfy your sweet tooth. So come and enjoy a slice of heaven with us today!",
//     price: "300",
//     prevPrice: "500"
//   }
// ];


const ProductDetail = ({product,products}) => {
  const [showIngredients, setShowIngredients] = React.useState(false);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes


  const notify = () => {
    toast.success(':) Item added to cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  // const handleAddToCart = () => {
  //   // const item = {
  //   //   ...product?.data?.[0],
  //   //   onePriceQuantity: p.price,
  //   //   quantity: 1,
  //   // };

  //   dispatch(addToCart("item"));
  //   // notify();
  // };


  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <div className='w-full p-8'>
      <ToastContainer />
      <Wrapper>
        <div className='flex flex-col lg:flex-row gap-9'>
          {/* left section  */}
          <div className="md:w-auto flex-[1.5rem] lg:max-w-full
          mx-auto lg:mx-0
          ">
            <ProductDetailCoursel
            images={p.image.data}/>

          </div>
          {/* end of left section  */}
          {/* right section  */}
          <div className='flex-[1] w-auto h-[100%] py-3 border border-gray/[0.08] p-4 px-5'>
         <div className='font-bold text-[16px] md:text-xl lg:text-2xl text-[#22c55e] leading-tight'>
          {p.name}
          </div>
          <div className="text-xs md:text-[18px] text-[#db5d5d] mt-[0.3rem]">
            &#8377;{p.price}
          </div>
          <div className="markdown text-xs mt-[0.5rem] text-[#5a5a5a]">
            <ReactMarkdown>
            {p.description}
            </ReactMarkdown>
          </div>
      <button className='transition transition-300 ease-in text-xs text-[#22c55e]' onClick={toggleIngredients}>
        {showIngredients ? "Show Less" : "Show More"}
      </button>
      <b className='pl-4 mt-4 text-center text-gray-800 capitalize text-[9px] md:text-[10px]'>Ingredients</b><br />

      {showIngredients && (
        <ul className="markdown list-disc list-inside text-[#6f6f6f] text-xs mb-4 ">
          <ReactMarkdown>
          {p.ingredients}
          </ReactMarkdown>
        </ul>
      )}
          {/* end of ingredients */}
          {/* buttons */}
          <div className='flex flex-col justify-around'>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold md:text-xl mt-[1rem] py-3 px-4 rounded-md">
              Order Now
            </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold md:text-xl mt-[1rem] py-3 px-4 rounded-md
          "
          onClick={() => dispatch(addToCart(
            {
              ...product?.data?.[0],
              oneQuantityPrice: p.price
            }
          ),
          notify()
          )}
          >
              Add to Cart
            </button>
          </div>
          {/*end of buttons */}
          </div>
        </div>
        <div className='mt-[1.5rem]'>
          <RelatedProducts products={products}/>
        </div>
      </Wrapper>
    </div>
  )
}

export default ProductDetail;


export async function getStaticPaths() {
  const products = await fetchdata("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
      params: {
          slug: p.attributes.slug,
      },
  }));

  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps({params:{slug}}){
  const product = await fetchdata(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
);
  const products = await fetchdata(`/api/products?populate=*&[filters][slug][$ne]=${slug}`);
  
  return {
    props: {
        product,
        products,
    },
};
}

