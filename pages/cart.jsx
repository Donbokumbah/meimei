import React, { useMemo, useState } from 'react';
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import Image from 'next/image';
import CartItem from '@/components/CartItem';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentMethod } from '@/utils/api';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const Cart = () => {
    const [loading,setLoading] = useState(false)
    // const [loading, setLoading] = useState(false);
    const {cartItems} = useSelector((state) => state.cart);

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);

    const handlePayment = async () => {
        try{
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentMethod("/api/orders",{
                products: cartItems
            })
            await stripe.redirectToCheckout({sessionId: res.stripeSession.id})
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

  return (
    <div className="w-full md:p-10">
        <Wrapper>
            {cartItems.length > 0 &&(
            <>
{/* heading */}
<div className="text-center max-w-[800px] mx-auto mt-3 md:mt-0">
                <div className="text-green-500 text-[28px] md:text-[34px] mb-2 font-semibold leading-tight">
                    Your Cart
                </div>
            </div>
            {/*ens of heading */}
            {/* cart Products list */}
            <div className="flex flex-col lg:flex-row gap-6 py-2">
                {/* cartItem */}
                <div className="flex-[2]">
                    <div className="text-lg font-bold text-gray-800">
                        Cart Items
                    </div>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} data={item} />
                    ))}
                </div>
                {/*end of cartItem */}
                {/* summary */}
                <div className="flex-[1] ">
                <div className="text-lg font-bold text-gray-800">
                        Summary
                </div>
                <div className="p-2 my-1  border border-gray-200">
                    <div className='flex justify-between
                    border border-gray-100 p-2
                    '>
                        <div className='
                        uppercase text-md md:text-lg font-medium
                        text-black
                        '>Subtotal</div>
                        <div className='text-md md:text-lg font-medium text-red-400'>
                        &#8377;{subTotal}
                        </div>
                    </div>
                    <div className='text-center pt-2 text-md md:text-[15px] font-medium text-gray-600'>
                            Delivery charges Rs {cartItems.length * 40}
                        </div>
                    <div className='
                     border border-gray-100 p-1
                     text-gray-600
                    text-center md:text-md py-5 border-t mt-2'>
                    "Thank you for your purchase! 
                    You have bought {cartItems.length} products in total.
                    Please note that delivery charges are not included in this total
                    and may vary depending on you location and shipping method.We hope you will enjoy your products and thank you for choosing our store."
                    </div>
                </div>
                <div className='flex justify-center items-center
                 cursor-pointer bg-red-500
                  hover:bg-red-600 text-white
                 px-1 py-2 md:text-xl font-bold
                 '
                 onClick={handlePayment}
                 >
                    {loading && "loading "
                     }
                     Checkout
                </div>
                </div>
                {/*end of summary */}
            </div>
            {/* end of cart Products list */}
            </>
            )}
            



            {/* empty cart */}
            {cartItems.length < 1 && (
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/img/cartempty.png"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
            )}
            {/*end of empty cart */}
        </Wrapper>
    </div>
  );
}

export default Cart;
