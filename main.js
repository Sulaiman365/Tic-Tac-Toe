let playButton; // X or O button
//let singleOrMultiplayer;
let gameArray = ["","","","","","","","",""];

let buttonX = document.getElementById('button-X');
let buttonO = document.getElementById('button-O');
let display = document.getElementById('display');
let singlePlayer = document.getElementById('single-player');
let twoPlayer = document.getElementById('two-player');

buttonO.addEventListener('click',() => {
    playButton = "O";   
})

const buttons = document.querySelectorAll('.box');
const player = (buttonSelectionXO,gameGridArray) => {

    let playerSelection;
    let previousChoice = "";

    buttons.forEach((gridButton) => {
    gridButton.addEventListener('click', () => {
    playerSelection = gridButton.id;
    
    console.log(playerSelection)
    if (gameGridArray[parseInt(playerSelection)] === "")
    {
        display.textContent = "Play in progress";
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
    if (gameGridArray[0] === "X" && gameGridArray[1] === "X" && gameGridArray[2]  === "X")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray[0] === "O" && gameGridArray[1] === "O" && gameGridArray[2]  === "O")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray[3] === "O" && gameGridArray[4] === "O" && gameGridArray[5]  === "O")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray[3] === "X" && gameGridArray[4] === "X" && gameGridArray[5]  === "X")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray[6] === "O" && gameGridArray[7] === "O" && gameGridArray[8]  === "O")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray[6] === "X" && gameGridArray[7] === "X" && gameGridArray[8]  === "X")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray[0] === "O" && gameGridArray[3] === "O" && gameGridArray[6]  === "O")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray[0] === "X" && gameGridArray[3] === "X" && gameGridArray[6]  === "X")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray[1] === "O" && gameGridArray[4] === "O" && gameGridArray[7]  === "O")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray[1] === "X" && gameGridArray[4] === "X" && gameGridArray[7]  === "X")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray[2] === "O" && gameGridArray[5] === "O" && gameGridArray[8]  === "O")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray[2] === "X" && gameGridArray[5] === "X" && gameGridArray[8]  === "X")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray[0] === "O" && gameGridArray[4] === "O" && gameGridArray[8]  === "O")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray[0] === "X" && gameGridArray[4] === "X" && gameGridArray[8]  === "X")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray[2] === "O" && gameGridArray[4] === "O" && gameGridArray[6]  === "O")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray[2] === "X" && gameGridArray[4] === "X" && gameGridArray[6]  === "X")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Player X Wins!";
    }
    else if (gameGridArray[0] !== "" && gameGridArray[1] !== "" && gameGridArray[2] !== "" && gameGridArray[3] !== "" 
    && gameGridArray[4] !== "" && gameGridArray[5] !== "" && gameGridArray[6] !== "" && gameGridArray[7] !== "" && gameGridArray[8] !== "" 
    && display.textContent !== "Player O Wins!" && display.textContent !== "Player X Wins!")
    {
        buttonSelectionXO = "";
        previousChoice = "";
        display.textContent = "Draw!";
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
        display.textContent = "Begin!";
        buttons.forEach((grids) => {
            grids.textContent = "";
        })
        buttonX.addEventListener('click',() => {
            gameArray = ["","","","","","","","",""];
            display.textContent = "Player 1 is X, Player 2 is O.";
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
            display.textContent = "Player 1 is O, Player 2 is X.";
            buttons.forEach((grids) => {
            grids.textContent = "";
        })
            playerOne = player("O",gameArray);   
        })
    })
    return Object.assign({},playerOne)
}
const reset = document.getElementById('reset-btn');
reset.addEventListener('click',() => {
    display.textContent = "RESET";
    gameArray = ["","","","","","","","",""];
    buttons.forEach((grids) => {
        grids.textContent = "";
    });
})
 const game = gameBoard();