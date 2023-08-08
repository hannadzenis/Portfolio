use PHPMailer/PHPMailer/PHPMailer;
use PHPMailer/PHPMailer/Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//from who
$mail->setFrom('info@fls.guru', 'Portfolio');
//to who
$mail->addAddress('hannahdzenis@gmail.com');
//Theme of the mail
$mail->Subject = 'Form usage from Portfolio';

//body 
$body = '<h1>Message from a client!<h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['surname']))){
    $body.='<p><strong>Surname:</strong> '.$_POST['surname'].'</p>';
}

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}

if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
}

if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}

//sending

if (!$mail->send()){
    $message = 'Error';
}else{
    $message = 'Data is sent!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>