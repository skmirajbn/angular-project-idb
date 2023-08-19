<?php
// Importing DB Config File
require_once('./../database/config.php');
require_once('./../Authentication/JWTauthenticatoin.php');
use Auth\Auth;

if (isset($_POST['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE user_username = ?";
    $smtp = $con->prepare($query);
    $smtp->bind_param('s', $username);
    $smtp->execute();

    // Get the result
    $result = $smtp->get_result();
    //Fetch the user data
    $user = $result->fetch_assoc();
    $dbHashedPass = password_hash($user['user_password'], PASSWORD_DEFAULT);
    if ($user && password_verify($password, $dbHashedPass)) {
        $user_id = $user['user_id'];
        $user_username = $user['user_username'];
        $user_email = $user['user_email'];
        $user_photo = $user['user_photo'];
        $role_id = $user['role_id'];
        $token = Auth::generateToken($user_id, $user_username, $user_email, $user_photo, $role_id);

        $userData = array(
            'login' => 'Success',
            'token' => $token,
        );
        $userData = json_encode($userData);
        echo $userData;

    } else {
        return false;
    }
} else {
    return false;
}



?>