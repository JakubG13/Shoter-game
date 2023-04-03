let moveKeys = [];
let moveNumber = 10;

const move = (e) => {
  // console.log(moveKeys);
  if (!moveKeys.includes(e.key)) {
    moveKeys.push(e.key);
  }
  if (moveKeys.includes("a") && spaceship.getBoundingClientRect().x >= 30) {
    shipX = spaceship.getBoundingClientRect().x;
    newPos = shipX - moveNumber;
    spaceship.style.left = newPos + "px";
  }
  if (
    moveKeys.includes("d") &&
    spaceship.getBoundingClientRect().x <= window.innerWidth - 100
  ) {
    shipX = spaceship.getBoundingClientRect().x;
    newPos = shipX + moveNumber;
    spaceship.style.left = newPos + "px";
  }
};
let flag = true;
const shot = () => {
  if (flag === true) {
    document.querySelector(".bullet-ui").classList.add("bullet-ui-animation");

    let bullet = new Bullet(bulletX, bulletY);
    bullet.createBullet();
    flag = false;
    setTimeout(() => {
      document
        .querySelector(".bullet-ui")
        .classList.remove("bullet-ui-animation");
      flag = true;
    }, 1000);
  }
};

document.addEventListener("click", shot);
document.addEventListener("keydown", move);
document.addEventListener("keyup", (e) => {
  let index = moveKeys.indexOf(e.key);
  moveKeys.splice(index, 1);
});

// let bullet = new Bullet(bulletX, bulletY);
//       bullet.createBullet();
