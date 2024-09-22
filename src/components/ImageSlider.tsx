"use client";
import { useEffect } from "react";

const ImageSlider = () => {
  useEffect(() => {
    const slides = document.querySelectorAll<HTMLDivElement>(".slide");
    const nextButton = document.querySelector<HTMLButtonElement>("#next");
    const prevButton = document.querySelector<HTMLButtonElement>("#prev");
    let currentIndex = 0;

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        if (slide) {
          slide.style.display = i === index ? "block" : "none";
        }
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    };

    if (nextButton) {
      nextButton.addEventListener("click", nextSlide);
    }
    if (prevButton) {
      prevButton.addEventListener("click", prevSlide);
    }

    const autoSlide = setInterval(nextSlide, 3000);

    return () => {
      if (nextButton) {
        nextButton.removeEventListener("click", nextSlide);
      }
      if (prevButton) {
        prevButton.removeEventListener("click", prevSlide);
      }
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slide">
        <img src="https://via.placeholder.com/800x400" alt="Image 1" />
      </div>
      <div className="slide">
        <img src="https://via.placeholder.com/800x300" alt="Image 2" />
      </div>
      <div className="slide">
        <img src="https://via.placeholder.com/800x200" alt="Image 3" />
      </div>
      <div className="slide">
        <img src="https://via.placeholder.com/800x100" alt="Image 4" />
      </div>
      <button id="prev" className="nav-button">
        Prev
      </button>
      <button id="next" className="nav-button">
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
