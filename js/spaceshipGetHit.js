let lifes = 0;

checkHit = () => {
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
    spaceshipX + spaceshipWidth <= met1X + met1Width + spaceshipWidth &&
    spaceshipX >= met1X - spaceshipWidth &&
    spaceshipY + spaceshipHeight <= met1Y + met1Height + spaceshipHeight &&
    spaceshipY >= met1Y - spaceshipHeight
  ) {
    document.querySelector(".met1").style.top = "1000%";
    lifes++;
  } else if (
    spaceshipX + spaceshipWidth <= met2X + met2Width + spaceshipWidth &&
    spaceshipX >= met2X - spaceshipWidth &&
    spaceshipY + spaceshipHeight <= met2Y + met2Height + spaceshipHeight &&
    spaceshipY >= met2Y - spaceshipHeight
  ) {
    document.querySelector(".met2").style.top = "1000%";
    lifes++;
  } else if (
    spaceshipX + spaceshipWidth <= met3X + met3Width + spaceshipWidth &&
    spaceshipX >= met3X - spaceshipWidth &&
    spaceshipY + spaceshipHeight <= met3Y + met3Height + spaceshipHeight &&
    spaceshipY >= met3Y - spaceshipHeight
  ) {
    document.querySelector(".met3").style.top = "1000%";
    lifes++;
  } else if (
    spaceshipX + spaceshipWidth <= met4X + met4Width + spaceshipWidth &&
    spaceshipX >= met4X - spaceshipWidth &&
    spaceshipY + spaceshipHeight <= met4Y + met4Height + spaceshipHeight &&
    spaceshipY >= met4Y - spaceshipHeight
  ) {
    document.querySelector(".met4").style.top = "1000%";
    lifes++;
  } else if (
    spaceshipX + spaceshipWidth / 2 <= met5X + met5Width + spaceshipWidth &&
    spaceshipX >= met5X - spaceshipWidth &&
    spaceshipY + spaceshipHeight <= met5Y + met5Height + spaceshipHeight &&
    spaceshipY >= met5Y - spaceshipHeight
  ) {
    document.querySelector(".met5").style.top = "1000%";
    lifes++;
  }
  if (lifes === 1) {
    document.querySelector(".lifes__1").style.color = "grey";
  }
  if (lifes === 2) {
    document.querySelector(".lifes__2").style.color = "grey";
  }
  if (lifes === 3) {
    document.querySelector(".lifes__3").style.color = "grey";
    console.log("lose");
  }
};

setInterval(checkHit, 1);
