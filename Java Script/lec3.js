// String Methods
// Methods: actions that can be performed on objects
//Format: stringName.method()

let msg = "     hello     ";
console.log(msg.trim()); // the spaces are not removed from the original string
// trim() method is used to remove white spaces from both the ends. spaces in middle of the string won't be removed
// strings are immutable inn JS

let variable = "name";
// all letter to lower case
console.log(variable.toLowerCase()); //name
//all letter to upper case
console.log(variable.toUpperCase()); //NAME

//String methods with arguments
//Argument is a some value that we pass to the method

//1.indexOf: returns the first index of occurence of some value in string. or -1 if not found
console.log(variable.indexOf("m")); //2

//Method chaining
console.log(msg.trim().toUpperCase()); //HELLO

//Slicing : returns a part of the original string as a new string
// str.slice(st, end) ; end is not inclusive i.e if end = 5 then 4 will be considered
console.log(variable.slice(0,3)); //nam
console.log(variable.slice(-3)); //ame

//Replace: searches a value in string & retuns a new string with value replaced
// str.replace("val1", "val2")
console.log(variable.replace("e","o")); //only first occurrence is replaced

//Repeat: returns a string with the number of copies of a string
//str.repeat(3)
console.log(variable.repeat(3));


//Practice Q
// Q. for the given string, trim and convert to uppercase
let mssg = "help!";
console.log(mssg.trim().toUpperCase());

// Q. for the given string predict the output of the methods
let naame = "ApnaCollege";
console.log(naame.slice(4,9));
console.log(naame.indexOf("na"));
console.log(naame.replace("Apna","Our"));