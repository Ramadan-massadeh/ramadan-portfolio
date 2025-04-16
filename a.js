const textArray = [
  "Frontend Developer",
  "Full Stack Student",
  "UI/UX Explorer",
];
const typingSpeed = 100;
const delay = 1500;
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  const typedText = document.querySelector(".typed-text");
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(eraseEffect, delay);
  }
}

function eraseEffect() {
  const typedText = document.querySelector(".typed-text");
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, typingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a draw! 🤝";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = `You win! 🎉 ${userChoice} beats ${computerChoice}`;
  } else {
    result = `You lose! 😢 ${computerChoice} beats ${userChoice}`;
  }

  document.getElementById("game-result").textContent = result;
}
