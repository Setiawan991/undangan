"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { InstagramLogo, SketchLogo } from "@phosphor-icons/react";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
});

const Content = () => {
  const pageref = useRef(null);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { amount: 0.1, once: true });
  const inView = useInView(ref, { amount: 0.1, once: true });
  return (
    <div ref={pageref} className="overflow-hidden">
      <motion.div
        className=" min-h-screen bg-cover md:bg-cover bg-center bg-no-repeat relative  overflow-hidden"
        style={{
          backgroundImage: "url('/14.jpg')",
          backgroundPosition: "center 20%",
        }}
      >
        <div className=" bg-white  opacity-75 rounded-full absolute inset-0"></div>
        <div className="overflow-hidden relative z-10  min-h-screen py-5 px-10 md:text-lg text-small  text-center  justify-center ">
          <motion.div
            initial={{ y: "-100vw" }}
            animate={inView ? { y: 0 } : { y: "-100vw" }}
            transition={{ type: "spring", stiffness: 30 }}
            className=" px-20 pt-12 md:px-72 "
            ref={ref}
          >
            <h1>
              Maha suci Allah S.W.T yang telah menciptakan makhluknya berpasang
              pasangan. Ya Allah rahmatillah pernikahan kami:
            </h1>
          </motion.div>
          <div className="flex flex-col  justify-center items-center gap-10 p-10 md:pb-12 ">
            <div className=" flex flex-col justify-center" ref={ref}>
              <motion.h1
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1.1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 20 }}
                className={`text-6xl py-3 ${sacramento.className}`}
              >
                Ayu
              </motion.h1>

              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1.0 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 20 }}
              >
                <h2>Friska Ayu Wardani, S.Pd</h2>
                <p>Putri dari</p>
                <p>Bapak Karmin, S.pd & Ibu Herniyati</p>
                <div className=" w-full flex justify-center items-center py-5">
                  <div className="bg-green-950  rounded-full  justify-center items-center  p-3 flex gap-2">
                    <InstagramLogo size={20} color="white" />
                    <p className="text-white">@friskaayuw</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView2 ? { scale: 1.0 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 20 }}
              className="flex w-full   gap-5 justify-center items-center"
            >
              <hr className="border-t-2 border-black md:w-1/3 w-1/2" />
              <SketchLogo size={40} />
              <hr className="border-t-2 border-black md:w-1/3 w-1/2 " />
            </motion.div>

            <motion.div
              ref={ref2}
              className=" flex flex-col justify-center  md:mb-0  "
            >
              <motion.h1
                initial={{ scale: 0 }}
                animate={inView2 ? { scale: 1.1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 20 }}
                className={`text-6xl py-3 ${sacramento.className}`}
              >
                Aji
              </motion.h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView2 ? { scale: 1.0 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 20 }}
              >
                <h2>Pratu Jihar Muhammad Pratama</h2>
                <p>Putra dari</p>
                <p>Bapak Asep Margana (Alm) & Ibu Dedah Jubaedah</p>
                <div className=" w-full flex justify-center items-center py-5">
                  <div className="bg-green-950  rounded-full p-3  items-center  justify-center flex gap-2">
                    <InstagramLogo size={20} color="white" />
                    <p className="text-white">@j.m.pratama</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
