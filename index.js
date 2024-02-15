"use strict";

// Generate random number
const magicNumber = Math.floor(Math.random() * 20 + 1);
let trials = 20;
let highscore = 0;

document.getElementById("guess-number").textContent = magicNumber;
let message = document.getElementById("msg");
const inputValue = document.querySelector(".guess-input");
let trialValue = document.querySelector("#trials");
let highscoreValue = document.querySelector("#high-score");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(inputValue.value);
  if (trials > 1) {
    if (!guess) {
      message.textContent = "No Value entered";
    } else if (guess === magicNumber) {
      message.textContent = "Correct Number ! You WON !";
      trialValue.textContent = trials;
      if (trials > highscore) {
        highscore = trials;
        highscoreValue.textContent = trials;
      }
    } else if (guess > magicNumber) {
      message.textContent = "Your Number is Too high !";
      trials--;
      trialValue.textContent = trials;
    } else {
      message.textContent = "Your Number is Too Low !";
      trials--;
      trialValue.textContent = trials;
    }
  } else {
    message.textContent = "You LOST the Game";
    trialValue.textContent = "0";
  }
});
