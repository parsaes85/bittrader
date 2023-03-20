const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 598px
        598: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 35
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

export { swiper }