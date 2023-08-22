"use client";
import Image from "next/image";
import { CustomButton } from ".";
function Hero() {
  const handleScroll = () => {
    const discover = document.getElementById("discover") as HTMLElement;
    discover.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book and rent a car quickly and easily
        </h1>
        <p className="hero__subtitle">
          create a luxurious ride scene with our high-end cars
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary rounded-full mt-10 text-white"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
