const mobileMenuBtn = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenuBtn.addEventListener('click', () => {
    if (navList.classList.contains("mobile-menu-active")) {
        navList.classList.remove("mobile-menu-active");
    } else {
        navList.classList.add("mobile-menu-active");
    }
});
