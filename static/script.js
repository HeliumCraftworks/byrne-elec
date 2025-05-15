const navbar = document.getElementById("navbarNav");
const navLinks = document.querySelectorAll(".nav-link");
const navbarToggler = document.querySelector(".navbar-toggler");
const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        if (navbarToggler.getAttribute("aria-expanded") === "true") {
            bsCollapse.hide();
        }
    });
});