const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.overview'),
   closeMenu = document.querySelector('.overview__menu_close');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
   menu.classList.remove('active');
});

const skillsValue = document.querySelectorAll('.skills__percent-value'),
   skillsCurrents = document.querySelectorAll('.skills__percent-scale-current');


skillsValue.forEach((item, i) => {
   skillsCurrents[i].style.width = item.innerHTML;
});