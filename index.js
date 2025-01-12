const words = ["APPLE", "GRAPE", "MANGO", "PEACH", "GUAVA"];
const index = [0, 2, 4];
const boxes = document.querySelectorAll(".box");
const btn = document.getElementById("btn");


let wordIndex = Math.floor(Math.random() * 5);
let word = words[wordIndex];
let charArray = word.split("");
let missingArray =charArray.slice();

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

btn.addEventListener('click',()=>{
    let ans=document.getElementById("letter").value;
    console.log(ans);
})