import React from "react";

const Gallery = () => {
  return (
    <>
      <main className="h-[2000px]">
        <section className="bg-red-500 w-full h-[600px] px-5">
          <div className="container mx-auto h-full">
            <div className="grid grid-cols-12 py-24 h-full gap-10">
              <div className="col-span-6 h-full">
                <div className="pt-20">
                  <h1 className="tracking-[1rem]">GALLERY</h1>
                  <p className="text-white mt-3">
                    &quot;In the silent sanctuary of the gallery, photographs
                    whisper the untold, frame by frame, a symphony of frozen
                    moments, revealing life&apos;s essence through the lens of
                    perception&ldquo;
                  </p>
                </div>
              </div>
              <div className="col-span-6 flex gap-5 overflow-x-scroll ">
                <div className="card bg-white w-[300px] flex-none h-full">
                  asd
                </div>
                <div className="card bg-white w-[300px] flex-none h-full">
                  asd
                </div>
                <div className="card bg-white w-[300px] flex-none h-full">
                  asd
                </div>
                <div className="card bg-white w-[300px] flex-none h-full">
                  asd
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white mt-16 px-10">
          <div className="container mx-auto">
            <h4 className="text-center tracking-[.5rem]">
              - Unveiling Imagination&apos;s Horizons -
            </h4>
            <div className="grid grid-cols-12 gap-5 mt-10">
              <div className="col-span-3 h-[500px] bg-white text-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                  <h4 className="tracking-[.4rem]">Djakarta</h4>
                  <p className="text-sm">15 photos</p>
                </div>
              </div>
              <div className="col-span-3 h-[500px] bg-white text-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                  <h4 className="tracking-[.4rem]">Djakarta</h4>
                  <p className="text-sm">15 photos</p>
                </div>
              </div>
              <div className="col-span-3 h-[500px] bg-white text-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                  <h4 className="tracking-[.4rem]">Djakarta</h4>
                  <p className="text-sm">15 photos</p>
                </div>
              </div>
              <div className="col-span-3 h-[500px] bg-white text-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                  <h4 className="tracking-[.4rem]">Djakarta</h4>
                  <p className="text-sm">15 photos</p>
                </div>
              </div>
              <div className="col-span-3 h-[500px] bg-white text-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                  <h4 className="tracking-[.4rem]">Djakarta</h4>
                  <p className="text-sm">15 photos</p>
                </div>
              </div>
              <div className="col-span-3 h-[500px] bg-white text-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                  <h4 className="tracking-[.4rem]">Djakarta</h4>
                  <p className="text-sm">15 photos</p>
                </div>
              </div>
              <div className="col-span-3 h-[500px] bg-white text-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                  <h4 className="tracking-[.4rem]">Djakarta</h4>
                  <p className="text-sm">15 photos</p>
                </div>
              </div>
              <div className="col-span-3 h-[500px] bg-white text-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-blue-500 text-center">
                  <h4 className="tracking-[.4rem]">Djakarta</h4>
                  <p className="text-sm">15 photos</p>
                </div>
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
