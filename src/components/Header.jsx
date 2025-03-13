import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const Header = () => {
    return (
        <div className="hidden sm:block sticky top-0 bg-white shadow-md h-[60px] p-4 z-10">
            <div className='flex ml-10 mt-2 gap-2'>
                <FaFacebook className=' h-6 w-6  bg-gray-200 rounded-l-md p[6px] text-[14px] cursor-pointer hover:bg-[#ff6b6b] hover:text-white' />
                <FaInstagram className='h-6 w-6  bg-gray-200 rounded-l-md p[6px] text-[14px] cursor-pointer hover:bg-[#ff6b6b] hover:text-white' />
                <FaTwitter className='h-6 w-6  bg-gray-200 rounded-l-md p[6px] text-[14px] cursor-pointer hover:bg-[#ff6b6b] hover:text-white' />
                <CiLinkedin className='h-6 w-6  bg-gray-200 rounded-l-md p[6px] text-[14px] cursor-pointer hover:bg-[#ff6b6b] hover:text-white' />
                <b className='text-[#ff6b6b] ml-[400px]'>FREE SHIPPING THIS </b><p>WEEK ORDER OVER $55</p>
                <div className='flex gap-2 ml-[350px]'>
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Kannada</option>
                    </select>
                    <select>
                        <option>USD $</option>
                        <option>INR</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Header