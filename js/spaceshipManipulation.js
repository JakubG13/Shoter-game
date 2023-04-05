let moveKeys = [];
let moveNumber = 20;
let points = 0;
const pointsHere = document.querySelector(".points");
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
let bullY = "";
let bullX = "";
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

  myCallBack = () => {
    bullY = document.querySelector(".bullet").getBoundingClientRect().y;
    bullX = document.querySelector(".bullet").getBoundingClientRect().x;
    met1X = document.querySelector(".met1").getBoundingClientRect().x;
    met1Y = document.querySelector(".met1").getBoundingClientRect().y;
    met2X = document.querySelector(".met2").getBoundingClientRect().x;
    met2Y = document.querySelector(".met2").getBoundingClientRect().y;
    met3X = document.querySelector(".met3").getBoundingClientRect().x;
    met3Y = document.querySelector(".met3").getBoundingClientRect().y;
    met4X = document.querySelector(".met4").getBoundingClientRect().x;
    met4Y = document.querySelector(".met4").getBoundingClientRect().y;
    met5X = document.querySelector(".met5").getBoundingClientRect().x;
    met5Y = document.querySelector(".met5").getBoundingClientRect().y;

    met1Width = document.querySelector(".met1").getBoundingClientRect().width;
    met2Width = document.querySelector(".met2").getBoundingClientRect().width;
    met3Width = document.querySelector(".met3").getBoundingClientRect().width;
    met4Width = document.querySelector(".met4").getBoundingClientRect().width;
    met5Width = document.querySelector(".met5").getBoundingClientRect().width;

    met1Height = document.querySelector(".met1").getBoundingClientRect().height;
    met2Height = document.querySelector(".met2").getBoundingClientRect().height;
    met3Height = document.querySelector(".met3").getBoundingClientRect().height;
    met4Height = document.querySelector(".met4").getBoundingClientRect().height;
    met5Height = document.querySelector(".met5").getBoundingClientRect().height;

    spaceshipX = spaceship.getBoundingClientRect().x;
    spaceshipY = spaceship.getBoundingClientRect().y;
    spaceshipWidth = spaceship.getBoundingClientRect().width;
    spaceshipHeight = spaceship.getBoundingClientRect().height;

    if (
      spaceshipX + spaceshipWidth <= met1X + met1Width &&
      spaceshipX >= met1X &&
      spaceshipY + spaceshipHeight <= met1Y + met1Height &&
      spaceshipY >= met1Y
    ) {
      console.log("dziala");
    } else if (
      spaceshipX + spaceshipWidth <= met2X + met2Width &&
      spaceshipX >= met2X &&
      spaceshipY + spaceshipHeight <= met2Y + met2Height &&
      spaceshipY >= met2Y
    ) {
      console.log("dziala");
    } else if (
      spaceshipX + spaceshipWidth <= met3X + met3Width &&
      spaceshipX >= met3X &&
      spaceshipY + spaceshipHeight <= met3Y + met3Height &&
      spaceshipY >= met3Y
    ) {
      console.log("dziala");
    } else if (
      spaceshipX + spaceshipWidth <= met4X + met4Width &&
      spaceshipX >= met4X &&
      spaceshipY + spaceshipHeight <= met4Y + met4Height &&
      spaceshipY >= met4Y
    ) {
      console.log("dziala");
    } else if (
      spaceshipX + spaceshipWidth <= met5X + met5Width &&
      spaceshipX >= met5X &&
      spaceshipY + spaceshipHeight <= met5Y + met5Height &&
      spaceshipY >= met5Y
    ) {
      console.log("dziala");
    }

    if (
      bullX <= met1X + met1Width &&
      bullX >= met1X &&
      bullY <= met1Y + met1Height &&
      bullY >= met1Y
    ) {
      document.querySelector(".met1").style.top = "1000%";
      document.body.removeChild(document.querySelector(".bullet"));
      points++;
      pointsHere.textContent = points;
    } else if (
      bullX <= met2X + met2Width &&
      bullX >= met2X &&
      bullY <= met2Y + met2Height &&
      bullY >= met2Y
    ) {
      document.querySelector(".met2").style.top = "1000%";

      document.body.removeChild(document.querySelector(".bullet"));
      points++;
      pointsHere.textContent = points;
    } else if (
      bullX <= met3X + met3Width &&
      bullX >= met3X &&
      bullY <= met3Y + met3Height &&
      bullY >= met3Y
    ) {
      document.querySelector(".met3").style.top = "1000%";

      document.body.removeChild(document.querySelector(".bullet"));
      points++;
      pointsHere.textContent = points;
    } else if (
      bullX <= met4X + met4Width &&
      bullX >= met4X &&
      bullY <= met4Y + met4Height &&
      bullY >= met4Y
    ) {
      document.querySelector(".met4").style.top = "1000%";

      document.body.removeChild(document.querySelector(".bullet"));
      points++;
      pointsHere.textContent = points;
    } else if (
      bullX <= met5X + met5Width &&
      bullX >= met5X &&
      bullY <= met5Y + met5Height &&
      bullY >= met5Y
    ) {
      document.querySelector(".met5").style.top = "1000%";
      document.body.removeChild(document.querySelector(".bullet"));

      points++;
      pointsHere.textContent = points;
    }
  };

  const intervalID = setInterval(myCallBack, 1);
  const end = () => {
    clearInterval(intervalID);
  };
  setTimeout(end, 1000);
};

document.querySelector(".shotHere").addEventListener("click", shot);
document.addEventListener("keydown", move);
document.addEventListener("keyup", (e) => {
  let index = moveKeys.indexOf(e.key);
  moveKeys.splice(index, 1);
});

// mobile
const leftArrow = document.querySelector(".mobile-ui__left");
const rightArrow = document.querySelector(".mobile-ui__right");
leftArrow.addEventListener("touchstart", () => {
  if (spaceship.getBoundingClientRect().x >= 30) {
    shipX = spaceship.getBoundingClientRect().x;
    newPos = shipX - moveNumber;
    spaceship.style.left = newPos + "px";
  }
});
rightArrow.addEventListener("touchstart", () => {
  if (spaceship.getBoundingClientRect().x <= window.innerWidth - 100) {
    shipX = spaceship.getBoundingClientRect().x;
    newPos = shipX + moveNumber;
    spaceship.style.left = newPos + "px";
  }
});
