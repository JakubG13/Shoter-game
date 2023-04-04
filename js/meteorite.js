let metNumber = 1;
class Met {
  constructor() {}
  createMet() {
    let metWidthHeight = Math.floor(Math.random() * 75 + 75);
    let metLeft = Math.floor(Math.random() * 80 + 10);
    let metDuration = Math.floor(Math.random() * 2 + 4);

    const met = document.createElement("div");
    met.classList.add(`met${metNumber}`);
    metNumber++;
    if (metNumber === 6) {
      metNumber = 1;
    }
    met.style.width = metWidthHeight + "px";
    met.style.height = metWidthHeight + "px";
    met.style.left = metLeft + "%";
    met.style.animationDuration = metDuration + "s";
    document.body.appendChild(met);
    setTimeout(() => {
      document.body.removeChild(met);
    }, 5000);
  }
}

let met = new Met();
const metInit = () => {
  met.createMet();
};

setInterval(metInit, 1000);
const createFakeMet = () => {
  for (let i = 1; i < 6; i++) {
    let met = document.createElement("div");
    met.classList.add("fake-met");
    met.classList.add(`met${i}`);
    document.body.appendChild(met);
  }
};
createFakeMet();
const removeFakeMet = () => {
  [...document.querySelectorAll(".fake-met")].forEach((met) =>
    document.body.removeChild(met)
  );
};

setTimeout(removeFakeMet, 5000);
