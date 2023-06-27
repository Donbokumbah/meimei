import React,{useState,useEffect} from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link';
import Menu from './Menu';
import {IoMdHeartEmpty} from 'react-icons/io';
import {RiShoppingCart2Line} from 'react-icons/ri';
import {BiMenu} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import MenuMobile from './MenuMobile';
import { fetchdata } from '@/utils/api';
import { useSelector } from 'react-redux';



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);
    const {cartItems} = useSelector((state) => state.cart)

  const controlnav = () => {
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow('-translate-y-[80px]')
      }else{
          setShow('shadow-sm')
      }
    }
    else{
      setShow('translate-y-0')
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', controlnav);
    return () => (
      window.removeEventListener('scroll', controlnav)
    )
  },[lastScrollY])


  useEffect(() => {
    getCategory();
  }, [])

  const getCategory = async () => {
    const {data} = await fetchdata('/api/categories?populate=*');
    setCategories(data);
  }
  

  return (
    <div className={`w-full h-[50px] md:h-[80px] bg-white flex items-center 
    justify-between z-20 top-0 sticky transition-transform duration-300 ${show}`}>
      <Wrapper className="h-[60px] flex items-center justify-between ">
        <Link href='/'>
        <span className='w-[40px] md:w-[60px] font-Tangerine text-2xl md:text-3xl'>Mei Mei</span>
        </Link>

        <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />


        {mobileMenu && (
          <MenuMobile
           showCatMenu={showCatMenu} 
        setShowCatMenu={setShowCatMenu}
        // mobileMenu={mobileMenu} 
        setMobileMenu={setMobileMenu}
        categories={categories}
        />
        )
}

        <div className="flex justify-center items-center gap-3 text-black">
          {/* icon start */}
          <Link href="/Search" className="w-8 md:w-12 h-8 md:h-12 hover:bg-black[0.05]
           cursor-pointer relative rounded-full hover:bg-black/[0.05] 
           flex items-center justify-center">
            <BsSearch className="text-[20px] md:text-[25px]" />
          </Link>
          {/* icon end */}
          {/* icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 hover:bg-black[0.05]
           cursor-pointer relative rounded-full hover:bg-black/[0.05] 
           flex items-center justify-center">
            <IoMdHeartEmpty className="text-[20px] md:text-[25px]" />
              <div className="absolute flex items-center justify-center top-1 
              left-5 md:left-7 bg-blue-500 h-[14px] mid:h-[18px] min-w-[14px] 
              md:min-w-[18px] rounded-full text-white text-[10px] md:text-[12px] 
              px-[2px] md:px-[5px] py-[2px] md:py-[5px]">23</div>
          </div>
          {/* icon end */}
          {/* icon start */}
            <Link href='/cart'>
              <div className="w-8 md:w-12 h-8 md:h-12 cursor-pointer 
              relative rounded-full hover:bg-black/[0.05] 
              flex items-center justify-center">
                <RiShoppingCart2Line className="text-[20px] md:text-[25px]" />
                  {cartItems.length > 0 && (<div className="absolute flex items-center justify-center top-1 
                  left-5 md:left-7 bg-blue-500 h-[14px] mid:h-[18px] min-w-[14px] 
                  md:min-w-[18px] rounded-full text-white text-[10px] md:text-[12px] 
                  px-[2px] md:px-[5px] py-[2px] md:py-[5px]">
                    {cartItems.length}
                  </div>)}
              </div>
              </Link>
          {/* icon end */}

          {/* mobile menu small screen */}
          <div className="md:hidden w-8 md:w-12 h-8 md:h-12 hover:bg-black/[0.03] cursor-pointer
          relative rounded-full flex items-center justify-center" >
            {mobileMenu ? (
              <AiOutlineClose className="text-[20px]" 
              onClick={() => setMobileMenu(false)}
              />
            ): 
            (
              <BiMenu className="text-[25px] " 
              onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
            {/* mobile menu small screen */}
        </div>
      </Wrapper>
    </div>
  )
}

export default Navbar;