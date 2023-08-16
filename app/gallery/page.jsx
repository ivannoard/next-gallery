import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <>
      <main>
        <section className="bg-red-500 w-full h-[600px] px-5">
          <div className="container mx-auto h-full">
            <div className="grid grid-cols-12 pt-24 lg:py-24 lg:h-full lg:gap-10">
              <div className="col-span-12 lg:col-span-6 h-full">
                <div className="lg:pt-20">
                  <h1 className="tracking-[1rem]">GALLERY</h1>
                  <p className="text-white mt-3">
                    &ldquo;In the silent sanctuary of the gallery, photographs
                    whisper the untold, frame by frame, a symphony of frozen
                    moments, revealing life&apos;s essence through the lens of
                    perception&rdquo;
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 relative lg:overflow-x-scroll">
                <div className="mt-5 lg:mt-0 lg:px-0 lg:py-0 absolute z-[2] w-full top-0 lg:h-full flex gap-5 overflow-x-scroll lg:overflow-x-visible">
                  <div className="card bg-white w-[200px] h-[350px] flex-none lg:w-[300px] lg:h-full">
                    asd
                  </div>
                  <div className="card bg-white w-[200px] h-[350px] flex-none lg:w-[300px] lg:h-full">
                    asd
                  </div>
                  <div className="card bg-white w-[200px] h-[350px] flex-none lg:w-[300px] lg:h-full">
                    asd
                  </div>
                  <div className="card bg-white w-[200px] h-[350px] flex-none lg:w-[300px] lg:h-full">
                    asd
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white mt-24 lg:mt-16 px-3 lg:px-10">
          <div className="container mx-auto">
            <h4 className="text-center tracking-[.5rem]">
              <span className="hidden lg:inline">- </span>Unveiling
              Imagination&apos;s Horizons
              <span className="hidden lg:inline"> -</span>
            </h4>
            <div class="gap-5 lg:gap-8 columns-2 lg:columns-4 mt-10">
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=1"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=2"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=3"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=4"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=5"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=6"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-vertical mb-6"
                  src="https://picsum.photos/500/300?random=7"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=8"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=9"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=10"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=11"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=12"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=13"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=14"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=15"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=16"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-vertical mb-6"
                  src="https://picsum.photos/500/300?random=17"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=18"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=19"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=20"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=21"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=22"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=23"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=24"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=25"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=26"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-vertical mb-6"
                  src="https://picsum.photos/500/300?random=27"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-video mb-6"
                  src="https://picsum.photos/500/300?random=28"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
                  src="https://picsum.photos/500/300?random=29"
                />
              </div>
              <div className="relative">
                <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>

                <Image
                  alt="image-gallery"
                  width="500"
                  height="500"
                  objectFit="cover"
                  class="w-full aspect-square mb-6"
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
