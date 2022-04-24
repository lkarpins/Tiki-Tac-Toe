// Variables

var game = new Game();
var coconut = game.player1.token;
var pineapple = game.player2.token;
var currentPlayer = game.currentPlayer;

// Query Selectors
var boardTile = document.querySelector('#board');
var messagePrompter = document.querySelector('#messageBox');
var player1Scoreboard = document.querySelector('#player1Scoreboard');
var player2Scoreboard = document.querySelector('#player2Scoreboard');
// Event Listeners
boardTile.addEventListener('click', selectBoardTile)

// Functions and Event Handlers



function resetBoard() {
      if (game.playedTiles === 9 || this.winner === true) {
      game.playedTiles = [];
      target.innerText = '';
      target.classList.remove('disabled');
    }
  }
function changePlayerTurn() {
  if (currentPlayer === game.player1) {
    currentPlayer = game.player2;
  } else {
    currentPlayer = game.player1;
  }
    messagePrompter.innerText =  `Player ${currentPlayer.token}'s turn!`
}

function selectBoardTile(event) {
  var target = event.target;
  var tileValue = event.target.id
  var isTile = target.classList.contains('tile');
  var isDisabled = target.classList.contains('disabled')

    if (isTile && !isDisabled && !game.playedTiles.includes(tileValue)) {
        if (currentPlayer.turn === game.player1.turn) {
            target.innerText = coconut;
            game.playedTiles.push(tileValue)
          } else if (currentPlayer.turn === game.player2.turn) {
            target.innerText = pineapple;
            game.playedTiles.push(tileValue)
          }
            target.classList.add('disabled')
            changePlayerTurn();
        };

        resetBoard();
};
