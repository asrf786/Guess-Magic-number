"use strict";

// Generate random number
let magicNumber = 0;
const randomNumberFun = function () {
  magicNumber = Math.floor(Math.random() * 20 + 1);
};

randomNumberFun();

// let magicNumber = Math.floor(Math.random() * 20 + 1);
let trials = 20;
let highscore = 0;

let messageDisplay = document.getElementById("msg");
let inputValue = document.querySelector(".guess-input");
let trialValue = document.querySelector("#trials");
let highscoreValue = document.querySelector("#high-score");
let numberDisplay = document.getElementById("guess-number");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".new-game");

againBtn.classList.add("disabled");

checkBtn.addEventListener("click", function () {
  const guess = Number(inputValue.value);

  if (trials > 1) {
    //If no number Enter
    if (!guess) {
      messageDisplay.textContent = "No Value entered";
    }
    //If number is Same number
    else if (guess === magicNumber) {
      messageDisplay.textContent = "Correct Number ! You WON !";
      messageDisplay.style.backgroundColor = "#60b347";
      numberDisplay.textContent = magicNumber;
      inputValue.style.backgroundColor = "#60b347";
      trialValue.textContent = "Won";

      if (trials > highscore) {
        highscore = trials;
        highscoreValue.textContent = trials;
      }
      checkBtn.classList.add("disabled");
      againBtn.classList.remove("disabled");

      //IF number id greater than random number
    } else if (guess !== magicNumber) {
      messageDisplay.textContent =
        guess > magicNumber
          ? "Your Number is Too high !"
          : "Your Number is Too Low !";
      trials--;
      trialValue.textContent = trials;
    }
  } else {
    messageDisplay.textContent = "You LOST the Game";
    inputValue.style.backgroundColor = "red";
    messageDisplay.style.backgroundColor = "red";

    numberDisplay.textContent = magicNumber;
    trialValue.textContent = "0";
    checkBtn.classList.add("disabled");
    againBtn.classList.remove("disabled");
  }
});

//Play again button Event

againBtn.addEventListener("click", function () {
  numberDisplay.textContent = "?";
  againBtn.classList.add("disabled");
  checkBtn.classList.remove("disabled");
  // magicNumber = Math.floor(Math.random() * 20 + 1);
  randomNumberFun();
  inputValue.style.backgroundColor = "#ffff";
  messageDisplay.style.backgroundColor = "";
  messageDisplay.textContent = "Guessing for New Number !";
  inputValue.value = "";
  trials = 20;
  trialValue.textContent = trials;
});
