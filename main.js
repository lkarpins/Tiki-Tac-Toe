// Variables
var game = new Game();

// Query Selectors
var boardTile = document.querySelector('#board');
var messagePrompter = document.querySelector('#messageBox');
var player1Scoreboard = document.querySelector('#player1Scoreboard');
var player2Scoreboard = document.querySelector('#player2Scoreboard');
var tiles = document.querySelectorAll('.tile');

// Event Listeners
boardTile.addEventListener('click', selectBoardTile)

// Functions
function selectBoardTile(event) {

  var target = event.target;
  var tileValue = event.target.id;
  var isTile = target.classList.contains('tile');
  var isDisabled = target.classList.contains('disabled');

  if (!isDisabled && !game.currentPlayer.playedTiles.includes(tileValue)) {
    game.turnCounter += 1;
    target.innerText = game.currentPlayer.token;
    game.playedTiles.push(event.target.id)
    game.currentPlayer.playedTiles.push(event.target.id);
    target.classList.add('disabled');
    game.checkForWin();
    game.determineDraw();
    game.changePlayerTurn();
    updatePrompter();
    updateScore();
  }
};

function updatePrompter() {
  if (game.draw === true) {
    messagePrompter.innerText = `It's a draw! Try again!`;
    setTimeout(function() {
      clearBoard();
    }, 2500);
  } else if (game.win === true) {
    messagePrompter.innerText = `Player ${game.winner.token} wins! `;
    setTimeout(function() {
      clearBoard();
    }, 2500);
  } else {
    messagePrompter.innerText = `Player ${game.currentPlayer.token}'s turn!`;
  }
}

function updateScore() {
  if (game.win === true) {
    player1Scoreboard.innerText = `${game.player1.wins}`;
    player2Scoreboard.innerText = `${game.player2.wins}`;
  }
}


function clearBoard() {
  if (game.turnCounter === 9 || game.win === true) {
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].classList.remove('disabled');
      tiles[i].innerHTML = '';
    }
    game.resetGame();
    updatePrompter();
  }
};
