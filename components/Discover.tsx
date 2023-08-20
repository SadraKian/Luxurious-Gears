"use client";
import React, { useState } from "react";
import { CarCard, Pagination } from ".";
import { CarProps } from "@/types";

const Discover = ({ cars }: any) => {
  const [currentpage, setCurrentpage] = useState(0);
  const carsPerPage = 12;

  const creatCarsPages = (cars: [], carsPerPage: number): [] => {
    let result = [];
    for (let i = 0; i < cars.length; i += carsPerPage) {
      const pageCars = cars.slice(i, i + carsPerPage);
      result.push(pageCars);
    }
    return result as [];
  };

  const carPages: CarProps[][] = creatCarsPages(cars, carsPerPage);

  return (
    <section>
      <div className="home__cars-wrapper">
        {carPages[currentpage].map((car: CarProps) => (
          <CarCard car={car} />
        ))}
      </div>
      <Pagination
        carPages={carPages}
        currentPage={currentpage}
        setCurrentPage={setCurrentpage}
      />
    </section>
  );
};

export default Discover;
