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
    const dateTarget: Date = new Date("2024-11-03T08:00:00");
    const interval = setInterval(() => {
      const now: Date = new Date();
      const difference = dateTarget.getTime() - now.getTime();
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
        backgroundImage: "url('/2.jpg')",
        y: bagroundY,
      }}
      id="homepage"
      ref={ref}
    >
      <motion.div
        className="flex flex-col py-10 md:py-5 items-center  min-h-screen gap-5 "
        style={{ y: content }}
      >
        <div className="text center flex flex-col items-center   gap-1 md:gap-3 text-black font-extrabold  ">
          <p className=" ">kepada Bapak/Ibu/Saudara/i</p>
          <h1 className={`text-6xl    ${sacramento.className}`}>Ayu & Aji</h1>
          <p className="text-sm md:text-base ">
            akan melangsungkan resepsi pernikahan dalam:
          </p>
        </div>
        <div className="flex gap-5  ">
          <div className="bg-green-950  font-bold  text-sm w-20 h-20   rounded-full flex-col shadow-black shadow-lg flex justify-center items-center text-white">
            <p>{TimeReaming.days}</p>
            <p>hari</p>
          </div>
          <div className="bg-green-950  font-bold  text-sm w-20 h-20  rounded-full flex-col shadow-black shadow-lg flex justify-center items-center text-white">
            <p>{TimeReaming.hours}</p>
            <p>jam</p>
          </div>
          <div className="bg-green-950 font-bold  text-sm w-20 h-20  shadow-lg flex-col rounded-full flex shadow-black justify-center items-center text-white">
            <p>{TimeReaming.minute}</p>
            <p>menit</p>
          </div>
          <div className="bg-green-950 font-bold  text-sm  w-20 h-20   rounded-full flex-col shadow-lg flex shadow-black justify-center items-center text-white">
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
