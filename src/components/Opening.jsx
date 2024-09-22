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
      className=" gap-7 flex-col min-h-screen overflow-hidden py-10 items-center flex  bg-cover bg-center"
      style={{
        backgroundImage: "url('/2.jpg')",
      }}
      id="openning"
      initial={{ y: 0 }}
      animate={parallax ? { y: 0 } : { y: "-200vw" }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="text-sm md:text-lg text-center gap-2 flex flex-col justify-start">
        <h2 className="md:text-lg">WEDDING INVITATION</h2>
        <h1 className="text-4xl md:text-6xl">Ayu & Aji</h1>
        <h3>03-11-2024</h3>
      </div>
      <div className="text-sm text-center flex flex-col gap-2 md:text-lg">
        <p>kepada Yth</p>

        <Button
          variant="shadow"
          className=" shadow-black bg-amber-600 font-semibold text-xs md:text-base  md:p-6"
          size="sm"
          onClick={handleClick}
        >
          Buka Undangan
        </Button>
      </div>
    </motion.div>
  );
};

export default Opening;
