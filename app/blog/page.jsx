"use client";
import { ProfileImage } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Blog = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <main className="">
        <section className="py-24">
          <div className="container mx-auto px-5 text-white">
            <div className="mb-16 text-center">
              <h2>
                &ldquo;The purpose of life is not to be happy. It is to be
                useful, to be honorable, to be compassionate, to have it make
                some difference that you have lived and lived well.&rdquo;
              </h2>
              <p className="mt-2">Ralph Waldo Emerson</p>
            </div>
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
              <div className="col-span-8 flex flex-col gap-5">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-white w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae sint placeat natus ex ipsa necessitatibus aliquid
                    expedita perferendis facere at autem, harum, excepturi
                    provident beatae dolorum possimus sequi, rerum voluptate
                    modi inventore omnis tempora nesciunt molestias voluptatem?
                    Omnis optio debitis praesentium aliquid corrupti? Deserunt
                    nostrum adipisci expedita odio minus fugit?
                  </div>
                ))}
              </div>
              <div className="col-span-4">
                <div className="bg-[#1d1615] w-full relative min-h-[200px]">
                  <div
                    className={`sticky top-0 transition-all duration-1000 ${
                      scrollPosition >= 1406 ? "pt-[127px]" : "pt-5"
                    } p-5`}
                  >
                    <div className="border-b-2 border-white pb-3 flex items-center gap-5">
                      <div className="w-[100px] h-[100px] rounded-full bg-white overflow-hidden">
                        <Image
                          alt="profile-image"
                          width="100"
                          height="100"
                          src={ProfileImage}
                          objectFit="cover"
                        />
                      </div>
                      <div className="text-white">
                        <h2>Ivan Ardiansyah</h2>
                        <p>Author</p>
                      </div>
                    </div>
                    <div className="mt-3 text-white">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores quam ducimus magnam? Commodi corrupti suscipit
                        eveniet ducimus laudantium fugit, aliquid, debitis animi
                        voluptatibus maiores sapiente libero, culpa ipsam
                        cupiditate dolore officiis ipsum rerum illum officia est
                        voluptas placeat deserunt esse. Blanditiis eius
                        doloribus sapiente voluptatem rem. Quod repellendus sed
                        aliquid exercitationem iure dolore aut, inventore rerum,
                        libero, quasi dolor optio fugit tempora laboriosam vero
                        cum nobis corporis sequi nesciunt velit et earum neque
                        voluptatibus sint! Temporibus rem eum assumenda? Dicta
                        ullam veritatis doloribus quam! Eveniet corrupti
                        voluptate ad a sequi vitae at esse, voluptatum
                        temporibus minima mollitia dicta dolorum veniam?
                      </p>
                    </div>
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
