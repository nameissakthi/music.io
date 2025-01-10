"use client"
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Banner = () => {

  const { theme } = useTheme()

  const [progress, setProgress] = useState<number>(20);
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(()=>{
    setMounted(true)
  },[])

  mounted && setTimeout(()=>{
    setProgress((preValue)=>{
      if(preValue==100){
        return 20;
      }
      return preValue+1
    })
  }, 100)

  return (
    <div className="flex justify-center w-full">
      <div className={cn(`bg-chart-5 rounded-lg py-10 lg:px-20 size-fit gap-y-6 flex flex-col w-[95%] md:grid grid-cols-1 lg:grid-cols-2`)}>
        <div className="flex flex-col">
          <div className="flex items-center justify-center md:flex-row flex-col">
            <img src="/logo.png" alt="logo" className="w-32" />
            <h1 className="lg:text-5xl text-3xl md:text-5xl">
              Listen to the <span className="bg-green-600 px-2 rounded-lg font-serif text-white/75">Rhythm</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-2xl hidden sm:block">Create Your <span>Own Songs <span className="text-4xl">♫𝄞♪</span></span></p>
          </div>
        </div>
        <div className="flex justify-center sm:w-full w-[95%] relative left-1/2 -translate-x-1/2 sm:static sm:left-0 sm:-translate-x-0">
          <div className="w-full">
            <div className="w-full max-w-[320px] md:max-w-[450px] mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-zinc-900">
              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                  <div className="mx-3">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                      Maalai Karukkalil
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Backialakshimi
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                  <svg
                    className="h-6 w-6 text-gray-500 dark:text-gray-400 ml-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center"></div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  </svg>
                  <div className="w-full mx-3 flex items-center h-full">
                    <progress className="h-1 w-full " style={{background: "yellow"}} value={progress} max="100"></progress>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
                  <span> 00:03 </span>
                  <span> 3:35 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
