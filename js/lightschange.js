let lights = [...document.querySelectorAll(".spaceship__light")];
let color = "";
let spaceshipY = document.querySelector(".spaceship__y");

const randomColor = () => {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    color = "red";
  } else if (number === 1) {
    color = "yellow";
  } else {
    color = "blue";
  }
  lights.forEach((light) => (light.style.backgroundColor = color));
  spaceshipY.style.border = `3px solid ${color}`;
};

setInterval(randomColor, 2000);
