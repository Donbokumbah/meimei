import ProductsHeading from "@/components/ProductsHeading";
import Wrapper from "@/components/Wrapper";
import Products from "@/components/products";
import { fetchdata } from "@/utils/api";



export default function Home({products}) {
  return (
    <main className=''>
      <Wrapper className="h-[100%] m-auto ">
        <ProductsHeading className=" mt-12 mb-12"/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-0 h-[100%] w-[80vw] m-auto mb-12 ">
        {products?.data?.map((product) => (
            <Products key={product.id}
            data={product}
            />
          ))}
        </div>
      </Wrapper>
    </main>
  )
}

export async function getStaticProps(){
  const products = await fetchdata("/api/products?populate=*");
  
  return {
    props: {products}
  }
}