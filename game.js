class Game {
  constructor() {
    this.player1 = new Player('1', '🥥', true);
    this.player2 = new Player('2', '🍍', false);
    this.player1Tiles = [];
    this.player2Tiles = [];
    this.winner = null;
    this.draw = false;
    this.currentPlayer = this.player1;
    this.winningCombos = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
  };
};
  // function checkforWin() {
  //   for (var i = 0; i < winningCombos.length; i ++) {
  //     if (this.currentPlayer.playedTiles.includes(this.winningCombos[i]))
  //   }
    //loop through each array within the winningCombos array and check for same tokens
    // at winning combo indices


  //   function checkforDraw() {
  //
  //   }



// need a way to track the data for the game board, a way to track
// which players turn it is, check for win conditions, way to detect
// a draw, a way to reset the game

// how a player wins
