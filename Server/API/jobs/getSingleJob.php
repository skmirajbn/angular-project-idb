<?php
require_once("../../database/config.php");

if (isset($_POST['job_id'])) {
    $id = $_POST['job_id'];
    $sql = "SELECT * FROM jobs_information WHERE job_id = $id";
    $result = $con->query($sql);
    $job = $result->fetch_assoc();
    $job = json_encode($job, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    echo $job;
}
?>