"use client";
import { useEffect, useState } from "react";
import { CustomFilter, Hero, SearchBar, Discover } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { CarState } from "@/types";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState<CarState>([]);
  const [loading, setLoading] = useState(true);

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const [year, setYear] = useState(2023);
  const [fuel, setFuel] = useState("");

  const getAllCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        make: make.toLowerCase() || "",
        year: year || 2023,
        fuel_type: fuel.toLowerCase() || "",
        limit: 50,
        model: model.toLowerCase() || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCars();
  }, [make, model, fuel, year]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div>
      <main className="overflow-hidden">
        <Hero />
        <div id="discover" className="mt-12 padding-x padding-y max-width">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold text-slate-300">
              Car Catlogue
            </h1>
            <p className="text-slate-400">Explore the cars you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar setMake={setMake} setModel={setModel} />

            <div className="home__filter-container">
              <CustomFilter title="Fuel" options={fuels} setFilter={setFuel} />
              <CustomFilter
                title="Year"
                options={yearsOfProduction}
                setFilter={setYear}
              />
            </div>
          </div>

          {!isDataEmpty ? (
            <Discover cars={allCars} />
          ) : (
            loading || (
              <section className="home__error-container">
                <h2 className="font-bold text-white text-xl">
                  oops no results{" "}
                  <span className="text-red-600 text-2xl">!</span>
                </h2>
                <p className="text-lg font-semibold text-white">
                  {allCars?.message}
                </p>
              </section>
            )
          )}

          {loading && (
            <div className="w-full flex flex-1 mt-16 justify-center">
              <Image
                src="/loading.png"
                alt="loading icon"
                width={50}
                height={50}
                className="loader-spin"
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
