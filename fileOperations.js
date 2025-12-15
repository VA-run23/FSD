const fs = require("fs");
exports.writeFile = (filename, data) => fs.writeFileSync(filename, data);
exports.readFile = (filename) => fs.readFileSync(filename, "utf8");
exports.appendFile = (filename, data) => fs.appendFileSync(filename, data);
