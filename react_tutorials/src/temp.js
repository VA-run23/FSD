// 1. Measuring execution time of code blocks
console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop"); // Prints how long the loop took

// 2. Grouping related log messages hierarchically
console.group("User Details");
console.log("Name: Varun");
console.log("Age: 22");
console.groupEnd();

// 3. Using assertions to conditionally display error messages
let age = 15;
console.assert(age >= 18, "Error: Age must be 18 or above");

// 4. Displaying data in a tabular format
const students = [
  { name: "Asha", grade: "A" },
  { name: "Rahul", grade: "B" },
  { name: "Varun", grade: "C" },
];
console.table(students);

// 5. Logging debugging details for analysis
function testFunction() {
  console.debug("Debugging function execution...");
  console.trace("Trace log for function call");
  console.error("Simulated error occurred!");
}
testFunction();
