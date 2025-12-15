// 19. Demonstrate the following operations using Mongo shell script  
// 1. Switch to the WorkDB database.  
// 2. Create a teachers collection.  
// 3. Insert documents with fields name, subject and experience.  
// 4. Use the Mongo shell to export the students collection to a JSON file.  
// 5. Import the JSON file back into a new collection named studentsBackup. 



// 1. Switch to WorkDB database 
use WorkDB; 
// 2. Create a teachers collection 
db.createCollection("teachers"); 
// 3. Insert documents into teachers collection 
db.teachers.insertMany([ 
    { name: "Anita Sharma", subject: "Mathematics", experience: 8 }, 
    { name: "Ravi Kumar", subject: "Science", experience: 5 }, 
    { name: "Sunita Rao", subject: "English", experience: 10 } 
]); 
exit 
 
//Run these commands in Windows CMD (NOT inside mongosh) 
//4.To export the students collection to JSON 
mongoexport --db=WorkDB --collection=students --out=students.json 
//This creates a file named students.json. 
//5. Import the JSON file into a new collection studentsBackup 
mongoimport --db=WorkDB --collection=studentsBackup --file=students.json 
//(After import, verify (inside mongosh) 
use WorkDB; 
db.studentsBackup.find(); 
//You should see all the exported students data.)