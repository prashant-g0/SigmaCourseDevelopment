//Async functions:
// async functions are created using async keyword before the function declaration and they return a promise by default.
async function greet() {
  return "hello world!"; //returns a promise
}

let hello = async () => {}; //returns a promise

// to throw error in async functions we use "throw" keyword
// throw "Error: abc() is not defined"

// Await keyword:
//pauses the execution of its surrounding async funnction until the promise is settled (resolved or rejected)
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(Math.floor(Math.random() * 10) + 1);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}

//writing the colorchange code (refer lec 11) with the help of async and await
h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Success");
    }, delay);
  });
}

async function action() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("pink", 1000);
  changeColor("orange", 1000);
}

//Handling rejections with Await
//using try-catch block: the code likely to throw error is kept inside try block and the error is catched with catch block

// APIs: Application Programming Interface
// Google >> Search: amazon.in >> requests: server >> response: bundle of html/css/js >> website in browser
// The response of API is in JSON format.
// Some API URLs:
// https://catfact.ninja/fact
// https://dog.ceo/api/breeds/image/random

//JSON : JavaScript Object Notation www.json.org
// before json data was returned in XML format which was more like html
// to validate json code : jsonlint.com

// Accessing data from JSON
// Json.parse(data) Method : To parse a string into a JS object
// JSON data => to => JS object
let jsonRes = '{"fact" : "Hello World", "num" : 20}';
let validRes = JSON.parse(jsonRes);
console.log(jsonRes.fact); //undefined
console.log(validRes.fact); //Hello World

//JSON.stringify(json) Method : To parse a js object data into JSON
// JS object => to => JSON
let student = { name: "raj", marks: 95 };
let jsondata = JSON.stringify(student);
console.log(jsondata);

//Testing API requests
// 1. Hoppscotch 2. Postman
// Give the endpoint url of API and it will show the response will validity

// AJAX: Asynchronous JavaScript and XML; now XML is replaced with JSON but name is kept as original AJAX.

//HTTP Verbs: work with api testing
//GET, POST, DELETE, more....

//Status Codes
// 200 : OK
// 404 : page not found
// 400 : bad request
// 500 : internal server error

//Read all documentations on "mdn" as "status code mdn"
//apislist.com/api/1931/potter-db

// OUR FIRST REQUEST : using fetch
let url = "https://catfact.ninja/fact";
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data.fact);
  })
  .catch((err) => {
    console.log("ERROR--", err);
  });

//using async-await
let urll = "https://catfact.ninja/fact";
async function getCatFact() {
    try{
        let res = await fetch(urll);
        let info = await res.json();
        console.log(info.fact);

        let res2 = await fetch(urll);
        let info2 = await res.json();
        console.log(info2.fact);
    } catch(e) {
        console.log("ERR! ",e)
    }
}
