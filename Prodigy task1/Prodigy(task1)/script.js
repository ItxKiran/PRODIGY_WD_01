const menu = document.getElementById('main-menu');

const handleScroll = () => {
    if (window.scrollY > 50) {
        menu.classList.add('fixed-menu');
    } else {
        menu.classList.remove('fixed-menu');
    }
};

window.addEventListener('scroll', handleScroll);
