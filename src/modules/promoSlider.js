const promoSlider = () => {

    const mainSlider = document.querySelector('.main-slider'),
        slides = mainSlider.querySelectorAll('.slide');

    let count = 0;

    setInterval(() => {
        slides[count].style.display = 'none';
        count++;
        if (count >= slides.length) {
            count = 0;
        }
        slides[count].style.display = 'flex';
        slides[count].style.transition = 'opacity 0.5';
    }, 4000);

};

export default promoSlider;
