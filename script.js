// Navbar animation
window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.transition = 'all 0.8s ease';
    navbar.style.opacity = 1;
});

// Fade-in sections
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

fades.forEach(section => {
    observer.observe(section);
});

// Cards animation
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    observer.observe(card);
});
