// 18. Demonstrate the following MongoDB operations  
// 1. Write a script to create a new database named CollegeDB and a collection 
// named students.  
// 2. Insert three documents into the students collection with fields name, age, 
// sem, usn and grade.  
// 3. Insert multiple documents into a collection named courses with fields 
// courseName,   courseCode, and credits. 
//  4. Write queries to retrieve all documents from the students collection. 
//  5. Retrieve all documents where the age is greater than 18. 
//  6. Write a query to find all students with a grade of "A".  
// 7. Write a query to find all courses with credits greater than or equal to 3. 
// // Create database and collection 
use CollegeDB; 
db.createCollection("students"); 
// Insert documents into students ` 
db.students.insertMany([ 
    { name: "ABC", age: 19, sem: 3, usn: "1AB20CS001", grade: "A" }, 
    { name: "XYZ", age: 18, sem: 2, usn: "1AB21CS015", grade: "B" }, 
    { name: "PQR ", age: 20, sem: 4, usn: "1AB19CS020", grade: "A" } 
]); 
// Insert documents into courses 
db.createCollection("courses"); 
db.courses.insertMany([ 
    { courseName: "Data Structures", courseCode: "CS201", credits: 4 }, 
    { courseName: "DBMS", courseCode: "CS301", credits: 3 }, 
    { courseName: "Operating Systems", courseCode: "CS303", credits: 2 } 
]); 
// Retrieve all students 
db.students.find(); 
// Retrieve students where age > 18 
db.students.find({ age: { $gt: 18 } }); 
// Retrieve students with grade A 
db.students.find({ grade: "A" }); 
// Retrieve courses with credits >= 3 
db.courses.find({ credits: { $gte: 3 } });