//let playButton; // X or O button
//let singleOrMultiplayer;
let gameArray = ["","","","","","","","",""];
let gameArray1 = ["","","","","","","","",""];

let buttonX = document.getElementById('button-X');
let buttonO = document.getElementById('button-O');
let display = document.getElementById('display');
let singlePlayer = document.getElementById('single-player');
let twoPlayer = document.getElementById('two-player');

// buttonO.addEventListener('click',() => {
//     playButton = "O";   
// })

const buttons = document.querySelectorAll('.box');
const player = (buttonSelectionXO,gameGridArray) => {

    let playerSelection;
    let previousChoice = "";

    buttons.forEach((gridButton) => {
    gridButton.addEventListener('click', () => {
    playerSelection = gridButton.id;
    display.textContent = "Play in progress";
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
const playWithComputer = (buttonSelectionXO1,gameGridArray1) => {

    let playerSelection1;
    let previousChoice1 = "";
    let computerSelection;

    buttons.forEach((gridButton) => {
    gridButton.addEventListener('click', () => {
    playerSelection1 = gridButton.id;
    display.textContent = "Play in progress";
    
    //console.log(playerSelection)
    if (gameGridArray1[parseInt(playerSelection1)] === "")
    {
        display.textContent = "Play in progress";
        if ((buttonSelectionXO1 === "X" && previousChoice1 === "") || previousChoice1 === "X" )
            {
                gameGridArray1[parseInt(playerSelection1)] = "X";
                gridButton.textContent = "X";
                computerSelection = Math.floor(Math.random() * 9);
                // do {
                //     computerSelection = Math.floor(Math.random() * 9);
                // } while (gameGridArray[computerSelection] !== "");
                gameGridArray1[computerSelection] = "O";
                document.getElementById(`${computerSelection.toString()}`).textContent = "O";
                previousChoice1 = "X";
                //computer
            }
        else if ((buttonSelectionXO1 === "O" && previousChoice1 === "") || previousChoice1 === "O" )
            {
                gameGridArray1[parseInt(playerSelection1)] = "O";
                gridButton.textContent = "O";
                computerSelection = Math.floor(Math.random() * 9);
                // do {
                //     computerSelection = Math.floor(Math.random() * 9);
                // } while (gameGridArray[computerSelection] !== "");
                gameGridArray1[computerSelection] = "X";
                document.getElementById(`${computerSelection.toString()}`).textContent = "X";
                previousChoice1 = "O";
                //computer
            }
    }
    if (gameGridArray1[0] === "X" && gameGridArray1[1] === "X" && gameGridArray1[2]  === "X")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray1[0] === "O" && gameGridArray1[1] === "O" && gameGridArray1[2]  === "O")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray1[3] === "O" && gameGridArray1[4] === "O" && gameGridArray1[5]  === "O")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray1[3] === "X" && gameGridArray1[4] === "X" && gameGridArray1[5]  === "X")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray1[6] === "O" && gameGridArray1[7] === "O" && gameGridArray1[8]  === "O")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray1[6] === "X" && gameGridArray1[7] === "X" && gameGridArray1[8]  === "X")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray1[0] === "O" && gameGridArray1[3] === "O" && gameGridArray1[6]  === "O")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray1[0] === "X" && gameGridArray1[3] === "X" && gameGridArray1[6]  === "X")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray1[1] === "O" && gameGridArray1[4] === "O" && gameGridArray1[7]  === "O")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray1[1] === "X" && gameGridArray1[4] === "X" && gameGridArray1[7]  === "X")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray1[2] === "O" && gameGridArray1[5] === "O" && gameGridArray1[8]  === "O")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray1[2] === "X" && gameGridArray1[5] === "X" && gameGridArray1[8]  === "X")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray1[0] === "O" && gameGridArray1[4] === "O" && gameGridArray1[8]  === "O")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray1[0] === "X" && gameGridArray1[4] === "X" && gameGridArray1[8]  === "X")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player X Wins!";
    }
    else if(gameGridArray1[2] === "O" && gameGridArray1[4] === "O" && gameGridArray1[6]  === "O")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player O Wins!";
    }
    else if(gameGridArray1[2] === "X" && gameGridArray1[4] === "X" && gameGridArray1[6]  === "X")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Player X Wins!";
    }
    else if (gameGridArray1[0] !== "" && gameGridArray1[1] !== "" && gameGridArray1[2] !== "" && gameGridArray1[3] !== "" 
    && gameGridArray1[4] !== "" && gameGridArray1[5] !== "" && gameGridArray1[6] !== "" && gameGridArray1[7] !== "" && gameGridArray1[8] !== "" 
    && display.textContent !== "Player O Wins!" && display.textContent !== "Player X Wins!")
    {
        buttonSelectionXO1 = "";
        previousChoice1 = "";
        display.textContent = "Draw!";
    }
    
  });
})
  return {gameGridArray1,buttonSelectionXO1}
}

 const gameBoard = () =>
 {
    let secondPlayer;
    let playerOneX;
    let playerOneO
    let withComputerO;
    let withComputerX
    singlePlayer.addEventListener('click', () => {
        secondPlayer = 'computer';
        gameArray1 = ["","","","","","","","",""];
        display.textContent = "Begin! Single Player.";
        buttons.forEach((grids) => {
            grids.textContent = "";
        })
    })
    twoPlayer.addEventListener('click', () => {
        secondPlayer = 'human';
        gameArray1 = ["","","","","","","","",""];
        display.textContent = "Begin! Multi-Player.";
        buttons.forEach((grids) => {
            grids.textContent = "";
        })
    })

    buttonX.addEventListener('click',() => {
        gameArray1 = ["","","","","","","","",""];
        gameArray = ["","","","","","","","",""];
        display.textContent = "Player 1 is X, Player 2 is O.";
        buttons.forEach((grids) => {
        grids.textContent = "";
    })
        if (secondPlayer === 'computer')
        {
            withComputerX = playWithComputer("X",gameArray1);
        }
        else if (secondPlayer === 'human')
        {
            playerOneX = player("X",gameArray);
        }
    })
    buttonO.addEventListener('click',() => {
        gameArray1 = ["","","","","","","","",""];
        gameArray = ["","","","","","","","",""];
        display.textContent = "Player 1 is O, Player 2 is X.";
        buttons.forEach((grids) => {
        grids.textContent = "";
    })
        if (secondPlayer === 'computer')
        {
            withComputerO = playWithComputer("O",gameArray1);
        }
        else if (secondPlayer === 'human')
        {
            playerOneO = player("O",gameArray);
        }
    })
const reset = document.getElementById('reset-btn');
reset.addEventListener('click',() => {
    display.textContent = "RESET";
    gameArray = ["","","","","","","","",""];
    gameArray1 = ["","","","","","","","",""];
    buttons.forEach((grids) => {
        grids.textContent = "";
    });
})    
return Object.assign({},secondPlayer,gameArray,gameArray1,playerOneO,playerOneX,withComputerO,withComputerX)
}

 const game = gameBoard();