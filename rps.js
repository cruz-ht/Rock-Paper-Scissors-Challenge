
// setting up the func and making sure each var is assigned to a class
const playerText = document.querySelector("#pResult");
const computerText = document.querySelector("#cResult");
const resultText = document.querySelector("#rResult");
const btnOptions = document.querySelectorAll('.btnOptions');

let player;
let computer;
let result;


// assigning the final results to the corresponding text for the users to see
 btnOptions.forEach(button =>button.addEventListener("click", () => {

    player = button.textContent;

    computerTurn();

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

// creating a new class to make sure the result animations load after every new result instead of once a reload page
    resultText.classList.remove("result-Pop"); 
    void resultText.offsetWidth;
    resultText.classList.add("result-Pop");

 }));



// creating the random selector for the computer as well as thelist to which it'll be choosing from
 function computerTurn(){
    const ranNum = Math.floor(Math.random() * 3) +1;

    switch(ranNum){
        case 1: computer = "Rock";
        break;

        case 2: computer = "Paper";
        break;

        case 3: computer = "Scissor";
        break;
    }
 }


// inputting all possible outcomes and creating returns for them/ end results
 function checkWinner(){
    if (player === computer){
        return "Draw, Try Again"; 
    }

    else if (computer === "Rock"){
        return (player === "Paper") ? "You Win !" : "You Lose "
    }
    else if (computer === "Paper"){
        return (player === "Scissor") ? "You Win !" : "You Lose "
    }
    else if (computer === "Scissor"){
        return (player === "Rock") ? "You Win !" : "You Lose "
    }
 }

//  clears/resets the result/input when the users wishes to start from the begining
 document.querySelector("#resetBtn").addEventListener("click", () => {
    playerText.textContent = "Player:";
    computerText.textContent = "Computer:";
    resultText.textContent = "PRESS A BUTTON TO START";
});
