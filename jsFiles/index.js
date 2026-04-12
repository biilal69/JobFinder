const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.onclick = function() {
    navMenu.classList.toggle('active');
};

document.querySelectorAll('.nav-bar a').forEach(link => {
    link.onclick = () => {
        navMenu.classList.remove('active');
    };
});