<?php
if( ! empty($_POST) ) {

    $data = (object) $_POST;
    $to = 'v.karasik@cd-life.by';
    $subject = 'Обратный звонок (ремонт Xiaomi)';
    $message = 'Имя: ' . $data->name . ' Телефон: ' . $data->tel;

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <from@example.com>\r\n";

    mail($to, $subject, $message, $headers);

    //echo ('Ваш запрос отправлен!');
} 
?>