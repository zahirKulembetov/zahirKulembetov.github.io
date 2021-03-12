$('.promo__slides').slick({
   speed: 1000,
   prevArrow: $('.slick-prev'),
   nextArrow: $('.slick-next'),
   dots: true,
   infinite: false,
});

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
//    $("a[href='#head']").click(function () {
//       const _href = $(this).attr("href");
//       $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
//       return false;
//    });
// });

$(window).scroll(function () {
   if ($(this).scrollTop() > 400) {
      $('.arrow__upper').css('visibility', 'visible');
      $('.arrow__upper').fadeIn();
   } else {
      $('.arrow__upper').fadeOut();
   }
});
