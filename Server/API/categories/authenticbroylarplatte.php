<?php
require_once("../../Authentication/JWTauthenticatoin.php");
use Auth\Auth;


$headers = getallheaders();
if (isset($headers['token'])) {
    $token = $headers['token'];
    $isValidate = Auth::validateToken($token);

    if ($isValidate) {

        // Code for the API
    } else {
        $error = array('token' => 'failed');
        $error = json_encode($error);
        echo $error;
    }
} else {
    $error = array('token' => 'no-token');
    $error = json_encode($error);
    echo $error;
}
?>