const membersSwiper = new Swiper('.members-swiper', {
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
        nextEl: '.members-swiper-button-next',
        prevEl: '.members-swiper-button-prev',
    },
});

const quotsSwiper = new Swiper('.quots-swiper', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: true,
    speed: 400,
    delay: 9000,

});

const blogsSwiper = new Swiper('.blogs-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 65,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 598px
        598: {
            slidesPerView: 2,
            spaceBetween: 85
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 100
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.blogs-swiper-button-next',
        prevEl: '.blogs-swiper-button-prev',
    },
});
export { membersSwiper, quotsSwiper, blogsSwiper }