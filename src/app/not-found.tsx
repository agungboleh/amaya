"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [digits, setDigits] = useState({ first: "4", second: "0", third: "4" });
  useEffect(() => {
    let count = 0;
    const time = 30;
    const randomNum = () => Math.floor(Math.random() * 9) + 1;
    const interval = setInterval(() => {
      count++;
      setDigits({
        third: count > 40 ? "4" : String(randomNum()),
        second: count > 80 ? "0" : String(randomNum()),
        first: count > 100 ? "4" : String(randomNum()),
      });
      if (count > 100) {
        clearInterval(interval);
      }
    }, time);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8 text-center select-none">
      <div className="relative flex items-center justify-center my-6">
        <div className="absolute -top-10 left-0 z-30 bg-brand-base text-white font-bold italic rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-sm md:text-xl shadow-md">
          OH!
          <span className="absolute -bottom-1 right-1 w-0 h-0 border-l-10 md:border-l-14 border-l-brand-base border-t-[6px] md:border-t-8 border-t-transparent border-b-[6px] md:border-b-8 border-b-transparent rotate-45" />
        </div>
        <div className="skew-x-[-45deg] flex items-center justify-center gap-0 bg-transparent py-4">
          <div className="w-25 sm:w-40 md:w-60 h-60 sm:h-40 md:h-45 overflow-hidden flex items-center justify-center bg-transparent">
            <div className="skew-x-45 translate-x-4 sm:translate-x-10">
              <span className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-brand-red text-white rounded-2xl flex items-center justify-center text-5xl sm:text-7xl md:text-8xl font-bold shadow-inner">
                {digits.third}
              </span>
            </div>
          </div>
          <div className="w-17.5 sm:w-25 md:w-40 h-40 sm:h-40 md:h-45 overflow-hidden flex items-center justify-center bg-white shadow-[inset_15px_0_15px_-10px_rgba(150,150,150,0.5),15px_0_15px_-10px_rgba(150,150,150,0.5)] z-10">
            <div className="skew-x-45">
              <span className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-brand-red text-white rounded-2xl flex items-center justify-center text-5xl sm:text-7xl md:text-8xl font-bold shadow-inner">
                {digits.second}
              </span>
            </div>
          </div>
          <div className="w-25 sm:w-40 md:w-60 h-60 sm:h-40 md:h-45 overflow-hidden flex items-center justify-center bg-transparent">
            <div className="skew-x-45 -translate-x-4 sm:-translate-x-10">
              <span className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-brand-red text-white rounded-2xl flex items-center justify-center text-5xl sm:text-7xl md:text-8xl font-bold shadow-inner">
                {digits.first}
              </span>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-base/70 tracking-wide mt-4">
        Page not found
      </h2>
      <p className="text-sm md:text-lg text-brand-base/30 mb-8">
        Sorry, the page you are looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="bg-brand-red/30 hover:bg-brand-red text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
