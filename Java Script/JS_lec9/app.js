let newp = document.createElement('p');
newp.innerHTML = "Hey! I am red";
document.querySelector("body").append(newp);
newp.style.color = "red";

let newblue = document.createElement('h3');
newblue.innerHTML = "Hey! I am blue";
document.querySelector("body").append(newblue);
newblue.style.color = "blue";

let prntdiv = document.createElement('div');
document.querySelector("body").append(prntdiv);
prntdiv.style.backgroundColor = "pink";
prntdiv.style.borderColor = 'black';

let inH1 = document.createElement('h1');
inH1.innerHTML = "I am in a div";

let inp = document.createElement('p');
inp.innerHTML = "Me too!";

prntdiv.append(inH1);
prntdiv.append(inp);




