// Project (Team Stats)

// This project seeks to create and extract information about users favorite sports team
const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 21,
    },
    {
      firstName: "Fernando",
      lastName: "Torres",
      age: 31,
    },
    {
      firstName: "Ngolo",
      lastName: "Kante",
      age: 25,
    },
  ],
  _games: [
    {
      opponent: "Galley",
      teamPoints: 30,
      opponentPoints: 45,
    },
    {
      opponent: "PSG",
      teamPoints: 43,
      opponentPoints: 35,
    },
    {
      opponent: "Roma",
      teamPoints: 23,
      opponentPoints: 22,
    },
  ],

  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this.players.push(player);
  },

  addGame(opponent, teamsPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamsPoints: teamsPoints,
      opponentPoints: opponentPoints,
    };

    this.games.push(game);
  },
};
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
team.addGame("Bull", 54, 38);
team.addGame("Layers", 70, 88);
console.log(team.games);
