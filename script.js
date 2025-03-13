const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll("details");

    details.forEach((detail) => {
        detail.addEventListener("toggle", function () {
            if (this.open) {
                details.forEach((other) => {
                    if (other !== this) {
                        other.removeAttribute("open");
                    }
                });
            }
        });
    });
});
