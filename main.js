const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


// hide mobile menu when any link is clicked
const linkAction = () => {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(link => {
    link.addEventListener('click', linkAction);
});

const sr = ScrollReveal({
    distance: '90px', 
    duration: 3000,
})

sr.reveal(`.home-content`, {origin: 'top', delay: 400});
sr.reveal(`figure`, {origin: 'bottom', delay: 600});
sr.reveal(`footer`, {origin: 'bottom', delay: 800});