import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
function Nav() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex px-6 sm:px-16 py-4 justify-between items-center">
        <Link className="flex justify-center items-center " href="/">
          <Image
            src="/logo.png"
            alt="Luxurious Gears"
            className="object-contain"
            width="120"
            height="20"
          />
          <h2 className="hidden md:block font-extrabold text-lg font-mono text-white">
            Luxurious Gears
          </h2>
        </Link>
        <CustomButton
          title="Sign In"
          containerStyles={
            "rounded-full bg-white text-black min-w-[130px] relative "
          }
          btnType="button"
        />
      </nav>
    </header>
  );
}

export default Nav;
