//Array methods
// -forEach : used to iterate over the array

let arr = [1,2,3,4,5];
arr.forEach(function(el){
    console.log(el);
});

arr.forEach( (el) => {
    console.log(el);
});

let info = [{
    name: "aditya",
    age: 19
},
{
    name: "raj",
    age: 20
},
{
    name: "manish",
    age: 21
}]

info.forEach((n) => {
    console.log(n.age);
});

//-map : used to perform some oprations over elements of array and creates new array for result
let num = [1,2,3,4,5];
let newnum = num.map((el) => {
    return el*2;
});
console.log(newnum);

//-filter: used to apply filter based on condition
let nums = [2,4,1,5,6,2,7,8,9];
let even = nums.filter((num) => {
    return num%2==0;
});
console.log(even);

//-every: returns true if every element of the array gives true for some functions, else returns false
// if all the elements satisfy the condition then returns true, if anyone of the elements failed it returns false
console.log([2,4,6,7].every((el)=> el%2 == 0)); //returns false; 7 doesn't satisfy the condition

//-reduce: reduces the array to a single value
console.log([1,2,3,4,5].reduce((res,el)=>(res+el)));
//the value returned by the function is stored in accumulator (res)

let max = [1,12,33,14,5].reduce((res,el)=>{
    if(el>res){
        return el;
    } else {
        return res;
    }
});

console.log(max);

//Q. check if all numbers in array are multiples of 10 or not
console.log([20,40,60,-70].every((el)=> el%10 == 0));

//Q. create a function to find the min in array
let min = [1,12,0,14,5].reduce((res,el)=>{
    if(el<res){
        return el;
    } else {
        return res;
    }
});

console.log(min);

//default parameters: giving a default value to the arguments
function sum(a,b=3){
    return a+b;
}
console.log(sum(2));

//spread: expands an iterable into multiple values
console.log(..."prashant"); //p r a s h a n t
arr = [1,2,3,4,5];
console.log(...arr); // 1 2 3 4 5 

//Rest: allows a function to take an indefinite number of arguments and bundle them in an array
function sum(...args){
    return args.reduce((add,el)=> add+el);
}
console.log(sum(1,2,3,4,5));

//Assignment 

//Q1. Square and sum the array elements using the arrow function and then find the average of the array
let avg = (arr) => {
    let summ = arr.reduce((summ, el)=> summ+el*el);
    return summ/arr.length;
}
console.log(avg([1,2,3]))

//Q2. Create a new array using the map function whose each element is equal to the original element plus 5
let increament = (arr) => {
    let plus5 = arr.map((el)=>{
        return el+5;
    });
    console.log(plus5);
}
increament([1,2,3,4]);

//Q3. Create a new array whose elements are in uppercase of words present in the original array
let upper = (arr) => {
    let newuppr = arr.map((el)=>{
        return el.toUpperCase()
    });
    console.log(newuppr);
}
upper(["adam","bob","eve"]);

//Q4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additonal arguments doubled
let doubleAndReturnArgs = (arr,...args) => [...arr, ...args.map((v)=> v*2),];
console.log(doubleAndReturnArgs([1,2,3],4,4));

//Q5. Write a function called mergeObjects that accepts twoo objects and return a new object which contains all the key and values of the first object and second object
let mergeObjects = (o1,o2) => ({...o1, ...o2});
console.log(mergeObjects({a:1,b:2}, {c:3,d:4}));