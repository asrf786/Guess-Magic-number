"use strict";

// Generate random number
let magicNumber = Math.floor(Math.random() * 20 + 1);
let trials = 20;
let highscore = 0;

let message = document.getElementById("msg");
let inputValue = document.querySelector(".guess-input");
let trialValue = document.querySelector("#trials");
let highscoreValue = document.querySelector("#high-score");

document.querySelector(".new-game").classList.add("disabled");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(inputValue.value);

  if (trials > 1) {
    //If no number Enter
    if (!guess) {
      message.textContent = "No Value entered";
    }
    //If number is Same number
    else if (guess === magicNumber) {
      message.textContent = "Correct Number ! You WON !";
      message.style.backgroundColor = "#60b347";

      document.getElementById("guess-number").textContent = magicNumber;
      inputValue.style.backgroundColor = "#60b347";
      trialValue.textContent = "Won";

      if (trials > highscore) {
        highscore = trials;
        highscoreValue.textContent = trials;
      }
      document.querySelector(".check").classList.add("disabled");

      document.querySelector(".new-game").classList.remove("disabled");
      //IF number id greater than random number
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
    inputValue.style.backgroundColor = "red";
    message.style.backgroundColor = "red";

    document.getElementById("guess-number").textContent = magicNumber;
    trialValue.textContent = "0";
    document.querySelector(".check").classList.add("disabled");

    document.querySelector(".new-game").classList.remove("disabled");
  }
});

//Play again button Event

document.querySelector(".new-game").addEventListener("click", function () {
  document.getElementById("guess-number").textContent = "?";
  document.querySelector(".new-game").classList.add("disabled");
  document.querySelector(".check").classList.remove("disabled");
  magicNumber = Math.floor(Math.random() * 20 + 1);
  inputValue.style.backgroundColor = "#ffff";
  message.style.backgroundColor = "";
  trials = 20;
  message.textContent = "Start Guessing for New Number ! PLZ";
  inputValue.value = "";

  trialValue.textContent = trials;
});
