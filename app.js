const swiperCard = new Swiper( '.wpt-history-slide', {
    loop: true,
    loppedSlides: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
} );

const swiperThumb = new Swiper( '.wpt-year-slide', {
    loop: true,
    loppedSlides: 5,
    slidesPerView: 3,
    slideToClickedSlide: true,
    direction: 'vertical',
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
} );

swiperThumb.controller.control = swiperCard;