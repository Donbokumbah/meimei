import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri';
import { updateCart,removeFromCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

const CartItem = ({data}) => {
  const p = data.attributes;
  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
        key,
        val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
        id: data.id,
    };
    dispatch(updateCart(payload));
};


  return (
    <div className="mt-1 flex mb-1 pt-2 px-2 gap-3 md:gap-5 border border-gray-200">
      {/* image */}
      <div className="shrink-0 aspect-square w-[100px] md:w-[160px]">
      <Image
                    src={p.thumbnail.data.attributes.url}
                    alt={p.name}
                    width={160}
                    height={160}
                />
      </div>
      {/*end of image */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* title */}
          <div className="text-lg md:text-2xl font-semibold text-green-700">
            {p.price}
          </div>
          {/*end of title */}
          <div className='text-sm md:text-[17px] font-bold text-red-500 mt-2'>
          MRP : &#8377;{p.price}
          </div>
         
        </div>

          {/* selectors */}
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5]
                    text-sm md:text-md
                    ">
                      <div className='flex items-center gap-1'>
                        <div className='font-semibold'>
                          Quantity
                        </div>
                        <select
                                className="hover:text-black"
                                onChange={(e) => updateCartItem(e, "quantity")}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select>
                </div>
              </div>
              {/* end of selectors */}
              <RiDeleteBin6Line
              onClick={() =>
                dispatch(removeFromCart({ id: data.id }))
            }
              className='md:mt-2 cursor-pointer text-black/[0.5]
              hover:text-black text-[16px] md:text-[20px] 
              ' />

      </div>
    </div>
  )
}

export default CartItem

