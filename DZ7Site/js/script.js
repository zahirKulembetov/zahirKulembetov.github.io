const hamburger = document.querySelector('.hamburger'),
   haburgerLines = hamburger.querySelectorAll('span'),
   menu = document.querySelector('.header__menu'),
   closeMenu = document.querySelector('.closeMenu'),
   blockCall = document.querySelector('.header__call');


hamburger.addEventListener("click", () => {
   document.querySelector('body').style.overflow = "hidden";
   menu.classList.add('active');
   closeMenu.classList.add('active');
   menu.insertAdjacentElement("beforeend", blockCall);
   blockCall.classList.add('active');
});

closeMenu.addEventListener("click", () => {
   document.querySelector('body').style.overflow = "auto";
   menu.classList.remove('active');
   closeMenu.classList.remove('active');
   blockCall.classList.remove('active');
   menu.insertAdjacentElement("afterend", blockCall);
});


go();
window.addEventListener('resize', go);

function go() {
   let a = document.documentElement.clientWidth;
   if (a > 992) {
      document.querySelector('body').style.overflow = "auto";
      menu.classList.remove('active');
      closeMenu.classList.remove('active');
      blockCall.classList.remove('active');
      menu.insertAdjacentElement("afterend", blockCall);
   }
}


