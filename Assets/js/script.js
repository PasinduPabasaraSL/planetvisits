document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const nav = document.getElementById('nav-links');


    hamburgerIcon.addEventListener('click', () => {
        console.log("click");
        nav.classList.toggle('active');

        hamburgerIcon.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburgerIcon.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburgerIcon.classList.remove('open');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburgerIcon.classList.remove('open');
        }
    });
});