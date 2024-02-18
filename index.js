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
let guess;
let messageDisplay = document.getElementById("msg");
let trialValue = document.querySelector("#trials");
let highscoreValue = document.querySelector("#high-score");
let numberDisplay = document.getElementById("guess-number");
const againBtn = document.querySelector(".new-game");
const numberClicked = document.querySelectorAll(".numberShown");

// When Clicked on number
for (let i = 0; i < numberClicked.length; i++) {
  numberClicked[i].addEventListener("click", function () {
    if (!numberClicked[i].classList.contains("disabled")) {
      numberClicked[i].classList.add("disabled");
      guess = Number(this.innerHTML);

      if (trials > 2) {
        if (guess === magicNumber) {
          messageDisplay.textContent = "Correct Number ! You WON !";
          numberClicked[i].style.backgroundColor = "#60b347";
          messageDisplay.style.backgroundColor = "#60b347";
          numberDisplay.textContent = magicNumber;
          trialValue.textContent = "";
          document.querySelector(".trial-info").textContent = "Won";

          if (trials > highscore) {
            highscore = trials;
            highscoreValue.textContent = trials;
          }
          for (let i = 0; i < numberClicked.length; i++) {
            numberClicked[i].classList.add("disabled");
            numberClicked[i].classList.add("hidden");
          }
          numberClicked[i].classList.remove("hidden");

          numberClicked[i].classList.add("winner");
          againBtn.classList.remove("hidden");

          setTimeout(() => {
            againBtn.style.backgroundColor = "green";
          }, 500);

          //IF number id greater than random number
        } else if (guess !== magicNumber) {
          messageDisplay.textContent = "";
          numberDisplay.textContent =
            guess > magicNumber
              ? `${guess} > Magic Number`
              : `${guess} < Magic Number`;

          trials--;
          trialValue.textContent = trials;
          guess > magicNumber
            ? (numberClicked[i].style.backgroundColor = "red")
            : (numberClicked[i].style.backgroundColor = "orange");
        }
      } else {
        console.log(trials);
        for (let i = 0; i < numberClicked.length; i++) {
          numberClicked[i].classList.add("disabled");
          numberClicked[i].classList.add("hidden");
        }
        numberClicked[magicNumber - 1].classList.remove("hidden");

        numberClicked[magicNumber - 1].classList.add("looser");
        againBtn.classList.remove("hidden");

        setTimeout(() => {
          againBtn.style.backgroundColor = "green";
        }, 500);

        messageDisplay.textContent = "You LOST the Game";
        messageDisplay.style.backgroundColor = "red";
        numberDisplay.textContent = magicNumber;
        trialValue.textContent = "0";
        againBtn.classList.remove("hidden");
      }
    }
  });
}

//Play again button Event

againBtn.addEventListener("click", function () {
  numberDisplay.textContent = "?";
  againBtn.classList.add("hidden");
  // magicNumber = Math.floor(Math.random() * 20 + 1);
  randomNumberFun();
  messageDisplay.style.backgroundColor = "";
  messageDisplay.textContent = "Guessing for New Number !";
  trials = 20;
  trialValue.textContent = trials;
  document.querySelector(".trial-info").textContent = "Trial Left :";
  for (let i = 0; i < numberClicked.length; i++) {
    numberClicked[i].style.backgroundColor = "white";
    numberClicked[i].classList.remove("disabled");
    numberClicked[i].classList.remove("hidden");
    if (numberClicked[i].classList.contains("winner")) {
      numberClicked[i].classList.remove("winner");
    } else if (numberClicked[i].classList.contains("looser")) {
      numberClicked[i].classList.remove("looser");
    }
  }

  // againBtn.style.backgroundColor = "";
});
