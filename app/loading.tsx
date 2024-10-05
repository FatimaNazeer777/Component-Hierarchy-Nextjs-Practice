"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Loading() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration
      }, []);
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#FFDD00] via-[#00BFFF] to-[#FFF5E1]">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Loading...</h1>
            </div>
        </div>
    );
}
