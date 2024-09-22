"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const navLink = [
  {
    name: "home",
    link: "#",
  },
  {
    name: "whish",
    link: "#",
  },
  {
    name: "location",
    link: "#",
  },
  {
    name: "give",
    link: "#",
  },
];

const NavbarPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNvbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const infoSection = document.getElementById("content");
      if (infoSection) {
        const infoTop = infoSection.getBoundingClientRect().top;
        if (infoTop <= 0) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {showNvbar && (
        <div className=" w-full md:h-16 fixed  bottom-0 md:top-0 text-sm md:text-base z-20">
          <div className="navbar w-full ring-1 ring-white shadow-xl bg-white">
            <ul className="flex justify-center gap-5 p-2 md:p-5">
              {navLink.map((event, index) => {
                return (
                  <li key={index}>
                    <Link href={event.link}>
                      <h1
                        className={`hover-custom-navbar hover:rounded-md hover:shadow-xl ${
                          activeIndex === index
                            ? "bg-green-950  text-white px-4 py-1 text-sm md:text-medium rounded-lg  transition-all ease-in-out "
                            : "text-black"
                        }`}
                        onClick={() => setActiveIndex(index)}
                      >
                        {event.name}
                      </h1>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarPage;
