document.documentElement.style.setProperty("--menu-height", `${document.getElementById("mobile-menu").children[0].offsetHeight}px`);

ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 1000,
    delay: 100,
    interval: 400
})

ScrollReveal().reveal('.reveal-top', { origin: 'top' });
ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom' });
ScrollReveal().reveal('.reveal-left', { origin: 'left' });
ScrollReveal().reveal('.reveal-right', { origin: 'right' });
