const hamburger_manu = document.querySelector(".hamburger-manu");
const container = document.querySelector(".container");

hamburger_manu.addEventListener("click", () => {
    container.classList.toggle("active");
});