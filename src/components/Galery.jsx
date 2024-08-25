"use client";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const Galery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: true });
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { amount: 0.1, once: true });

  return (
    <div className="min-h-screen relative">
      <motiondiv
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        className="min-h-screen bg-cover inset-0 bg-center absolute"
      ></motiondiv>
      <div className="bg-white absolute inset-0 opacity-70 min-h-screen"></div>
      <div className="relative  flex flex-col text-center min-h-screen w-full">
        <h1 className="text-lg md:text-xl py-10">Galery Foto</h1>
        <h3>
          Kami bersyukur di pertemukan oleh Allah SWT diwaktu terbaik kini kami
          menanti hari istimewa kami
        </h3>

        <div
          className=" overflow-hidden grid grid-cols-2 p-5 justify-center items-center gap-5 md:grid-cols-4  min-h-screen"
          ref={ref}
        >
          <motion.div
            initial={{ x: "-100vw" }}
            animate={inView ? { x: 0 } : { x: "-100vw" }}
            transition={{ type: "spring", stiffness: 30 }}
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-white ring-1 ring-white bg-center bg-cover  w-56 h-36 rounded-xl shadow-xl "
          ></motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={inView ? { x: 0 } : { x: "100vw" }}
            transition={{ type: "spring", stiffness: 30 }}
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-white ring-1 ring-white w-56 h-36 bg-center bg-cover rounded-xl shadow-xl "
          ></motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={inView ? { x: 0 } : { x: "-100vw" }}
            transition={{ type: "spring", stiffness: 30 }}
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-white ring-1 ring-white w-56 h-36 bg-center bg-cover rounded-xl shadow-xl "
          ></motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={inView ? { x: 0 } : { x: "100vw" }}
            transition={{ type: "spring", stiffness: 30 }}
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-white ring-1 ring-white w-56 h-36 bg-center bg-cover rounded-xl shadow-xl "
          ></motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={inView ? { x: 0 } : { x: "-100vw" }}
            transition={{ type: "spring", stiffness: 20 }}
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-white ring-1 ring-white w-56 h-36 bg-center bg-cover rounded-xl shadow-xl "
          ></motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={inView ? { x: 0 } : { x: "100vw" }}
            transition={{ type: "spring", stiffness: 20 }}
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-white ring-1 ring-white w-56 h-[19rem] bg-center bg-cover row-span-2 rounded-xl shadow-xl "
          ></motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={inView ? { x: 0 } : { x: "-100vw" }}
            transition={{ type: "spring", stiffness: 20 }}
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-white ring-1 ring-white w-56 bg-center bg-cover  row-span-2 h-[19rem] rounded-xl shadow-xl "
          ></motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={inView ? { x: 0 } : { x: "100vw" }}
            transition={{ type: "spring", stiffness: 20 }}
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="bg-white ring-1 ring-white w-56 h-36 bg-center bg-cover  rounded-xl shadow-xl"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
