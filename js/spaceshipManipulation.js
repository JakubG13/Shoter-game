let keys = [];
let moveNumber = 1;

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
  if (keys.includes("w")) {
    let bullet = new Bullet(bulletX, bulletY);
    bullet.createBullet();
  }
};

document.addEventListener("keydown", move);
document.addEventListener("keyup", (e) => {
  let index = keys.indexOf(e.key);
  keys.splice(index, 1);
});
