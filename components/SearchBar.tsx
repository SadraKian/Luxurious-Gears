"use client";
import React from "react";
import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { SearchBarProps } from "@/types";

export const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-10 ${otherClasses} z-10`}>
      <Image
        src="/magnifying-glass.svg"
        alt="Magnifying glass"
        width={40}
        height={40}
      />
    </button>
  );
};

function SearchBar({ setMake, setModel }: SearchBarProps) {
  const [manufacturer, setManufacturer] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && carModel === "") {
      return alert("Please fill the searchBar");
    }

    setMake(manufacturer);
    setModel(carModel);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden " />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          placeholder="Maybach"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="hidden sm:block" />
    </form>
  );
}

export default SearchBar;
