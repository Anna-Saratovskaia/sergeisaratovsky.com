

<?php
$student_name = $_POST['student_name'];
$parent_name = $_POST['parent_name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "Parent: $parent_name \nStudent: $student_name \nEmail: $email \nMessage: $message";
$recipient = "info@sergeisaratovsky.com";
$subject = "Website form message";
$mailheader = "From: info@sergeisaratosvsky.com \r\n";
$headers .= "Reply-To: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='./' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
