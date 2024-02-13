const table = document.getElementById("table")
const cells = document.querySelectorAll(".cell")
const displayWinner = document.querySelector(".winner")


let is_X_turn = true;
const winningCombinations = 
[[0, 1 ,2],
[3, 4 ,5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

const checkWin = (turn) => {
const hasWon = winningCombinations.some(combination => {
   return combination.every(index => {
       return cells[index].innerHTML === turn
        })
    })
    
  return hasWon;
}

const startGame = () => {
    const clickHandler = (e) =>{
        const cell = document.getElementById(e.target.id);
        if (is_X_turn && cell.innerHTML === "") {
            cell.innerHTML = "x";
            is_X_turn = false;
        } else if (cell.innerHTML === "") {
            cell.innerHTML = "0";
            is_X_turn = true;
        }
    
        if (checkWin("x") || checkWin("0")) {
            table.removeEventListener("click", clickHandler);
            displayWinner.innerText = `${is_X_turn ? "0" : "x"} wins!`;
        }
    }
    
    table.addEventListener("click", clickHandler);
}

startGame()


