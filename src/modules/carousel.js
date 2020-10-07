const carousel = () => {
    const carouselBlock = document.getElementById('services'),
        sliderWrapper = carouselBlock.querySelector('.wrapper'),
        slider = carouselBlock.querySelector('.services-slider'),
        slides = slider.querySelectorAll('.slide'),
        prev = document.querySelector('.btn-prev'),
        next = document.querySelector('.btn-next');

    const carouselSlider = new CarouselSlider({
        main: sliderWrapper,
        wrap: slider,
        slides,
        next,
        prev,
        infinity: true,
        responsive: [{
            breakPoint: 1200,
            slidesToShow: 4
        },
        {
            breakPoint: 991,
            slidesToShow: 3
        },
        {
            breakPoint: 767,
            slidesToShow: 2
        },
        {
            breakPoint: 479,
            slidesToShow: 1
        },
        ]
    });

    carouselSlider.init();
};

class CarouselSlider {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        slidesToShow = 5,
        slides,
        position = 0,
        responsive = []
    }) {
        this.main = main;
        this.wrap = wrap;
        this.slides = slides;
        this.next = next;
        this.prev = prev;
        this.slidesToShow = slidesToShow;
        this.responsive = responsive;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };
    }

    init() {
        this.addSlidesClass();
        this.addStyle();
        this.controlSlider();

        if (this.responsive) {
            this.responseInit();
        }
    }

    addSlidesClass() {
        this.main.classList.add('slider-carousel');
        this.wrap.classList.add('slider-carousel-wrapper');

        for (const item of this.slides) {
            item.classList.add('carousel-item');
        }
    }

    addStyle() {
        let style = document.getElementById('carousel-style');

        if (!style) {
            style = document.createElement('style');
            style.id = 'carousel-style';
        }

        style.textContent = `
        .slider-carousel {
          padding: 0;
          overflow: hidden !important;
        }
        .slider-carousel-wrapper {
          display: flex !important;
          align-items: start !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .carousel-item {
          flex: 0 0 ${this.options.widthSlide}% !important;
          margin: 0 auto !important;
  
        }
      `;

        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow,
            allResponse = this.responsive.map(item => item.breakPoint),
            maxResponse = Math.max(...allResponse),

            checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponse.length; i++) {
                        if (widthWindow < allResponse[i]) {
                            this.slidesToShow = this.responsive[i].slidesToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        }
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                }
            };
        checkResponse();

        window.addEventListener('resize', checkResponse);
    }
}

export default carousel;
