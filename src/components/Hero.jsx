"use client";
import React from 'react'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/banner1.jpeg",
    "/banner2.jpeg",
    "/banner3.jpeg",
    "/banner10.jpeg",
    "/banner11.jpeg",

    "/banner13.jpeg",
    "/banner14.jpeg",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };


    return (
        <div className="flex flex-col items-center py-15 w-full max-w-[1000px] h-[450px] mx-auto overflow-hidden ">


            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden"
            >
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            </motion.div>


            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white hover:bg-gray-900/80 transition"
            >
                <ChevronLeft size={24} />
            </button>


            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white hover:bg-gray-900/80 transition"
            >
                <ChevronRight size={24} />
            </button>


            <div className=" z-10 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
