"use client"
import Image from 'next/image'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import Link from 'next/link';


gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useEffect(()=>{
    // gsap.to(".but2", {
    //   x: 700,
    //   rotation : 360
    // })
    // gsap.to(".but",{
    //   x: 600
    // })
    
    

    gsap.to(".marque_parts",{
        repeat: -1,
        xPercent: -100,
        duration: 2,
        ease:"linear",
    })
    .totalProgress(0.5);
    
    gsap.to(".marque_parts2",{
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
      <section className=' grid md:grid-cols-2 xs:grid-cols-1 py-20 place-content-center xl:px-20 md:px-10 xs:px-4 place-items-center'>
        <div>
          <h1 className=' xl:text-6xl md:text-4xl xs:text-4xl font-semibold'>Step into Simplicity, Strut out in Style</h1>
          <p className=' text-sm pt-4 font-thin'>Step into our store, where stylish shoes tell unique stories with comfort, curated for your personal expression and individuality</p>
          <div className='pt-6'>
            <button className='but2  md:px-6 md:py-3 xs:px-4 xs:py-3 text-black bg-white md:text-sm xs:text-xs'>Buy our product</button>
            <button className='but  md:text-sm  md:px-6 md:py-3 xs:px-4 xs:py-3 xs:text-xs'>Buy our product</button>

          </div>
        </div>
        <div className='shad xs:mt-10'>
          <div className=' xl:w-[400px] md:w-[300px] xs:w-[300px] transform rotate-12 '>
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
      <div className="marquee">
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
      <div className="marquee marq2">
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
      <section className=' grid md:grid-cols-2 py-28 xl:px-20 md:px-10 xs:px-4 gap-6 '>
        <div className=' flex flex-col gap-5 py-12 '>
          <div className=' flex gap-6 p-4  items-center bg-white md:w-[450px] xs:w-[300px] text-black md:left-16 xs:left-8 relative'>
            <div className='md:w-24 xs:w-20  '>
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
                  src="https://images.pexels.com/photos/5325585/pexels-photo-5325585.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={1000}
                   height={1000}
                   alt='image'
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
        <div className='text-center pb-8'>
          <span></span>
          <h2 className=' xl:text-4xl font-semibold  text-center' >Streamline Your Online Shopping Experience With Us</h2>
          <p >Our eCommerce platform offers an easy checkout process, exceptional customer service, and a wide range of products to meet your needs.</p>
        </div>
        <div>
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
            <p className=' text-sm pt-2 font-thin'>a pair of shoe that let you enjoy your simple life style</p>
            <button  className=' bg-white mt-3 text-black px-8 py-2 2pages and first-letter:marker:file:'>
              add cart +
            </button>
          </div>
        </div>
      </section>

      <section className='xl:px-20 md:px-10 xs:px-4 grid md:grid-cols-2 py-14'>
        <div>
          <h1 className=' xl:text-4xl font-semibold pb-8'>it has been our goal to get you the footwear that tells your story</h1>
          <ol className=' flex flex-col gap-4'>
            <li className=' border-l-2 h-28 p-4'><b>High-Quality Performance:</b> <br/>
                <small>Experience faster load times and seamless interactions with cutting-egde technology</small>
            </li>
            <li className=' border-l-2 h-28 p-4'><b>Intuitive User Interface:</b> <br/>
                <small>Effortlessly explore and use our platform, thanks to a user-friendly design with intuitive navigation.</small>
            </li>
            <li className=' border-l-2 h-28 p-4'><b>Robust Security Measures:</b> <br/>
                <small>Protect your data and ensure a secure online experience with advanced security protocols and encryption.</small>
            </li>
            <li className=' border-l-2 h-28 p-4'><b>24/7 Customer Support:</b> <br/>
                <small>Receive prompt assistance whenever you need it from our dedicated support team available around the clock.</small>
            </li>
          </ol>
        </div>
        <div className=' grid place-content-center'>
          <div className='bg-white' >
            <div className=' xl:w-[400px] md:w-[300px] xs:w-[300px]  transform rotate-12 '>
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
  </div>

    </>
  )
}
