const spaceship = document.querySelector(".spaceship");
let bulletX = "";
let bulletY = "";

class Bullet {
  constructor(bulletX, bulletY) {
    bulletX = spaceship.getBoundingClientRect().x;
    bulletY = spaceship.getBoundingClientRect().y;
    this.bulletX = bulletX + 33;
    this.bulletY = bulletY - 25;
  }

  createBullet() {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.left = this.bulletX + "px";
    bullet.style.top = this.bulletY + "px";
    document.body.appendChild(bullet);
    let bullY = bullet.getBoundingClientRect().y;
    // if (bullY <= 0) {
    //   document.body.removeChild(bullet);
    // }

    setTimeout(() => {
      if (document.body.contains(bullet)) {
        document.body.removeChild(bullet);
      }
    }, 1000);
  }
}
