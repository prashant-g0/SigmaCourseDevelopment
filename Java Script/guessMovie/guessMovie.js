while (true){
    let userMovie = prompt("Enter movie name or exit to quit");
    myMovie = "Genius";
    if (userMovie.toLowerCase() === myMovie.toLowerCase()){
        alert("You got it!")
        break;
    } else if (userMovie.toLowerCase() == "exit") {
        alert("You don't know my fav movie :(")
        break;
    }
}