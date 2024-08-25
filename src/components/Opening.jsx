"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const Opening = () => {
  const ref = useRef(null);
  const [parallax, setParallax] = useState(true);
  const [scrollHiden, setScrollHiden] = useState(true);
  useEffect(() => {
    if (scrollHiden) {
      document.body.style.overflow = "hidden";
      const homepage = document.getElementById("openning");
      homepage.scrollIntoView({ behavior: "auto" });
    } else {
      document.body.style.overflow = "auto";
    }
  });
  const handleClick = () => {
    setScrollHiden(false);
    const content = document.getElementById("homepage");
    content.scrollIntoView({ behavior: "smooth" });
    setParallax(false);
  };

  return (
    <motion.div
      ref={ref}
      className=" gap-7 flex-col min-h-screen overflow-hidden justify-center items-center flex  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661636604587-6ae3f5006763?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
      id="openning"
      initial={{ y: 0 }}
      animate={parallax ? { y: 0 } : { y: "-200vw" }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div
        className="w-56 h-72 shadow-lg md:w-72 md:h-80 shadow-black rounded-full bg-center bg-cover ring-2 ring-white"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1706485734382-656ac63bbc93?q=80&w=1505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div className="text-sm md:text-lg text-center gap-2 flex flex-col">
        <h2 className="md:text-lg">WEDDING INVITATION</h2>
        <h1 className="text-4xl md:text-6xl">Jihar & Ayu</h1>
        <h3>18 12 2024</h3>
      </div>
      <div className="text-sm text-center flex flex-col gap-2 md:text-lg">
        <p>kepada Yth</p>
        <Button
          variant="shadow"
          className=" shadow-black bg-amber-600 font-semibold text-xs md:text-base  md:p-6"
          size="sm"
          onClick={handleClick}
        >
          buka undangan
        </Button>
      </div>
    </motion.div>
  );
};

export default Opening;
