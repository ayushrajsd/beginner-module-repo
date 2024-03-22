const fs = require("fs");
// Step 1: Read a file
fs.readFile("f1.txt", function (err, data) {
  if (err) {
    console.error("Failed to read file:", err);
    return;
  }

  // Step 2: Process the data
  const processedData = data.toString();
  console.log("File read successfully.", processedData);

  // Step 3: Write the processed data to a new file
  fs.readFile("f2.txt", function (err, data) {
    if (err) {
      console.error("Failed to write file:", err);
      return;
    }

    console.log("File processed and read successfully.",data);

    // More nested operations could go here, deepening the "pyramid"
  });
});
