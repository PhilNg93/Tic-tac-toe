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
        cell.classList.remove(Player_X_Class);
        cell.classList.remove(Player_O_Class);
        cell.removeEventListener("click", handleCellClick);
        cell.addEventListener("click", handleCellClick, {once: true});
    })
    setBoardHoverClass()
    winningMessage.classList.remove("show");
}

function handleCellClick(e) {
    const cell = e.target;
    const currentClass = isPlayer_O_Turn ? Player_O_Class : Player_X_Class;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw) {
        endGame (true);
    } else {
        swapTurn ();
        setBoardHoverClass ();
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = "It's a draw!";
    } else {
        winningMessageText.innerText = `Player with ${isPlayer_O_Turn ? "O's" : "X's"} wins!` 
    } 
    winningMessage.classList.add ("show");
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(Player_X_Class) || cell.classList.contains(Player_O_Class);
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurn() {
    isPlayer_O_Turn = !isPlayer_O_Turn;
}

function setBoardHoverClass() {
    boardElement.classList.remove(Player_X_Class);
    boardElement.classList.remove(Player_O_Class);
    if (isPlayer_O_Turn) {
        boardElement.classList.add(Player_O_Class);
    } else {
        boardElement.classList.add(Player_X_Class);
    }
}

function checkWin (currentClass) {
    return Winning_Combinations.some(combition => {
        return Winning_Combinations.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}