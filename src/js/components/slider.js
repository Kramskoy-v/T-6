import {Swiper} from 'swiper/bundle'
// Инициализация слайдеров

const homeSwiper = new Swiper('.home-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
        nextEl: '.home-swiper__button-next',
        prevEl: '.home-swiper__button-prev',
    },
})

