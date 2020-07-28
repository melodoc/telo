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
        const width = document.documentElement.clientWidth;
        const topMenu = document.querySelector('.top-menu');
        const menuHeight = 250;
        topMenu.style.position = '';

        if (width < 768) {
            if (pageYOffset > menuHeight) {
                topMenu.style.position = 'fixed';
            } else {
                topMenu.style.position = '';
            }
        }
    });
};

export default burgerMenuHandler;
