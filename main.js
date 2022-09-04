let playButton; // X or O button
let singleOrMultiplayer;
let gameArray = ["x","x","x","x","x","x","x","x","x"];

let buttonX = document.getElementById('button-X');
let buttonO = document.getElementById('button-O');
let singlePlayer = document.getElementById('single-player');
let twoPlayer = document.getElementById('two-player');

buttonX.addEventListener('click',() => {
    playButton = "X";   
})
buttonO.addEventListener('click',() => {
    playButton = "O";   
})

singlePlayer.addEventListener('click',() => {
    singleOrMultiplayer = 1;
})
twoPlayer.addEventListener('click',() => {
    singleOrMultiplayer = 2;
})

const player = (buttonSelectionXO,gameGridArray) => {
    //else {
    //    buttonSelection = playButtonSelect;
   // }
    let playerSelection;
    //const gridButton = document.querySelector('.box');
    const buttons = document.querySelectorAll('.box');

    buttons.forEach((gridButton) => {
    gridButton.addEventListener('click', () => {
    playerSelection = gridButton.id;
    console.log(playerSelection)
    gameGridArray[parseInt(playerSelection)] = buttonSelectionXO;
  });
})
  return {gameGridArray,buttonSelectionXO}
}

const me = player("X",["O","O","O","O","O","O","O","O","O"]); // for testing player object, it will be deleted later


const gameBoard = () =>
{
    if (singleOrMultiplayer == 1)
    {
        const playerOne = player();
    }
    else if (singleOrMultiplayer == 2)
    {

    }
   
}