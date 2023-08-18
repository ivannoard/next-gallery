"use client";
import { Author } from "@/components/globals";
import Image from "next/image";
import React from "react";

const GalleryDetail = () => {
  const [activeImage, setActiveImage] = React.useState(1);
  return (
    <>
      <main>
        <section>
          <div className="container mx-auto bg-primary py-12 px-10">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-9">
                <div className="h-[550px]">
                  <Image
                    alt="image-gallery"
                    width="500"
                    height="500"
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                    src={`https://picsum.photos/500/300?random=${activeImage}`}
                  />
                </div>
              </div>
              <div className="col-span-3 flex flex-col hide-scrollbar overflow-y-scroll max-h-[550px] gap-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="max-h-[197px] cursor-pointer relative"
                    onClick={() => setActiveImage(item)}
                  >
                    <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-70 transition w-full h-full top-0 bottom-0 left-0 right-0 mx-auto"></div>
                    <Image
                      alt="image-gallery"
                      width="500"
                      height="500"
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                      src={`https://picsum.photos/500/300?random=${item}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-9 bg-secondary p-5">
                <div className="gallery-title border-b-2 border-muted">
                  <h1 className="text-white">Perjalanan Menuju ke Barat!</h1>
                  <p className="text-xs mb-2 text-muted">
                    <span className="text-highlight font-semibold">
                      DJAKARTA
                    </span>{" "}
                    - AUGUST 2023
                  </p>
                </div>
                <div className="gallery-content text-white py-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere deleniti molestias repudiandae odit necessitatibus,
                    minus molestiae sunt provident assumenda laboriosam ex
                    labore optio sed obcaecati ducimus officia quos in, ipsam
                    recusandae sint ab? Cumque sed omnis ducimus quo asperiores
                    perspiciatis accusantium excepturi corrupti nam ullam,
                    impedit eaque animi eius quisquam adipisci, recusandae odit?
                    Magni aliquid similique dolores quod molestiae, culpa ab
                    cumque nihil quaerat doloribus. Eius dolorem ab consequuntur
                    repellendus. Praesentium rerum eum officiis nulla beatae
                    assumenda dolor necessitatibus incidunt?
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid sit, rerum dolorum distinctio omnis, magnam
                    praesentium incidunt laudantium fugiat quidem fuga dolore
                    delectus soluta tempora alias unde nihil reiciendis, nulla
                    tempore consequuntur! Corrupti aut ipsa sit nesciunt beatae
                    facilis vel commodi perferendis nisi? Sequi eaque omnis
                    tenetur quo facilis aliquid quas, harum nesciunt ea
                    perspiciatis id magnam enim quisquam autem provident
                    suscipit non natus. Earum doloribus consectetur qui modi
                    repudiandae unde quis eveniet accusamus cupiditate veniam
                    animi harum temporibus obcaecati debitis dolorem, impedit
                    quos. In expedita necessitatibus non, facere, earum
                    voluptates ut cum alias molestias magni provident quia
                    laudantium sunt?
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati temporibus veritatis iusto possimus tempore eius
                    reprehenderit quis quaerat mollitia deleniti. Commodi
                    voluptates molestias expedita quod deserunt quaerat fugiat
                    dolor repellat sint saepe corrupti debitis, perferendis
                    officia aspernatur animi voluptatibus, consequuntur fuga.
                    Voluptatem quos quasi aliquid maxime ratione similique,
                    velit sunt harum nulla animi soluta at quaerat praesentium
                    rerum corporis voluptas eveniet, doloribus corrupti, ab
                    illum? Molestias ea veniam, minima nisi adipisci hic
                    exercitationem id quae iure recusandae atque assumenda, ipsa
                    suscipit esse sunt sapiente aperiam doloremque! Illo, sequi.
                    Ipsam voluptatum, amet tenetur perspiciatis veritatis
                    cupiditate minima ratione sed, culpa corporis consequuntur
                    laboriosam facilis recusandae excepturi voluptas dolor
                    molestiae? Sed, quo optio debitis repellendus error
                    laudantium quas perspiciatis reiciendis delectus vero.
                  </p>
                </div>
              </div>
              <div className="col-span-3">
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
