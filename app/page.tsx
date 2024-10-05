"use client";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import home1 from "../app/components/home1.jpg";
import home2 from "../app/components/home2.jpg";
import home3 from "../app/components/home3.jpg";
import home4 from "../app/components/home4.jpg";
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import AOS from 'aos';


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font" id="hero">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-serif font-semibold title-font mb-4 tracking-widest bg-gradient-to-r from-gray-800 via-purple-800 to-blue-800 bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: ['Your Adventure Starts Here!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#1230AE]">
              Unlock the World’s Wonder
              Experience Unique Cultures and Traditions
              From Exotic Beaches to Majestic Mountains
              Your Journey Begins with a Click
              Explore, Dream, and Discover
              Let Us Guide You to Your Next Adventure!
            </p>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
                    <Image src={home1} alt="Beach" width={400} height={250} className="object-cover w-full h-48" data-aos="zoom-in-down"  />
                    <div className="px-4 py-6 flex-grow">
                      <h2 className="title-font font-medium text-xl md:text-2xl text-gray-900">Beach Paradise</h2>
                      <p className="leading-relaxed">2.7M Visitors</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
                    <Image src={home2} alt="Mountains" width={400} height={250} className="object-cover w-full h-48" data-aos="zoom-in-down"  />
                    <div className="px-4 py-6 flex-grow">
                      <h2 className="title-font font-medium text-xl md:text-2xl text-gray-900">Mountain Adventure</h2>
                      <p className="leading-relaxed">1.3M Visitors</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
                    <Image src={home3} alt="Adventure" width={400} height={250} className="object-cover w-full h-48" data-aos="zoom-in-down"  />
                    <div className="px-4 py-6 flex-grow">
                      <h2 className="title-font font-medium text-xl md:text-2xl text-gray-900">Adventure Awaits</h2>
                      <p className="leading-relaxed">1.1M Visitors</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full" >
                  <div className="border-2 border-gray-200 rounded-lg overflow-hidden h-full flex flex-col" data-aos="zoom-in-down" >
                    <Image src={home4} alt="Historical" width={400} height={250} className="object-cover w-full h-48"  />
                    <div className="px-4 py-6 flex-grow">
                      <h2 className="title-font font-medium text-xl md:text-2xl text-gray-900">Historical Sites</h2>
                      <p className="leading-relaxed">2.8M Visitors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
