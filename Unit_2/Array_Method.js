let arr = [1, 2, 3];

let darr = arr.map(a => a*2);
console.log(darr);

let fDrr = arr.filter(a=> a%2 != 0);
console.log(fDrr);


console.log("Sum of the array is : ", arr.reduce((acc, a) => acc+a, 0));

    let anObject =[{
        "1" : "this first object of this array"
    }, 
    {
        2 : "this second object of this array"

    }
    ]

    // console.log(anObject[0]."1");