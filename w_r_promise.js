const fs = require('fs').promises; // Use fs.promises for async/await

async function writeAndRead() {
    try {
        console.log("Starting...");

        // Writing to the file
        await fs.writeFile('derric_3.0.txt', 'Derric is very determined and hardworking.');
        console.log("✅ File written successfully...");

        // Reading the file
        console.log("📖 Reading file...");
        const data = await fs.readFile('derric_3.0.txt', 'utf8'); // 'utf8' ensures readable text
        console.log("📄 File content:", data);

    } catch (err) {
        console.error("❌ Error:", err);
    }
}

// Call the function
writeAndRead();
