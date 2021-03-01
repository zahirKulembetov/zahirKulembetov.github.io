function modalFos(title, theme) {
   $('.order').addClass('active');
   $('.field').addClass('active');
   $('#theme').val(theme);
   $('.order__text').text(title);
}

function feedback() {
   err = 0;
   t1 = $('#phone').val();
   t2 = $('#address').val();
   t3 = $('#name').val();
   console.log('phone=' + t1);
   console.log('address=' + t2);
   console.log('name=' + t3);
   if (t1 == '') {
      $('#phone').css({ 'border': '2px solid red' })
      err = 1;
   } else {
      $('#phone').css({ 'border': '2px solid green' })
   }
   if (t2 == '') {
      $('#address').css({ 'border': '2px solid red' })
      err = 1;
   } else {
      $('#address').css({ 'border': '2px solid green' })
   }
   if (t3 == '') {
      $('#name').css({ 'border': '2px solid red' })
      err = 1;
   } else {
      $('#name').css({ 'border': '2px solid green' })
   }

   if (err == 0) {
      console.log('Успешно!');
   }
}

function feedback__call() {
   err = 0;
   t1 = $('#measure__phone').val();
   t2 = $('#measure__address').val();
   t3 = $('#measure__name').val();
   console.log('phone=' + t1);
   console.log('address=' + t2);
   console.log('name=' + t3);
   if (t1 == '') {
      $('#measure__phone').css({ 'border': '2px solid red' })
      err = 1;
   } else {
      $('#measure__phone').css({ 'border': '2px solid green' })
   }
   if (t2 == '') {
      $('#measure__address').css({ 'border': '2px solid red' })
      err = 1;
   } else {
      $('#measure__address').css({ 'border': '2px solid green' })
   }
   if (t3 == '') {
      $('#measure__name').css({ 'border': '2px solid red' })
      err = 1;
   } else {
      $('#measure__name').css({ 'border': '2px solid green' })
   }

   if (err == 0) {
      console.log('Успешно!');
   }
}