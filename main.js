// Icon menu yang akan menampilkan dan menutup navigasi
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

// Icon back untuk kembali ke beranda section
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });
});