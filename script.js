const themeToggle = document.querySelector(".theme-toggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("bx-moon");
        icon.classList.add("bx-sun");
    } else {
        icon.classList.remove("bx-sun");
        icon.classList.add("bx-moon");
    }
});