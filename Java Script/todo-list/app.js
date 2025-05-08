// for bubbling concept
// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let li = document.querySelector('li');

// div.addEventListener("click", function(){
//     console.log("Cliking div...")
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("Cliking ul...")
// });

// for (l of li) {
//     l.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("Cliking li...")
//     });
// }
//-------------------------------------------------

//ToDo list
let btn = document.querySelector("button");
let u = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    let dlt = document.createElement("button");
    dlt.classList.add("dlt");
    dlt.innerText = "Delete"
    item.innerText = inp.value;
    u.appendChild(item);
    item.appendChild(dlt)
    inp.value = "";
});

u.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let deleted = event.target.parentElement;
        deleted.remove();
        console.log("Deleted!")
    }
}); 

// let dltbtns = document.querySelectorAll(".dlt");
// for(dltbtn of dltbtns){
//     dltbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

