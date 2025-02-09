// IF-ELSE-IF
// Q.Create a traffic light system that shows what to do based on colors
let color = "Green";

if (color === "Green"){
    console.log("You can go!");
} else if (color === "Yellow"){
    console.log("Slow down!");
} else if (color === "Red"){
    console.log("Strictly stop!");
} else {
    console.log("Error: No color found!");
}

// Q. Create a system to calculate popcorn prices base on the size
let size = "L";

if (size === "XL"){
    console.log("Rs. 250");
} else if (size === "L") {
    console.log("Rs. 200");
} else if (size === "M") {
    console.log("Rs. 100");
} else if (size === "S") {
    console.log("Rs. 50");
} else {
    console.log("Error: Select size!");
}

//Comparision operator: Logical
// Q. A good strinng is a string that starts with the letter 'a' & has a length > 3.Write a program to find if a string is good or not.
let str = 'Apple';

if (str[0] === 'A' && str.length > 3) {
    console.log("Good string");
} else {
    console.log("Bad String");
}

// Q. Pridict the output of following code:
let num = 12;
if ((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){
    console.log("Safe");
} else {
    console.log("Unsafe");
}

// truthy & falsy
// Everything in JS is true or false (in boolean context).
// This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.
// Falsy value: false, 0, -0, 0n(BigInt value), "" (Empty string), null, unndefined, NaN
// Truthy value: Everything else


// Switch case
// Q. Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Error: There are only 1 to 7 days in a week.");
}

// Alert & Prompt : before using link js file to html and will be seen on browser
alert("Error: Alert displayed"); // pop msg on screen
console.error("this is an error displayed in console panel");
console.warn("this is a warning msg displayed in console")

prompt("Enter your name"); //used to take input as a pop up box
// store data in a variable
let Uname = prompt("Enter name");
console.log(Uname);

// Assignment Problem

// Q1. Create a number variable with some value. now print "good" if the number is divisible by 10 and print "bad" if it is not.
let divi = 10;
if (divi%10 == 0){
    console.log("good");
} else{
    console.log("bad");
}

//Q2. Take the user's name and age as input using prompts, then return back the following statement (name is age years old) to the user as an alert (by substituting their name and age).
let user = prompt("Enter name");
let ummar = prompt("Enter age");
alert(`${user} is ${ummar} years old`);

//Q3. Writers with statement to print the months in 1/4
let quater = 5;

switch(quater){
    case 1:
        console.log("Jan, Feb, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, Aug, Sept");
        break;
    case 4:
        console.log("Oct, Nov, Dec");
        break;
    default:
        console.log("Error: There are only 4 quarters in a year.");
}

//Q4. A string is a golden string if it starts with the character "A" or "a" and has total length greater than 5. for a given string print if it is golden or not
let gold = "aluminium"

if ((gold[0] === 'A' || gold[0] === 'a') && gold.length > 5){
    console.log("Golden string");
} else{
    console.log("Not a golden string");
}

//Q5. Write a programme to find the largest of three numbers
let a = 2;
let b = 3;
let c = 4;

if (a>b && a>c){
    console.log("a is greater");
} else if(b>c){
    console.log("b is greater");
} else {
    console.log("c is greater");
}

//Q6. Write a programme to cheque if two numbers have the same last digit.
//  ex. 32 and 407852 have the same large digit that is 2

let one = 32;
let two = 407852

if (one[one.length-1] === two[two.length-1]){
    console.log("Same")
} else{
    console.log("different")
}