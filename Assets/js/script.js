// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const nav = document.getElementById('nav-links');

    hamburgerIcon.addEventListener('click', () => {
        nav.classList.toggle('active');

        // Toggle hamburger animation
        hamburgerIcon.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburgerIcon.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburgerIcon.classList.remove('open');
        }
    });

    // Close menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburgerIcon.classList.remove('open');
        }
    });
});