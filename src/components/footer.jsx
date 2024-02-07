import React from 'react'
import Link from 'next/link';


const footer = () => {
  return (
    <>
        <div className='xl:px-20 md:px-10 xs:px-4 flex flex-wrap gap-y-8 justify-between py-20 border-t-2'>
          <div>
            <h1 className=' text-lg md:text-sm font-bold'>Subscribe to Our Newsletter</h1>
            <span className=' md:text-sm'>stay updated with our latest news and offers </span>
          </div>
          <div>
            <form className=' flex gap-2'>
              <input type='text' placeholder='Enter email address' className=' border px-4 py-2 border-black'/>
              <input type='submit' value="join" className=' border px-6 py-2 bg-black text-white'/>
            </form>
            <span className=' text-xs'>By subscribing, you agree to our privacy policy</span>
          </div>
        </div>
        <footer className='xl:px-20 md:px-10 xs:px-4'>
          <div className=' grid xl:grid-cols-6 md:grid-cols-3 xs:grid-cols-2 xs:gap-6  border-t-2 py-20'>
            <ul className=' flex flex-col gap-3'>
              <li className=' font-bold'>About us</li>
              <li className=' text-sm'>
                <Link href="#" >Contact</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">FAQ</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Support</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Terms</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Privacy</Link>
              </li>
              
            </ul>
            <ul className=' flex flex-col gap-3'>
              <li className=' font-bold'>About us</li>
              <li className=' text-sm'>
                <Link href="#" >Contact</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">FAQ</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Support</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Terms</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Privacy</Link>
              </li>
              
            </ul>
            <ul className=' flex flex-col gap-3'>
              <li className=' font-bold'>About us</li>
              <li className=' text-sm'>
                <Link href="#" >Contact</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">FAQ</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Support</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Terms</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Privacy</Link>
              </li>
              
            </ul>
            <ul className=' flex flex-col gap-3'>
              <li className=' font-bold'>About us</li>
              <li className=' text-sm'>
                <Link href="#" >Contact</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">FAQ</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Support</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Terms</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Privacy</Link>
              </li>
              
            </ul>
            <ul className=' flex flex-col gap-3'>
              <li className=' font-bold'>About us</li>
              <li className=' text-sm'>
                <Link href="#" >Contact</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">FAQ</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Support</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Terms</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Privacy</Link>
              </li>
              
            </ul>
            <ul className=' flex flex-col gap-3'>
              <li className=' font-bold'>About us</li>
              <li className=' text-sm'>
                <Link href="#" >Contact</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">FAQ</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Support</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Terms</Link>
              </li>
              <li className=' text-sm'>
                <Link href="#">Privacy</Link>
              </li>
              
            </ul>
            
          </div>
          <div className=' flex justify-between py-6 border-t-2'>
            <div>
              <h2>myShoe</h2>
            </div>
            <div>
              <small>
                &copy; sace All rights reserved
              </small>
            </div>
          </div>

        </footer>
      
    </>
  )
}

export default footer
