<?php
// Here we get all the information from the fields sent over by the form.
$name = $_POST['exampleInputName'];
$email = $_POST['exampleInputEmail'];
$message = $_POST['message'];
 
$to = 'mikessc@gmail.com, info@igniterz.com';
$subject = 'Nuevo mensaje de '.$name.' - Email: '.$email.' desde Igniterz.com';

$headers .= "From: info@igniterz.com";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Message send!"; // success message
}else{
echo "Invalid Email.";
}
?>