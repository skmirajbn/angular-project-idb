<?php
require_once("../../database/config.php");

if (isset($_POST['employer_id'])) {
    $empId = $_POST['employer_id'];
    $sql = "SELECT * FROM application_information  WHERE employer_id = $empId ORDER BY app_id DESC";
    $result = $con->query($sql);
    $appData = [];
    while ($data = $result->fetch_assoc()) {
        $appData[] = $data;
    }
    $appData = json_encode($appData, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    echo $appData;
}
?>