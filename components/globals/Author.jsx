import { ProfileImage } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Author = () => {
  return (
    <>
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
          <h2 className="text-sm lg:text-[1.5em]">Ivan Ardiansyah</h2>
          <p className="text-sm lg:text-base text-highlight font-semibold mt-1">
            Author
          </p>
        </div>
      </div>
      <div className="hidden lg:block mt-3 text-white">
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam
          ducimus magnam? Commodi corrupti suscipit eveniet ducimus laudantium
          fugit, aliquid, debitis animi voluptatibus maiores sapiente libero,
          culpa ipsam cupiditate dolore officiis ipsum rerum illum officia est
          voluptas placeat deserunt esse. Blanditiis eius doloribus sapiente
          voluptatem rem. Quod repellendus sed aliquid exercitationem iure
          dolore aut, inventore rerum, libero, quasi dolor optio fugit tempora
          laboriosam vero cum nobis corporis sequi nesciunt velit et earum neque
          voluptatibus sint! Temporibus rem eum assumenda? Dicta ullam veritatis
          doloribus quam! Eveniet corrupti voluptate ad a sequi vitae at esse,
          voluptatum temporibus minima mollitia dicta dolorum veniam?
        </p>
      </div>
    </>
  );
};

export default Author;
