<?php
require_once("../../database/config.php");

if (isset($_POST['employer_id'])) {
    $empId = $_POST['employer_id'];
    $sql = "SELECT * FROM jobs_information WHERE employer_id = $empId ORDER BY job_id DESC";
    $result = $con->query($sql);
    $jobs = [];
    while ($data = $result->fetch_assoc()) {
        $jobs[] = $data;
    }
    $jobs = json_encode($jobs, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    echo $jobs;
}
?>