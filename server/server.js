const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

function getFoldersRecursively(dir) {
  try {
    const folders = {};
    const ar = [];

    const items = fs.readdirSync(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);
      const isDirectory = fs.statSync(itemPath).isDirectory();

      if (isDirectory) {
        const subfolders = getFoldersRecursively(itemPath);
        if (Object.keys(subfolders).length > 0) folders[item] = subfolders;
        else ar.push(item);
      }
    }

    if (Object.keys(folders).length === 0 && ar.length > 0) return ar;
    return folders;
  } catch (error) {
    console.error(error);
    throw new Error("Error recursing project tree.");
  }
}

app.use("/image", express.static(path.join(__dirname, "assets")));

app.get("/project/:projectName", (req, res) => {
  try {
    const projectName = req.params.projectName;
    const projectDirectory = path.join(__dirname, "assets/projects");

    fs.readdir(projectDirectory, (err, classes) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error parsing project classes.");
        return;
      }

      const projectInfo = {
        projectName: projectName,
        projectClass: null,
        projectType: null,
        projectPath: null,
        imageFiles: [],
      };

      for (const projectClass of classes) {
        const classDirectory = path.join(projectDirectory, projectClass);
        if (fs.statSync(classDirectory).isDirectory()) {
          const types = fs.readdirSync(classDirectory);
          for (const projectType of types) {
            const typeDirectory = path.join(classDirectory, projectType);
            if (fs.statSync(typeDirectory).isDirectory()) {
              if (fs.existsSync(path.join(typeDirectory, projectName))) {
                projectInfo.projectClass = projectClass;
                projectInfo.projectType = projectType;
                projectInfo.projectPath = path.join(
                  projectClass,
                  projectType,
                  projectName,
                );

                const projectPath = path.join(
                  projectDirectory,
                  projectClass,
                  projectType,
                  projectName,
                );
                const files = fs.readdirSync(projectPath);
                projectInfo.imageFiles = files.filter((file) =>
                  /\.(jpg|jpeg|png|gif|bmp|svg)$/.test(
                    path.extname(file).toLowerCase(),
                  ),
                );

                break;
              }
            }
          }
          if (projectInfo.projectPath) {
            break;
          }
        }
      }

      if (projectInfo.projectPath) {
        res.json(projectInfo);
      } else {
        res.status(404).send("Project not found.");
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/projects", (req, res) => {
  try {
    const folderStructure = getFoldersRecursively("assets/projects");
    res.json(folderStructure);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/assets/:path", (req, res) => {
  try {
    const folderPath = path.join(__dirname, "assets", req.params.path);
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error parsing assets.");
      } else {
        const imageFiles = files.filter((file) =>
          /\.(jpg|jpeg|png|gif|bmp|svg)$/.test(
            path.extname(file).toLowerCase(),
          ),
        );
        res.json(imageFiles);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
