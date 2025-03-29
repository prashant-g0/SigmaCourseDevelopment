// Function to display average of 3 numbers
function avg(a,b,c){
    console.log((a+b+c)/3);
}

avg(2.5,3.4343,4);

// multiplication table of a number
function multiplicationT(num){
    for(let i = 1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
multiplicationT(2);

//return: return keyword is used to return some value from the function
function addition(a,b){
    return a+b;
}

let add = addition(2,3);
console.log(add);

//function that returns the sum of numbers from 1 to n
function summation(n){
    sum = 0;
    for(let i = 0; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(summation(5));

//function that returns the concatenation of all strings in an array
function concat(arr){
    let str = "";
    for(let i = 0; i<arr.length; i++){
        str += arr[i];
    }
    return str;
}

let arr = ["Hii", ",", " Aditya", "!"];
console.log(concat(arr));

// Scope: scope determines the accessibility of variables, objects, and functions from different parts of the code.
// 1. Function scope 2. Block scope 3. Lexical Scope

//1. Function Scope: Cannot access the variables out side the function.
//2. Block Scope: Variables declared inside a {} block cannot be accessed from outside the block.
//3. Lexical Scope: Variable defined outside a function can be accessible inside another function defined after the variable declaration. The opposite is not true.

// Function Expression
let variable = function(a,b){
    return a+b;
}

console.log(variable(2,3));

//Higher order functions
//A function that does one or both: -takes one or multiple functions as arguments -returns a functions
let greet = function(func, n){
    for(let i = 0; i<n; i++){
        func();
    }
}

let welc = function(){
    console.log("Hello");
}

console.log(greet(welc, 5));

//Methods: Actions that can be performed on an object
const calc = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

console.log(calc.add(2,3));

//shorthand
const calcu = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};

console.log(calcu.add(2,3));

//Assignment
// Q1. Write a jS function that returns array elements larger than a number
function larger(arr, n){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>n){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(larger([12,23,54,32,13], 23));

// Q2. Write a JS function to extract unique characters from a string. Eg. str = "abcdabcdefgggh" ; output: "abcdefgh"
function unique(str){
    let out = "";
    for(let i = 0; i<str.length; i++){
        let chr = str[i];
        if(out.indexOf(chr)==-1){
            out += chr;
        }
    }
    return out;
}
console.log(unique("abcdabcdefgggh"));

// Q3. Write a JS function that accepts a list of country names as input and returns the longest country name as output. Eg. country=["Australia","Germany","UnitedStatesofAmerica"]; output: "UnitedStatesofAmerica"
function big(arr){
    let maxi = arr[0].length;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length > maxi){
            maxi = arr[i];
        }
    }
    return maxi;
}
console.log(big(["Australia","Germany","UnitedStatesofAmerica"]));

// Q4. Write a JS function to count the number of vowels in a string argument
function vowels(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
            count += 1;
        }
    }
    return count;
}
console.log(vowels("applebananagrapes"));

// Q5. Write a JS function to generate a random number within a range
function rand(st, end){
    let diff = end-st;
    return Math.floor(Math.random()*diff)+st;
}
console.log(rand(5,9));