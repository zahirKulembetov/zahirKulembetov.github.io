
function init() {
   var myMap = new ymaps.Map('map', {
      center: [54.72589574200042, 55.947725009924135],
      zoom: 15,
      controls: []
   }),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
         hintContent: 'ул. Ленина, 26',
         balloonContent: `
         Адресс: ул. Ленина, 26 <br>
         Телефон: +7 (987) 13-77-007  <br>
         `
      }, {
         // Опции.
         // Необходимо указать данный тип макета.
         iconLayout: 'default#image',
         // Своё изображение иконки метки.
         iconImageHref: 'icons/map/map-locator.svg',
         // Размеры метки.
         iconImageSize: [50, 50],
      });



   //отключаем зум колёсиком мышки
   myMap.behaviors.disable('scrollZoom');

   //на мобильных устройствах... (проверяем по userAgent браузера)
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //... отключаем перетаскивание карты
      myMap.behaviors.disable('drag');
   }

   myMap.geoObjects
      .add(myPlacemark);
}

ymaps.ready(init);