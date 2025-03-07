//  const fs = require('fs');

// console.log("Starting...");

// fs.writeFile('derric_3.0.txt', 'derric is very determined and hardworking', (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//         return;
//     }
//     console.log("Done!!");
// });

// console.log("Ending...");
const fs = require('fs');

console.log("Reading file...");

fs.readFile('derric_3.0.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Content:", data);
});

console.log("Finished!");
