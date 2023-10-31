import { useState, useEffect } from "react";

function IBP({ path, isBundle }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${path}`)
      .then((response) => response.json())
      .then((data) => {
        if (isBundle) {
          const imageObjects = data.map((image) => {
            const img = new Image();
            img.src = `data:image/jpeg;base64,${image.data.toString("base64")}`;
            img.alt = image.name;
            return img;
          });
          setImages(imageObjects);
        } else {
          const img = new Image();
          img.src = `data:image/jpeg;base64,${data.data.toString("base64")}`;
          img.alt = data.name;
          setImages([img]);
        }
      })
      .catch((error) => console.error(error));
  }, [path, isBundle]);

  return images;
}

export default IBP;