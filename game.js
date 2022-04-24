class Game {
  constructor() {
    this.player1 = new Player('1', '🥥', true);
    this.player2 = new Player('2', '🍍', false);
    this.winner = null;
    this.draw = false;
    this.playedTiles = [];
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


   checkforWin() {
    for (var i = 0; i < winningCombos.length; i ++) {
      if (this.currentPlayer.playedTiles.includes(this.winningCombos[i])) {
      console.log("hello")
    }
}
}
};
  // function checkforWin() {
  //   for (var i = 0; i < winningCombos.length; i ++) {
  //     if (this.currentPlayer.board.includes(this.winningCombos[i]))
  //   }



  // function checkforDraw() {
  //
  //   }

  // function resetBoard() {

// }

//   for (var i = 0; i < winningCombos.length; i ++) {
//     if (this.currentPlayer.board.includes(this.winningCombos[i]))
//   }

// need a way to track the data for the game board, a way to track
// which players turn it is, check for win conditions, way to detect
// a draw, a way to reset the game

// how a player wins
