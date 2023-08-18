import Image from "next/image";
import React from "react";

const BlogDetail = () => {
  return (
    <>
      <main>
        <section>
          <div className="container mx-auto lg:px-10 lg:py-12">
            <div className="w-full h-[550px]">
              <Image
                alt="image-gallery"
                width="500"
                height="500"
                style={{ objectFit: "cover" }}
                className="w-full h-full"
                src={`https://picsum.photos/500/300?random=1`}
              />
            </div>
          </div>
        </section>
        <section className="bg-secondary mx-auto py-12">
          <div className="container px-4 lg:px-0 lg:w-3/4 mx-auto">
            <div className="blog-title border-b-2 border-muted">
              <h1 className="text-white">Perjalanan Menuju ke Barat!</h1>
              <p className="text-xs mb-2 text-white">
                <span className="text-highlight font-semibold">TRAVEL</span> -
                AUGUST 2023
              </p>
            </div>
            <div className="blog-content py-5 text-muted">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                explicabo aperiam nihil repudiandae officiis facilis, molestias
                fuga cumque. Nesciunt ut numquam debitis, asperiores quos qui
                eos sunt nostrum impedit consectetur dicta ea dolores facere
                veritatis. Possimus ratione culpa sint minus quas voluptatum
                nostrum facilis hic nihil, aliquam nulla, ut delectus expedita.
                Laborum, explicabo obcaecati incidunt repudiandae magnam commodi
                placeat sit vero pariatur. Aut recusandae possimus nisi quod
                facere! Rem, temporibus. Consequuntur unde tempore quaerat
                nostrum dolorem molestias aliquid magnam commodi quos, enim
                obcaecati ab. Blanditiis ab excepturi officiis assumenda animi?
                Animi exercitationem, natus sunt cupiditate voluptates aliquam
                corrupti numquam dolorum?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati odit quae id nulla cumque fugiat, consequuntur minus
                nobis quam sit saepe. In debitis mollitia atque natus ut
                laudantium quae inventore vel ea amet quis, dolor, dicta officia
                provident nemo iure explicabo molestias ipsam non iste id
                cupiditate eos porro? Doloremque consequatur sunt placeat
                corporis sit quae necessitatibus error, alias, odit molestiae
                iusto, quisquam in minus ipsum nostrum saepe magni minima fugiat
                suscipit animi atque expedita! Ex porro sint expedita. Enim!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                rem sed illum autem aspernatur mollitia cupiditate eum non
                libero repudiandae! Blanditiis perferendis dolor quis delectus
                tempora sint sapiente sequi voluptatum rerum. Corporis inventore
                laudantium ipsa nostrum cumque ab aut. Illo iusto odit sed odio
                soluta dolores incidunt voluptate tempora molestiae?
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetail;
