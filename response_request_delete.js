// // const express = require('express');
// // const cors = require('cors');

// // const app = express();
// // app.use(cors()); // Enable CORS
// // app.use(express.json()); // Allow JSON body parsing

// // app.post('/', (req, res) => {
// //     console.log('✅ POST request received:', req.body);
// //     res.status(200).send('Hello from response_request_delete server!');
// // });
// // app.put('/', (req, res) => {
// //     console.log('✅ POST request received:', req.body);
// //     res.status(200).send(' this is put Hello from response_request_delete server!');
// // });

// // app.listen(3000, () => {
// //     console.log('✅ Server running on http://localhost:3000/');
// // });
// // for put 
// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors()); // Enable CORS
// app.use(express.json()); // Parse JSON request bodies

// // Handle PUT request
// app.put('/', (req, res) => {
//     console.log('✅ PUT request received:', req.body);
//     res.status(200).json({ message: 'PUT request successful!', receivedData: req.body });
// });

// app.listen(3000, () => {
//     console.log('✅ Server running on http://localhost:3000/');
// });

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

let dataStore = {}; // Temporary in-memory storage

// Handle PUT request (Update or Add Data)
app.put('/', (req, res) => {
    console.log('✅ PUT request received:', req.body);
    dataStore = req.body; // Store incoming data
    res.status(200).json({ message: 'PUT request successful!', data: dataStore });
});

// Handle GET request (Retrieve Data)
app.get('/', (req, res) => {
    console.log('✅ GET request received');
    res.status(200).json({ message: 'GET request successful!', data: dataStore });
});

// Handle DELETE request (Remove Data)
app.delete('/', (req, res) => {
    console.log('✅ DELETE request received');
    dataStore = {}; // Clear stored data
    res.status(200).json({ message: 'DELETE request successful!', data: dataStore });
});

// Start the server
app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000/');
});
