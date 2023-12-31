import Hero from "@/components/Hero";
import ProductsHeading from "@/components/ProductsHeading";
import Wrapper from "@/components/Wrapper";
import Products from "@/components/products";
import { fetchdata } from "@/utils/api";
// import { useEffect, useState } from "react";



export default function Home({products}) {
  
  // const [data,setData] = useState(null);

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   async function fetchProducts() {
//     const {data} = await fetchdata("/api/products");
//     setData(data)
//   }
  
  return (
    <main className=''>
      <Hero />
      <Wrapper className="h-[100%] m-auto ">
        <ProductsHeading className=" mt-12 mb-12"/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-0 h-[100%] w-[80vw] m-auto mb-12 ">
        {products?.data?.map((product) => (
            <Products key={product?.id}
            data={product}
            />
          ))}
        </div>
      </Wrapper>
    </main>
  )
}

export async function getStaticProps() {
  const products = await fetchdata("/api/products?populate=*");

  return {
      props: { products },
  };
}
