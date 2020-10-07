const showArrow = () => {
    const head = document.querySelector('.head');
    const topMenu = document.querySelector('.top-menu');
    const headSlider = document.querySelector('.head-slider');
    const FIRST_BANNER_WIDTH = head.clientHeight + topMenu.clientHeight + headSlider.clientHeight;

    const toTopButton = document.getElementById('totop');
    toTopButton.style.display = 'none';

    document.addEventListener('scroll', () => {
        if (window.pageYOffset > FIRST_BANNER_WIDTH) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });

};

export default showArrow;
