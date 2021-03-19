<?
$formName=$_POST['formName'];
$formTel=$_POST['formTel'];
$formTime=$_POST['formTime'];
$dataExpress=$_POST['dataExpress'];
$page=$_POST['page'];

$to = "kulembetov.zahir@gmail.com";

$subject = $_POST['themeExpress'];

if(($_POST['formName']!='') and ($_POST['formName']!=' ')){
   $message =
      '<b>Имя: </b>'.$_POST['formName'].'<br>
      <b>Телефон: </b>'.$_POST['formTel'].'<br>
      <b>Время дня: </b>'.$_POST['formTime'].'<br>
      <b>День недели: </b>'.$_POST['dataExpress'].'<br>
      <b>Сайт: </b>'.$_POST['page'].'<br>';

   $headers = "Content-type: text/html; charset-utf-8 \r\n";
   $headers .= "From: kul.ru <kul-135@mail.ru> \r\n";
   $headers .= "Reply-To: kul-135@mail.ru \r\n";

   mail($to, $subject, $message, $headers, '-f kul-135@mail.ru');
   echo '1';
}
?>


