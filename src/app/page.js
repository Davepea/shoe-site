"use client"
import Image from 'next/image'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import Link from 'next/link';


gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useEffect(()=>{
    var tl = gsap.timeline();
    // gsap.to(".but2", {
    //   x: 700,
    //   rotation : 360
    // })
    // gsap.to(".but",{
    //   x: 600
    // })
    
    

    tl.to(".marque_parts",{
        repeat: -1,
        xPercent: -100,
        duration: 2,
        ease:"linear",
    })
    .totalProgress(0.5);
    
    tl.to(".heroImg", {
        duration: 5,
        // opacity: 0,
        // x: -100,
        rotate: 360,
        ease:"linear"


    })
    tl.to(".marque_parts2",{
        xPercent: 100,
        repeat: -1,
        duration: 2,
        ease:"linear",
    })
    .totalProgress(0.5);

    gsap.set(".marquee_inner", {xPercent: -50});
  },[]);

  return (
    <>
      <section className=' grid md:grid-cols-2 xs:grid-cols-1 py-20 xl:px-20 md:px-10 xs:px-4 place-items-center md:pt-36 xs:pt-10'>
        <div className=' '>
          <h1 className=' xl:text-6xl md:text-4xl xs:text-4xl font-semibold'>Step into <span className=' text-[#efc050]'>Simplicity</span>, Strut out in Style</h1>
          <p className=' text-sm pt-4 font-light'>Step into our store, where stylish shoes tell unique stories with comfort, curated for your personal expression and individuality</p>
          <div className='pt-6'>
            <button className='but2  md:px-6 md:py-3 xs:px-4 xs:py-3 text-white bg-[#282828] md:text-sm xs:text-xs'>Buy our product</button>
            <button className='but  md:text-sm  md:px-6 md:py-3 xs:px-4 xs:py-3 xs:text-xs'>Buy our product</button>

          </div>
        </div>
        <div className='shad bg-black grid place-content-end  '>
          <div className='heroImg  xl:w-[400px] md:w-[300px] xs:w-[300px]  '>
              <Image
                src="https://images.pexels.com/photos/8603473/pexels-photo-8603473.jpeg?auto=compress&cs=tinysrgb&w=1000"
                width={1000}
                height={1000}
                alt='hero image'
              />
          </div>
        </div>
      </section>
      <div>
      {/* <div className="marquee border-2">
        <div className="marquee_inner">
          <div className="marque_parts">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts">
            i sell this the cheap
            →
          </div>
        </div>
      </div>
      <div className="marquee marq2 border-2">
        <div className="marquee_inner">
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
        </div>
      </div> */}
      <section className=' grid md:grid-cols-2 py-28 xl:px-20 md:px-10 xs:px-4 gap-6 '>
        <div className=' flex flex-col gap-5 py-12 '>
          <div className=' flex gap-6 p-4  items-center bg-white md:w-[450px] xs:w-[300px] text-black md:left-16 xs:left-8 relative'>
            <div className='md:w-24 xs:w-20  '>
             <div>
             <Image
                  src="https://images.pexels.com/photos/5325585/pexels-photo-5325585.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={1000}
                   height={1000}
                   alt='image'
              />
               
             </div>

            </div>
            <div>
                <h2 className=' font-bold'>Stylish Comfort</h2>
                <Link href="/" className=' flex items-center text-xs'>
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>

                </Link>
              </div>
          </div>
          <div className=' flex gap-6 p-4 items-center bg-white md:w-[450px] xs:w-[300px] text-black md:left-8 xs:left-4 relative'>
            <div className='md:w-24 xs:w-20 '>
             <div>
             <Image
                  src="https://images.pexels.com/photos/239518/pexels-photo-239518.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={1000}
                   height={1000}
                   alt='image'
              />
             </div>

            </div>
            <div>
                <h2 className=' font-bold'>Personal Expression</h2>
                <Link href="/" className=' flex items-center text-xs'>
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>

                </Link>
              </div>
          </div>
          <div className=' flex gap-6 p-4 items-center bg-white md:w-[450px] xs:w-[300px] text-black'>
            <div className='md:w-24 xs:w-20 '>
              <div>
              <Image
                  src="https://images.pexels.com/photos/8836364/pexels-photo-8836364.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={1000}
                   height={1000}
                   alt='image'
                   className=' h-full'
              />
              </div>

            </div>
            <div>
                <h2 className=' font-bold'>Individuality</h2>
                <Link href="/" className=' flex items-center text-xs'>
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>

                </Link>
              </div>
          </div>

        </div>
        <div className='flex justify-center pt-20 pb-6'>
          <div>
            <h2 className=' text-4xl font-semibold'>
            Explore our store, <br/> where stylish shoes <br/> tell your unique story
            </h2>
            <p className='font-thin text-sm  pt-3'>Ever wondered about a world without personal peace? <br/> Step into our footwear – where every pair isn&apos;t just a step, <br/> but a stride towards tranquility. Find the peace you seek <br/> in every step you take.</p>
          </div>
        </div>

      </section>
     
      <section className='xl:px-20 md:px-10 xs:px-4 py-10 pb-24'>
        <div className='text-center pb-14 xl:px-36'>
          <span></span>
          <h2 className=' xl:text-5xl font-semibold  text-center' >Discover Our Amazing Product Selection</h2>
          <p>Shop now and enjoy exclusive discounts on your first purchase.</p>
        </div>
        <div className=' flex overscroll-x-auto justify-between'>
          <div className=' w-[250px]'>
            <div className='w-[250px] h-[300px] overflow-hidden'>
            <Image
                  src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  width={1000}
                  height={1000}
                  alt='hero image'
                />
            </div>
            <h3 className=' font-bold'>All star convass</h3>
            <p className=' text-sm pt-2 font-light'>a pair of shoe that let you enjoy your simple life style</p>
            <button  className=' bg-white mt-3 text-black '>
              add cart +
            </button>
          </div>
          <div className=' w-[250px]'>
            <div className='w-[250px] h-[300px] overflow-hidden'>
            <Image
                  src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  width={1000}
                  height={1000}
                  alt='hero image'
                />
            </div>
            <h3 className=' font-bold'>All star convass</h3>
            <p className=' text-sm pt-2 font-light'>a pair of shoe that let you enjoy your simple life style</p>
            <button  className=' bg-white mt-3 text-black '>
              add cart +
            </button>
          </div>
          <div className=' w-[250px]'>
            <div className='w-[250px] h-[300px] overflow-hidden'>
            <Image
                  src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  width={1000}
                  height={1000}
                  alt='hero image'
                />
            </div>
            <h3 className=' font-bold'>All star convass</h3>
            <p className=' text-sm pt-2 font-light'>a pair of shoe that let you enjoy your simple life style</p>
            <button  className=' bg-white mt-3 text-black '>
              add cart +
            </button>
          </div>
          <div className=' w-[250px]'>
            <div className='w-[250px] h-[300px] overflow-hidden'>
            <Image
                  src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  width={1000}
                  height={1000}
                  alt='hero image'
                />
            </div>
            <h3 className=' font-bold'>All star convass</h3>
            <p className=' text-sm pt-2 font-light'>a pair of shoe that let you enjoy your simple life style</p>
            <button  className=' bg-white mt-3 text-black '>
              add cart +
            </button>
          </div>
         
        </div>
        <div className=' flex justify-center py-10 gap-2'>
          <button className=' px-8 py-3 border border-black'>Explore</button>
          <button className=' px-8 py-3 '>Sign Up</button>
        </div>
      </section>

     

      <section className=' grid md:grid-cols-2 py-14 xl:px-20 md:px-10 xs:px-4 gap-6 ' >
        <div className=' flex flex-col gap-3'>
          <p>Convinience</p>
          <h1 className='xl:text-4xl md:text-3xl xs:text-2xl font-semibold'>Shop with Ease and Enjoy Exclusive Benefits</h1>
          <span>
            Experience the convinence, quality, and value of shopping with our ecommerce store. With a wwide selection of products and user-friendly interface, we make it easy for you to find what you need and make make secure purchases.
          </span>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h2 className=' text-lg font-bold pb-3'>Quality</h2>
              <p className=' text-sm'>Discover top-notch products that are carefully curated for their quality aand reliability</p>
            </div>
            <div>
              <h2 className=' text-lg font-bold pb-3'>Value</h2>
              <p className=' text-sm'>Get the best value for your money with competitive prices and special offers</p>
            </div>
          </div>
          <div className=' flex  py-10 gap-2'>
          <button className=' px-8 py-3 border border-black'>Learn More</button>
          <button className=' px-8 py-3 '>Sign Up</button>
        </div>
          
        </div>
        <div></div>
      </section>

      {/* <section  className='  py-36  '>
        <div className="marquee border-2">
          <div className="marquee_inner">
            <div className="marque_parts">
              i sell this the cheap
              →
            </div>
            <div className="marque_parts">
              i sell this the cheap
              →
            </div>
            <div className="marque_parts">
              i sell this the cheap
              →
            </div>
            <div className="marque_parts">
              i sell this the cheap
              →
            </div>
            <div className="marque_parts">
              i sell this the cheap
              →
            </div>
            <div className="marque_parts">
              i sell this the cheap
              →
            </div>
            <div className="marque_parts">
              i sell this the cheap
              →
            </div>
          </div>
        </div>
        <div className="marquee marq2 border-2">
        <div className="marquee_inner">
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
          <div className="marque_parts2">
            i sell this the cheap
            →
          </div>
        </div>
      </div>
      </section> */}
      <section className='xl:px-20 md:px-10 xs:px-4 grid md:grid-cols-2 py-14'>
        <div>
          <h1 className=' xl:text-4xl font-semibold pb-8'>It has been our goal to get you the footwear that tells your story</h1>
          <ol className=' flex flex-col gap-4'>
            <li className=' border-l-2 border-black h-28 p-4'><b>High-Quality Performance:</b> <br/>
                <small>Experience faster load times and seamless interactions with cutting-egde technology</small>
            </li>
            <li className=' border-l-2 h-28 p-4'><b>Intuitive User Interface:</b> <br/>
                <small>Effortlessly explore and use our platform, thanks to a user-friendly design with intuitive navigation.</small>
            </li>
            <li className=' border-l-2  h-28 p-4'><b>Robust Security Measures:</b> <br/>
                <small>Protect your data and ensure a secure online experience with advanced security protocols and encryption.</small>
            </li>
            <li className=' border-l-2 h-28 p-4'><b>24/7 Customer Support:</b> <br/>
                <small>Receive prompt assistance whenever you need it from our dedicated support team available around the clock.</small>
            </li>
          </ol>
        </div>
        <div className=' grid place-content-center'>
          <div className='bg-white' >
            <div className=' xl:w-[500px] md:w-[300px] xs:w-[300px]  '>
                <Image
                  src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  width={1000}
                  height={1000}
                  alt='hero image'
                />
            </div>
            
          </div>
        </div>
      </section>
      <section className='xl:px-20 md:px-10 xs:px-4  py-24 bg-slate-200'>
        <div className=' md:w-2/4'>
          <span>Shop</span>
          <h1 className='  xl:text-5xl font-bold pb-3'>
            Discover the Best Deals Online
          </h1>
          <span className='  border'>Join millions of satisfied customers and experience the convenience of online shopping. Browe our wide selection of products and enjoy fast reliable shipping.</span>
          <div className=' flex  py-10 gap-2'>
            <button className=' px-8 py-3 border border-black'>Shop Now</button>
            <button className=' px-8 py-3 '>Sign Up</button>
          </div>
        </div>
      </section>
      <section className='xl:px-20 md:px-10 xs:px-4  py-28'>
          <h1 className='pb-3 text-4xl font-bold'>Happy Customers</h1>
          <p className=' text-sm pb-14'>Hear what our customers have to say about us</p>
          <div className=' grid grid-cols-3 gap-24 '>
            <div className=' flex flex-col gap-4'>
              <div className=' text-3xl'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
              <p className=' font-bold text-sm'>Our experience with the store has been exceptional!</p>
              <div className=' w-14 h-14 rounded-full overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />

              </div>
              <div>
                <b className=' text-sm font-semibold'>John Doe</b>
                <p className=' text-xs'>CEO, Company XYZ</p>
              </div>
            </div>
            <div className=' flex flex-col gap-4'>
              <div className=' text-3xl'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
              <p className=' font-bold text-sm'>Our experience with the store has been exceptional!</p>
              <div className=' w-14 h-14 rounded-full overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />

              </div>
              <div>
                <b className=' text-sm font-semibold'>John Doe</b>
                <p className=' text-xs'>CEO, Company XYZ</p>
              </div>
            </div>
            <div className=' flex flex-col gap-4'>
              <div className=' text-3xl'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
              <p className=' font-bold text-sm'>Our experience with the store has been exceptional!</p>
              <div className=' w-14 h-14 rounded-full overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />

              </div>
              <div>
                <b className=' text-sm font-semibold'>John Doe</b>
                <p className=' text-xs'>CEO, Company XYZ</p>
              </div>
            </div>
          </div>
      </section>
      </div>

      <section className='xl:px-20 md:px-10 xs:px-4 grid md:grid-cols-2 py-24'>
        <div >
          <h1 className=' xl:text-4xl font-bold pb-4'>Frequently Asked <br/> Questions</h1>

        <p className='pb-4'>Find answers to common questions about ordering, shipping, returns, and product use</p>
        <button className=' px-8 py-3 border border-black'>Contact</button>

        </div>
        <div>
          <div className='border-t-2 border-black py-4 flex flex-col gap-4'>
            <div className=' flex justify-between items-center'>
              <h2 className=' font-bold '> How do i order</h2>
              <div>
                go
              </div>

            </div>
            <p className=' text-sm'>To place an order, simply browse our products, add items to your cart, and proceed to checkout to follow the prompts to enter your shipping and payment information and then confirm your  order.</p>
          </div>
          <div className='border-t-2 border-black py-4 flex flex-col gap-4'>
            <div className=' flex justify-between items-center'>
              <h2 className=' font-bold '> How do i order</h2>
              <div>
                go
              </div>

            </div>
            <p className=' text-sm'>To place an order, simply browse our products, add items to your cart, and proceed to checkout to follow the prompts to enter your shipping and payment information and then confirm your  order.</p>
          </div>
          <div className='border-t-2 border-black py-4 flex flex-col gap-4'>
            <div className=' flex justify-between items-center'>
              <h2 className=' font-bold '> How do i order</h2>
              <div>
                go
              </div>

            </div>
            <p className=' text-sm'>To place an order, simply browse our products, add items to your cart, and proceed to checkout to follow the prompts to enter your shipping and payment information and then confirm your  order.</p>
          </div>
          <div className='border-t-2 border-black py-4 flex flex-col gap-4'>
            <div className=' flex justify-between items-center'>
              <h2 className=' font-bold '> How do i order</h2>
              <div>
                go
              </div>

            </div>
            <p className=' text-sm'>To place an order, simply browse our products, add items to your cart, and proceed to checkout to follow the prompts to enter your shipping and payment information and then confirm your  order.</p>
          </div>
          <div className='border-t-2 border-black py-4 flex flex-col gap-4'>
            <div className=' flex justify-between items-center'>
              <h2 className=' font-bold '> How do i order</h2>
              <div>
                go
              </div>

            </div>
            <p className=' text-sm'>To place an order, simply browse our products, add items to your cart, and proceed to checkout to follow the prompts to enter your shipping and payment information and then confirm your  order.</p>
          </div>
        </div>
        

      </section>
      <section className='xl:px-20 md:px-10 xs:px-4  py-24'>
        <h1 className=' text-4xl font-bold'>Meet Our Team</h1>
        <span className=' text-sm'>Gett to know the experts behind our eCommerce store</span>
        <div className=' grid md:grid-cols-4 xs:grid-cols-2 gap-y-10'>
          <div className=' md:w-[280px] xs:w-[180px]'>
            <div className=' md:w-[280px] xs:w-[160px] md:h-[280px] xs:h-[160px] overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />
              
            </div>
            <div className=' flex flex-col gap-4'>
              <div>
                <h1 className=' font-bold'>John Doe</h1>
                <span>CEO</span>
              </div>
              <div>
                <p className=' text-xs'>here is mr john our one and only CEO the brain behind newShop</p>
              </div>
              <div>
                icon
                icon
                icon
              </div>
            </div>
          </div>
          <div className=' md:w-[280px] xs:w-[180px]'>
            <div className=' md:w-[280px] xs:w-[160px] md:h-[280px] xs:h-[160px] overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />
              
            </div>
            <div className=' flex flex-col gap-4'>
              <div>
                <h1 className=' font-bold'>John Doe</h1>
                <span>CEO</span>
              </div>
              <div>
                <p className=' text-xs'>here is mr john our one and only CEO the brain behind newShop</p>
              </div>
              <div>
                icon
                icon
                icon
              </div>
            </div>
          </div>
          <div className=' md:w-[280px] xs:w-[180px]'>
            <div className=' md:w-[280px] xs:w-[160px] md:h-[280px] xs:h-[160px] overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />
              
            </div>
            <div className=' flex flex-col gap-4'>
              <div>
                <h1 className=' font-bold'>John Doe</h1>
                <span>CEO</span>
              </div>
              <div>
                <p className=' text-xs'>here is mr john our one and only CEO the brain behind newShop</p>
              </div>
              <div>
                icon
                icon
                icon
              </div>
            </div>
          </div>
          <div className=' md:w-[280px] xs:w-[180px]'>
            <div className=' md:w-[280px] xs:w-[160px] md:h-[280px] xs:h-[160px] overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />
              
            </div>
            <div className=' flex flex-col gap-4'>
              <div>
                <h1 className=' font-bold'>John Doe</h1>
                <span>CEO</span>
              </div>
              <div>
                <p className=' text-xs'>here is mr john our one and only CEO the brain behind newShop</p>
              </div>
              <div>
                icon
                icon
                icon
              </div>
            </div>
          </div>
          <div className=' md:w-[280px] xs:w-[180px]'>
            <div className=' md:w-[280px] xs:w-[160px] md:h-[280px] xs:h-[160px] overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />
              
            </div>
            <div className=' flex flex-col gap-4'>
              <div>
                <h1 className=' font-bold'>John Doe</h1>
                <span>CEO</span>
              </div>
              <div>
                <p className=' text-xs'>here is mr john our one and only CEO the brain behind newShop</p>
              </div>
              <div>
                icon
                icon
                icon
              </div>
            </div>
          </div>
          <div className=' md:w-[280px] xs:w-[180px]'>
            <div className=' md:w-[280px] xs:w-[160px] md:h-[280px] xs:h-[160px] overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />
              
            </div>
            <div className=' flex flex-col gap-4'>
              <div>
                <h1 className=' font-bold'>John Doe</h1>
                <span>CEO</span>
              </div>
              <div>
                <p className=' text-xs'>here is mr john our one and only CEO the brain behind newShop</p>
              </div>
              <div>
                icon
                icon
                icon
              </div>
            </div>
          </div>
          <div className=' md:w-[280px] xs:w-[180px]'>
            <div className=' md:w-[280px] xs:w-[160px] md:h-[280px] xs:h-[160px] overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />
              
            </div>
            <div className=' flex flex-col gap-4'>
              <div>
                <h1 className=' font-bold'>John Doe</h1>
                <span>CEO</span>
              </div>
              <div>
                <p className=' text-xs'>here is mr john our one and only CEO the brain behind newShop</p>
              </div>
              <div>
                icon
                icon
                icon
              </div>
            </div>
          </div>
          <div className=' md:w-[280px] xs:w-[180px]'>
            <div className=' md:w-[280px] xs:w-[160px] md:h-[280px] xs:h-[160px] overflow-hidden'>
              <Image
                    src="https://images.pexels.com/photos/8092991/pexels-photo-8092991.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    width={1000}
                    height={1000}
                    alt='hero image'
                  />
              
            </div>
            <div className=' flex flex-col gap-4'>
              <div>
                <h1 className=' font-bold'>John Doe</h1>
                <span>CEO</span>
              </div>
              <div>
                <p className=' text-xs'>here is mr john our one and only CEO the brain behind newShop</p>
              </div>
              <div>
                icon
                icon
                icon
              </div>
            </div>
          </div>

         
         
          

         
        </div>


      </section>
      <div className='xl:px-20 md:px-10 xs:px-4  gap-y-8 justify-between py-20 border-t-2'>
          <div>
            <h1 className=' md:text-4xl font-bold pb-3'>We&apos;re hiring!</h1>
            <p className=' md:text-sm pb-4'>stay updated with our latest news and offers </p>
            <button className=' px-8 py-3 border border-black'>Open position</button>

          </div>
          
        </div>



        
    </>
  )
}
