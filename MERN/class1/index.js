// // const fs = require("fs");

// // // const content = 'Hello, worldasdasd!';

// // // fs.writeFileSync('example.txt', content, 'utf8', (err) => {
// // //   if (err) {
// // //     console.error(err);
// // //     return;
// // //   }
// // //   console.log('File has been written.');
// // // });
// // // fs.rename('example.txt', 'new-example.txt', (err) => {
// // //     if (err) {
// // //       console.error(err);
// // //       return;
// // //     }
// // //     console.log('File has been renamed.');
// // //   });

// // //   fs.unlink('new-example.txt', (err) => {
// // //     if (err) {
// // //       console.error(err);
// // //       return;
// // //     }
// // //     console.log('File has been deleted.');
// // //   });
// // // fs.stat('file.txt', (err, stats) => {
// // //     if (err) {
// // //       console.error(err);
// // //       return;
// // //     }
// // //     console.log('File size: ' + stats.size);
// // //     console.log('Is directory? ' + stats.isDirectory());
// // //   });

// // const directoryName = "my-directory";

// // // fs.mkdir(directoryName, (err) => {
// // //   if (err) {
// // //     console.error(`Error creating directory: ${err}`);
// // //   } else {
// // //     console.log(`Directory "${directoryName}" created successfully.`);
// // //   }
// // // });
// // // fs.rmdir(directoryName, { recursive: true }, (err) => {
// // //     if (err) {
// // //       console.error(`Error deleting directory: ${err}`);
// // //     } else {
// // //       console.log(`Directory "${directoryName}" deleted successfully.`);
// // //     }
// // //   });

// // const filePath = "./dir/file.txt";

// // fs.access(filePath, fs.constants.F_OK, (err) => {
// //   if (err) {
// //     console.log(`The path "${filePath}" does not exist.`);
// //   } else {
// //     console.log(`The path "${filePath}" exists.`);
// //   }
// // });

// const path = require('path');
// const fullPath = path.join('folder', 'subfolder', 'file.txt');
// const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
// // console.log(absolutePath); // Output: /Users/username/folder/subfolder/file.txt
// // console.log(fullPath); // Output: folder/subfolder/file.txt
// const fileName = path.basename('./dir/file.txt');
// console.log(fileName)
// const dirName = path.dirname('/path/to/file.txt');
// console.log(dirName)

// const extension = path.extname('/path/to/file.txt');
// console.log(extension)

// const pathInfo = path.parse('/path/to/file.txt');
// console.log(pathInfo)

// const normalizedPath = path.normalize('/path/to/../file.txt');
// console.log(normalizedPath)

// const isAbsolute = path.isAbsolute('/path/to/file.txt');
// console.log(isAbsolute)

// const relativePath = path.relative('/path/from', '/path/to');
// console.log(relativePath)

const http = require("http");

const server = http.createServer((req, res) => {
  // Set response header with Content-Type as application/json
  res.setHeader("Content-Type", "application/json");

  // Define JSON data
  const jsonData = {
    message: "Hello, World!",
    date: new Date(),
  };

  // Convert JSON object to a JSON string
  const jsonResponse = JSON.stringify(jsonData);

  // Write JSON response
  res.write(jsonResponse);

  // End the response
  res.end();
});
const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
