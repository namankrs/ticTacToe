let counter = 0;
const isSubset = (subSet, superSet) => {
  return subSet.every(e => superSet.includes(e));
};

const getWinningCombinations = () => {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  return winningCombinations;
};

const createPlayer = (name, symbol) => {
  return { name, symbol, moves: [] };
};

const createPlayers = () => {
  let player1 = createPlayer("player1", "X");
  let player2 = createPlayer("player2", "O");
  return [player1, player2];
};

const createGame = function() {
  const game = {};
  game.createPlayers = createPlayers;
  return game;
};
