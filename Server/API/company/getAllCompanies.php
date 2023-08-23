<?php
// Importing DB
require_once("../../database/config.php");


if (!$con->connect_error) {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Getting the Category List
        $sql = "SELECT * FROM company ORDER BY company_id DESC";
        $result = $con->query($sql);
        $categories = [];
        while ($data = $result->fetch_assoc()) {
            $categories[] = $data;
        }
        $categories = json_encode($categories, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        // print_r($categories);
        echo $categories;
    } else {
        echo "not getting get method";
    }
} else {
    echo "db error";
}




?>