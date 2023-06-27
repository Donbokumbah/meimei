// import React from 'react';
// import Link from 'next/link';
// import {BsChevronDown} from 'react-icons/bs'

// const data = [
//     { id: 1, name: "Home", url: "/" },
//     { id: 2, name: "Food", url: "/Food" },
//     { id: 3, name: "Menu List", subMenuData: true },
//     { id: 4, name: "Contact", url: '/contact/ContactPage' },
// ];

// const subMenuData = [
//     { id: 1, name: "Desert", doc_count: "Aval" },
//     { id: 2, name: "Chicken", doc_count: 'NotAval' },
//     { id: 3, name: "Fried Rice", doc_count: 'Aval' },
//     { id: 4, name: "Pork Item", doc_count: 'NotAval' },
// ];


// const Menu = ({showCatMenu,setShowCatMenu,categories,slug}) => {
//   return (
//     <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
//         {data.map((item) => {
//             return (
//                 <React.Fragment key={item.id}>
//                     {!!item?.subMenu ? (
//                         <li key={item.id} className="cursor-pointer flex items-center justify-center gap-2 border border-gray-300 px-4 py-2"
//                         onMouseEnter={() => setShowCatMenu(true)}
//                         onMouseLeave={() => setShowCatMenu(false)}
//                         >
//                             {item.name}
//                             <BsChevronDown size={13}/>

//                             {showCatMenu && (
//                                 <ul className="bg-white absolute top-14 min-w-[190px]">
//                                     {categories?.map(({attributes:c,id}) => {
//                                         return (
//                                             <Link
//                                             key={id}
//                                             href={`/category/${slug}`}
//                                             >
//                                             <li className='text-sm md:text-[12px] 
//                                             flex items-center 
//                                             justify-between h-12 
//                                             border border-gray-200
//                                              bg-white text-black 
//                                              px-2 py-3 hover:bg-black/[0.03]'>
//                                                 {c.name}
//                                                 <span className="text-gray-400 text-sm">{`(${c.products.data.length})`}</span>
//                                             </li>
//                                             </Link>
//                                         )
//                                     })}
//                                 </ul>
//                             )}
//                         </li>
//                     ): (
//                             <Link
//                             className='border border-gray-300 px-4 py-2 cursor-pointer'
//                             href={item?.url}>{item.name}</Link>
//                     )}
//                 </React.Fragment>
//             ) 
//         })}
//     </ul>
//   )
// }

// export default Menu;




// safjasfbljsafblja


import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Food", url: "/Food" },
    { id: 3, name: "Food Menu", subMenu: true },
    { id: 4, name: "Contact", url: "/contact/ContactPage" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative border border-gray-300 px-5 py-2"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.name}
                                <BsChevronDown size={14} />

                                {showCatMenu && (
                                    <ul className=" bg-white absolute top-[40px] min-w-[190px] right-[-1.3rem] text-black shadow-lg">
                                        {categories?.map(
                                            ({ attributes: c, id }) => {
                                                return (
                                                    <Link
                                                        key={id}
                                                        href={`/category/${c.slug}`}
                                                        onClick={() =>
                                                            setShowCatMenu(
                                                                false
                                                            )
                                                        }
                                                        
                                                    >
                                                        <li className="md:text-[13px] border border-gray-200 text-[12] text-gray-900 h-9 flex justify-between items-center px-3 py-6 hover:bg-black/[0.03]">
                                                            {c.name}
                                                            <span className="opacity-50 text-sm">
                                                                {`(${c.products.data.length})`}
                                                            </span>
                                                        </li>
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li>
                                <Link href={item?.url}
                                className="cursor-pointer border border-gray-300 px-5 py-2"
                                >{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;