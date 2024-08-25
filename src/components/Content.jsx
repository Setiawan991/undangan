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
        className=" min-h-screen bg-cover bg-center relative  overflow-hidden"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className=" bg-white  opacity-40 rounded-full absolute inset-0"></div>
        <div className="overflow-hidden relative z-10  min-h-screen py-5 md:py-10 text-small md:text-lg text-center  justify-center ">
          <motion.div
            initial={{ y: "-100vw" }}
            animate={inView ? { y: 0 } : { y: "-100vw" }}
            transition={{ type: "spring", stiffness: 30 }}
            className="p-14 md:px-72 "
            ref={ref}
          >
            <h1>
              Maha suci Allah S.W.T yang telah menciptakan makhluknya berpasang
              pasangan. Ya Allah rahmatillah pernikahan kami:
            </h1>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5">
            <div className=" flex flex-col justify-center  " ref={ref}>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={inView ? { x: 0 } : { x: "-100vw" }}
                transition={{ type: "spring", stiffness: 20 }}
                className="bg-white w-48 h-56 md:w-56 md:h-72   rounded-full"
              ></motion.div>

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
                <h2>Friska Ayu Wardani S.Pd</h2>
                <p>putri dari</p>
                <p>Bapak Karmin & Ibu Herniyati</p>
                <div className=" w-full flex justify-center py-5">
                  <div className="bg-amber-800 rounded-full p-1">
                    <InstagramLogo size={20} color="white" />
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView2 ? { scale: 1.0 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 20 }}
              className="flex w-full justify-center items-center md:mr-5 md:w-72 gap-5 p-11 md:p-1 md:mb-48"
            >
              <hr className="border-t-2 border-black w-1/2 " />
              <SketchLogo size={40} />
              <hr className="border-t-2 border-black w-1/2" />
            </motion.div>

            <motion.div ref={ref2} className=" flex flex-col justify-center  ">
              <motion.div
                initial={{ x: "-100vw" }}
                animate={inView2 ? { x: 0 } : { x: "-100vw" }}
                transition={{ type: "spring", stiffness: 20 }}
                className="bg-white w-48 h-56 md:w-56 md:h-72   rounded-full"
              ></motion.div>

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
                <h2>Jihar Muhammad Pratama</h2>
                <p>putra dari</p>
                <p>Bapak Asep & Ibu Dedah</p>
                <div className=" w-full flex justify-center py-5">
                  <div className="bg-amber-800 rounded-full p-1">
                    <InstagramLogo size={20} color="white" />
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
