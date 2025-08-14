let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userMSg = document.querySelector("#user_score");
let computerMsg = document.querySelector("#com_score");

let compChoice = () => {
    let option = ["rock", "paper", "scissors"];
    let randomIndx = Math.floor(Math.random() * 3);
    return option[randomIndx];
};

let showWinner = (userWin) => {
    if (userWin === true) {
        user_score++
        userMSg.innerText = user_score;
        msg.innerText = "You Win"
    } else {
        comp_score++
        computerMsg.innerText = comp_score;
        msg.innerText = "You loose"
    }
};

let drawGame = () => {
    msg.innerText = "The game is draw play again";
};


let playGame = (userChoice) => {
    let ranChoice = compChoice();

    if (userChoice === ranChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = ranChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = ranChoice === "rock" ? false : true;
        } else {
            userWin = ranChoice === "rock" ? true : false;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})