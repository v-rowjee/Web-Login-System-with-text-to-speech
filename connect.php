<?php
$username = $_POST['username'];
$password = $_POST['password'];

$conn = mysqli_connect("localhost","root","","web_login");


$result = mysqli_query($conn, "SELECT * FROM users WHERE username = '".$username."'AND password = '".$password."'")
                or die("Failed to query db");

$row = mysqli_fetch_array($result);

if($row['username'] == $username && $row['password'] == $password)
    echo "<h1><center>Login successful! Welcome ".$row['username']."</center></h1>";
else
    echo "Username or password incorrect..";
?>