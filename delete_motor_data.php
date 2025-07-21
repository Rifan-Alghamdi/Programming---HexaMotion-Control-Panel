<?php
include 'db.php';

$id = $_POST['id'];
$sql = "DELETE FROM motor_data WHERE id = '$id'";
$conn->query($sql);
?>