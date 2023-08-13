import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";
function Footer() {
  return (
    <footer className="flex flex-col border-t border-gray-200 mt-5 text-black-100">
      <div className="flex flex-wrap justify-between max-md:flex-col sm:px-16 px-6 gap-5 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/logo.png"
              alt="Luxurious Gears"
              className="object-contain"
              width="80"
              height="20"
            />
            <h3 className="hidden md:block font-bold font-mono">
              Luxurious Gears
            </h3>
          </div>
          <p className="text-base text-gray-700">
            Luxurious Gears
            <br />
            All right reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-gray-800 transition-all easy duration-400 ">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-200 items-center mt-10 sm:px-16 px-6 py-10">
        <p className="text-gray-500">
          @2023 Luxurious Gears All Rights Reserved
        </p>
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-800 transition-all easy duration-400">
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-800 transition-all easy duration-400">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
