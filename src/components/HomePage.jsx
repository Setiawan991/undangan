"use client";

import React, { useEffect, useRef, useState } from "react";
import { Dancing_Script, Sacramento } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
});
const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bagroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const content = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const [TimeReaming, setTimeReaming] = useState({
    days: 0,
    hours: 0,
    minute: 0,
    second: 0,
  });
  useEffect(() => {
    const dateTarget = new Date("2024-12-18T08:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = dateTarget - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeReaming({ days, hours, minute, second });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-cover bg-center  overflow-hidden"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        y: bagroundY,
      }}
      id="homepage"
      ref={ref}
    >
      <motion.div
        className="flex flex-col justify-center items-center min-h-screen gap-5 "
        style={{ y: content }}
      >
        <div className="text center justify-center flex flex-col items-center  gap-1 md:gap-3 text-black font-extrabold  ">
          <p className="md:text-lg ">kepada Bapak/Ibu/Saudara/i</p>
          <h1 className={`text-6xl md:text-8xl    ${sacramento.className}`}>
            Jihar & Ayu
          </h1>
          <p className="text-sm md:text-base">
            akan melangsungkan resepsi pernikahan dalam:
          </p>
        </div>
        <div className="flex gap-5  ">
          <div className="bg-amber-800 text-white font-bold md:text-lg text-sm w-20 h-20 md:w-32 md:h-32  rounded-full flex-col shadow-black shadow-sm flex justify-center items-center text white">
            <p>{TimeReaming.days}</p>
            <p>hari</p>
          </div>
          <div className="bg-amber-800 font-bold md:text-2xl text-sm  w-20 h-20 md:w-32 md:h-32 shadow-sm flex-col  rounded-full shadow-black flex justify-center items-center text-white">
            <p>{TimeReaming.hours}</p>
            <p>jam</p>
          </div>
          <div className="bg-amber-800 font-bold md:text-2xl text-sm w-20 h-20 md:w-32 md:h-32 shadow-sm flex-col rounded-full flex shadow-black justify-center items-center text-white">
            <p>{TimeReaming.minute}</p>
            <p>menit</p>
          </div>
          <div className="bg-amber-800 font-bold md:text-2xl text-sm  w-20 h-20 md:w-32 md:h-32  rounded-full flex-col shadow-sm flex shadow-black justify-center items-center text-white">
            <p>{TimeReaming.second}</p>
            <p>detik</p>
          </div>
        </div>
        <div className=""></div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
