const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

app.get("/image/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "assets", imageName);

  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: "Path not found" });
  }

  const imageData = fs.readFileSync(imagePath);
  res.json({ name: imageName, data: imageData });
});

app.get("/image-bundle/:folderName", (req, res) => {
  const folderName = req.params.folderName;
  const imageDir = path.join(__dirname, "assets", folderName);

  if (!fs.existsSync(imageDir)) {
    return res.status(404).json({ error: "Path not found" });
  }
  const imageFiles = fs.readdirSync(imageDir);
  const imageBundle = [];
  imageFiles.forEach((file) => {
    const imagePath = path.join(imageDir, file);
    const imageData = fs.readFileSync(imagePath);
    imageBundle.push({ name: file, data: imageData });
  });

  res.json(imageBundle);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
