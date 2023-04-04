let metNumber = 1;
class Met {
  constructor() {}
  createMet() {
    let metWidthHeight = Math.floor(Math.random() * 100 + 50);
    let metLeft = Math.floor(Math.random() * 80 + 10);
    let metDuration = Math.floor(Math.random() * 3 + 1);

    const met = document.createElement("div");
    met.classList.add(`met${metNumber}`);
    metNumber++;
    if (metNumber === 4) {
      metNumber = 1;
    }
    met.style.width = metWidthHeight + "px";
    met.style.height = metWidthHeight + "px";
    met.style.left = metLeft + "%";
    met.style.animationDuration = metDuration + "s";
    document.body.appendChild(met);
    setTimeout(() => {
      document.body.removeChild(met);
    }, 3000);
  }
}

let met = new Met();
const metInit = () => {
  met.createMet();
};

setInterval(metInit, 1000);
