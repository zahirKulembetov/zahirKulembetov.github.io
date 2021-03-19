// let ymaps;
var iframeMap = document.querySelector('.map__source');
var map = document.querySelector('#map');
var mapLink = document.querySelector('.map__link');
var i = 0;
var ymaps;

ymaps.ready(function () {
   mapLink.addEventListener('click', function () {
      if (iframeMap.style.display == "none") {
         iframeMap.style.display = "block";
         map.classList.remove('active');
         map.lastElementChild.style.display = 'none';
      } else {
         iframeMap.style.display = "none";
         map.classList.add('active');

         var myMap = new ymaps.Map('map', {
            center: [55.101339, 82.977975],
            zoom: 13,
            // Добавим панель маршрутизации.
            controls: ['routePanelControl']
         });

         var control = myMap.controls.get('routePanelControl');

         // Зададим состояние панели для построения машрутов.
         control.routePanel.state.set({
            // Тип маршрутизации.
            type: 'masstransit',
            // Выключим возможность задавать пункт отправления в поле ввода.
            fromEnabled: true,
            // Адрес или координаты пункта отправления.
            // from: true,
            // Включим возможность задавать пункт назначения в поле ввода.
            toEnabled: true,

            to: 'Новосибирск, Дуноевского, 16',
            // Адрес или координаты пункта назначения.
            //to: 'Петербург'
         });

         // Зададим опции панели для построения машрутов.
         control.routePanel.options.set({
            // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
            allowSwitch: false,
            // Включим определение адреса по координатам клика.
            // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
            reverseGeocoding: true,
            // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
            types: { masstransit: true, pedestrian: true, taxi: true }
         });

         // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
         var switchPointsButton = new ymaps.control.Button({
            data: { content: "Поменять местами", title: "Поменять точки местами" },
            options: { selectOnClick: false, maxWidth: 160 }
         });
         // Объявляем обработчик для кнопки.
         switchPointsButton.events.add('click', function () {
            // Меняет местами начальную и конечную точки маршрута.
            control.routePanel.switchPoints();
         });
         myMap.controls.add(switchPointsButton);
      }

   });


});

