import React from "react";
import { db } from "@/utils/firebase";
const useBlog = () => {
  const [dataBlog, setDataBlog] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = db.collection("Blogs").onSnapshot((snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataBlog(blogsData);
    });
    return () => unsubscribe();
  }, []);

  return { dataBlog };
};

export default useBlog;
