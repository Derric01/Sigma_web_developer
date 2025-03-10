const { MongoClient } = require("mongodb");
const { faker } = require("@faker-js/faker");

// Connection URL
const url = "mongodb://localhost:27017";
const dbName = "CrudDb"; // Database Name
const collectionName = "courses"; // Collection Name

async function generateDummyData() {
    try {
        // Connect to MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log("✅ Connected to MongoDB");

        // Select the database and collection
        const db = client.db(dbName);
        const coursesCollection = db.collection(collectionName);

        // Generate an array of dummy courses
        let courses = [];
        for (let i = 0; i < 10; i++) { // Generate 10 courses (change as needed)
            let price = faker.commerce.price(10, 200, 2, "$"); // Random price between $10 - $200
            courses.push({
                name: faker.company.name(), // Random course name
                instructor: faker.person.fullName(), // Random instructor name
                duration: `${faker.number.int({ min: 10, max: 50 })} hours`, // Random duration
                price: price, // Random price
                studentsEnrolled: faker.number.int({ min: 100, max: 5000 }) // Random student count
            });
        }

        // Insert generated data into MongoDB
        const result = await coursesCollection.insertMany(courses);
        console.log(`✅ Inserted ${result.insertedCount} dummy courses`);

        // Fetch and display inserted data
        const insertedCourses = await coursesCollection.find().toArray();
        console.log("📜 Inserted Courses:", insertedCourses);

        // Close the connection
        await client.close();
    } catch (err) {
        console.error("❌ Error:", err);
    }
}

// Run the function
generateDummyData();
