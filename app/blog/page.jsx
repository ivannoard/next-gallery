"use client";
import { Author } from "@/components/globals";
import { convertDate } from "@/utils/date";
import { db } from "@/utils/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Blog = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const router = useRouter();

  const [blogs, setBlogs] = React.useState([]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    const unsubscribe = db.collection("Blogs").onSnapshot((snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    });

    return () => unsubscribe();
  }, []);

  console.log(blogs);

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
                <div
                  className="mb-5 bg-secondary cursor-pointer"
                  onClick={() => router.push(`/blog/${blogs[0]?.id}`)}
                >
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
                          {blogs[0]?.tag}
                        </span>{" "}
                        - {convertDate(blogs[0])}
                      </p>
                      <h2>{blogs[0]?.title}</h2>
                    </div>
                    <p className="text-muted">
                      {blogs[0]?.content.slice(0, 350)} . . .
                    </p>
                  </div>
                </div>
                <div
                  className="bg-secondary cursor-pointer"
                  onClick={() => router.push(`/blog/${blogs[1]?.id}`)}
                >
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
                          {blogs[1]?.tag}
                        </span>{" "}
                        - {convertDate(blogs[1])}
                      </p>
                      <h2>{blogs[1]?.title}</h2>
                    </div>
                    <p className="text-muted">
                      {blogs[1]?.content.slice(0, 350)} . . .
                    </p>
                  </div>
                </div>
              </div>
              {/* blog right */}
              <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-5">
                <div
                  className="bg-secondary cursor-pointer"
                  onClick={() => router.push(`/blog/${blogs[2]?.id}`)}
                >
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
                          {blogs[1]?.tag}
                        </span>{" "}
                        - {convertDate(blogs[1])}
                      </p>
                      <h2>{blogs[1]?.title}</h2>
                    </div>
                    <p className="text-muted">
                      {blogs[1]?.content.slice(0, 250)} . . .
                    </p>
                  </div>
                </div>
                <div
                  className="bg-secondary cursor-pointer"
                  onClick={() => router.push(`/blog/${blogs[3]?.id}`)}
                >
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
                          {blogs[1]?.tag}
                        </span>{" "}
                        - {convertDate(blogs[1])}
                      </p>
                      <h2>{blogs[1]?.title}</h2>
                    </div>
                    <p className="text-muted">
                      {blogs[1]?.content.slice(0, 250)} . . .
                    </p>
                  </div>
                </div>
                <div
                  className="bg-secondary cursor-pointer"
                  onClick={() => router.push(`/blog/${blogs[4]?.id}`)}
                >
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
                          {blogs[1]?.tag}
                        </span>{" "}
                        - {convertDate(blogs[1])}
                      </p>
                      <h2>{blogs[1]?.title}</h2>
                    </div>
                    <p className="text-muted">
                      {blogs[1]?.content.slice(0, 250)} . . .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt-10">
              {/* blog posts */}
              <div className="col-span-12 lg:col-span-8">
                <div className="max-h-[680px] flex flex-col gap-5 overflow-y-scroll hide-scrollbar">
                  {blogs?.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-secondary w-full text-white flex lg:items-center gap-4 cursor-pointer pr-4"
                      onClick={() => router.push(`/blog/${item.id}`)}
                    >
                      <div className="image w-[100px] lg:w-[250px] h-[120px] lg:h-[180px] flex-none">
                        <Image
                          alt="image-gallery"
                          width="0"
                          height="0"
                          style={{ objectFit: "cover" }}
                          className="w-full h-full"
                          src={`https://picsum.photos/500/300?random=${
                            (index + 1) * 5
                          }`}
                        />
                      </div>
                      <div className="blog-card-content py-3">
                        <div className="blog-title mb-1">
                          <p className="text-xs text-muted">
                            <span className="text-highlight font-semibold ">
                              {item.tag.toUpperCase()}
                            </span>{" "}
                            - {convertDate(item)}
                          </p>
                          <h2 className="text-[1em] lg:text-[1.5em] mt-1">
                            {item.title}
                          </h2>
                        </div>
                        <p className="text-muted text-[.8em] lg:text-md content-blog hidden lg:block">
                          {item.content.slice(0, 480)} . . .
                        </p>
                        <p className="underline text-xs">Read more . . .</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* author */}
              <div className="col-span-12 order-first lg:order-last lg:col-span-4">
                <div className="bg-secondary w-full relative lg:min-h-[200px]">
                  <div
                    className={`sticky top-0 transition-all duration-1000 ${
                      scrollPosition >= 1506 ? "lg:pt-[127px]" : "lg:pt-5"
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
