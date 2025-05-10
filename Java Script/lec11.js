//call stack: A call stack is a stack data structure that stores information about the active subroutines and inline blocks of a computer program.
function one(){
    console.log("Executing one();")
    return 1;
}

function two(){
    console.log("Executing two();")
    return one()+one();
}

function three(){
    console.log("Executing three();")
    let ans = two()+one();
    console.log(ans);
}

three();

//breakpoints: Breakpoints in JavaScript are used during debugging to pause the execution of code, allowing inspection of the program's state at that specific point. They are essential for identifying and resolving logical errors.
// in browser >> inspect mode >> sources >> top >> file >> open js file >> click on lines to add breakpoints >> select call stack option to visualize

// JS is single threaded: js waits for particular lines to get executed completely but sometimes fall into infinte waiting period, to avoid such situations "callbacks" and "timeouts" are used.

//Callback Hell: arises when dealing with multiple nested callbacks, particularly in asynchronous operations. This situation leads to code that is difficult to read, understand, and maintain due to its deeply indented structure.
h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay)
}

changeColor("red", 1000, ()=> {
    changeColor("orange", 1000, ()=> {
        changeColor("green", 1000, ()=> {
            changeColor("blue", 1000);
        });
    });
});

//Promises: The Promises object represents the eventual completion (or failure) of an asynchronous operation and its reulting value.
// then() and catch(): then() is used when promise is fulfilled and catch() is used when promise is rejected
let request = saveToDBPromise("Apnacollege");
request
    .then(()=>{
        console.log("Promise resolved");
    })
    .catch(()=> {
        console.log("Promise rejected");
    });

//Promise chaining: multiple then() block is used with multiple promises but only catch block is enough  to catch for rejection of promise.
let r = saveToDBPromise("Apnacollege");
r
    .then(()=>{
        console.log("Promise resolved");
        saveToDBPromise("Data1").then(()=>{
            console.log("Data1 saved");
        })
    })
    .catch(()=> {
        console.log("Promise rejected");
    });

// same can be written in improved version as 
saveToDBPromise("Data1").then(()=> {
    console.log("Data1 saved");
    return saveToDBPromise("Data2");
})
.then(()=> {
    console.log("Data2 saved");
    return saveToDBPromise("Data3")
})
.then(()=> {
    console.log("Data3 saved")
})
.catch(()=> {
    console.log("Rejected!")
});

//Promises aare rejected and resolved with some data (valid results or errors)
saveToDBPromise("Data1").then((result)=> {
    console.log("Data1 saved");
    console.log("result: ", result);
    return saveToDBPromise("Data2");
})
.then((result)=> {
    console.log("result: ", result);
    console.log("Data2 saved");
})
.catch((error)=> {
    console.log("Error: ", error);
    console.log("Rejected!")
});
//"result" & "error" are just variable names which can be kept any name

//let's  apply our promise chaining in color callback hell
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            h1.style.color = color;
            resolve("Success");
        }, delay);
    });
}

changeColor("red", 1000).then(()=> {
    console.log("Success: color applied!")
    return changeColor("blue", 1000)
})
.then(()=>{
    console.log("Success: color applied!")
    return changeColor("pink", 1000)
})
.then(()=>{
    console.log("Success: color applied!")
    return changeColor("orange", 1000)
})
.then(()=>{
    console.log("Success: color applied!")
})
.catch(()=>{
    console.log("Failure: error occured!")
});
