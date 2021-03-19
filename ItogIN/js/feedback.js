function modalFos(title, theme) {
   $('.modal').addClass('active');
   $('.unvisibleBlock').addClass('active');
   $('#theme').val(theme);
   $('.modal__title').text(title);
}


function feedback() {
   let a = $('#mess').val();
   $('#text').val(a);
   let err = 0,
      t1 = $('#name').val(),
      t2 = $('#phone').val(),
      t3 = $('#text').val(),
      theme = $('#theme').val(),
      page = $('#page').val();
   if (t1 == '') {
      $('#name').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#name').css({ 'border': '2px solid green' });
   }
   if (t2 == '') {
      $('#phone').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#phone').css({ 'border': '2px solid green' });
   }
   if (t3 == '') {
      $('#mess').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#mess').css({ 'border': '2px solid green' });
   }
   if (!$('#checkbox').prop('checked')) {
      $('.modal__check_text').css({ 'color': 'green' });
   } else {
      $('.modal__check_text').css({ 'color': 'red' });
      err = 1;
   }
   if (err == 0) {
      $.ajax({
         type: "POST",
         url: "../ajax/fos-popup.php",
         data: 'name=' + t1 + '&phone=' + t2 + '&text' + t3 + '&theme=' + theme + '&page=' + page,
         success: function (response) {
            if (response == 1) {
               $('.unvisibleBlock').addClass('active');
               $('.galochka').addClass('active');
            }
            $('.modal').removeClass('active');
         }
      });
   }
}

let dataExpress = $('.select-questions__current').val();
$('#dataExpress').val(dataExpress);

function feedbackExpress() {
   let err = 0,
      t1 = $('#formName').val(),
      t2 = $('#formTel').val(),
      t3 = $('#formTime').val(),
      t4 = $('#dataExpress').val(),
      themeExpress = $('#themeExpress').val(),
      page = $('#page').val();
   if (t1 == '') {
      $('#formName').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#formName').css({ 'border': '2px solid green' });
   }
   if (t2 == '') {
      $('#formTel').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#formTel').css({ 'border': '2px solid green' });
   }
   if (t3 == '') {
      $('#formTime').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#formTime').css({ 'border': '2px solid green' });
   }
   if (err == 0) {
      $.ajax({
         type: "POST",
         url: "../ajax/fos-popupExpress.php",
         data: 'formName=' + t1 + '&formTel=' + t2 + '&formTime' + t3 + '&dataExpress=' + t4 + '&themeExpress=' + themeExpress + '&page=' + page,
         success: function (response) {
            if (response == 1) {
               $('.unvisibleBlock').addClass('active');
               $('.galochka').addClass('active');
            }
         }
      });
   }
}

let dataQuestion = $('.select-questions__current').val();
$('#dataQuestion').val(dataQuestion);

function feedbackQuestion() {
   let err = 0,
      t1 = $('#formName2').val(),
      t2 = $('#formTel2').val(),
      t3 = $('#formTime2').val(),
      t4 = $('#dataQuestion').val(),
      themeQuestion = $('#themeQuestion').val(),
      page = $('#page').val();
   if (t1 == '') {
      $('#formName2').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#formName2').css({ 'border': '2px solid green' });
   }
   if (t2 == '') {
      $('#formTel2').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#formTel2').css({ 'border': '2px solid green' });
   }
   if (t3 == '') {
      $('#formTime2').css({ 'border': '2px solid red' });
      err = 1;
   } else {
      $('#formTime2').css({ 'border': '2px solid green' });
   }
   if (err == 0) {
      $.ajax({
         type: "POST",
         url: "../ajax/fos-popupQuestion.php",
         data: 'formName2=' + t1 + '&formTel2=' + t2 + '&formTime2' + t3 + '&dataQuestion=' + t4 + '&themeQuestion=' + themeQuestion + '&page=' + page,
         success: function (response) {
            if (response == 1) {
               $('.unvisibleBlock').addClass('active');
               $('.galochka').addClass('active');
            }
         }
      });
   }
}