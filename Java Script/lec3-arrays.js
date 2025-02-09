// array is a linear data structure and elements are stored in contigous manner
let student = ["namo", "prash", "aman"];
console.log(student);

let rollno = [1, 2, 3];
console.log(rollno);

console.log(`${rollno[2]}. is ${student[2]}`); //3. is aman

console.log(student.length); //3
console.log(student[4]); //undefined
console.log(typeof(student)); //object

//types of array initialization
let marks = [20, 30, 60, 50];
let names = ["adam", "eve", "envy"];
let info = ["aman", 25, 6.1]
let empty = [];

//arrays are mutable
marks[2] = 70;
console.log(marks); //[20, 30, 70, 50]

// emptiness in arrays
let arr = ["A", "B", "C"];
// arr[25] = "Z";
console.log(arr); // [ 'A', 'B', 'C', <22 empty items>, 'Z' ]

// array methods
//push: add to end
arr.push("A");
console.log(arr);
//pop: delete from end and return it
let poped = arr.pop();
console.log(`popped: ${poped}`);
console.log(arr);
//unshift: add to start
arr.unshift("$");
console.log(arr);
//shift: delete from start & returns it
let shiftt = arr.shift();
console.log(`shift: ${shiftt}`);
console.log(arr);

//Practice Qs
//start = ['jan','july', 'march', 'august']
let start = ['jan','july', 'march', 'august'];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july")
console.log(start); //start = ['july', 'june', 'march', 'august']

// indexOf: returns index of something
console.log(start.indexOf("july")); //0
console.log(start.indexOf("dec")); //-1

//includes: search for a value
console.log(start.includes("march")) //true
console.log(start.includes("jan")) //false

//concat: merge 2 arrays
console.log(start.concat(arr)); //[ 'july', 'june', 'march', 'august', 'A', 'B', 'C' ]
console.log(arr.concat(start)); //[ 'A', 'B', 'C', 'july', 'june', 'march', 'august' ]

//reverse: reverse an array, unlike other methods reverse methods changes the original array
console.log(arr.reverse()); //[ 'C', 'B', 'A' ]
console.log(arr); //[ 'C', 'B', 'A' ]

//slice: copies a portion of an array
let colors = ["red", "blue", "yellow", "green", "pink", "violet", "white"];
console.log(colors.slice()); //["red", "blue", "yellow", "green", "pink", "violet", "white"]
console.log(colors.slice(2)); // [ 'yellow', 'green', 'pink', 'violet', 'white' ]
console.log(colors.slice(2,3)); //[ 'yellow' ]
console.log(colors.slice(-2)); // [ 'violet', 'white' ]

//splice: removes/replaces/add elements in place
// make changes in the original array
//splice(st, deleteCount, item0.....itemN)
console.log(colors.splice(4)); //[ 'pink', 'violet', 'white' ]
console.log(colors); //[ 'red', 'blue', 'yellow', 'green' ]
console.log(colors.splice(0,1)); //[ 'red' ]
console.log(colors); //[ 'blue', 'yellow', 'green' ]
console.log(colors.splice(0,1,"black","grey")); //[ 'blue' ]
console.log(colors); // [ 'black', 'grey', 'yellow', 'green' ]

//sort: sorts an array
//not effective for numbers, as it converts the number into string and then compares which may result in inefficiency
console.log(colors.sort()); //[ 'black', 'green', 'grey', 'yellow' ]
let num = [99, 89, 67, 42, 100];
console.log(num.sort()); //[ 100, 42, 67, 89, 99 ]

//Practice Qs
//months = ['jan','july', 'march', 'august']
let months = ['jan','july', 'march', 'august'];
months.splice(0,1);
months.splice(1,0,"june");
console.log(months); //months = ['july', 'june', 'march', 'august']

// Qs. return the index of the "jS" from the given array, if it was revesed
let js = ["c","c++","html","js","py","java", "c#","sql"];
console.log(js.reverse().indexOf("js"));
console.log(js.reverse()); // original array was reversed in previous stage to convert back to original state

//Array references: address in memory
// console.log([1]===[1]); false value
// console.log([1]==[1]); false value
// console.log([]===[]); false value
// console.log([1]==[1]); false value 
let ref = ['a','b'];
refcpy = ref; // both the arrays now point to same memory location
ref.push('c');
console.log(refcpy); //[ 'a', 'b', 'c' ]
refcpy.push('d');
console.log(ref); //[ 'a', 'b', 'c', 'd' ]

// constant array: 
const constant = [1,2,3];
//operations can be done on constant array
constant.push(4); 
console.log(constant); // [1,2,3,4]
console.log(constant.pop()); //4
// constant = [1,2,3,4];//error: const array cannot be assigned new array

//Nested array: array of arrays aka multi-dimensional array
let nested = [[1,2,3], [4,5,6], [7,8,9]];
console.log(nested);
console.log(nested.length);
console.log(nested[1]);
console.log(nested[1].length);
console.log(nested[2][2])

// Practice Qs
// create a nested array to show the tic-tac-toe hame state
let game = [['x',null, 'o'], [null,'o',null], ['o',null,'x']];
console.log(game); //[['x',null, 'o'], [null,'o',null], ['o',null,'x']]
game[0][1] = 'o';
console.log(game); //[ [ 'x', 'o', 'o' ], [ null, 'o', null ], [ 'o', null, 'x' ] ]

// Assignment Qs
//1. Write a js program to get the first n elements of an array
let ele = [7, 9, 0, -2];
n = 3;
console.log(ele.slice(0,3));

//2. Write a js program to get the first n elements of an array
n = 3;
console.log(ele.slice(-3));

//3. write a js program to check whether a string is blank or not
let blank = prompt('please enter a string');
if (blank.length == 0){
    console.log('blank');
} else{
    console.log('not blank');
}

//4. write a js program to test whether the char at the given index is lower case
let givenIDX = 'javaScript';
let idx = 4;
if (givenIDX[idx]==givenIDX[idx].toLowerCase()){
    console.log("verified lower case");
} else{
    console.log("try again");
}

//5. write a js program to strip leading and trailing spaces from a string
let spaces = '    hii!    ';
console.log(spaces);
console.log(spaces.trim());

//6. write a js program to check if an element exist in an array or not
let fruits = ['apples', 'banana', 'oranges', 'kiwi'];
console.log(fruits.includes("apples")) //true
console.log(fruits.includes("fig")) //false