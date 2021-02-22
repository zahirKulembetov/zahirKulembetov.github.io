$(document).ready(function () {
   $('.main__slider').slick({
      speed: 500,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      dots: true,
      infinite: false,
   });

   $('.main__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let NumberSlide = nextSlide;
      if (NumberSlide == 0) {
         $('.slick-prev rect').css('opacity', "0.5");
         $('.slick-prev path').css('opacity', "0.5");
         $('.slick-next rect').css('opacity', "1");
         $('.slick-next path').css('opacity', "1");
      } else if (NumberSlide == 1) {
         $('.slick-prev rect').css('opacity', "1");
         $('.slick-prev path').css('opacity', "1");
         $('.slick-next rect').css('opacity', "1");
         $('.slick-next path').css('opacity', "1");
      } else if (NumberSlide == 2) {
         $('.slick-next rect').css('opacity', "0.5");
         $('.slick-next path').css('opacity', "0.5");
      }
   });

   $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
         $('.arrow').css('visibility', 'visible')
         $('.arrow').fadeIn();
      } else {
         $('.arrow').fadeOut();
      }
   })


   $(function () {
      $("a[href='#head']").click(function () {
         const _href = $(this).attr("href");
         $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
         return false;
      });
   });
});