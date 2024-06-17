import { Swiper } from "swiper";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";

const header = document.querySelector('.header')
Swiper.use([Pagination, Mousewheel, Navigation])

// Main Slider
const paginationMenu = ['Компания', 'Решения', 'Продукция', 'Услуги', 'О нас', 'Экология', 'Новости']
const mainSlider = new Swiper('.main-slider', {
  direction: 'vertical',
  speed: 500,
  pagination: {
    el: '.main-slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="main-slider__bullet swiper-pagination-bullet">${paginationMenu[index]}</span>`;
    },
  },
  mousewheel: true,
  on: {
    slideChange : (swiper) => {
      if(mainSlider.activeIndex != 0){
        header.style.opacity = 0
      } else {
        header.style.opacity = null
      }
      if(mainSlider.activeIndex == 1|| mainSlider.activeIndex ==  4 || mainSlider.activeIndex == 5 || mainSlider.activeIndex == 6){
        mainSlider.el.classList.add('darken')
      } else {
        mainSlider.el.classList.remove('darken')
      }
    }
  }
})


const fractions = document.querySelector('.about__fract')
const fractionsFrom = fractions.querySelector('.from')
const fractionsTo = fractions.querySelector('.to')

const aboutSlider = new Swiper('.about__slider', {
  slidesPerView: 1,
  speed: 400,
  navigation: {
    prevEl: '.about__arr--prev',
    nextEl: '.about__arr--next'
  },
  pagination: {
    el: '.about__pagi>div',
    type: 'progressbar'
  },
  on: {
    slideChange: (swiper) => {
      fractionsFrom.textContent = ('0000' + (aboutSlider.activeIndex + 1)).slice(-2)
    }
  }
})

const len = aboutSlider.el.children.length
fractionsTo.textContent = ('0000' + (len + 1)).slice(-2)
fractionsFrom.textContent = ('0000' + (aboutSlider.activeIndex + 1)).slice(-2)
