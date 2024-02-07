import React from 'react'
import Link from 'next/link';


const header = () => {
  return (
    <>
        <nav className=' fixed right-0 left-0 bg-white z-40 grid grid-cols-3 place-content-center xl:px-20 md:px-10 py-6 xs:px-4 '>
            <ul className=' flex xl:gap-10 md:gap-5 xs:hidden md:flex text-sm '>
                <li><Link href="#">Shop Now</Link></li>
                <li><a>product</a></li>
                <li><a>about us</a></li>
                
            </ul>
            <div className='  text-2xl font-bold  items-center text-center flex justify-center'>newShop</div>
            <ul className=' flex  xl:gap-10 md:gap-5 xs:hidden md:flex justify-end text-sm'>
                
                
                <li><Link href="#">Cart</Link></li>
                <li><Link href="#">Login</Link></li>
                <li><Link href="#">Sign Up</Link></li>

                
            </ul>
        </nav>
      
    </>
  )
}

export default header
