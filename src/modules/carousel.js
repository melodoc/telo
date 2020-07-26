const carousel = () => {

    class SliderCarousel {
        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = false,
            position = 0,
            slidesToShow = 5
        }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slides = document.querySelector(wrap).children;
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100 / this.slidesToShow)
            };
        }
        init() {
            this.controlSlider();
        }
        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }
        prevSlider(event) {
            event.preventDefault();
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.slides.length - this.slidesToShow;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }

        }
        nextSlider(event) {
            event.preventDefault();
            if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
                ++this.options.position;
                if (this.options.position > this.slides.length - this.slidesToShow) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }
    }

    const sliderCarousel = new SliderCarousel({
        main: '#carousel',
        wrap: '#services-slider',
        next: '.next-carousel',
        prev: '.prev-carousel',
        slidesToShow: 5,
        infinity: true
    });

    sliderCarousel.init();
};

export default carousel;
