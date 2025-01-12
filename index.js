const words = ["APPLE", "GRAPE", "MANGO", "PEACH", "GUAVA"];
const missingIndex = [0, 2, 4];
const boxes = document.querySelectorAll(".box");
const okBtn = document.getElementById("okBtn");
let wrong = document.getElementById("wrongGuess");
let lifeline = document.getElementById("lifeline");
const gameOver = document.getElementById("gameOver");
const win = document.getElementById("win");
const closeBtn = document.getElementById("closeBtn");
const winCloseBtn = document.getElementById("closeBtn2");

let wordIndex = Math.floor(Math.random() * 5);
let word = words[wordIndex];
let charArray = word.split("");
let missingArray = charArray.slice();

for (let i = 0; i < charArray.length; i++) {
  if (i == 0 || i == 2 || i == 4) {
    missingArray[i] = "";
  }
}
boxes.forEach((box, i) => {
  box.classList.add(
    "text-pink-600",
    "font-bold",
    "flex",
    "items-center",
    "justify-center"
  );
  box.textContent = missingArray[i];
});

let i = 0;
okBtn.addEventListener("click", () => {
  let ans = document.getElementById("letter").value.toUpperCase();
  let lives = lifeline.textContent;
  if (lives > 0) {
    if (ans == charArray[missingIndex[i]] && i < missingIndex.length) {
      boxes[missingIndex[i]].textContent = ans;
      i += 1;
      console.log(i);
      if (i === missingIndex.length) {
        console.log("win");
        win.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
        document.getElementById("background").classList.add("blur");
        okBtn.disabled = true;
      }
    } else {
      lifeline.textContent = Number(lifeline.textContent) - 1;
      wrong.textContent = wrong.textContent + " " + ans;
    }
  }
  if (lives <= 1) {
    gameOver.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    document.getElementById("background").classList.add("blur");
    okBtn.disabled = true;
  }
  document.getElementById("letter").value = "";
});

closeBtn.addEventListener("click", () => {
  gameOver.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  document.getElementById("background").classList.remove("blur");
  okBtn.disabled = false;
  location.reload();
});

winCloseBtn.addEventListener("click", () => {
  win.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  document.getElementById("background").classList.remove("blur");
  okBtn.disabled = false;
  location.reload();
});
