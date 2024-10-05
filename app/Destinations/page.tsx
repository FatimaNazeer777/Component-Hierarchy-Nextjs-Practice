"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dream1 from "../components/dream1.jpg";
import dream2 from "../components/dream2.jpg";
import dream3 from "../components/dream3.jpg";
import dream4 from "../components/dream4.jpg";
import dream5 from "../components/dream5.jpg";
import dream6 from "../components/dream6.jpg";

const Destinations = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration
      }, []);
  return (
    <div>
      <section className="text-gray-600 body-font" id="destinations">
        <h1 className='text-center font-serif text-4xl pb-0 pt-16 bg-gradient-to-r from-gray-800 via-purple-800 to-blue-800 bg-clip-text text-transparent'> Dream Destinations Await You!</h1>
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="w-full mb-20 text-center ">
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"   data-aos="flip-right" data-aos-duration="2000"
 
                  src={dream1}
                  width={500}
                  height={300}
                />
                
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"   data-aos="flip-right" data-aos-duration="2000"

                  src={dream3}
                  width={501}
                  height={301}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"  data-aos="flip-right" data-aos-duration="2000"
                  src={dream2}
                  width={600}
                  height={360}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"  data-aos="flip-right" data-aos-duration="2000"
                  src={dream4}
                  width={601}
                  height={361}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"  data-aos="flip-right" data-aos-duration="2000"
                  src={dream5}
                  width={502}
                  height={302}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"  data-aos="flip-right" data-aos-duration="2000"
                  src={dream6}
                  width={503}
                  height={303}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
