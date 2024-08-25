"use client";
import { once } from "events";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Info = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative overflow-hidden  min-h-screen ">
      <motion.div
        className="inset-0 bg-center bg-cover  absolute blur-sm "
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664475477998-087b6eab9a67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          y: backgroundY,
        }}
      ></motion.div>
      <div className=" min-h-screen  relative">
        <div className="bg-orange-900 min-h-screen w-full absolute opacity-55 inset-0 "></div>
        <div className="text-center  flex  min-h-screen flex-col items-center p-16  relative">
          <motion.div
            initial={{ y: "-100vw" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ type: "spring", stiffness: 30 }}
            className="shadow-xl shadow-black w-96 h-52 bg-cover bg-center rounded-xl md:w-full md:h-80"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664298699289-dfa4938b1272?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></motion.div>
          <motion.div>
            <motion.p
              initial={{ y: "100vh" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ type: "spring", stiffness: 30 }}
              className="py-14 text-sm md:text-lg text-white"
            >
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di
              antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
              itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir." QS.
              ar-rum (21)
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Info;
