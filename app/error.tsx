"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Error (){
        useEffect(() => {
            AOS.init({ duration: 1000 }); // Initialize AOS with a duration
          }, []);
   return(
       <div>
 <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#FFDD00] via-[#771a1a] to-[#FFF5E1]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Error: Your Page is not implemented!</h1>
            </div>
        </div> 
              </div>
   )
    
 }