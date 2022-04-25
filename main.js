// Variables
var game = new Game();

// Query Selectors
var boardTile = document.querySelector('#board');
var messagePrompter = document.querySelector('#messageBox');
var player1Scoreboard = document.querySelector('#player1Scoreboard');
var player2Scoreboard = document.querySelector('#player2Scoreboard');

// Event Listeners
boardTile.addEventListener('click', selectBoardTile)

// function selectBoardTile(event) {
//   var target = event.target;
//   var tileValue = event.target.id
//   var isTile = target.classList.contains('tile');
//   var isDisabled = target.classList.contains('disabled')
//
//     if (isTile && !isDisabled && !game.currentPlayer.playedTiles.includes(tileValue)) {
//         if (game.currentPlayer === game.player1) {
//             target.innerText = game.player1.token;
//             game.currentPlayer.playedTiles.push(tileValue)
//           } else {
//             target.innerText = game.player2.token;
//             game.currentPlayer.playedTiles.push(tileValue)
//           }
//             target.classList.add('disabled')
//             game.turnCounter++;
//               game.checkForWin();
//               game.determineDraw()
//               game.changePlayerTurn();
//             }
//         };



function selectBoardTile(event) {
  var target = event.target;
  var tileValue = event.target.id;
  var isTile = target.classList.contains('tile');
  var isDisabled = target.classList.contains('disabled');

  if (isTile && !isDisabled && !game.currentPlayer.playedTiles.includes(tileValue)) {
    target.innerText = game.currentPlayer.token;
    game.currentPlayer.playedTiles.push(tileValue);
    target.classList.add('disabled');
    game.turnCounter++;
    game.checkForWin();
    game.determineDraw();
    game.changePlayerTurn();
    updatePrompter();
  }
};
        // if (game.draw === false && game.winner === null) {

function updatePrompter() {
  if (game.draw === true) {
    messagePrompter.innerText = `It's a draw! Try again!`
  } else if (game.win === true) {
    messagePrompter.innerText = `Player ${game.winner.token} wins! `
  } else {
    messagePrompter.innerText = `Player ${game.currentPlayer.token}'s turn!`;
  }
}
        // resetBoard();

        //updateScore();

//         function resetBoard() {
//               if (game.turnCounter === 9 || game.winner === true) {
//               game.playedTiles = [];
//               target.innerText = '';
//               target.classList.remove('disabled');
//             }
//           }
// };
