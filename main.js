// Variables

var game = new Game;
var coconut = game.player1.token;
var pineapple = game.player2.token;
var currentPlayer = game.currentPlayer;

// Query Selectors
var boardTile = document.querySelector('#board');
// var startButton = document.querySelector('')

// Event Listeners
boardTile.addEventListener('click', selectBoardTile)

// Functions and Event Handlers

function changePlayerTurn() {
  if (currentPlayer === game.player1) {
    currentPlayer = game.player2;
  } else {
    currentPlayer = game.player1;
  }
}

function selectBoardTile() {
  var target = event.target;
  // var isTile = target.classList.contains('tile');
  // var isDisabled = target.classList.contains('disabled')
  //
  //   if (isTile && !isDisabled) {
        if (currentPlayer.turn === game.player1.turn) {
            target.innerText = coconut;
          } else if (currentPlayer.turn === game.player2.turn) {
            target.innerText = pineapple;
          }
          changePlayerTurn();
        };


//game.playedTiles.push()
