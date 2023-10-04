import Image from "next/image";
import React from "react";

const ModalImagePopUp = ({ imageUrl, setIsShowPopUp }) => {
  return (
    <>
      <div
        className="w-full h-full fixed bg-black bg-opacity-80 flex items-center justify-center top-0 z-[9]"
        onClick={() => setIsShowPopUp(false)}
      >
        <div className="w-[1200px] h-[600px] mt-16 mx-4">
          <Image
            src={imageUrl}
            alt="image"
            width="0"
            height="0"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ModalImagePopUp;
