function fetchImages(path, isBundle) {
  return fetch(path)
    .then((response) => response.json())
    .then((data) => {
      if (isBundle) {
        return data.map((image) => {
          const img = new Image();
          img.src = `data:image/jpeg;base64,${image.data.toString("base64")}`;
          img.alt = image.name;
          return img;
        });
      } else {
        const img = new Image();
        img.src = `data:image/jpeg;base64,${data.data.toString("base64")}`;
        img.alt = data.name;
        return [img];
      }
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export default fetchImages;