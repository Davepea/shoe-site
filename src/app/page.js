"use client"
import Image from 'next/image'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useEffect(()=>{
    gsap.to(".but2", {
      x: 700,
      rotation : 360
    })
    gsap.to(".but",{
      x: 600
    })
    
    gsap.to(".box", {
      x : 600,
      rotation: 360,
      duration: 4,
      ease: "bounce"
    })

    gsap.to(".marque_parts",{
        xPercent: -100,
        repeat: -1,
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
      <section className=' grid grid-cols-2 h-screen place-content-center p-10'>
        <div>
          <h1 className=' text-6xl'>Step into Simplicity, Strut out in Style</h1>
          <div>
            <button className='but2'>Buy our product</button>
            <button className='but'>Buy our product</button>

          </div>
        </div>
        <div>
          <div className=''>
              <Image
                src=""
                width={100}
                height={100}
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
  </div>

    </>
  )
}
