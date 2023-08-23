<?php
require_once("../../database/config.php");

if (isset($_POST['job_id'])) {
    $jobId = $_POST['job_id'];
    $sql = "DELETE FROM jobs WHERE job_id = $jobId";
    $query = $con->query($sql);
    if ($query) {
        echo "job is deleted";
    } else {
        echo "Job delete Failed";
    }
}
?>