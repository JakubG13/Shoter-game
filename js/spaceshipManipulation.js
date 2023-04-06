let moveKeys = [];
let moveNumber = 25;
let moveNumberMobile = 1;
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
  function handleStart() {
    if (spaceship.getBoundingClientRect().x >= 30) {
      shipX = spaceship.getBoundingClientRect().x;
      newPos = shipX - moveNumberMobile;
      spaceship.style.left = newPos + "px";
    }
  }
  const intervalID = setInterval(handleStart, 1);
  leftArrow.addEventListener("touchend", () => {
    const end = () => {
      clearInterval(intervalID);
    };
    end();
  });
});
rightArrow.addEventListener("touchstart", () => {
  function handleStart() {
    if (spaceship.getBoundingClientRect().x <= window.innerWidth - 100) {
      shipX = spaceship.getBoundingClientRect().x;
      newPos = shipX + moveNumberMobile;
      spaceship.style.left = newPos + "px";
    }
  }
  const intervalID = setInterval(handleStart, 1);
  rightArrow.addEventListener("touchend", () => {
    const end = () => {
      clearInterval(intervalID);
    };
    end();
  });
});
