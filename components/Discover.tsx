"use client";
import React, { useState, useEffect } from "react";
import { CarCard, Pagination } from ".";
import { CarProps, CarState } from "@/types";

const Discover = ({ cars }: any) => {
  const [carPages, setCarPages] = useState<CarProps[][]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 12;

  const createCarsPages = (
    cars: CarState,
    carsPerPage: number
  ): CarProps[][] => {
    let result: CarProps[][] = [];
    for (let i = 0; i < cars.length; i += carsPerPage) {
      const carsPage = cars.slice(i, i + carsPerPage);
      result.push(carsPage);
    }
    return result;
  };

  useEffect(() => {
    setCarPages(createCarsPages(cars, carsPerPage)); // Update carPages when cars change
    setCurrentPage(0); // Reset currentPage to 0 when cars change
  }, [cars, carsPerPage]);

  useEffect(() => {
    if (currentPage >= carPages.length && carPages.length > 0) {
      setCurrentPage(carPages.length - 1);
    }
  }, [currentPage, carPages]);

  return (
    <section>
      <div className="home__cars-wrapper">
        {carPages.length > 0 &&
          carPages[currentPage].map((car: CarProps, index) => (
            <CarCard key={`Car-${index}`} car={car} />
          ))}
      </div>
      <Pagination
        carPages={carPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Discover;
