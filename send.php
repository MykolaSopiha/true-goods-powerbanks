<?php
header("Content-type: text/html; charset=utf-8");

// $to1 = 'mr.ilkovs@gmail.com';
$to1 = 'niksop94@gmail.com';


$name = $_POST['name'];
$phone = $_POST['phone'];
$product_code = $_POST['product_code'];
$product_size = $_POST['product_size'];
$product_name = $_POST['product_name'];
$product_price = $_POST['product_price'];
$utm_source = $_POST['utm_source'];
$utm_campaign = $_POST['utm_campaign'];
$utm_medium = $_POST['utm_medium'];
$utm_content = $_POST['utm_content'];
$utm_term = $_POST['utm_term'];

    
$date = date("d.m.Y");
$time = date("H:i");

$subject = "Заявка niksop94.ho.ua $date $time";

    $message = '
    <html>
    <head>
    <title>'.$subject.'</title>
    </head>
    <body>
    <p>Имя покупателя: '.$name.'</p>
	<p>Телефон покупателя: '.$phone.'</p>
	<p>Наименование товара: '.$product_name.'</p>
    <p>Размер товара: '.$product_size.'</p>
    <p>Цена товара: '.$product_price.'</p>
    <p>Промокод: '.$product_code.'</p>    
    <p>utm_source: '.$utm_source.'</p>
    <p>utm_campaign: '.$utm_campaign.'</p>
    <p>utm_medium: '.$utm_medium.'</p>
    <p>utm_content: '.$utm_content.'</p>
    <p>utm_term: '.$utm_term.'</p>
    <p></p>
    <p>UTM: ?utm_source='.$utm_source.'&utm_campaign='.$utm_campaign.'&utm_medium='.$utm_medium.'&utm_content='.$utm_content.'</p>
    </body>
    </html>';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf8\r\n";

$headers .= "From: niksop94.ho.ua <info@niksop94.ho.ua>\r\n";
$headers .= "Reply-To: info@niksop94.ho.ua\r\n";

$headers .= "X-Mailer: PHP/" . phpversion();

if(!empty($_POST['name']) && !empty($_POST['phone'])) {
    
mail($to1, $subject, $message, $headers);

}

header("Location: thankyou/index.php?name=$name&phone=$phone");

?>