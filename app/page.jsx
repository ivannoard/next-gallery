"use client";
import React from "react";
import { ProfileImage } from "@/assets/images";
import Image from "next/image";
import { SplashScreen } from "@/components/globals";

export default function Home() {
  const displayText = ["Djakarta", "Semarang", "Batang", "Yogyakarta"];
  const [activeDisplay, setActiveDisplay] = React.useState();
  const [index, setIndex] = React.useState(0);

  const [isShow, setIsShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 2000);
  }, []);

  React.useEffect(() => {
    const displayLength = displayText.length - 1;
    if (displayText.length > 0) {
      setActiveDisplay(displayText[index]);
      setTimeout(() => {
        if (index === displayLength) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }, 1000);
    }
  }, [index]);

  return (
    <>
      {!isShow ? (
        <SplashScreen />
      ) : (
        <main className="pb-10">
          <section className={`h-screen py-24 text-white bg-red-500 relative`}>
            <div className="absolute w-full h-full bg-black bg-opacity-30 top-0 left-0 right-0 bottom-o mx-auto">
              <div className=" h-full flex items-center justify-center z-[1]">
                <div className="text-center">
                  <p className="text-xl tracking-[1rem]">- GALLERY -</p>
                  <h1 className="text-6xl my-5">{activeDisplay}</h1>
                  <p className="tracking-widest">
                    Photographed Using Fujica AF Flash Date
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-10 px-10 text-white">
            <div className="container mx-auto">
              <h4 className="text-center tracking-[.5rem]">
                - Explore Places -
              </h4>
              <div className="button-places w-1/2 mx-auto mt-5 flex gap-5 justify-center">
                <a href="#" className="p-5 swipe-effect-item">
                  All
                </a>
                <a href="#" className="p-5 swipe-effect-item">
                  Djakarta
                </a>
                <a href="#" className="p-5 swipe-effect-item">
                  Semarang
                </a>
                <a href="#" className="p-5 swipe-effect-item">
                  Batang
                </a>
                <a href="#" className="p-5 swipe-effect-item">
                  Yogyakarta
                </a>
              </div>
              <div className="grid grid-cols-12 gap-5 mt-5">
                <div className="col-span-4 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                    <h4 className="tracking-[.4rem]">Djakarta</h4>
                    <p className="text-sm">15 photos</p>
                  </div>
                </div>
                <div className="col-span-4 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                    <h4 className="tracking-[.4rem]">Semarang</h4>
                    <p className="text-sm">15 photos</p>
                  </div>
                </div>
                <div className="col-span-4 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                    <h4 className="tracking-[.4rem]">Batang</h4>
                    <p className="text-sm">15 photos</p>
                  </div>
                </div>
                <div className="col-span-4 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                    <h4 className="tracking-[.4rem]">Djakarta</h4>
                    <p className="text-sm">15 photos</p>
                  </div>
                </div>
                <div className="col-span-4 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                    <h4 className="tracking-[.4rem]">Semarang</h4>
                    <p className="text-sm">15 photos</p>
                  </div>
                </div>
                <div className="col-span-4 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                    <h4 className="tracking-[.4rem]">Batang</h4>
                    <p className="text-sm">15 photos</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-16 px-10 text-white">
            <div className="container mx-auto">
              <div className="text-center">
                <h4 className="text-center tracking-[.5rem]">- My Blogs -</h4>
                <h1 className="tracking-widest my-5">Read My Life Stories</h1>
              </div>
              <div className="button-blogs w-1/2 mx-auto mt-5 flex gap-5 justify-center">
                <a href="#" className="p-5 swipe-effect-item">
                  All
                </a>
                <a href="#" className="p-5 swipe-effect-item">
                  Travel
                </a>
                <a href="#" className="p-5 swipe-effect-item">
                  Stuff
                </a>
                <a href="#" className="p-5 swipe-effect-item">
                  Programming
                </a>
                <a href="#" className="p-5 swipe-effect-item">
                  Uncategorised
                </a>
              </div>
              <div className="grid grid-cols-12 gap-5 px-40 mt-5">
                <div className="col-span-6 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#1d1615] text-white">
                    <div className="blog-title">
                      <p className="text-xs mb-2 text-[#A49F9E]">
                        TRAVEL - AUGUST 2023
                      </p>
                    </div>
                    <h3 className="mb-2">Djakarta Stories</h3>
                    <p className="text-[#A49F9E]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis neque sit fugiat, soluta repudiandae quasi esse
                      facilis nostrum animi voluptate?
                    </p>
                  </div>
                </div>
                <div className="col-span-6 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#1d1615] text-white">
                    <div className="blog-title">
                      <p className="text-xs mb-2 text-[#A49F9E]">
                        TRAVEL - AUGUST 2023
                      </p>
                    </div>
                    <h3 className="mb-2">Djakarta Stories</h3>
                    <p className="text-[#A49F9E]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis neque sit fugiat, soluta repudiandae quasi esse
                      facilis nostrum animi voluptate?
                    </p>
                  </div>
                </div>
                <div className="col-span-6 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#1d1615] text-white">
                    <div className="blog-title">
                      <p className="text-xs mb-2 text-[#A49F9E]">
                        TRAVEL - AUGUST 2023
                      </p>
                    </div>
                    <h3 className="mb-2">Djakarta Stories</h3>
                    <p className="text-[#A49F9E]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis neque sit fugiat, soluta repudiandae quasi esse
                      facilis nostrum animi voluptate?
                    </p>
                  </div>
                </div>
                <div className="col-span-6 h-[500px] bg-white text-black relative">
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#1d1615] text-white">
                    <div className="blog-title">
                      <p className="text-xs mb-2 text-[#A49F9E]">
                        TRAVEL - AUGUST 2023
                      </p>
                    </div>
                    <h3 className="mb-2">Djakarta Stories</h3>
                    <p className="text-[#A49F9E]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis neque sit fugiat, soluta repudiandae quasi esse
                      facilis nostrum animi voluptate?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="container bg-red-500">asd</div> */}
        </main>
      )}
    </>
  );
}
