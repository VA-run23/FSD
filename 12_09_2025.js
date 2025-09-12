//1.  Declare variables of types: number, string, boolean, null, undefined, and symbol. Print their types using typeof.
let a = 123;
console.log(typeof(a));

let b = "abc";
console.log(typeof(b));

let c = true;
console.log(typeof(c));

let d =  null;
console.log(typeof(d));

let e ;
console.log(typeof(e));

let f = Symbol("+");
console.log(typeof(f));



// 2.  Write a program that takes two numbers and shows the result of: 
// • Addition 
// • Subtraction 
// • Multiplication 
// • Division 
// • Modulus 


let n1 = prompt("Enter the first number");
let n2 = prompt("Enter the second number");

console.log(`Addition: ${n1+n2}`);
console.log(`Subtraction: ${n1-n2}`);
console.log(`Multiplication: ${n1*n2}`);
console.log(`Division: ${n1 / n2}`);
console.log(`Modulo: ${n1 % n2}`);
console.log("Multipliy: " , n1*n2);



// 3.  Write a JavaScript program that concatenates two strings 
// "Hello" and "World" without using the + operator. 
console.log(`Hello`.concat( "World", "World", "world"));




// 4.  Demonstrate the difference between == and === by comparing: 
// • 5 == "5" 
// • 5 === "5" 
// • null == undefined 
// • null === undefined 

///NOTE:== compares the value but === compares the value with type also

///SOLUTION:::
// 5 == "5" 

// true
//   5 === "5" 

// false
//   null == undefined 

// true
//   null === undefined 
// false





// 5.  Write a program to swap two numbers without using a third variable. 
let x = 123;
let y = 456;

console.log(x, " ", y);
x = x+y;
y = x - y;
x = x - y;


console.log(x, " ", y);



// 6.  Write a program to check if a number is even or odd using the ternary operator. 
let oe = prompt("Enter a number to check whether a numbber is odd or even : ");
oe % 2 == 0? console.log("Even"): console.log("Odd");





// 7.  Write a program to calculate the square and cube of a number 
// using exponentiation operator (**). 
let num = prompt("Enter any number: ");
console.log(`The number is: ${num},  Cube is ${num**3} and its square is ${num*num}`)



// 8.  Write a program that converts a string "123" into a number and "true" into a boolean, then prints their types. 
let ss = "123";
console.log(parseInt(ss)); 