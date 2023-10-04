"use client";
import { useRouter } from "next/router";
import { db } from "@/utils/firebase";
import Image from "next/image";
import React from "react";
import { convertDate } from "@/utils/date";
import { ModalImagePopUp } from "@/components/globals";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const BlogDetail = ({ params }) => {
  const [detailBlog, setDetailBlog] = React.useState(null);
  const [blogImages, setBlogImages] = React.useState(null);
  const [activeBlogImage, setActiveBlogImage] = React.useState("");
  const [isShowPopUp, setIsShowPopUp] = React.useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };

  React.useMemo(() => {
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

  React.useEffect(() => {
    if (detailBlog?.image.length < 3) {
      setBlogImages(
        <div className="flex gap-8 justify-center">
          {detailBlog?.image.map((item) => (
            <div
              className="mt-8 h-[550px] w-[550px]"
              key={item}
              onClick={() => {
                setIsShowPopUp(true);
                setActiveBlogImage(item);
              }}
            >
              <Image
                alt="image-gallery"
                width="0"
                height="0"
                style={{ objectFit: "cover" }}
                className="w-full h-full"
                src={detailBlog ? item : "-"}
              />
            </div>
          ))}
        </div>
      );
    } else if (detailBlog?.image.length >= 3) {
      setBlogImages(
        <>
          <div
            className="h-[350px] md:h-[550px]"
            onClick={() => setIsShowPopUp(true)}
          >
            <Image
              alt="image-gallery"
              width="0"
              height="0"
              style={{ objectFit: "cover" }}
              className="w-full h-full"
              src={activeBlogImage || detailBlog?.image[0]}
            />
          </div>
          {/* <div className="flex gap-8"> */}
          <Slider {...settings}>
            {detailBlog?.image.map((item) => (
              <div
                className="mt-8 h-[80px] md:h-[230px] w-[550px] px-4"
                key={item}
                onClick={() => setActiveBlogImage(item)}
              >
                <Image
                  alt="image-gallery"
                  width="0"
                  height="0"
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                  src={detailBlog ? item : "-"}
                />
              </div>
            ))}
          </Slider>
          {/* </div> */}
        </>
      );
    }
  }, [detailBlog, activeBlogImage]);

  return (
    <>
      {isShowPopUp && (
        <ModalImagePopUp
          imageUrl={activeBlogImage || detailBlog?.image[0]}
          setIsShowPopUp={setIsShowPopUp}
        />
      )}
      <main>
        <section className="">
          <div className="container px-4 lg:px-20 lg:w-3/4 bg-secondary min-h-screen mx-auto py-12 my-12">
            {detailBlog && (
              <div className="blog-title border-b-2 border-muted">
                <h1 className="text-white">{detailBlog?.title}</h1>
                <p className="text-xs mb-2 text-white">
                  {detailBlog?.tag.map((item) => (
                    <span key={item} className="text-highlight font-semibold">
                      {item.toUpperCase()}
                      {"  "}
                    </span>
                  ))}
                  - {convertDate(detailBlog)}
                </p>
              </div>
            )}
            {blogImages}
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
