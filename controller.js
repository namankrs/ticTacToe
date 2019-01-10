const placeMove = function(event) {
  const game = createGame();
  const players = game.createPlayers();
  event.target.innerText = players[counter++ % 2].symbol;
};

const makeMove = function() {
  let element = document.getElementById("grid");
  element.onclick = placeMove;
};

window.onload = makeMove;
