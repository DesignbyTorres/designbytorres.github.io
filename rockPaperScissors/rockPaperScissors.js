    var userChoice = document.getElementById("userChoice");
    var compChoice = document.getElementById("compChoice");
    var gameOutcome = document.getElementById("gameOutcome");
    var winCounter = document.getElementById("winCounter");

    let howManyWins = 0;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
    
//add event listener to id="rock"
 let rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", userPickedRock);
//    event.preventDefault();
    // use prevent.. if using submit button as it reloads the page   

 let paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", userPickedPaper);

let scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", userPickedScissors);


function userPickedRock() {
    
    let userChoiceIs = this.innerHTML;
    userChoice.innerHTML = "You chose: " + userChoiceIs;
    
    
    let randNum = getRndInteger(0,3);
    switch(randNum) {
        case 0:
            compChoice.innerHTML = "The computer chose: Rock";
            gameOutcome.innerHTML = "It's a tie!";
            break;
        case 1:
            compChoice.innerHTML = "The computer chose: Paper";
            gameOutcome.innerHTML = "You lose!";
            howManyWins = 0;
            winCounter.innerHTML = howManyWins;
            break;
        case 2:
            compChoice.innerHTML = "The computer chose: Scissors";
            gameOutcome.innerHTML = "You Win!";
            howManyWins += 1;
            winCounter.innerHTML = howManyWins;
            break;
    }
}



function userPickedPaper() {
    
    let userChoiceIs = this.innerHTML;
    userChoice.innerHTML = "You chose: " + userChoiceIs;
    //    event.preventDefault();
    // use prevent.. if using submit button as it reloads the page   
    
    let randNum = getRndInteger(0,3);
    switch(randNum) {
        case 0:
            compChoice.innerHTML = "The computer chose: Rock";
            gameOutcome.innerHTML = "You Win!";
            howManyWins += 1;
            winCounter.innerHTML = howManyWins;
            break;
        case 1:
            compChoice.innerHTML = "The computer chose: Paper";
            gameOutcome.innerHTML = "It's a tie!";

            break;
        case 2:
            compChoice.innerHTML = "The computer chose: Scissors";
            gameOutcome.innerHTML = "You lose!";
            howManyWins = 0;
            winCounter.innerHTML = howManyWins;
            break;
    }
}



function userPickedScissors() {
    
    let userChoiceIs = this.innerHTML;
    userChoice.innerHTML = "You chose: " + userChoiceIs;
    //    event.preventDefault();
    // use prevent.. if using submit button as it reloads the page   
    
    let randNum = getRndInteger(0,3);
    switch(randNum) {
        case 0:
            compChoice.innerHTML = "The computer chose: Rock";
            gameOutcome.innerHTML = "You lose!";
            howManyWins = 0;
            winCounter.innerHTML = howManyWins;
            break;
        case 1:
            compChoice.innerHTML = "The computer chose: Paper";
            gameOutcome.innerHTML = "You Win!";
            howManyWins += 1;
            winCounter.innerHTML = howManyWins;
            break;
        case 2:
            compChoice.innerHTML = "The computer chose: Scissors";
            gameOutcome.innerHTML = "It's a tie!";
            
            break;
    }
}