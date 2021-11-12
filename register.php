<?php
$conn = mysqli_connect("localhost","root","","web_login") or die("Failed to connect to db");

// if(isset($_POST['submit']))
// {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users(username, password) VALUES ('$username','$password')";

    if($conn->query($sql) === TRUE){
        echo "New Record Created Successfully";
    }
    else {
        echo "Could NOT insert data in the database..";
    }
// }

$conn->close();
?>