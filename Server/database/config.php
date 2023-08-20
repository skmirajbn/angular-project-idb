<?php
$dbhost = "skmiraj.online";
$dbuser = "skmiraj";
$dbpass = "SWKbBT.LjXo-8Tj6";
$dbname = "skmiraj_angulardb";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
$con = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

?>