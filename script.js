const button = document.querySelector("#greetButton");
const welcomeText = document.querySelector("#welcomeText");

button.addEventListener("click", function () {
    welcomeText.textContent = "You are learning JavaScript!";
});

const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});