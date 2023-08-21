import { ProfileImage } from "@/assets/images";
import { authorIntroduction } from "@/utils/words";
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
      <div
        className="hidden lg:block mt-3 text-white"
        dangerouslySetInnerHTML={{ __html: authorIntroduction }}
      >
        {/* <p className="text-muted">{authorIntroduction}</p> */}
      </div>
    </>
  );
};

export default Author;
