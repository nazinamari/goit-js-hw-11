export { onScroll, onTopButton };

const topButton = document.querySelector('.btn-to-top');

window.addEventListener('scroll', onScroll);
topButton.addEventListener('click', onTopButton);

function onScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        topButton.classList.add('btn-to-top--visible');
    }

    if (scrolled < coords) {
        topButton.classList.remove('btn-to-top--visible');
    }
}

function onTopButton() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}