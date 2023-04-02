let number = 0;
let numbersVh = [];
let numbersVw = [];
let numbersPxFirst = [];
let numbersPxSecond = [];
let concatArrMain = [];
let concatArrMenu = [];
const numberGenerate = () => {
  number = Math.floor(Math.random() * 200 + 100);
};

const random = () => {
  for (let i = 0; i < number; i++) {
    const numberVh = Math.floor(Math.random() * 200 - 100);
    numbersVh.push(numberVh);
    const numberVw = Math.floor(Math.random() * 200 - 100);
    numbersVw.push(numberVw);
    const numberPxFirst = Math.floor(Math.random() * 3 + 1);
    numbersPxFirst.push(numberPxFirst);
    const numberPxSecond = Math.floor(Math.random() * 3 + 1);
    numbersPxSecond.push(numberPxSecond);
  }
};

const addUnit = () => {
  for (let i = 0; i < number; i++) {
    numbersPxFirst[i] += "px";
    numbersPxSecond[i] += "px";
    numbersVh[i] += "vh";
    numbersVw[i] += "vw";
  }
};

const concatToString = () => {
  for (let i = 0; i < number; i++) {
    const concatStringMain = `${numbersVh[i]} ${numbersVw[i]} ${numbersPxFirst[i]} ${numbersPxSecond[i]} white`;
    concatArrMain.push(concatStringMain);
  }
};

let textMain = "";
const concatToFullString = () => {
  for (let i = 0; i < number; i++) {
    textMain += concatArrMain[i] + ",";
    if (i === number - 1) {
      textMain += concatArrMain[i] + "";
    }
  }
};

const mainBg = document.querySelector("div.main");
const addBoxShadow = () => {
  mainBg.style.boxShadow = textMain;
};

const start = () => {
  numberGenerate();
  random();
  addUnit();
  concatToString();
  concatToFullString();
  addBoxShadow();
};
start();
