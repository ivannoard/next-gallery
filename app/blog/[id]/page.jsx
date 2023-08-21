"use client";
import { useRouter } from "next/router";
import { db } from "@/utils/firebase";
import Image from "next/image";
import React from "react";
import { convertDate } from "@/utils/date";

const BlogDetail = ({ params }) => {
  const [detailBlog, setDetailBlog] = React.useState(null);

  React.useEffect(() => {
    async function getDetailData(blogId) {
      try {
        const detailDataDocs = await db.collection("Blogs").doc(blogId).get();
        if (detailDataDocs.exists) {
          setDetailBlog(detailDataDocs.data());
        } else {
          console.log("Not Found!");
        }
      } catch (e) {
        console.log(e);
      }
    }
    getDetailData(params.id);
  }, [params.id]);

  return (
    <>
      <main>
        <section>
          <div className="container mx-auto lg:px-10 lg:py-12">
            <div className="h-[550px] lg:w-[1200px] mx-auto">
              <Image
                alt="image-gallery"
                width="500"
                height="500"
                style={{ objectFit: "cover" }}
                className="w-full h-full"
                src={detailBlog ? detailBlog.image : "-"}
              />
            </div>
          </div>
        </section>
        <section className="bg-secondary mx-auto py-12">
          <div className="container px-4 lg:px-0 lg:w-3/4 mx-auto">
            {detailBlog && (
              <div className="blog-title border-b-2 border-muted">
                <h1 className="text-white">{detailBlog?.title}</h1>
                <p className="text-xs mb-2 text-white">
                  <span className="text-highlight font-semibold">
                    {detailBlog?.tag.toUpperCase()}
                  </span>{" "}
                  - {convertDate(detailBlog)}
                </p>
              </div>
            )}
            <div className="blog-content py-5 text-muted">
              <p>{detailBlog?.content}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetail;
