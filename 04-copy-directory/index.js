const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'files');
const newPath = path.join(__dirname, 'files-copy');

function copyDir() {
  fs.mkdir(newPath, { recursive: true }, () => {});
  fs.readdir(sourcePath, (err, files) => {
    files.forEach((file) => {
      const filePath = path.join(sourcePath, file);
      const copyFilePath = `${newPath}/${file}`;
      fs.copyFile(filePath, copyFilePath, () => {});
    });
  });
}
copyDir();