<?php
include 'db.php';

$sql = "SELECT * FROM motor_data ORDER BY id DESC";
$result = $conn->query($sql);

$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>