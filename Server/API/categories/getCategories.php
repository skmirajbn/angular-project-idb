<?php
// Db Connection
$dbhost = "skmiraj.online";
$dbuser = "skmiraj";
$dbpass = "SWKbBT.LjXo-8Tj6";
$dbname = "skmiraj_angulardb";

$con = new mysqli($dbhost, $dbuser, $dbpass, $dbname);


if (!$con->connect_error) {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Getting the Category List
        $sql = "SELECT * FROM categories ORDER BY category_id ASC";
        $result = $con->query($sql);
        $categories = [];
        while ($data = $result->fetch_assoc()) {
            // $categories[] = $data["category_name"];
            array_push($categories, array('category_id' => $data['category_id'], 'category_name' => $data['category_name']));
        }
        $categories = json_encode($categories, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        // print_r($categories);
        header("Access-Control-Allow-Origin: *");
        echo $categories;
    }
}


?>