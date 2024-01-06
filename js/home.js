/*===== Resize Navbar on Scroll =====*/
var navbar = document.querySelector(".navbar");
//when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Function to toggle the bar
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// back top btn

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
