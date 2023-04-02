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

  if (
    keys.includes("w") &&
    keys.length === 1 &&
    spaceship.getBoundingClientRect().y >= 0
  ) {
    shipY = spaceship.getBoundingClientRect().y;
    newPos = shipY - moveNumber;
    spaceship.style.top = newPos + "px";
  } else if (
    keys.includes("s") &&
    keys.length === 1 &&
    spaceship.getBoundingClientRect().y <= window.innerHeight - 60
  ) {
    shipY = spaceship.getBoundingClientRect().y;
    newPos = shipY + moveNumber;
    spaceship.style.top = newPos + "px";
  } else if (
    keys.includes("a") &&
    keys.length === 1 &&
    spaceship.getBoundingClientRect().x >= 10
  ) {
    shipX = spaceship.getBoundingClientRect().x;
    newPos = shipX - moveNumber;
    spaceship.style.left = newPos + "px";
  } else if (
    keys.includes("d") &&
    keys.length === 1 &&
    spaceship.getBoundingClientRect().x <= window.innerWidth - 80
  ) {
    shipX = spaceship.getBoundingClientRect().x;
    newPos = shipX + moveNumber;
    spaceship.style.left = newPos + "px";
  }
  if (
    keys.includes("w") &&
    keys.includes("a") &&
    spaceship.getBoundingClientRect().y >= 0 &&
    spaceship.getBoundingClientRect().x >= 10
  ) {
    shipY = spaceship.getBoundingClientRect().y;
    newPosY = shipY - moveNumber;
    spaceship.style.top = newPosY + "px";
    shipX = spaceship.getBoundingClientRect().x;
    newPosX = shipX - moveNumber;
    spaceship.style.left = newPosX + "px";
  } else if (
    keys.includes("w") &&
    keys.includes("d") &&
    spaceship.getBoundingClientRect().y >= 0 &&
    spaceship.getBoundingClientRect().x <= window.innerWidth - 80
  ) {
    shipY = spaceship.getBoundingClientRect().y;
    newPosY = shipY - moveNumber;
    spaceship.style.top = newPosY + "px";
    shipX = spaceship.getBoundingClientRect().x;
    newPosX = shipX + moveNumber;
    spaceship.style.left = newPosX + "px";
  } else if (
    keys.includes("s") &&
    keys.includes("d") &&
    spaceship.getBoundingClientRect().y <= window.innerHeight - 60 &&
    spaceship.getBoundingClientRect().x <= window.innerWidth - 80
  ) {
    shipY = spaceship.getBoundingClientRect().y;
    newPosY = shipY + moveNumber;
    spaceship.style.top = newPosY + "px";
    shipX = spaceship.getBoundingClientRect().x;
    newPosX = shipX + moveNumber;
    spaceship.style.left = newPosX + "px";
  } else if (
    keys.includes("s") &&
    keys.includes("a") &&
    spaceship.getBoundingClientRect().y <= window.innerHeight - 60 &&
    spaceship.getBoundingClientRect().x >= 10
  ) {
    shipY = spaceship.getBoundingClientRect().y;
    newPosY = shipY + moveNumber;
    spaceship.style.top = newPosY + "px";
    shipX = spaceship.getBoundingClientRect().x;
    newPosX = shipX - moveNumber;
    spaceship.style.left = newPosX + "px";
  }

  //   switch (e.keyCode) {
  //     case 87:
  //       shipY = spaceship.getBoundingClientRect().y;
  //       newPos = shipY - moveNumber;
  //       spaceship.style.top = newPos + "px";
  //       return;
  //     case 83:
  //       shipY = spaceship.getBoundingClientRect().y;
  //       newPos = shipY + moveNumber;
  //       spaceship.style.top = newPos + "px";
  //       return;

  //     case 65:
  //       shipX = spaceship.getBoundingClientRect().x;
  //       newPos = shipX - moveNumber;
  //       spaceship.style.left = newPos + "px";
  //       return;

  //     case 68:
  //       shipX = spaceship.getBoundingClientRect().x;
  //       newPos = shipX + moveNumber;
  //       spaceship.style.left = newPos + "px";
  //       return;
  //     default:
  //   }
};

document.addEventListener("keydown", move);
document.addEventListener("keyup", (e) => {
  let index = keys.indexOf(e.key);
  keys.splice(index, 1);
});
