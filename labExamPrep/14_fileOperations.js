// fileOperations.js  
const fs = require('fs');  
// Function to write data to a file  
function writeFile(filename, content) {  
    fs.writeFile(filename, content, (err) => {  
        if (err) console.log("Error writing file:", err);  
        else console.log("File written successfully!");  
    });  
}   
// Function to read a file  
function readFile(filename) {  
    fs.readFile(filename, 'utf8', (err, data) => {  
        if (err) console.log("Error reading file:", err);  
        else console.log("File content:", data);  
    });  
}   
// Function to append data to a file  
function appendFile(filename, content) {  
    fs.appendFile(filename, content, (err) => {  
        if (err) console.log("Error appending file:", err);  
        else console.log("Data appended successfully!");  
    });  
}  
// Export the functions  
module.exports = {  
    writeFile,  
    readFile,  
    appendFile  
};  