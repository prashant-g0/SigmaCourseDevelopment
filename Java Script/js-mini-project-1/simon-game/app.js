let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let rdmIdx = Math.floor(Math.random() * 4);
    let rdmColor = btns[rdmIdx];
    let rdmBtn = document.querySelector(`.${rdmColor}`);
    gameSeq.push(rdmColor);
    btnFlash(rdmBtn);
}

function checkAnswer(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to restart.`;
        document.body.classList.add("game-over");
        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 200);
        resetGame();
    }
}

function btnPress() {
    let btn = this;
    let userColor = btn.classList[1];
    userSeq.push(userColor);
    btnFlash(btn);
    checkAnswer(userSeq.length - 1);
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
