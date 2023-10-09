"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Gallery = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
  const settingsSmall = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <main>
        <section className="bg-red-500 w-full h-[600px] relative">
          <div className="absolute px-5 w-full h-full bg-black bg-opacity-30 top-0 left-0 right-0 bottom-o mx-auto">
            <div className="container mx-auto h-full">
              <div className="grid grid-cols-12 pt-24 lg:py-24 lg:h-full lg:gap-10">
                <div className="col-span-12 lg:col-span-6 h-full">
                  <div className="lg:pt-20">
                    <h1 className="tracking-[1rem] text-white">GALLERY</h1>
                    <p className="text-white mt-3">
                      &ldquo;In the silent sanctuary of the gallery, photographs
                      whisper the untold, frame by frame, a symphony of frozen
                      moments, revealing life&apos;s essence through the lens of
                      perception&rdquo;
                    </p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 relative lg:overflow-x-scroll hide-scrollbar">
                  <div className="mt-5 lg:mt-0 lg:px-0 lg:py-0 absolute z-[2] w-full top-0 lg:h-full gallery-header">
                    <div className="block lg:hidden">
                      <Slider {...settingsSmall}>
                        {[1, 2, 3, 4, 5].map((item) => (
                          <div
                            key={item}
                            className="card relative w-[300px] h-[400px] px-2"
                          >
                            {/* <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto mx-2"></div> */}
                            <Image
                              alt="image-gallery"
                              width="0"
                              height="0"
                              style={{ objectFit: "cover" }}
                              className="w-full h-full"
                              src={`https://picsum.photos/500/300?random=${item}`}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="hidden lg:block">
                      <Slider {...settings}>
                        {[1, 2, 3, 4, 5].map((item) => (
                          <div
                            key={item}
                            className="card relative w-[300px] h-[400px] px-2"
                          >
                            {/* <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto mx-2"></div> */}
                            <Image
                              alt="image-gallery"
                              width="0"
                              height="0"
                              style={{ objectFit: "cover" }}
                              className="w-full h-full"
                              src={`https://picsum.photos/500/300?random=${item}`}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* bottom gallery */}
        <section className="text-white mt-36 lg:mt-16 px-3 lg:px-10">
          <div className="container mx-auto">
            <h4 className="text-center tracking-[.5rem]">
              <span className="hidden lg:inline">- </span>Unveiling
              Imagination&apos;s Horizons
              <span className="hidden lg:inline"> -</span>
            </h4>
            <div className="gap-5 lg:gap-8 columns-2 lg:columns-4 mt-10">
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=1"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=2"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=3"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=4"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=5"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=6"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-vertical mb-6"
                  src="https://picsum.photos/500/300?random=7"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=8"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=9"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=10"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=11"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=12"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=13"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=14"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=15"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=16"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-vertical mb-6"
                  src="https://picsum.photos/500/300?random=17"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=18"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=19"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=20"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=21"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=22"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=23"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=24"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=25"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=26"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-vertical mb-6"
                  src="https://picsum.photos/500/300?random=27"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=28"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=29"
                />
              </div>
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/gallery/${1}`)}
              >
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  style={{ objectFit: "cover" }}
                  className="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=30"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
};

export default Gallery;
