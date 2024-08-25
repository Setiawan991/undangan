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

  const slides = [
    "https://plus.unsplash.com/premium_photo-1669366530655-ebf0798e56e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661721192637-b4d9b21d364d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603214924133-5c2c78471b73?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
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
    enter: { opacity: 0, x: 1 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -1 },
  };
  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={refcontainer}
        className="absolute inset-0 min-h-screen  "
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          y: parallax,
        }}
      ></motion.div>
      <motion.div
        ref={refFirst}
        className=" absolute inset-0 p-7 opacity-80 bg-amber-900 text-small md:text-lg text-center overflow-hidden"
      ></motion.div>
      <motion.div
        initial={{ y: "-100vw" }}
        animate={inViewFirst ? { y: 0 } : { y: "-100vw" }}
        transition={{ type: "spring", stiffness: 30 }}
        className="py-6 mb-3 px-5 md:px-44 gap-2 flex flex-col text-center text-white"
      >
        <h1 className="text-lg md:text-xl font-bold py-6">Save The Date</h1>
        <p className="text-sm md:text-lg">
          Tanpa mengurangi rasa hormat. kami mengundang Bapak/Ibu/Saudara/i
          serta kerabat sekalian untuk menghadiri acara pernikahan kami
        </p>
      </motion.div>

      <div className="relative min-h-screen">
        <AnimatePresence initial={false}>
          <motion.div
            className=" absolute inset-0  min-h-screen bg-cover bg-center rounded-full"
            variants={slideVarians}
            key={CurrentIndex}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            style={{ backgroundImage: `url(${slides[CurrentIndex]})` }}
          ></motion.div>
        </AnimatePresence>

        <div className=" absolute  inset-0 bg-white opacity-80 rounded-full"></div>
        <div className=" relative  flex flex-col md:flex-row md:gap-28 gap-5 min-h-screen justify-center items-center text-center p-14 ">
          <div ref={refSecond}>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView2 ? { scale: 1.0 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <h1 className="text-xl md:text-2xl">Akad nikah</h1>

              <div className="flex w-full  gap-5 p-6">
                <hr className="border-t-2 border-black w-1/2 mt-5" />
                <SketchLogo size={40} />
                <hr className="border-t-2 border-black w-1/2 mt-5" />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={inView2 ? { scale: 1.0 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 20 }}
              className="text-sm md:text-lg"
            >
              <h2>Minggu 18 desember 2024</h2>
              <h3>Pukul 08.00 WIB</h3>

              <div className="py-10">
                <h2>
                  Alamat : Kediaman Mempelai Wanita jln.ParakanMuncang perumahan
                  SBG Blok A6 NO 6
                </h2>
                <div className=" py-6">
                  <a
                    className=" bg-amber-600 p-2 rounded-lg text-white "
                    href="https://maps.app.goo.gl/rouH5V5YHEQ6JxK76"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lokasi acara
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div ref={refthird}>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView3 ? { scale: 1.0 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 10 }}
            >
              <h1 className="text-xl md:text-2xl">Resepsi</h1>
              <div className="flex w-full gap-5 p-6">
                <hr className="border-t-2 border-black w-1/2 mt-5" />
                <FlowerLotus size={40} />
                <hr className="border-t-2 border-black w-1/2 mt-5" />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={inView3 ? { scale: 1.0 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 20 }}
              className="text-sm md:text-lg"
            >
              <h2>Minggu 18 Desember 2024</h2>
              <h3>Pukul 10.00 WIB</h3>

              <div className="py-10">
                <h2>
                  Alamat : Kediaman Mempelai Wanita jln.ParakanMuncang perumahan
                  SBG Blok A6 NO 6
                </h2>
                <div className=" py-6">
                  <a
                    className=" bg-amber-600 p-2 rounded-lg text-white "
                    href="https://maps.app.goo.gl/rouH5V5YHEQ6JxK76"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lokasi acara
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingEvent;
