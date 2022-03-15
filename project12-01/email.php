<?php


$name = $_GET["name"];
$mail = $_GET["email"];
$tel = $_GET["tel"];
$company = $_GET["company"];
$type = $_GET["type"];

$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);
$tel = htmlspecialchars($tel);
$company = htmlspecialchars($company);
$type = htmlspecialchars($type);

$name = urldecode($name);
$mail = urldecode($mail);
$tel = urldecode($tel);
$company = urldecode($company);
$type = urldecode($type);

$name = trim($name);
$mail = trim($mail);
$tel = trim($tel);
$company = trim($company);
$type = trim($type);


// Сообщение
$message = "Line 1\r\nLine 2\r\nLine 3";

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Отправляем
mail($mail, "Заказ с сайта", "ФИО:" . $name . ". E-mail: " . $mail . " Телефон: " . $tel . " Название Компании: " . $company . " Тип Компании: " . $type, "From: chounguk@gmail.com \r\n");

header('Location:index.html');

?>

