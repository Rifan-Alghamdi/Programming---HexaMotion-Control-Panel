<?php
include 'db.php';

$m1 = $_POST['m1'];
$m2 = $_POST['m2'];
$m3 = $_POST['m3'];
$m4 = $_POST['m4'];
$m5 = $_POST['m5'];
$m6 = $_POST['m6'];

$sql = "INSERT INTO motor_data (motor1, motor2, motor3, motor4, motor5, motor6)
        VALUES ('$m1', '$m2', '$m3', '$m4', '$m5', '$m6')";

if ($conn->query($sql) === TRUE) {
    echo "Inserted";
} else {
    echo "Error: " . $conn->error;
}
?>