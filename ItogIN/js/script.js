// menu
const menu = document.querySelector('.header__menu'),
   hamburger = document.querySelector('.header__hamburger'),
   header = document.querySelector('.header'),
   headerLogo = document.querySelector('.header__logo'),
   headerCall = document.querySelector('.header__call');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   menu.classList.toggle('active');
   header.classList.toggle('active');
   headerLogo.classList.toggle('active');
   headerCall.classList.toggle('active');
});


// Слайдер
$('.promo__slides').slick({
   speed: 1000,
   prevArrow: $('.slick-prev'),
   nextArrow: $('.slick-next'),
   dots: true,
   infinite: false,
});

const slickPrev = document.querySelector('.promo .slick-prev'),
   slickNext = document.querySelector('.promo .slick-next'),
   serviceContent = document.querySelector('.services__content'),
   advantagesContent = document.querySelector('.advantages__content'),
   arrowUpper = document.querySelector('.arrow__upper'),
   b = document.documentElement.clientWidth;
go();
window.addEventListener('resize', go);

function go() {
   let a = document.documentElement.clientWidth;
   if (a < 1184) {
      slickPrev.style.display = 'none';
      slickNext.style.display = 'none';
      $('.services__content').slick({
         speed: 1000,
         arrows: false,
         dots: true,
         infinite: false,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 769,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      });
      $('.advantages__content').slick({
         speed: 1000,
         arrows: false,
         dots: true,
         infinite: false,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 769,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      });
   } else {
      slickPrev.style.display = 'block';
      slickNext.style.display = 'block';
      if (serviceContent.classList.contains('slick-initialized')) {
         $('.services__content').slick('unslick');
      }
      if (advantagesContent.classList.contains('slick-initialized')) {
         $('.advantages__content').slick('unslick');
      }
   }
   if (a > 576) {
      $(window).scroll(function () {
         if ($(this).scrollTop() > 400) {
            $('.arrow__upper').fadeIn();
         } else {
            $('.arrow__upper').fadeOut();
         }
      });
   }
   if (a < 993) {
      $('.partners__content-slide').slick({
         speed: 1000,
         arrows: false,
         dots: true,
         infinite: false,
         slidesToShow: 2,
         slidesToScroll: 1,
         responsive: [
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      });
   }
   if (a < 1561) {
      document.querySelector('.questions__btn').innerHTML = "Записаться";
      $("a.colorbox").colorbox({ overlayClose: true });
      $('.sertificates__content').slick({
         speed: 1000,
         arrows: false,
         dots: true,
         infinite: false,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      });
   } else {
      document.querySelector('.questions__btn').innerHTML = "Получить консультацию";
   }
}


// $('.partners__content').slick({
//    responsive: [
//       {
//          breakpoint: 992,
//          settings: {
//             speed: 1000,
//             arrows: false,
//             dots: false,
//             infinite: false,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//          }
//       }
//    ]
// });

// if (b < 577) {
//    if (arrowUpper.style.display == "inline" || arrowUpper.style.display == "block") {
//       arrowUpper.style.display = "none";
//    }
// } else {
//    // $(window).scroll(function () {
//    //    if ($(this).scrollTop() > 400) {
//    //       $('.arrow__upper').fadeIn();
//    //    } else {
//    //       $('.arrow__upper').fadeOut();
//    //    }
//    // });
//    $(window).scroll(function () {
//       if ($(this).scrollTop() > 400) {
//          $('.arrow__upper').fadeIn();
//       } else {
//          $('.arrow__upper').fadeOut();
//       }
//    });
// }




// Плавный переход по ссылкам
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
   anchor.addEventListener('click', function (event) {
      event.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector('' + blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}

// Функция прокрутки на JQuery
// $(function () {
//    $("a[href*='#']").click(function () {
//       const _href = $(this).attr("href");
//       $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
//       return false;
//    });
// });

// Указание на позицию курсора
$.fn.setCursorPosition = function (pos) {
   if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
   } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
   }
};

// МАСКИ
$("#phone").click(function () {
   $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");

$("#formTel").click(function () {
   $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");

$("#formTel2").click(function () {
   $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");


// Функции МОДАЛьного окна
const modal = document.querySelector('.modal'),
   modalClose = document.querySelector('.modal__close'),
   galochka = document.querySelector('.galochka'),
   galochkaClose = document.querySelector('.galochka__close'),
   unvisibleBlock = document.querySelector('.unvisibleBlock');


galochkaClose.addEventListener("click", () => {
   galochka.classList.remove('active');
   unvisibleBlock.classList.remove('active');
});

modalClose.addEventListener("click", () => {
   modal.classList.remove('active');
   unvisibleBlock.classList.remove('active');
});

unvisibleBlock.addEventListener("click", () => {
   modal.classList.remove('active');
   unvisibleBlock.classList.remove('active');
   if (galochka.classList.contains('active')) {
      galochka.classList.remove('active');
   }
});

// Функция для SELECT дня недели
let select = function () {
   let selectHeader = document.querySelectorAll('.select__header'),
      selectItem = document.querySelectorAll('.select__item'),
      selectHeader2 = document.querySelectorAll('.select-questions__header'),
      selectItem2 = document.querySelectorAll('.select-questions__item'),
      block = document.querySelector('.select__body'),
      block2 = document.querySelector('.select-questions__body');

   selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle);
   });

   selectItem.forEach(item => {
      item.addEventListener('click', selectChoose);
   });

   selectHeader2.forEach(item => {
      item.addEventListener('click', selectToggle2);
   });

   selectItem2.forEach(item => {
      item.addEventListener('click', selectChoose2);
   });

   function selectToggle() {
      this.parentElement.classList.toggle('is-active');
      block.classList.toggle('active');
   }

   function selectToggle2() {
      this.parentElement.classList.toggle('is-active');
      block2.classList.toggle('active');
   }

   function selectChoose() {
      let text = this.innerText,
         select = this.closest('.select'),
         currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');
      block.classList.remove('active');
   }

   function selectChoose2() {
      let text = this.innerText,
         select = this.closest('.select-questions'),
         currentText = select.querySelector('.select-questions__current');
      currentText.innerText = text;
      select.classList.remove('is-active');
      block2.classList.remove('active');
   }

};



select();

$("a.colorbox").colorbox({ current: "Фото {current} из {total}" });

