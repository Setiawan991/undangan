"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

const Give = () => {
  const slides = [
    "https://plus.unsplash.com/premium_photo-1669366530655-ebf0798e56e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661721192637-b4d9b21d364d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603214924133-5c2c78471b73?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [CurrentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevSlide) => (prevSlide + 1) % slides.length);
    };
    const autoSlide = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [slides.length]);

  const slideVarians = {
    enter: { opacity: 0, x: 2 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -2 },
  };

  const handleClick = () => {
    alert("cek");
  };
  return (
    <div className=" relative min-h-screen overflow-hidden p-4">
      <motion.div
        key={CurrentIndex}
        variants={slideVarians}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
        style={{ backgroundImage: `url(${slides[CurrentIndex]})` }}
        className=" absolute inset-0 min-h-screen bg-cover bg-center"
      ></motion.div>
      <div className="bg-amber-800 opacity-45 absolute min-h-screen inset-0 "></div>

      <div className="relative flex flex-col md:flex-row gap-5">
        <div className="bg-white w-full md:w-1/2 h-80 opacity-40 rounded-xl relative"></div>
        <div className="absolute inset-0">
          <p>Wedding Gift</p>
        </div>
        <div className="bg-white w-full md:w-1/2 h-80 opacity-40 rounded-xl relative"></div>
        <div className="absolute inset-0">
          <p>Wedding Gift</p>
        </div>
      </div>
    </div>
  );
};

export default Give;
