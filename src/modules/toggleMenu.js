const toggleMenu = () => {

    const show = form => {
        form.style.display = 'block';
    };

    const hide = form => {
        form.addEventListener('click', event => {
            const target = event.target;
            if (target.classList.contains('close_icon') || target.classList.contains('overlay') ||
            target.classList.contains('close-btn')) {
                form.style.display = 'none';
            }
        });
    };

    const toggle = (listenElement, buttonClass, form) => {
        listenElement.addEventListener('click', event => {
            const target = event.target;
            const button = target.closest(buttonClass);

            if (button) show(form);
        });

        hide(form);
    };

    const rightMenuWrapper = document.querySelector('.head-main > .right');

    const visitForm = document.getElementById('free_visit_form');
    const callForm = document.getElementById('callback_form');
    const giftForm = document.getElementById('gift');

    const giftButton = document.querySelector('.fixed-gift');

    toggle(rightMenuWrapper, '.free-visit', visitForm);
    toggle(rightMenuWrapper, '.call button', callForm);
    toggle(document, '.fixed-gift', giftForm);

    giftButton.addEventListener('click', () => {
        giftButton.style.display = 'none';
    });
};

export default toggleMenu;
