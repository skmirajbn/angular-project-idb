<?php
require_once("../../database/config.php");

if (isset($_POST['user_id'])) {

    $id = $_POST['user_id'];
    $sql = "SELECT * FROM cv WHERE user_id = $id";
    $result = $con->query($sql);
    $data = $result->fetch_assoc();
    $data = json_encode($data, JSON_UNESCAPED_UNICODE);
    echo $data;
}
?>