const fs = require('fs');

// Define the source and destination file paths
const sourceFilePath = './dir/file.txt';
const destinationFilePath = './destination-file.txt';

// Create a readable stream from the source file
const readStream = fs.createReadStream(sourceFilePath);

// Create a writable stream to the destination file
const writeStream = fs.createWriteStream(destinationFilePath);

// Pipe the data from the source file to the destination file
readStream.pipe(writeStream);

// Handle any errors that may occur during the copy process
readStream.on('error', (err) => {
  console.error(`Error reading the source file: ${err}`);
});

writeStream.on('error', (err) => {
  console.error(`Error writing to the destination file: ${err}`);
});

// When the copy is complete, log a success message
writeStream.on('finish', () => {
  console.log('File copied successfully.');
});

const directoryName = "my-directory";

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error(`Error creating directory: ${err}`);
  } else {
    console.log(`Directory "${directoryName}" created successfully.`);
  }
});
// fs.rmdir(directoryName, { recursive: true }, (err) => {
//     if (err) {
//       console.error(`Error deleting directory: ${err}`);
//     } else {
//       console.log(`Directory "${directoryName}" deleted successfully.`);
//     }
//   });