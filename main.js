let playButton; // X or O button
//let singleOrMultiplayer;
let gameArray = ["","","","","","","","",""];

let buttonX = document.getElementById('button-X');
let buttonO = document.getElementById('button-O');
let singlePlayer = document.getElementById('single-player');
let twoPlayer = document.getElementById('two-player');


buttonO.addEventListener('click',() => {
    playButton = "O";   
})


//twoPlayer.addEventListener('click',() => {
//    singleOrMultiplayer = 2;
//})

const buttons = document.querySelectorAll('.box');
const player = (buttonSelectionXO,gameGridArray) => {

    let playerSelection;
    previousChoice = "";

    buttons.forEach((gridButton) => {
    gridButton.addEventListener('click', () => {
    playerSelection = gridButton.id;
    
    console.log(playerSelection)
    if (gameGridArray[parseInt(playerSelection)] === "")
    {
        if ((buttonSelectionXO === "X" && previousChoice === "") ||  previousChoice === "X")
            {
                gameGridArray[parseInt(playerSelection)] = "X";
                gridButton.textContent = "X";
                previousChoice = "O";
            }
        else if ((buttonSelectionXO === "O" && previousChoice === "") || previousChoice === "O")
            {
                gameGridArray[parseInt(playerSelection)] = "O";
                gridButton.textContent = "O";
                previousChoice = "X";
            }
    }
    
  });
})
  return {gameGridArray,buttonSelectionXO}
}

 const gameBoard = () =>
 {
    let playerOne;
    twoPlayer.addEventListener('click',() => {
        gameArray = ["","","","","","","","",""];
        buttons.forEach((grids) => {
            grids.textContent = "";
        })
        buttonX.addEventListener('click',() => {
            gameArray = ["","","","","","","","",""];
            buttons.forEach((grids) => {
            grids.textContent = "";
        })
            playerOne = player("X",gameArray);  
        })
        buttons.forEach((grids) => {
            grids.textContent = "";
        });
        buttonO.addEventListener('click',() => {
            gameArray = ["","","","","","","","",""];
            buttons.forEach((grids) => {
            grids.textContent = "";
        })
            playerOne = player("O",gameArray);   
        })
    })
    return Object.assign({},playerOne)
}
 const game = gameBoard();