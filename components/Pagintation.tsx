"use client";
import { useState } from "react";
import Image from "next/image";
import { PaginationProps } from "@/types";

const Pagination = ({
  carPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const [activeBtn, setActiveBtn] = useState(0);

  const handleClick = (index: number) => {
    setCurrentPage(index - 1);
    setActiveBtn(index - 1);
  };
  return (
    <div className="flex gap-4 w-full justify-center mt-12">
      <button
        type="button"
        onClick={() => {
          setActiveBtn((prev) => prev - 1);
          setCurrentPage((prev) => prev - 1);
        }}
        className="bg-[#5b86e5] grid place-content-center w-10 h-10 text-white rounded-md">
        <Image
          src="/angle-left.png"
          alt="angle-left"
          className="object-contain"
          width={20}
          height={20}
        />
      </button>
      {carPages.map((page, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleClick(index)}
          className={`${
            index++ === activeBtn
              ? "bg-gradient-to-br from-[#36d1dc] to-[#5b86e5]"
              : "bg-slate-800"
          } grid place-content-center w-10 h-10 text-white rounded-md`}>
          {index}
        </button>
      ))}
      <button
        type="button"
        onClick={() => {
          setActiveBtn((prev) => prev + 1);
          setCurrentPage((prev) => prev + 1);
        }}
        className="bg-[#5b86e5] grid place-content-center w-10 h-10 text-white rounded-md">
        <Image
          src="/angle-right.png"
          alt="angle-right"
          className="object-contain"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default Pagination;
