"use client";
import React from "react";

const Blog = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [addPadding, setAddPadding] = React.useState("");

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition >= 1200) {
      setAddPadding("pt-24");
    } else if (setScrollPosition < 1200) {
      setAddPadding("pt-0");
    } else {
      setAddPadding("pt-0");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <main className="h-[2000px]">
        <section className="py-24">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-7">
                <div className="mb-5 bg-[#1d1615]">
                  <div className="bg-white w-full h-[400px]">asd</div>
                  <div className="px-5 py-3">
                    <h2 className="text-white mt-5">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis quia iusto, esse dignissimos repellat repudiandae
                      perspiciatis quas et accusantium corrupti optio quam
                      sequi, quisquam iure?
                    </p>
                  </div>
                </div>
                <div className="bg-[#1d1615]">
                  <div className="bg-white w-full h-[400px]">asd</div>
                  <div className="px-5 py-3">
                    <h2 className="text-white mt-5">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis quia iusto, esse dignissimos repellat repudiandae
                      perspiciatis quas et accusantium corrupti optio quam
                      sequi, quisquam iure?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex flex-col gap-5">
                <div className="bg-[#1d1615]">
                  <div className="bg-white w-full h-[200px]">asd</div>
                  <div className="px-5 py-3">
                    <h2 className="text-white mt-5">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eum soluta cupiditate dolor ratione placeat a beatae.
                    </p>
                  </div>
                </div>
                <div className="bg-[#1d1615]">
                  <div className="bg-white w-full h-[200px]">asd</div>
                  <div className="px-5 py-3">
                    <h2 className="text-white mt-5">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eum soluta cupiditate dolor ratione placeat a beatae.
                    </p>
                  </div>
                </div>
                <div className="bg-[#1d1615]">
                  <div className="bg-white w-full h-[200px]">asd</div>
                  <div className="px-5 py-3">
                    <h2 className="text-white mt-5">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eum soluta cupiditate dolor ratione placeat a beatae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt-10">
              <div className="col-span-8">
                <div className="bg-white w-full">asd</div>
              </div>
              <div className="col-span-4">
                <div className="bg-white w-full relative h-[1000px]">
                  <div
                    className={`sticky top-0 transition-all duration-1000 ${
                      scrollPosition >= 1200 ? "pt-24" : "pt-0"
                    } bg-red-500`}
                  >
                    asd
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
