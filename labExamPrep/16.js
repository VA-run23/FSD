console.time('Execution Time');  
console.group('Names');  
console.log('Alice');  
console.log('Bob');  
console.groupEnd();  
const x=5;   
console.assert(x>10,"Assertion Failed: x is not greater than 10");  
const students =[  
    {name:'manoj',marks:85},  
    {name:'sara',marks:92},  
    {name:'john',marks:78}    
];  
console.table(students);  
console.timeEnd('Execution Time'); 1