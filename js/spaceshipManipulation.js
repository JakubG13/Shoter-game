const spaceship = document.querySelector(".spaceship");
let keys = [];
let moveNumber = 10;
const move = (e) => {
  console.log(keys);

  if (!keys.includes(e.key)) {
    keys.push(e.key);
  }

  if (keys.includes("w") && keys.length === 1) {
    shipY = spaceship.getBoundingClientRect().y;
    newPose = shipY - moveNumber;
    spaceship.style.top = newPose + "px";
  } else if (keys.includes("s") && keys.length === 1) {
    shipY = spaceship.getBoundingClientRect().y;
    newPose = shipY + moveNumber;
    spaceship.style.top = newPose + "px";
  } else if (keys.includes("a") && keys.length === 1) {
    shipX = spaceship.getBoundingClientRect().x;
    newPose = shipX - moveNumber;
    spaceship.style.left = newPose + "px";
  } else if (keys.includes("d") && keys.length === 1) {
    shipX = spaceship.getBoundingClientRect().x;
    newPose = shipX + moveNumber;
    spaceship.style.left = newPose + "px";
  }
  if (keys.includes("w") && keys.includes("a")) {
    shipY = spaceship.getBoundingClientRect().y;
    newPoseY = shipY - moveNumber;
    spaceship.style.top = newPoseY + "px";
    shipX = spaceship.getBoundingClientRect().x;
    newPoseX = shipX - moveNumber;
    spaceship.style.left = newPoseX + "px";
  } else if (keys.includes("w") && keys.includes("d")) {
    shipY = spaceship.getBoundingClientRect().y;
    newPoseY = shipY - moveNumber;
    spaceship.style.top = newPoseY + "px";
    shipX = spaceship.getBoundingClientRect().x;
    newPoseX = shipX + moveNumber;
    spaceship.style.left = newPoseX + "px";
  } else if (keys.includes("s") && keys.includes("d")) {
    shipY = spaceship.getBoundingClientRect().y;
    newPoseY = shipY + moveNumber;
    spaceship.style.top = newPoseY + "px";
    shipX = spaceship.getBoundingClientRect().x;
    newPoseX = shipX + moveNumber;
    spaceship.style.left = newPoseX + "px";
  } else if (keys.includes("s") && keys.includes("a")) {
    shipY = spaceship.getBoundingClientRect().y;
    newPoseY = shipY + moveNumber;
    spaceship.style.top = newPoseY + "px";
    shipX = spaceship.getBoundingClientRect().x;
    newPoseX = shipX - moveNumber;
    spaceship.style.left = newPoseX + "px";
  }

  //   switch (e.keyCode) {
  //     case 87:
  //       shipY = spaceship.getBoundingClientRect().y;
  //       newPose = shipY - moveNumber;
  //       spaceship.style.top = newPose + "px";
  //       return;
  //     case 83:
  //       shipY = spaceship.getBoundingClientRect().y;
  //       newPose = shipY + moveNumber;
  //       spaceship.style.top = newPose + "px";
  //       return;

  //     case 65:
  //       shipX = spaceship.getBoundingClientRect().x;
  //       newPose = shipX - moveNumber;
  //       spaceship.style.left = newPose + "px";
  //       return;

  //     case 68:
  //       shipX = spaceship.getBoundingClientRect().x;
  //       newPose = shipX + moveNumber;
  //       spaceship.style.left = newPose + "px";
  //       return;
  //     default:
  //   }
};

document.addEventListener("keydown", move);
document.addEventListener("keyup", (e) => {
  let index = keys.indexOf(e.key);
  keys.splice(index, 1);
});
