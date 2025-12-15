const fs = require("fs");
const { MongoClient } = require("mongodb");

const employees = JSON.parse(fs.readFileSync("employees.json", "utf8"));
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "CompanyDB";

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName); 
    const collection = db.collection("employees");

    // Insert records into employees collection
    await collection.insertMany(employees);

    // Update employee with empId = 101
    await collection.updateOne(
      { empId: 101 },
      { $set: { designation: "Senior Developer" } }
    );

    // Retrieve all updated records
    const updatedRecords = await collection.find().toArray();

    // Write all records into updated_employees.json
    fs.writeFileSync(
      "updated_employees.json",
      JSON.stringify(updatedRecords, null, 2)
    );

    // Confirmation message
    console.log("Export completed successfully!");
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    // Close connection
    await client.close();
  }
}

run();