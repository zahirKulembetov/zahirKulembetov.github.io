$(document).ready(function () {
   const order = document.querySelector('.order'),
      field = document.querySelector('.field'),
      // orderCall = document.querySelector('.promo__btn'),
      order__close = document.querySelector('.order__close'),
      menu = document.querySelector('.nav__list'),
      hamburger = document.querySelector('.hamburger'),
      menu__links = document.querySelector('.header__social');
   // ? Алгоритм для отркытия pop-up формы
   // orderCall.addEventListener('click', () => {
   //    order.classList.add('active');
   //    field.classList.add('active');
   // });

   // ? Алгоритм для закрытия по кнопе close
   order__close.addEventListener('click', () => {
      order.classList.remove('active');
      field.classList.remove('active');
   });

   // ? Алгоритм для закрытия по нажатию на область (учитывается меню)
   field.addEventListener('click', () => {
      order.classList.remove('active');
      field.classList.remove('active');
      menu.classList.remove('active');
      hamburger.classList.remove('hamburger__active');
      menu__links.classList.remove('active');
   });

   // ? Алгоритм формы меню
   hamburger.addEventListener('click', () => {
      if (hamburger.classList.contains('hamburger__active')) {
         menu.classList.remove('active');
         hamburger.classList.remove('hamburger__active');
         menu__links.classList.remove('active');
         field.classList.remove('active');
      } else {
         menu.classList.add('active');
         hamburger.classList.add('hamburger__active');
         menu__links.classList.add('active');
         field.classList.add('active');
      }
   });

   $(function () {
      $("a[href='#measure']").click(function () {
         const _href = $(this).attr("href");
         $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
         return false;
      });
   });

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

   $(".phone").click(function () {
      $(this).setCursorPosition(3);
   }).mask("+7(999) 999-9999");

});