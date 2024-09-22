"use client";
import { FlowerLotus, FlowerTulip, SketchLogo } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const WeddingEvent = () => {
  const refcontainer = useRef(null);
  const refSecond = useRef(null);
  const refFirst = useRef(null);
  const refthird = useRef(null);
  const inView3 = useInView(refthird, { amount: 0.1, once: true });
  const inViewFirst = useInView(refFirst, { amount: 0.1, once: true });
  const inView2 = useInView(refSecond, { amount: 0.1, once: true });
  const { scrollYProgress } = useScroll({
    target: refcontainer,
    offset: ["start start", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  const slides = ["/8.jpg", "/13.jpg", "/10.jpg"];
  const [CurrentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevCurrent) => (prevCurrent + 1) % slides.length);
    };

    const autoSlide = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [slides.length]);

  const slideVarians = {
    enter: { opacity: 0, x: 5 }, // Slide masuk dari kanan
    center: { opacity: 1, x: 0 }, // Posisi slide saat ditampilkan
    exit: { opacity: 0, x: -5 }, // Slide keluar ke kiri
  };

  return (
    <div className=" overflow-hidden min-h-screen ">
      <div className=" bg-gray-300 p-10 flex justify-center">
        <p>Save The Date</p>
      </div>
      <div className="flex">
        <motion.div
          ref={refFirst}
          variants={slideVarians}
          key={CurrentIndex}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            backgroundImage: `url(${slides[CurrentIndex]})`,
            backgroundPosition: "center ",
          }}
          className="relative min-h-screen text-small md:text-lg text-center  bg-cover bg-center w-full"
        >
          <div className="absolute w-full bottom-0 p-4">
            <div className="z-10 w-full gap-4  flex-col  h-full absolute flex text-white pl-7 py-3  pr-20 text-start">
              <h3 className="text-xl"> Minggu 3 November 2024 08.00 WIB</h3>
              <p>
                Perum SBG Blok A6/06 RT:03 RW:014 Desa Cihanjuang kecamatan
                Cimanggung kabupaten Sumedang
              </p>
              <button className="bg-green-900 p-2 w-24 ">Buka Map</button>
            </div>
            <span className="z-0 relative flex  bg-black opacity-50 w-full h-52 rounded-xl"></span>
          </div>
        </motion.div>

        <div className="justify-center flex-col flex items-center w-48 md:w-96 text-center md:gap-28">
          <p className=" text-xl py-10 md:text-3xl">Akad</p>
          <p className="  py-10 inline-block transform rotate-90 text-3xl md:text-6xl">
            Ayu & Aji
          </p>
        </div>
      </div>
      <div className="bg-gray-300 p-20 text-center">
        <h1 className="text-lg md:text-xl font-bold ">Message</h1>
        <p className="text-sm md:text-lg ">
          Tanpa mengurangi rasa hormat. kami mengundang Bapak/Ibu/Saudara/i
          serta kerabat sekalian untuk menghadiri acara pernikahan kami
        </p>
      </div>
      <div className="flex">
        <div className="justify-center flex-col flex items-center w-48 md:w-96 text-center md:gap-28">
          <p className="  py-10 inline-block transform -rotate-90 text-3xl md:text-6xl">
            Ayu & Aji
          </p>
          <p className=" text-xl py-10 md:text-3xl">Resepsi</p>
        </div>
        <motion.div
          ref={refFirst}
          variants={slideVarians}
          key={CurrentIndex}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            backgroundImage: `url(${slides[CurrentIndex]})`,
            backgroundPosition: "center 20%",
          }}
          className="relative min-h-screen text-small md:text-lg text-center  bg-cover bg-center w-full"
        >
          <div className="absolute w-full bottom-0 p-4 ">
            <div className="z-10 w-full gap-4  flex-col  h-full absolute flex text-white pl-7 py-3  pr-20 text-start">
              <h3 className="text-xl"> Minggu 3 November 2024 10.00 WIB</h3>
              <p>
                Perum SBG Blok A6/06 RT:03 RW:014 Desa Cihanjuang kecamatan
                Cimanggung kabupaten Sumedang
              </p>
              <button className="bg-green-900 p-2 w-24 ">Buka Map</button>
            </div>
            <span className="z-0 relative flex  bg-black opacity-50 w-full h-52 rounded-xl"></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WeddingEvent;
