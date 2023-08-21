"use client";
import { Author } from "@/components/globals";
import { convertDate } from "@/utils/date";
import { db } from "@/utils/firebase";
import { capitalizeFirstSentence } from "@/utils/words";
import Image from "next/image";
import React from "react";

const GalleryDetail = ({ params }) => {
  const [detailGallery, setDetailGallery] = React.useState(null);
  const [activeImage, setActiveImage] = React.useState();

  React.useEffect(() => {
    async function getDetailData(galleryId) {
      try {
        const detailDataDocs = await db
          .collection("Gallery")
          .doc(galleryId)
          .get();
        if (detailDataDocs.exists) {
          setDetailGallery(detailDataDocs.data());
        } else {
          console.log("Not Found!");
        }
      } catch (e) {
        console.log(e);
      }
    }
    getDetailData(params.id);
  }, [params.id]);

  console.log(detailGallery);

  return (
    <>
      <main>
        <section>
          <div className="container mx-auto bg-primary lg:py-12 lg:px-10">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-9">
                <div className="h-[550px]">
                  {detailGallery && (
                    <Image
                      alt="image-gallery"
                      width="500"
                      height="500"
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                      src={
                        activeImage ? activeImage : detailGallery.images[0].url
                      }
                    />
                  )}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 flex lg:flex-col hide-scrollbar overflow-x-scroll lg:overflow-y-scroll max-h-[550px] gap-3 px-3 lg:px-0">
                {detailGallery?.images.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none h-[100px] w-[150px] lg:w-full lg:h-[197px] cursor-pointer relative"
                    onClick={() => setActiveImage(item.url)}
                  >
                    <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    <Image
                      alt="image-gallery"
                      width="500"
                      height="500"
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                      src={item.url}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 lg:mt-0">
          <div className="container mx-auto px-3 lg:px-10">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-9 bg-secondary p-5">
                <div className="gallery-title border-b-2 border-muted">
                  <h1 className="text-white">{detailGallery?.title}</h1>
                  <p className="text-xs mb-2 text-white">
                    <span className="text-highlight font-semibold">
                      {detailGallery ? detailGallery?.place.toUpperCase() : ""}
                    </span>{" "}
                    - {convertDate(detailGallery)}
                  </p>
                </div>
                <div className="gallery-content text-muted py-5">
                  <p>{detailGallery?.content}</p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 order-first lg:order-last">
                <div className="bg-secondary p-4">
                  <Author />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GalleryDetail;
