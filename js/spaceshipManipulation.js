const spaceship = document.querySelector(".spaceship");

const move = (e) => {
  let moveNumber = 10;
  switch (e.keyCode) {
    case 119:
      shipY = spaceship.getBoundingClientRect().y;
      newPose = shipY - moveNumber;
      spaceship.style.top = newPose + "px";
      return;

    case 115:
      shipY = spaceship.getBoundingClientRect().y;
      newPose = shipY + moveNumber;
      spaceship.style.top = newPose + "px";
      return (spaceship.style.top = shipY - "1px");

    case 97:
      shipX = spaceship.getBoundingClientRect().x;
      newPose = shipX - moveNumber;
      spaceship.style.left = newPose + "px";
      return;

    case 100:
      shipX = spaceship.getBoundingClientRect().x;
      newPose = shipX + moveNumber;
      spaceship.style.left = newPose + "px";
      return;

    default:
  }
};

document.addEventListener("keypress", move);
