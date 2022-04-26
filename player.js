class Player {
  constructor (id, token, turn) {
    this.id = id;
    this.token = token;
    // this.turn = 0;
    this.wins = 0;
    this.playedTiles = [];
  }

  increaseWins() {
    this.wins++
  }
}
