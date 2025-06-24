const menuIcon = document.querySelector(".menu-icon")
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
}
