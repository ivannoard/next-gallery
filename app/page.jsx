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
                  <p className="text-lg lg:text-xl tracking-[1rem]">
                    - GALLERY -
                  </p>
                  <h1 className="text-3xl lg:text-6xl my-5">{activeDisplay}</h1>
                  <p className="text-xs lg:text-lg tracking-widest">
                    Photographed Using Fujica AF Flash Date
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-10 px-3 lg:px-10 text-white">
            <div className="container mx-auto">
              <h4 className="text-center tracking-[.5rem]">
                - Explore Places -
              </h4>
              <div className="button-places w-full lg:w-1/2 mx-auto mt-5 flex flex-wrap lg:flex-nowrap gap-5 justify-center">
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  All
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  Djakarta
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  Semarang
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  Batang
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  Yogyakarta
                </a>
              </div>
              <div className="grid grid-cols-12 gap-3 lg:gap-5 mt-5">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="col-span-12 md:col-span-6 lg:col-span-4 h-[500px] bg-white text-black flex flex-col"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        alt="image-gallery"
                        width="500"
                        height="500"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full mb-6"
                        src={`https://picsum.photos/500/300?random=${item}`}
                      />
                      <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    </div>
                    <div className="p-5 bg-secondary text-center">
                      <h4 className="tracking-[.4rem] text-white">DJAKARTA</h4>
                      <p className="text-sm text-highlight mt-3">15 photos</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="mt-16 px-3 lg:px-10 text-white">
            <div className="container mx-auto">
              <div className="text-center">
                <h4 className="text-center tracking-[.5rem]">- My Blogs -</h4>
                <h1 className="tracking-widest my-5">Read My Life Stories</h1>
              </div>
              <div className="button-blogs w-full lg:w-1/2 mx-auto mt-5 flex flex-wrap lg:flex-nowrap gap-3 lg:gap-5 justify-center">
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  All
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  Travel
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full lg:rounded-none lg:p-5 swipe-effect-item border border-white lg:border-none"
                >
                  Programming
                </a>
              </div>
              <div className="grid grid-cols-12 gap-5 px-3 lg:px-40 mt-5">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="col-span-12 md:col-span-6 lg:col-span-6 bg-white text-black flex flex-col"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        alt="image-gallery"
                        width="500"
                        height="500"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full mb-6"
                        src={`https://picsum.photos/500/300?random=${item}`}
                      />
                      <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    </div>
                    <div className=" p-5 bg-secondary text-white">
                      <div className="blog-title">
                        <p className="text-xs mb-2 text-muted">
                          <span className="text-highlight font-semibold">
                            TRAVEL
                          </span>{" "}
                          - AUGUST 2023
                        </p>
                      </div>
                      <h3 className="mb-2">Djakarta Stories</h3>
                      <p className="text-muted">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quis neque sit fugiat, soluta repudiandae quasi
                        esse facilis nostrum animi voluptate?
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* <div className="container bg-red-500">asd</div> */}
        </main>
      )}
    </>
  );
}
