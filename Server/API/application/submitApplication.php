<?php
require_once("../../database/config.php");

if (isset($_POST['user_id']) && isset($_POST['job_id'])) {
    $user_id = $_POST['user_id'];
    $job_id = $_POST['job_id'];

    $sql = "INSERT INTO app(user_id,job_id) VALUES('$user_id', '$job_id')";
    $query = $con->query($sql);
    if ($query) {
        echo "Application Submitted";
    } else {
        echo "Application Submission Failed";
    }
}
?>