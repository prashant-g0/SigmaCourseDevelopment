// Input Element
let input = document.createElement('input');
document.querySelector("body").append(input);
input.setAttribute("placeholder",  "username");
// input.style.color = "red";

//button
let button = document.createElement('button');
button.innerHTML = "Click me!";
document.querySelector("body").append(button);
button.setAttribute("id", "btn");
let btn = document.querySelector('#btn');
btn.classList.add("btnStyle");


//h1 element
let head1 = document.createElement('h1');
head1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(head1);
head1.style.color = "purple";

//p element
let para = document.createElement("p");
para.innerHTML = "<b>Assignment Completed</b>";
document.querySelector("body").append(para);