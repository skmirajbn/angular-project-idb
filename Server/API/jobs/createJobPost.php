<?php
require_once("../../database/config.php");

if (isset($_POST['job_title']) && isset($_POST['job_salary']) && isset($_POST['job_vacancy']) && isset($_POST['job_location']) && isset($_POST['job_type']) && isset($_POST['category_id']) && isset($_POST['company_id']) && isset($_POST['job_description'])) {
    $jobTitle = $_POST['job_title'];
    $jobSalary = $_POST['job_salary'];
    $jobVacancy = $_POST['job_vacancy'];
    $jobLocation = $_POST['job_location'];
    $jobType = $_POST['job_type'];
    $categoryId = $_POST['category_id'];
    $companyId = $_POST['company_id'];
    $jobDescription = $_POST['job_description'];

    $sql = "INSERT INTO jobs(job_title,job_salary,job_vacancy,job_location,job_type,job_status, category_id,company_id,job_description, s_category_id) VaLUES ('$jobTitle', '$jobSalary', '$jobVacancy','$jobLocation', '$jobType', '1', '$categoryId', '$companyId', '$jobDescription','15')";
    $query = $con->query($sql);
    if ($query) {
        echo "Job Post Added";
    } else {
        echo "Job post Add Failed";
    }

} else {
    echo "Not all data inserted";
}
?>