<?php
require_once("../../database/config.php");

$sql = "SELECT * FROM users ORDER BY user_id DESC";
$query = $con->query($sql);
$users = [];
if ($query) {
    while ($data = $query->fetch_assoc()) {
        $users[] = $data;
    }
    $users = json_encode($users);
    echo "$users";
}



?>