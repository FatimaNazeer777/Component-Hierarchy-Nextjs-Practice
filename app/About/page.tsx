"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link"
import Image from 'next/image';
import aboutImage from "../components/about.jpg"; 

export default async function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration
      }, []);
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });

    return (
        <div>
            <section className="text-gray-600 body-font" id="about">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 ml-12 font-medium bg-gradient-to-r from-gray-800 via-purple-800 to-blue-800 bg-clip-text text-transparent" >
                         Journey with VoyageVista!                          
                        </h1>
                        <p className="mb-8 leading-relaxed text-[#1230AE]"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                        At VoyageVista, we believe that every journey is a story waiting to be told. Our mission is to inspire wanderlust and provide travelers with unforgettable experiences across the globe. From breathtaking landscapes to vibrant cultures, we curate adventures that connect you with the heart of each destination. Whether you are seeking serene beaches, majestic mountains, or bustling cityscapes, we are here to guide you every step of the way. Let us help you turn your travel dreams into reality and explore the world like never before!
                        </p>
                        <div className="flex justify-center">
                            <Link href="/Destinations"><button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg ml-10 bg-yellow-600">
                                Explore your Dream Destinations...
                            </button></Link>
                        
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
                        <div className="relative" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                            <Image 
                                src={aboutImage} 
                                alt="About" 
                                layout="responsive" 
                                width={720} 
                                height={600} 
                                className="object-cover object-center rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"  
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-50 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
