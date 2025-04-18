//DOM Events: Events are signals that something has occurred (user input/output).

//Mouse Events
//->onclick() : when an element is clicked
 let btn = document.querySelector("button");
 btn.onclick = function () {
    alert("button clicked");
 }

 function click (){
    alert("Button 2 clicked");
 }

 function mouseenter(){
    console.log("Mouse entered to a button");
 }

 let btn2 = document.getElementById("btn2");
 btn2.onclick = click;
 btn2.onmouseenter = mouseenter;
 //-> onmouseenter : when cursor points to an element (not clicked)
 //->onmouseclick(when mouse enters an element)

 //Event Listener: this is upgraded version of what we learned above. above we cannnot add multiple function for single element, to surpass this we use eventlisteners
 //Syntax: element.addEventListener("event", callback) ; callback is the function we pass as argument
 let btn3 = document.getElementById("btn3");
 btn3.addEventListener("click", function(){
    console.log("Button 3 clicked");
 });

 //activity code
 let colorbtn = document.getElementById("colorbtn");
 colorbtn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomclr = randomcolor()
    h3.innerHTML = randomclr;

    let clrspace = document.getElementById("clrspace");
    clrspace.style.backgroundColor = randomclr;
 });

 function randomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
 }

//eventListeners like click, mouseenter, etc are not only for buttons but may be applied on various elements like paragraph, divm etc...

//'this' in Event Listeners: When 'this' is used in a callback of event handler of somenthing, it refers to that something
let thisbtn = document.querySelector('#this');
thisbtn.addEventListener("click", function(){
   // console.log(this);
   // console.dir(this);
   console.dir(this.innerHTML);
   this.style.backgroundColor = "blue";
});

//Keyboard Event
let inp = document.querySelector('#kInput');
let bttn = document.querySelector('#kbtn');
inp.addEventListener("keydown", function(){
   console.log("Key pressed");
   console.log("Key = ", event.key);
   console.log("Code = ", event.code)
});

//Form Events
let form = document.querySelector('form');
form.addEventListener("submit", function(){
   event.preventDefault();
   console.log("Form Submitted");

   let finp = document.querySelector("#finp");
   console.log(finp);
   console.log(finp.value);
});

//change event: the change occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).

//input event: the input event fires when the value of an <input>, <select>, or <textarea> element has been changed.

//Assignment
//Adding button using js and changing its color when it is clicked
let adbtn = document.createElement('button');
adbtn.innerHTML = "Added using js!";
document.querySelector("body").append(adbtn);
adbtn.addEventListener('click', function(){
   adbtn.style.backgroundColor = "blue";
});

//creating input element and H2 element to take user name and display the name dynamically in h2
let dInput = document.querySelector('#dyna');
let dh2 = document.querySelector('#enterdyna');
dInput.addEventListener('input', function(){
   dh2.innerText = dInput.value;
});

