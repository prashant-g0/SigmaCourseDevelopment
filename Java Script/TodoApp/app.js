// Todo App
// - list: to show all todos
// - add: to add a todo
// - delete: to delete a task
// - quit: to exit the todo

let todo = [];

let req = prompt("Please enter your request");

while(true){
    if (req == "quit"){
        console.log("Quitting App");
    }

    if (req=="list"){
        console.log("________________")
        for(let i = 0; i<todo.length; i++){
            console.log(task[i]);
        }
        console.log("________________")
    } else if (req=="Add"){
        console.log("________________")
        let task = prompt("Enter task to add");
        todo.push(task);
        console.log("Task added");
        console.log("________________")
    }  else if (req=="delete"){
        console.log("________________")
        let idx = prompt("Enter task index to delete");
        todo.splice(idx, 1);
        console.log("Task added");
        console.log("________________")
    } else{
        console.error("Wrong request")
    }

    req = prompt("Please enter your request");
}