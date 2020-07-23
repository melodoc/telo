const toggleVisitMenu = () => {

    const rightMenuWrapper = document.querySelector('.head-main > .right');
    const visitForm = document.getElementById('free_visit_form');
    const callForm = document.getElementById('callback_form');

    const showMenu = form => {
        form.style.display = 'block';
    };

    const hideMenu = form => {
        form.addEventListener('click', event => {
            const target = event.target;
            if (target.classList.contains('close_icon') || target.classList.contains('overlay')) {
                form.style.display = 'none';
            }
        });
    };

    rightMenuWrapper.addEventListener('click', event => {
        const target = event.target;
        const visitBtn = target.closest('.free-visit');
        const callBtn = target.closest('.call button');

        if (visitBtn) showMenu(visitForm);
        if (callBtn) showMenu(callForm);
    });

    hideMenu(visitForm);
    hideMenu(callForm);
};

export default toggleVisitMenu;
