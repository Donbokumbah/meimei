import React from 'react';
import Link from 'next/link';
import {BsChevronDown} from 'react-icons/bs'

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Food", url: "/Food" },
    { id: 3, name: "Menu List", subMenu: true,url:"/FoodMenu" },
    { id: 4, name: "Contact", url: "contact/ContactPage" },
];

const subMenuData = [
    { id: 1, name: "Coffee", doc_count: 0 },
    { id: 2, name: "Chicken", doc_count: 0 },
    { id: 3, name: "Fried Rice", doc_count: 0 },
    { id: 4, name: "Pork Item", doc_count: 0 },
    { id: 5, name: "Pork Item", doc_count: 0 },
    { id: 6, name: "Pork Item", doc_count: 0 },
    { id: 7, name: "Pork Item", doc_count: 0 }
];


const MenuMobile = ({showCatMenu,setShowCatMenu,setMobileMenu,categories}) => {
  return (
    <>
    <ul className=' flex md:hidden flex-col font-bold absolute top-[50px] right-0 w-[50%] h-[calc(100% - 50px)] bg-white text-black border-t'>
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                    <li className='cursor-pointer py-4 px-5 border-b flex-col flex relative'
                    onClick={() => setShowCatMenu(!showCatMenu)}
                    >
                        <div className="flex justify-between items-center">
                        {item.name}
                        <BsChevronDown Step={10} />
                        </div>
                     
                        {showCatMenu && (
                            <ul className="h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-white-300 scrollbar-track-white-100
                              bg-red-50/[0.05] -mx-5 mt-4 -mb-4">
                                {categories?.map(({attributes:c,id}) => {
                                    return (
                                        <Link key={id} href={`/category/${c.slug}`} 
                                        onClick={() =>{
                                            setShowCatMenu(false)
                                            setMobileMenu(false)
                                            }}>
                                            <li className="text-[12px] text-gray-800 py-4 px-8 border-t border-red-50 flex justify-between ">{c.name}
                                            <span className='opacity-50 text-[10px]'>{`(${c.products.data.length})`}</span>
                                            </li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        )}
                    </li>
                    )
                    : (
                        <li className="py-4 px-5 border-b">
                            <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                            {item.name}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            )
        })}
    </ul>
    </>
  )
}

export default MenuMobile;