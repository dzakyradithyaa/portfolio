<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
// Database connection
$conn = new mysqli('localhost','root','','dbcfportfoliotailwind');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into tbcfportfoliotailwind(name, email, message)");
    $stmt->bind_param("sss",$name, $email, $message);
    $stmt->execute();
    echo "Your data has been successfully sent and is safe..";
    $stmt->close();
    $conn->close();
}
?>