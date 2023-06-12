<?php 
$conn=mysqli_connect("localhost","root","","test") or die("connection Failed");

$sql ="SELECT * FROM students ";


$result=mysqli_query($conn,$sql) or die("SQL Query Failed");
print_r($result); 


?>