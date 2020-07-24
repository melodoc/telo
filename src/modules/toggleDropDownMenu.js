const toggleDropDownMenu = () => {
    const chooseClub = document.querySelector('.clubs-list > button');
    const clubsItem = document.querySelector('.clubs-list > ul');

    chooseClub.addEventListener('click', () => {
        clubsItem.classList.toggle('hidden');
    });
}; 

export default toggleDropDownMenu;
