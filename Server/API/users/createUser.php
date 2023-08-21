<?php
// Importing DB
require_once("../../database/config.php");

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['role'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $role = $_POST['role'];
    $imageName = '';


    if (isset($_FILES['image'])) {
        $originalImageName = $_FILES['image']['name'];
        $imageName = time() . '_' . mt_rand() . '.' . pathinfo($originalImageName, PATHINFO_EXTENSION);
        $sourcePath = $_FILES['image']['tmp_name'];
        $destinationPath = './../../images/' . $imageName;
        // Moving the image to the Folder
        if (move_uploaded_file($sourcePath, $destinationPath)) {
            echo "Image uploaded &";
        } else {
            echo "Error Moving";
        }
    }
    $sql = "INSERT INTO users(user_name,user_username,user_password,user_email,user_photo,role_id) VALUES('$name','$username','$password', '$email', '$imageName', '$role' )";

    $query = $con->query($sql);
    if ($query) {
        echo "User Created";
    }

} else {
    echo "Not all the formData found";
}
?>