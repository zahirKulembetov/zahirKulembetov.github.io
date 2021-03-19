<?
$name=$_POST['name'];
$phone=$_POST['phone'];
$text=$_POST['text'];
$page=$_POST['page'];

$to = "kulembetov.zahir@gmail.com";

$subject = $_POST['theme'];

if(($_POST['name']!='') and ($_POST['name']!=' ')){
   $message =
      '<b>Имя: </b>'.$_POST['name'].'<br>
      <b>Телефон: </b>'.$_POST['phone'].'<br>
      <b>Сообщение: </b>'.$_POST['text'].'<br>
      <b>Страница: </b>'.$_POST['page'].'<br>';

   $headers = "Content-type: text/html; charset-utf-8 \r\n";
   $headers .= "From: kul.ru <kul-135@mail.ru> \r\n";
   $headers .= "Reply-To: kul-135@mail.ru \r\n";

   mail($to, $subject, $message, $headers, '-f kul-135@mail.ru');
   echo '1';
}
?>


