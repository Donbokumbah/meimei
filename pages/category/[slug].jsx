import React, { useEffect, useState } from 'react';
import Wrapper from '@/components/Wrapper';
import Products from '@/components/Products';
import { fetchdata } from '@/utils/api';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const maxPageQunatity = 3;

const Category = ({category,products,slug}) => {
  const [pageIndex,setPageIndex] = useState(1);
  const {query} = useRouter();

  useEffect(() => {
    setPageIndex(1)
  },[query])

  const {data, error, isLoading} = useSWR(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxPageQunatity}`,
   fetchdata,
  {
    fallbackData: products,
  }
  );
    
  return (
    <div className="w-full py-2 relative">
      <Wrapper className="h-[100%] m-auto pt-3 ">
        <div className='text-center max-w-[800px] mx-auto md:mt-0'>
          <div className='text-[15px] md:text-[29px] mb-4 font-semibold
          leading-tight font-Tangerine
          '>
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-0 h-[100%] w-[80vw] m-auto mb-12 ">
        {data?.data?.map((product) => (
            <Products key={product?.id} data={product} />
        ))}
        </div>
        {/* <Products /> */}
        {/* PAGINATION BUTTONS START */}
        {data?.meta?.pagination?.total > maxPageQunatity && (
                    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                        {pageIndex > 1 && (
                          <button
                            className={`text-[14px] rounded py-2 px-4 bg-blue-500 text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            onClick={() => setPageIndex(pageIndex - 1)}
                          >
                            Previous
                          </button>
                        )}

                        {/* <button
                            className={`text-[14px] rounded py-2 px-4 bg-blue-500 text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={pageIndex === 1}
                            onClick={() => setPageIndex(pageIndex - 1)}
                        >
                            Previous
                        </button> */}

                        <span className="font-bold text-[14px]">{`${pageIndex} of ${
                            data && data.meta.pagination.pageCount
                        }`}</span>

                        <button
                            className={`text-[14px] rounded py-2 px-4 bg-blue-500 text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={
                                pageIndex ===
                                (data && data.meta.pagination.pageCount)
                            }
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
                {/* PAGINATION BUTTONS END */}
                {error && (
                  <div>"Page not found"</div>
                )}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col gap-5 justify-center items-center">
                        <span className='w-[70px] md:w-[90px] font-Tangerine text-3xl md:text-[38px]'>Mei Mei</span>
                        <span className="text-sm text-green-600 font-medium">Loading...</span>
                    </div>
                )}
      </Wrapper>
    </div>
  )
}

export default Category;

export async function getStaticPaths() {
  const category = await fetchdata("/api/categories?populate=*");
  const paths = category?.data?.map((c) => ({
      params: {
          slug: c.attributes.slug,
      },
  }));

  return {
      paths,
      fallback: false,
  };
}


export async function getStaticProps({params:{slug}}){
  const category = await fetchdata(
    `/api/categories?populate=*&filters[slug][$eq]=${slug}`
);
  const products = await fetchdata(`/api/products?populate=*&[filters][categories]
  [slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxPageQunatity}`);
  
  return {
    props: {
        category,
        products,
        slug,
    },
};
}

