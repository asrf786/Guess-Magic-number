"use strict";

// Generate random number
const magicNumber = Math.floor(Math.random() * 20 + 1);

document.getElementById("guess-number").textContent = magicNumber;
let message = document.getElementById("msg");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-input").value);
  if (!guess) {
    message.textContent = "No Value entered";
  } else if (guess === magicNumber) {
    message.textContent = "Correct Number";
  } else if (guess > magicNumber) {
    message.textContent = "Your Number is Too high !";
  } else {
    message.textContent = "Your Number is Too Low !";
  }
});
