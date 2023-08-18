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
              <p className="mt-2 text-muted">Ralph Waldo Emerson</p>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-6 lg:col-span-7">
                <div className="mb-5 bg-secondary">
                  <div className="w-full h-[400px]">
                    <div className="relative w-full h-full">
                      <Image
                        alt="image-gallery"
                        width="500"
                        height="500"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full mb-6"
                        src={`https://picsum.photos/500/300?random=1`}
                      />
                      <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    </div>
                  </div>
                  <div className="px-5 py-3">
                    <div className="blog-title pt-3">
                      <p className="text-xs mb-2 text-muted">
                        <span className="text-highlight font-semibold">
                          TRAVEL
                        </span>{" "}
                        - AUGUST 2023
                      </p>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis quia iusto, esse dignissimos repellat repudiandae
                      perspiciatis quas et accusantium corrupti optio quam
                      sequi, quisquam iure?
                    </p>
                  </div>
                </div>
                <div className="bg-secondary">
                  <div className="w-full h-[400px]">
                    <div className="relative w-full h-full">
                      <Image
                        alt="image-gallery"
                        width="500"
                        height="500"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full mb-6"
                        src={`https://picsum.photos/500/300?random=5`}
                      />
                      <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    </div>
                  </div>
                  <div className="px-5 py-3">
                    <div className="blog-title pt-3">
                      <p className="text-xs mb-2 text-muted">
                        <span className="text-highlight font-semibold">
                          TRAVEL
                        </span>{" "}
                        - AUGUST 2023
                      </p>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis quia iusto, esse dignissimos repellat repudiandae
                      perspiciatis quas et accusantium corrupti optio quam
                      sequi, quisquam iure?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-5">
                <div className="bg-secondary">
                  <div className="w-full h-[200px]">
                    <div className="relative w-full h-full">
                      <Image
                        alt="image-gallery"
                        width="500"
                        height="500"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full mb-6"
                        src={`https://picsum.photos/500/300?random=2`}
                      />
                      <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    </div>
                  </div>
                  <div className="px-5 py-3">
                    <div className="blog-title pt-3">
                      <p className="text-xs mb-2 text-muted">
                        <span className="text-highlight font-semibold">
                          TRAVEL
                        </span>{" "}
                        - AUGUST 2023
                      </p>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <p className="text-muted">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eum soluta cupiditate dolor ratione placeat a beatae.
                    </p>
                  </div>
                </div>
                <div className="bg-secondary">
                  <div className="w-full h-[200px]">
                    <div className="relative w-full h-full">
                      <Image
                        alt="image-gallery"
                        width="500"
                        height="500"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full mb-6"
                        src={`https://picsum.photos/500/300?random=3`}
                      />
                      <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    </div>
                  </div>
                  <div className="px-5 py-3">
                    <div className="blog-title pt-3">
                      <p className="text-xs mb-2 text-muted">
                        <span className="text-highlight font-semibold">
                          TRAVEL
                        </span>{" "}
                        - AUGUST 2023
                      </p>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <p className="text-muted">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eum soluta cupiditate dolor ratione placeat a beatae.
                    </p>
                  </div>
                </div>
                <div className="bg-secondary">
                  <div className="w-full h-[200px]">
                    <div className="relative w-full h-full">
                      <Image
                        alt="image-gallery"
                        width="500"
                        height="500"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full mb-6"
                        src={`https://picsum.photos/500/300?random=4`}
                      />
                      <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    </div>
                  </div>
                  <div className="px-5 py-3">
                    <div className="blog-title pt-3">
                      <p className="text-xs mb-2 text-muted">
                        <span className="text-highlight font-semibold">
                          TRAVEL
                        </span>{" "}
                        - AUGUST 2023
                      </p>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <p className="text-muted">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eum soluta cupiditate dolor ratione placeat a beatae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt-10">
              {/* blog posts */}
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-5">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="bg-secondary w-full text-white flex gap-4 items-center"
                  >
                    <div className="image w-[250px] h-[120px] lg:h-[150px]">
                      <Image
                        alt="image-gallery"
                        width="500"
                        height="500"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                        src={`https://picsum.photos/500/300?random=${
                          (item + 1) * 5
                        }`}
                      />
                    </div>
                    <div className="blog-card-content py-3">
                      <div className="blog-title mb-1">
                        <p className="text-xs text-muted">
                          <span className="text-highlight font-semibold ">
                            TRAVEL
                          </span>{" "}
                          - AUGUST 2023
                        </p>
                        <h2 className="text-[1em] lg:text-[1.5em]">
                          Lorem ipsum dolor sit amet.
                        </h2>
                      </div>
                      <p className="text-muted text-[.8em] lg:text-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eum soluta cupiditate dolor ratione placeat a
                        beatae.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* author */}
              <div className="col-span-12 order-first lg:order-last lg:col-span-4">
                <div className="bg-secondary w-full relative lg:min-h-[200px]">
                  <div
                    className={`sticky top-0 transition-all duration-1000 ${
                      scrollPosition >= 1406 ? "lg:pt-[127px]" : "lg:pt-5"
                    } p-5`}
                  >
                    <div className="border-b-2 border-white pb-3 flex items-center gap-5">
                      <div className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden">
                        <Image
                          alt="profile-image"
                          width="100"
                          height="100"
                          src={ProfileImage}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-white">
                        <h2 className="text-sm lg:text-[1.5em]">
                          Ivan Ardiansyah
                        </h2>
                        <p className="text-sm lg:text-base text-highlight font-semibold mt-1">
                          Author
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:block mt-3 text-white">
                      <p className="text-muted">
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
