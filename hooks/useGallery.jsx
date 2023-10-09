import React from "react";
import { db } from "@/utils/firebase";
const useGallery = () => {
  const [dataGallery, setDataGallery] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = db.collection("Gallery").onSnapshot((snapshot) => {
      const galleryData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataGallery(galleryData);
    });
    return () => unsubscribe();
  }, []);

  return { dataGallery };
};

export default useGallery;
