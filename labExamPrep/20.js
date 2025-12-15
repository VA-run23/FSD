// 20.Write a MongoDB aggregation query for the following to analyze an employees 
// collection with an example for each:Group the employees by their department and 
// calculate the total number of employees in each department,The average salary of 
// employees in each department. 
//  1. Sort the aggregated results by the total number of employees in descending 
// order.  
// 2. Example Data in the employees Collection. 
// Insert Example Data into employees Collection 
db.employees.insertMany([ 
    { name: "John", department: "HR", salary: 35000 }, 
    { name: "Priya", department: "HR", salary: 42000 }, 
    { name: "Karan", department: "Finance", salary: 50000 }, 
    { name: "Megha", department: "Finance", salary: 60000 }, 
    { name: "Rahul", department: "IT", salary: 55000 }, 
    { name: "Anita", department: "IT", salary: 70000 }, 
    { name: "Sara",  department: "IT", salary: 65000 } 
]); 
db.employees.aggregate([ 
    { 
        $group: { 
            _id: "$department", 
            totalEmployees: { $sum: 1 }, 
            averageSalary: { $avg: "$salary" } 
        } 
    }, 
    { 
        $sort: { totalEmployees: -1 } 
    } 
]);