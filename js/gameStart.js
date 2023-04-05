let gameStartNumber = 5;
const addGameStartNumber = () => {
  gameStartNumber--;
  document.querySelector(".gameStart__seconds").textContent = gameStartNumber;
  if (gameStartNumber === 0) {
    document.querySelector(".gameStart").style.display = "none";
  }
};
const gameStart = () => {
  setInterval(addGameStartNumber, 1000);
};
gameStart();
