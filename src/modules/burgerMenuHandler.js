const burgerMenuHandler = () => {
    const menuButton = document.querySelector('.menu-button');
    const popupMenu = document.querySelector('.popup-menu');

    menuButton.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });

    popupMenu.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('close-menu-btn') || target.closest('.close-menu-icon') ||
        target.closest('.scroll')) {
            popupMenu.style.display = 'none';
        }
    });

    window.addEventListener('scroll', () => {
        const topMenu = document.querySelector('.top-menu');

        if (pageYOffset > 0) {
            topMenu.style.position = 'fixed';
        } else {
            topMenu.style.position = 'relative';
        }
    });
};

export default burgerMenuHandler;
