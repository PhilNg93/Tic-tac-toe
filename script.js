const Player_X_Class = "x";
const Player_O_Class = "circle";
const Winning_Combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const cellElements = document.querySelector('[data-cell]');
const boardElement = documet.getElementById("board");
const winningMessage = document.getElementById("winningMessage");
const winningMessageText = document.getElementById("winningMessageText");
const restartButton = document.getElementById("restartButton");
let isPlayer_O_Turn = false;

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
    isPlayer_O_Turn = false;
    cellElements.forEach(cell =>{
        
    })
}