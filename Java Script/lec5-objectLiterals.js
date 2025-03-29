// Object Literals: Used to store keyed collections & complex entities.
// Object literals are not ordered 
let student = {
    name: "Aditya",
    age: 23,
    marks: 93,
    subjects: ["maths","english"]
};

const post = {
    username: "@aditya",
    content: "This is my #firstpost",
    likes: 500,
    repost: 4,
    tags: ["@raj","@manish"]
};

console.log(post); //acess complete object literal
console.log(post["username"]); // to access particular key's value
console.log(post.username); // to access particular key's value
console.log(post.tags[0]); // to acess particular index value of a key

// JS automatically converts objects keys to strings. Even if we made the number as a key, the number will be converted to string.

//  Add or update values inside object literals
const aditya = {
    name: "Aditya",
    surname: "Torane",
    age: 24
};

console.log(aditya.name);
aditya.name = "Chotu";
console.log(aditya.name); //updated value
aditya.gender = "Male"; //adding new key value pair
console.log(aditya.gender);
console.log(aditya);

delete aditya.age; // to delete a key value from object
console.log(aditya);

//Object of Objects: Storing information of multiple students
const classInfo = {
    aditya: {
        age: 24,
        city: "Nashik"
    },
    raj: {
        age: 19,
        city: "Bihar"
    }
};

console.log(classInfo.raj)
console.log(classInfo.raj.age)

// Array of objects: Storing information of multiple students
const classData = [
    {
        name: "aditya", grade: "B", city: "Nashik"
    },
    {
        name: "Manish", grade: "B+", city: "Bihar"
    }
];

console.log(classData[0]);
console.log(classData[0].name);

classData[0].gender = "Male";
console.log(classData[0]);

//Math Object
console.log(`the value of pi: ${Math.PI}`); // pi value
console.log(`the value of e: ${Math.E}`); // e value
console.log(`the absolute value of -2: ${Math.abs(-2)}`); // absolute value
console.log(`the value of 2 power 4: ${Math.pow(2,4)}`); // power value
console.log(`the round off value of 5.99999 (nearest smaller): ${Math.floor(5.99999)}`); // nearest smaller value
console.log(`the round off value of 5.3333 (nearest larger): ${Math.ceil(5.3333)}`); // nearest larger value
console.log(`the random value bewtween 1 & 0: ${Math.random}`); // random value 

// Generate random numbers between a range. 
const range = 10;
console.log(Math.floor(Math.random() * range) + 1);
// +1 is done to create range in 1 to 10 avoiding the default range of 0 to  9


//Assignment Questions
//Q1. Create a program that generates a random number representing a dice roll. Range 1 to 6
console.log(Math.floor(Math.random() * 6) + 1);

//Q2. Create an object representing a car that stores the following properties for the car: name, model, color. Print the car's name
const car = {
    name: "Toyota",
    model: "Fortuner",
    color: "Blue"
};
console.log(car.name);

//Q3. Create an object Person with their name, age, and city. Edit their city's original value to change it to "new york". Add a new property country and set it to the United States.
const person = {
    name: "Aditya",
    age: 19,
    city: "California"
};
person.city = "New York";
person.country = "United States";

console.log(person);


