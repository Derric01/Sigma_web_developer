// // // const { MongoClient } = require("mongodb");

// // // // Connection URL
// // // const url = "mongodb://localhost:27017";
// // // const dbName = "CrudDb"; // Database Name

// // // async function main() {
// // //     try {
// // //         // Connect to MongoDB
// // //         const client = new MongoClient(url);
// // //         await client.connect();
// // //         console.log("✅ Connected to MongoDB");

// // //         // Select the database
// // //         const db = client.db(dbName);
// // //         console.log(`📂 Using database: ${dbName}`);

// // //         // Select or create "users" collection
// // //         const usersCollection = db.collection("users");
        
// // //         // Insert a user document
// // //         const user = { name: "John Doe", email: "johndoe@example.com", age: 25 };
// // //         await usersCollection.insertOne(user);
// // //         console.log("✅ User Data Inserted");

// // //         // Select or create "courses" collection
// // //         const coursesCollection = db.collection("courses");

// // //         // Insert a course document
// // //         const course = {
// // //             name: "Harry Web Dev",
// // //             duration: "20 hrs",
// // //             price: "Free",
// // //             projects: 45
// // //         };
// // //         await coursesCollection.insertOne(course);
// // //         console.log("✅ Course Data Inserted");

// // //         // Fetch and display inserted courses
// // //         const allCourses = await coursesCollection.find().toArray();
// // //         console.log("📜 All Courses:", allCourses);

// // //         // Close the connection
// // //         await client.close();
// // //     } catch (err) {
// // //         console.error("❌ Error:", err);
// // //     }
// // // }

// // // // Run the function
// // // main();
// // const { MongoClient } = require("mongodb");

// // // Connection URL
// // const url = "mongodb://localhost:27017";
// // const dbName = "CrudDb"; // Database Name

// // async function main() {
// //     try {
// //         // Connect to MongoDB
// //         const client = new MongoClient(url);
// //         await client.connect();
// //         console.log("✅ Connected to MongoDB");

// //         // Select the database
// //         const db = client.db(dbName);
// //         console.log(`📂 Using database: ${dbName}`);

// //         // Select or create "users" collection
// //         const usersCollection = db.collection("users");

// //         // Insert multiple users
//       const users = [
// //             { name: "Alice", email: "alice@example.com", age: 30 },
// //             { name: "Bob", email: "bob@example.com", age: 22 },
// //             { name: "Charlie", email: "charlie@example.com", age: 28 }
// //         ];
// //         await usersCollection.insertMany(users);
// //         console.log("✅ Multiple Users Inserted");

// //         // Select or create "courses" collection
// //         const coursesCollection = db.collection("courses");

// //         // Insert multiple courses
// //         const courses = [
// //             { name: "Harry Web Dev", duration: "20 hrs", price: "Free", projects: 45 },
// //             { name: "React Mastery", duration: "15 hrs", price: "$49", projects: 30 },
// //             { name: "Node.js Essentials", duration: "25 hrs", price: "$99", projects: 50 }
// //         ];
// //         await coursesCollection.insertMany(courses);
// //         console.log("✅ Multiple Courses Inserted");

// //         // Fetch and display inserted users
// //         const allUsers = await usersCollection.find().toArray();
// //         console.log("📜 All Users:", allUsers);

// //         // Fetch and display inserted courses
// //         const allCourses = await coursesCollection.find().toArray();
// //         console.log("📜 All Courses:", allCourses);

// //         // Close the connection
// //         await client.close();
// //     } catch (err) {
// //         console.error("❌ Error:", err);
// //     }
// // }

// // // Run the function
// // main();
// const { MongoClient } = require("mongodb");

// // Connection URL
// const url = "mongodb://localhost:27017";
// const dbName = "CrudDb"; // Database Name

// async function main() {
//     try {
//         // Connect to MongoDB
//         const client = new MongoClient(url);
//         await client.connect();
//         console.log("✅ Connected to MongoDB");

//         // Select the database
//         const db = client.db(dbName);
//         console.log(`📂 Using database: ${dbName}`);

//         // Select the "courses" collection
//         const coursesCollection = db.collection("courses");

//         // Fetch all courses and calculate total cost
//         const courses = await coursesCollection.find().toArray();
        
//         // Convert price values to numbers (assuming price can be a string like "$99" or "Free")
//         let totalCost = 0;
//         courses.forEach(course => {
//             if (typeof course.price === "string") {
//                 let price = parseFloat(course.price.replace(/[^0-9.]/g, "")); // Remove non-numeric chars
//                 if (!isNaN(price)) {
//                     totalCost += price;
//                 }
//             }
//         });

//         console.log(`💰 Total Cost of All Courses: $${totalCost}`);

//         // Close the connection
//         await client.close();
//     } catch (err) {
//         console.error("❌ Error:", err);
//     }
// }

// // Run the function
// main();
const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const dbName = "CrudDb"; // Database Name

async function main() {
    try {
        // Connect to MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log("✅ Connected to MongoDB");

        // Select the database and collection
        const db = client.db(dbName);
        const coursesCollection = db.collection("courses");

        // Update course prices (increase by 10%) and add "discountedPrice" (20% off new price)
        const updateResult = await coursesCollection.updateMany(
            { price: { $type: "string" } }, // Only update if price is a string
            [
                {
                    $set: {
                        price: {
                            $concat: [
                                "$",
                                { $toString: { $multiply: [{ $toDouble: { $replaceAll: { input: "$price", find: "$", replacement: "" } } }, 1.1] } }
                            ]
                        },
                        discountedPrice: {
                            $concat: [
                                "$",
                                { $toString: { $multiply: [{ $toDouble: { $replaceAll: { input: "$price", find: "$", replacement: "" } } }, 0.88] } }
                            ]
                        }
                    }
                }
            ]
        );

        console.log(`✅ Updated ${updateResult.modifiedCount} courses`);

        // Fetch and display updated courses
        const updatedCourses = await coursesCollection.find().toArray();
        console.log("📜 Updated Courses:", updatedCourses);

        // Close the connection
        await client.close();
    } catch (err) {
        console.error("❌ Error:", err);
    }
}

// Run the function
main();
