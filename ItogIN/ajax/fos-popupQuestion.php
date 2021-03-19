<?
$formName=$_POST['formName2'];
$formTel=$_POST['formTel2'];
$formTime=$_POST['formTime2'];
$data=$_POST['dataQuestion'];
$page=$_POST['page'];

$to = "kulembetov.zahir@gmail.com";

$subject = $_POST['themeQuestion'];

if(($_POST['formName2']!='') and ($_POST['formName2']!=' ')){
   $message =
      '<b>Имя: </b>'.$_POST['formName2'].'<br>
      <b>Телефон: </b>'.$_POST['formTel2'].'<br>
      <b>Время дня: </b>'.$_POST['formTime2'].'<br>
      <b>День недели: </b>'.$_POST['dataQuestion'].'<br>
      <b>Сайт: </b>'.$_POST['page'].'<br>';

   $headers = "Content-type: text/html; charset-utf-8 \r\n";
   $headers .= "From: kul.ru <kul-135@mail.ru> \r\n";
   $headers .= "Reply-To: kul-135@mail.ru \r\n";

   mail($to, $subject, $message, $headers, '-f kul-135@mail.ru');
   echo '1';
}
?>


