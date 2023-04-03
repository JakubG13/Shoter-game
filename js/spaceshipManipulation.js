const spaceship = document.querySelector(".spaceship");
let keys = [];
let moveNumber = 30;
// let Y = spaceship.getBoundingClientRect().y;
// console.log(Y);

const move = (e) => {
  console.log(keys);

  if (!keys.includes(e.key)) {
    keys.push(e.key);
  }

  if (keys.includes("a") && spaceship.getBoundingClientRect().x >= 30) {
    shipX = spaceship.getBoundingClientRect().x;
    newPos = shipX - moveNumber;
    spaceship.style.left = newPos + "px";
  } else if (
    keys.includes("d") &&
    spaceship.getBoundingClientRect().x <= window.innerWidth - 100
  ) {
    shipX = spaceship.getBoundingClientRect().x;
    newPos = shipX + moveNumber;
    spaceship.style.left = newPos + "px";
  }
};

document.addEventListener("keydown", move);
document.addEventListener("keyup", () => {
  keys = [];
});
