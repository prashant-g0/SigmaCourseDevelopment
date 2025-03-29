//"this" in javascript: used to provide access of object's key value to the function as function is not able to access then directly.
const student = {
    name: "Aditya",
    age: 19,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}

console.log(student.getAvg());

// try & catch: 
// the try statement allows you to define a block of code to be tested for errors while it is being executed.
// the catch statement allows you to define a block of code to be executed, if an error iccurs in the try block.
try{
    console.log(a);
} catch(e) {
    console.log(e);
};

// Arrow functions
const summ = (a,b) => {
    console.log(a+b);
};

let mul = (a, b) => a * b;

//Set timeout: used to delay 
console.log("hi");
setTimeout(()=> {
    console.log("Prashant")
}, 4000);
console.log("Welcome");

//set interval: used to repeat the function multiple times; to stop the execution type "clear interval id"
setInterval(()=>{
    console.log("Hello");
}, 2000);

//Assignments

//Q1. Write an arrow function named arrayAvg that accepts an array of numbers and returns the average of those numbers
let arrayAvg = (arr) => {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i] 
    }
    return sum/arr.length;
};

arr = [1,2,3,4,5];
console.log(arrayAvg(arr));

//Q2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let isEven = (n) => {return n%2==0};
console.log(isEven(25));