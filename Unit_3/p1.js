
//program1
const os= require("os");
console.log("operating system type",os.type());
console.log("Platform",os.platform());
console.log("total memory",os.totalmem());
console.log("CPU architecture",os.arch());
console.log("free memory",os.freemem());

//program2
const dns = require('dns');
const cpus = os.cpus();

console.log('CPU Count:', os.cpus().length);
cpus.forEach((cpu, i) => {
  console.log(`Core ${i + 1}: ${cpu.model}, ${cpu.speed} MHz`);
});



dns.lookup(os.hostname(), { all: true }, (err, addresses) => {
  if (err) throw err;
  addresses.forEach(addr => console.log('IP Address:', addr.address));
});


