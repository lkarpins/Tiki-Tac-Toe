class Game {
  constructor() {
    this.player1 = new Player('1', '🥥', true);
    this.player2 = new Player('2', '🍍', false);
    this.winner = null;
    this.win = false;
    this.draw = false;
    this.isOver = false;
    this.playedTiles = [];
    this.turnCounter = 0;
    this.currentPlayer = this.player1;
    this.winningCombos = [
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['3', '6', '9'],
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['1', '5', '9'],
      ['3', '5', '7']
    ]
  }

  determineDraw() {
    if (this.winner === null && this.turnCounter === 9) {
      this.draw = true;
    }
  }

  changePlayerTurn() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  checkForWin() {
    for (var i = 0; i < this.winningCombos.length; i++) {
      if (this.currentPlayer.playedTiles.includes(this.winningCombos[i][0]) && this.currentPlayer.playedTiles.includes(this.winningCombos[i][1]) && this.currentPlayer.playedTiles.includes(this.winningCombos[i][2])) {
        this.winner = this.currentPlayer;
        this.win = true;
        this.isOver = true;
        this.currentPlayer.increaseWins();
        }
      }
    }

  resetGame() {
    this.playedTiles = [];
    this.player1.playedTiles = [];
    this.player2.playedTiles = [];
    this.turnCounter = 0;
    this.isOver = false;
    this.win = false;
    this.draw = false;
    this.winner = null;
    }
  }
