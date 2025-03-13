import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[15px] w-[15px] hidden lg:block z-10'>
            <div className='h-[15px] w-[15px]'>
                <div className='flex py-4 gap-10 justify-between items-center ml-[450px]'>
                    <Link className='hover:underline hover:underline-offset-4 hover:decoration-red-500' href="#">HOME</Link>
                    <Link className='hover:underline hover:underline-offset-4 hover:decoration-red-500' href="#">CATEGORIES</Link>
                    <Link className='hover:underline hover:underline-offset-4 hover:decoration-red-500' href="#men">MENS</Link>
                    <Link className='hover:underline hover:underline-offset-4 hover:decoration-red-500' href="#women">WOMENS</Link>
                    <Link className='hover:underline hover:underline-offset-4 hover:decoration-red-500' href="#jew">JEWELRY</Link>
                    <Link className='hover:underline hover:underline-offset-4 hover:decoration-red-500' href="#">BLOG</Link>
                    <Link className='hover:underline hover:underline-offset-4 hover:decoration-red-500' href="#">OFFERS</Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar


// className='flex items-center justify-center w-fit gap-10 mx-auto font-medium py-4  text-black'