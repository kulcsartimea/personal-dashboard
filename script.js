const button = document.querySelector("#greetButton");
const welcomeText = document.querySelector("#welcomeText");

button.addEventListener("click", function () {
    welcomeText.textContent = "You are learning JavaScript!";
});

const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Switch to dark";
    } else {
        themeButton.textContent = "☀️Switch to light";
    }

});