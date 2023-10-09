"use client";
import { Author } from "@/components/globals";
import AnimatedLink from "@/components/globals/AnimatedLink";
import useBlog from "@/hooks/useBlog";
import { convertDate } from "@/utils/date";
import Image from "next/image";
import React from "react";

const Blog = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const { dataBlog: blogs } = useBlog();

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
                {/* blog left */}
                <AnimatedLink href={`/blog/${blogs[0]?.id}`}>
                  <div className="mb-5 bg-secondary cursor-pointer">
                    <div className="w-full h-[400px]">
                      <div className="relative w-full h-full">
                        <Image
                          priority
                          alt="image-gallery"
                          width="500"
                          height="500"
                          style={{ objectFit: "cover" }}
                          className="w-full h-full mb-6"
                          src={blogs[0]?.image[0]}
                        />
                        <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                      </div>
                    </div>
                    <div className="px-5 py-3">
                      <div className="blog-title pt-3">
                        <p className="text-xs mb-2 text-muted">
                          <span className="text-highlight font-semibold">
                            {blogs[0]?.tag[0]}
                          </span>
                          - {convertDate(blogs[0])}
                        </p>
                        <h2>{blogs[0]?.title}</h2>
                      </div>
                      <p className="text-muted">
                        {blogs[0]?.content.slice(0, 350)} . . .
                      </p>
                    </div>
                  </div>
                </AnimatedLink>
                <AnimatedLink href={`/blog/${blogs[1]?.id}`}>
                  <div className="bg-secondary cursor-pointer">
                    <div className="w-full h-[400px]">
                      <div className="relative w-full h-full">
                        <Image
                          priority
                          alt="image-gallery"
                          width="500"
                          height="500"
                          style={{ objectFit: "cover" }}
                          className="w-full h-full mb-6"
                          src={blogs[1]?.image[0]}
                        />
                        <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                      </div>
                    </div>
                    <div className="px-5 py-3">
                      <div className="blog-title pt-3">
                        <p className="text-xs mb-2 text-muted">
                          <span className="text-highlight font-semibold">
                            {blogs[1]?.tag[0]}
                          </span>
                          - {convertDate(blogs[1])}
                        </p>
                        <h2>{blogs[1]?.title}</h2>
                      </div>
                      <p className="text-muted">
                        {blogs[1]?.content.slice(0, 350)} . . .
                      </p>
                    </div>
                  </div>
                </AnimatedLink>
              </div>
              {/* blog right */}
              <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-5">
                <AnimatedLink href={`/blog/${blogs[2]?.id}`}>
                  <div className="bg-secondary cursor-pointer">
                    <div className="w-full h-[200px]">
                      <div className="relative w-full h-full">
                        <Image
                          priority
                          alt="image-gallery"
                          width="500"
                          height="500"
                          style={{ objectFit: "cover" }}
                          className="w-full h-full mb-6"
                          src={blogs[2]?.image[0]}
                        />
                        <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                      </div>
                    </div>
                    <div className="px-5 py-3">
                      <div className="blog-title pt-3">
                        <p className="text-xs mb-2 text-muted">
                          <span className="text-highlight font-semibold">
                            {blogs[2]?.tag[0]}
                          </span>
                          - {convertDate(blogs[2])}
                        </p>
                        <h2>{blogs[2]?.title}</h2>
                      </div>
                      <p className="text-muted">
                        {blogs[2]?.content.slice(0, 250)} . . .
                      </p>
                    </div>
                  </div>
                </AnimatedLink>
                <AnimatedLink href={`/blog/${blogs[3]?.id}`}>
                  <div className="bg-secondary cursor-pointer">
                    <div className="w-full h-[200px]">
                      <div className="relative w-full h-full">
                        <Image
                          priority
                          alt="image-gallery"
                          width="500"
                          height="500"
                          style={{ objectFit: "cover" }}
                          className="w-full h-full mb-6"
                          src={blogs[3]?.image[0]}
                        />
                        <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                      </div>
                    </div>
                    <div className="px-5 py-3">
                      <div className="blog-title pt-3">
                        <p className="text-xs mb-2 text-muted">
                          <span className="text-highlight font-semibold">
                            {blogs[3]?.tag[0]}
                          </span>
                          - {convertDate(blogs[3])}
                        </p>
                        <h2>{blogs[3]?.title}</h2>
                      </div>
                      <p className="text-muted">
                        {blogs[1]?.content.slice(0, 250)} . . .
                      </p>
                    </div>
                  </div>
                </AnimatedLink>
                <AnimatedLink href={`/blog/${blogs[4]?.id}`}>
                  <div className="bg-secondary cursor-pointer">
                    <div className="w-full h-[200px]">
                      <div className="relative w-full h-full">
                        <Image
                          priority
                          alt="image-gallery"
                          width="500"
                          height="500"
                          style={{ objectFit: "cover" }}
                          className="w-full h-full mb-6"
                          src={blogs[4]?.image[0]}
                        />
                        <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                      </div>
                    </div>
                    <div className="px-5 py-3">
                      <div className="blog-title pt-3">
                        <p className="text-xs mb-2 text-muted">
                          <span className="text-highlight font-semibold">
                            {blogs[4]?.tag[0]}
                          </span>
                          - {convertDate(blogs[4])}
                        </p>
                        <h2>{blogs[4]?.title}</h2>
                      </div>
                      <p className="text-muted">
                        {blogs[4]?.content.slice(0, 250)} . . .
                      </p>
                    </div>
                  </div>
                </AnimatedLink>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt-10">
              {/* blog posts */}
              <div className="col-span-12 lg:col-span-8">
                <div className="max-h-[680px] flex flex-col gap-5 overflow-y-scroll hide-scrollbar">
                  {blogs?.map((item, index) => (
                    <AnimatedLink key={item.id} href={`/blog/${item.id}`}>
                      <div className="bg-secondary w-full text-white flex gap-4 cursor-pointer pr-4">
                        <div className="image w-[100px] h-[130px] lg:w-[250px] lg:h-[200px] flex-none">
                          <Image
                            priority
                            alt="image-gallery"
                            width="0"
                            height="0"
                            style={{ objectFit: "cover" }}
                            className="w-full h-full"
                            src={item?.image[0]}
                          />
                        </div>
                        <div className="blog-card-content py-3">
                          <div className="blog-title mb-1">
                            <p className="text-xs text-muted">
                              <span className="text-highlight font-semibold">
                                {item.tag[0]}
                              </span>
                              {/* <span className="text-highlight font-semibold ">
                              {item.tag.map((item) => item.toUpperCase())}
                            </span>{" "} */}
                              - {convertDate(item)}
                            </p>
                            <h2 className="text-[1em] lg:text-[1.5em] mt-1">
                              {item.title}
                            </h2>
                          </div>
                          <p className="text-muted text-[.8em] lg:text-md content-blog hidden lg:block">
                            {item.content.slice(0, 480)} . . .
                          </p>
                          <p className="underline text-xs lg:hidden">
                            Read more . . .
                          </p>
                        </div>
                      </div>
                    </AnimatedLink>
                  ))}
                </div>
              </div>
              {/* author */}

              <div className="col-span-12 order-first lg:order-last lg:col-span-4">
                <div className="bg-secondary w-full relative lg:min-h-[200px]">
                  <div
                    className={`sticky top-0 transition-all duration-1000 ${
                      scrollPosition >= 1406 ? "lg:mt-[127px]" : "lg:pt-5"
                    } p-5`}
                  >
                    <Author />
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
