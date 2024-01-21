const fs = require ('fs');
const path = require ('path');


const distFolderPath = path.join(__dirname, 'project-dist');
const distFolderAssets = path.join(distFolderPath, 'assets');
const templatePath = path.join(__dirname, 'template.html');
const distAssetsFolderPath = path.join(distFolderPath, 'assets');

fs.mkdir(distFolderPath, { recursive: true }, () => {})
fs.mkdir(distFolderAssets, { recursive: true }, () => {})

function bundleCss() {
    const cssPath = path.join(distFolderPath, 'style.css')
    const readableStream = fs.createReadStream(cssPath);
    

    fs.readdir(
        path.join(__dirname, 'styles'),
        { withFileTypes: true },
        (err, files) => {
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.join(__dirname, 'styles', file.name);
        const ext = path.extname(filePath).slice(1);
        if (ext === 'css') {
          const readableStream = fs.createReadStream(filePath);
          readableStream.on('data', (chunk) => writableStream.write(chunk));
          }
          if (err) throw err;
      }
    });
  },
    )
}

function copyAssets(distFolderAssets)) {
  fs.readdir(distFolderAssets, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      let curPath = path.join(distFolderAssets, file.name);
      if (file.isFile()) {
        const relativePath = curPath.slice(curPath.indexOf('assets') + 7);
        fs.copyFile(
          curPath,
          path.join(distFolderAssetsPath, relativePath),
          () => {},
        );
      } else {
        fs.mkdir(
          path.join(distFolderAssetsPath, file.name),
          { recursive: true },
          () => {},
        );
        copyAssets(curPath);
      }
    });
  });
}

