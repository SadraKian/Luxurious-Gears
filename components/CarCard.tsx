"use client";
import { CarDetails, CustomButton } from ".";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateRentPrice, generateCarImageUrl } from "@/utils";
import { useState } from "react";

interface CardProps {
  car: CarProps;
}

function CarCard({ car }: CardProps) {
  const { city_mpg, make, model, year, transmission, drive, fuel_type } = car;
  const carRent = calculateRentPrice(make, city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="car-card group">
      <div className="car-card__content ">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold ">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium ">/ Day</span>
      </p>
      <div className="relative w-full h-40 object-contain my-3">
        <Image
          src={generateCarImageUrl(car)}
          className="object-contain"
          fill
          alt={make}
        />
      </div>
      <div className="relative w-full flex mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-slate-900">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering wheel"
            />
            <p className="text-14px">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 -ml-5">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-14px">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="Steering wheel" />
            <p className="text-14px">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full bg-slate-900 text-white leading-[17px] font-bold rounded-full"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} car={car} closeModal={closeModal} />
    </section>
  );
}

export default CarCard;
