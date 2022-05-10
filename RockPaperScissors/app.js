let userScore = 0;
let compScore = 0;

// DOM Variable / HTML elements
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.getElementById(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];  
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "User".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    // updating the score
    result_div.innerHTML = `${userChoice} ${smallUserWord} beats ${computerChoice} ${smallCompWord}. You win!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() =>
    {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 500);
}
function lose(userChoice, computerChoice) {

    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "User".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    // updating the score
    result_div.innerHTML = `${userChoice} ${smallUserWord} loses ${computerChoice} ${smallCompWord}. You lose...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() =>
    {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 500);


}

function draw(userChoice, computerChoice){
    
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "User".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    // updating the score
    result_div.innerHTML = `${userChoice} ${smallUserWord} DRAW ${computerChoice} ${smallCompWord}.Its a draw!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() =>
    {
        document.getElementById(userChoice).classList.remove('grey-glow');
    }, 500);

}

// console.log(getComputerChoice());
function game(userChoice) {
    const computerChoice = getComputerChoice();
    // compare both the picks
    switch (userChoice + computerChoice) {
        case "RockScissors": 
        case "PaperRock":
        case "ScissorsPaper":
                win(userChoice, computerChoice);
            break;

        case "PaperScissors":
        case "ScissorsRock":
        case "RockPaper":
            lose(userChoice, computerChoice);
        break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
        default:
            break;
    }
}

function main () {
    // clicking on emojis
    rock_div.addEventListener('click', () =>
        game("Rock")
)

    paper_div.addEventListener('click', () =>
        game("Paper")
)

    scissors_div.addEventListener('click', () => 
        game("Scissors")
)
}

main ();


