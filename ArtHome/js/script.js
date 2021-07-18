// "use strict";

// СЛАЙДЕРЫ
let sliderPartners = {
   sliderInfinite: false,

   dotsBool: true,
   arrowsBool: false,

   selectorSlide: ".partners__slider",
   selectorWhereDots: ".navSlide__dots",
   classDots: "dots",
   slideShow: 6,
   slideScroll: 1,
   touchHold: 10,
   responsireProp: [{
      breakpoint: 991,
      settings: {
         slidesToShow: 3
      }
   },
   {
      breakpoint: 575,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 2
      }
   }
   ]
};

let sliderReviews = {
   sliderInfinite: true,

   dotsBool: false,
   arrowsBool: true,

   selectorSlide: ".reviews__slider",

   selectorWhereArrows: ".reviews__navSlide",
   selectorPrevArrow: ".reviews__slick-prev",
   selectorNextArrow: ".reviews__slick-next",

   classDots: "",
   slideShow: 1,
   slideScroll: 1,
   touchHold: 10,
   responsireProp: [
      {
         breakpoint: 767,
         settings: {
            arrows: false,
            prevArrow: $(),
            nextArrow: $()
         }
      }
   ]
};
// СЛАЙДЕРЫ END

$(document).ready(function () {


   // инициализация Слайдеров
   slides(sliderPartners);
   slides(sliderReviews);

   // функция вызова Слайдеров
   function slides(obj) {
      $(obj.selectorSlide).slick({
         infinite: obj.sliderInfinite,
         appendDots: obj.selectorWhereDots,
         dots: obj.dotsBool,
         arrows: obj.arrowsBool,
         dotsClass: obj.classDots,
         touchThreshold: obj.touchHold,
         slidesToShow: obj.slideShow,
         slidesToScroll: obj.slideScroll,

         appendArrows: obj.selectorWhereArrows,
         prevArrow: $(obj.selectorPrevArrow),
         nextArrow: $(obj.selectorNextArrow),

         responsive: obj.responsireProp
      });
   }


   // JS для ИНСТАГРАМ
   // (function () {
   //    new InstagramFeed({
   //       'username': 'art_home_ufa',
   //       'container': document.getElementById("instagramBlock__grid"),
   //       'display_profile': false,
   //       'display_biography': false,
   //       'display_gallery': true,
   //       'display_captions': false,
   //       'display_igtv': false,
   //       'callback': null,
   //       'styling': false,
   //       'items': 1,
   //       'host': 'https://www.instagram.com/'
   //    });
   // })();


   // Menu (Show/Hide)




   const menu = document.querySelector('.menu'),
      menuClose = menu.querySelector('.menu__close'),
      body = document.querySelector('body'),
      hamburger = document.querySelector('.hamburger');

   if (hamburger) {
      hamburger.addEventListener('click', () => {
         menu.classList.add('is-active');
         if (body.style.overflow !== 'hidden') {
            body.style.overflow = 'hidden';
         }
      });
   }

   if (menuClose) {
      menuClose.addEventListener('click', () => {
         menu.classList.remove('is-active');
         if (body.style.overflow == 'hidden') {
            body.style.overflow = '';
         }
      });
   }

   if (menu) {
      menu.addEventListener('click', (e) => {
         let target = e.target;
         if (target == menu) {
            menu.classList.remove('is-active');
            if (body.style.overflow == 'hidden') {
               body.style.overflow = '';
            }
         }

      });
   }



});










