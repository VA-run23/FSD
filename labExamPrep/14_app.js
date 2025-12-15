const fileop = require('./14_fileOperation');  
fileop.writeFile('output.txt', 'Hello, World!');  
fileop.readFile('output.txt');  
fileop.appendFile('output.txt', '\nAppended Text');