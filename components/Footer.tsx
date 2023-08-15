import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";
function Footer() {
  return (
    <footer className="flex flex-col border-t border-gray-700 mt-5 text-black-100">
      <div className="flex flex-wrap justify-between max-md:flex-col sm:px-16 px-6 gap-3 py-10">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="Luxurious Gears"
              className="object-contain"
              width="90"
              height="20"
            />
            <h3 className="hidden md:block font-bold text-white font-mono">
              Luxurious Gears
            </h3>
          </div>
          <p className="text-base text-gray-300 ml-4">
            Luxurious Gears
            <br />
            All right reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-white">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-slate-300 hover:text-orange-100 transition-all ease-in-out duration-400">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-700 items-center mt-10 sm:px-16 px-6 py-10">
        <p className="text-gray-100">
          @2023 Luxurious Gears All Rights Reserved
        </p>
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-gray-300 hover:text-orange-100 transition-all ease-in-out duration-400">
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-orange-100 transition-all ease-in-out duration-400">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
