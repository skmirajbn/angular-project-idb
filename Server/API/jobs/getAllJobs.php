<?php
require_once("../../database/config.php");

// Get all the Job post as Array of Object

$sql = "SELECT * FROM jobs_information ORDER BY job_id DESC";
$result = $con->query($sql);
$jobs = [];
while ($data = $result->fetch_assoc()) {
    $jobs[] = $data;
}
$jobs = json_encode($jobs, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
echo $jobs;

?>