<?php
include 'db.php';

$sql = "SELECT * FROM motor_data ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($row = $result->fetch_assoc()) {
    echo "s{$row['motor1']},s{$row['motor2']},s{$row['motor3']},s{$row['motor4']},s{$row['motor5']},s{$row['motor6']}";
} else {
    echo "No data";
}
?>