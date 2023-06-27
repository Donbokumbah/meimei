import Link from 'next/link';
import { MdOutlineFavoriteBorder} from "react-icons/md";
import React from 'react';
import Image from 'next/image';

const Products = ({data:{attributes: p,id}}) => { 
  return (
    <>
    <Link href={`/product/${p.slug}`} 
         key={id} className="border border-gray-200 rounded-md p-2 hover:transform hover:scale-110 transition duration-500"
        >
          <Image 
          className="h-[110px] w-[400px] md:h-[170px] md:w-[400px] object-cover"
          width={500}
          height={500}
          src={p.thumbnail?.data?.attributes?.url}
          alt={p.name}
          />
          
          <div className="pt-2 pb-2 text-black">
            <h2 className='md:text-[13px] font-Montserrat text-[0.5rem] truncate'>{p.name}</h2>
          </div>
          {/* product detail */}
          <div className="flex items-center justify-between text-xs">
            <div className='text-[9px] md:text-[17px]'>&#8377;{p.price}</div>
            {/* <div className='line-through'>{prevPrice}</div> */}
            <div className="bg-[white] border border-white rounded-full">
              <div className="w-10 h-7 rounded-md border flex items-center justify-center text-[#db3636] cursor-pointer
              hover:transform hover:scale-110 transition duration-500
              ">
              <MdOutlineFavoriteBorder size={20} color="red"/>
            </div>
          </div>
          </div>
          {/* end of product detail */}
    </Link>
    </>
  )
}

export default Products;
