<?php
require_once("../../database/config.php");

if (isset($_POST['user_id'])) {
    $id = $_POST['user_id'];
    $sql = "SELECT * FROM users WHERE user_id = '$id'";
    $result = $con->query($sql);
    $userData = $result->fetch_assoc();
    $userData = json_encode($userData);
    echo $userData;
}

?>