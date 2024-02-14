"use strict";

function updateScore(team, value) {
  var scoreElement = document.getElementById(team + "-score");
  var currentScore = parseInt(scoreElement.textContent);
  var newScore = currentScore + value;
  scoreElement.textContent = newScore;
}

document.getElementById("add-one").addEventListener("click", function () {
  updateScore("home", 1);
});

document.getElementById("add-two").addEventListener("click", function () {
  updateScore("home", 2);
});

document.getElementById("add-three").addEventListener("click", function () {
  updateScore("home", 3);
});

document.getElementById("add-1").addEventListener("click", function () {
  updateScore("guest", 1);
});

document.getElementById("add-2").addEventListener("click", function () {
  updateScore("guest", 2);
});

document.getElementById("add-3").addEventListener("click", function () {
  updateScore("guest", 3);
});

const finall = document.getElementById("resualt");
finall.addEventListener("click", function () {
  var homeScore = parseInt(document.getElementById("home-score").textContent);
  var guestScore = parseInt(document.getElementById("guest-score").textContent);

  if (homeScore > guestScore) {
    alert("HOME is the winner!");
  } else if (homeScore < guestScore) {
    alert("GUEST is the winner!");
  } else {
    alert("It's a tie!");
  }

  document.getElementById("home-score").textContent = "0";
  document.getElementById("guest-score").textContent = "0";
});
