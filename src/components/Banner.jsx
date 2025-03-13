import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";

const Banner = () => {
    return (
        <div className='border-b border-gray-200 py-6'>
            <div className='sm:flex items-center justify-between'>
                <div className=' font-bold text-4xl text-center pb-4 ml-14 mb-2 sm:pb-0 text-black'>
                    Logo .
                </div>
                <div >
                    <input className="border-gray-200  border p-2  justify-center mr-[450px] h-[35px]
                     w-[600px]  ronded-lg  text-center" type='text' placeholder='Search for products' />
                    <FaSearch className='absolute top-[100px] right-[1020px]' />

                    <MdAccountCircle className='absolute top-[90px] right-[240px]  h-7 w-7 
                     bg-gray-200 rounded-l-md p[6px] text-[14px] cursor-pointer hover:bg-[#ff6b6b] hover:text-white' />
                    <MdFavoriteBorder className='absolute top-[90px] right-[190px]  h-7 w-7 
                     bg-gray-200 rounded-l-md p[6px] text-[14px] cursor-pointer hover:bg-[#ff6b6b] hover:text-white' />
                    <BsHandbag className='absolute top-[90px] right-[140px]  h-7 w-7 
                     bg-gray-200 rounded-l-md p[6px] text-[14px] cursor-pointer hover:bg-[#ff6b6b] hover:text-white' />


                </div>
            </div>




        </div>
    )
}

export default Banner