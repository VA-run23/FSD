const fs = require('fs');
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('Enter the text to write to file:', (data) => {
  fs.writeFile('content.txt', data, (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Entered the data to file successfully', data);         
    }
    r1.close();
  });
});
