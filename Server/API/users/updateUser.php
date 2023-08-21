<?php
require_once("../../database/config.php");

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['role']) && isset($_POST['user_id'])) {
    $id = $_POST['user_id'];
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
    if ($imageName != '') {
        $sql = "UPDATE users SET user_name = '$name', user_email = '$email', user_username = '$username', user_password = '$password', role_id ='$role', user_photo = '$imageName'";
    } else {
        $sql = "UPDATE users SET user_name = '$name', user_email = '$email', user_username = '$username', user_password = '$password', role_id ='$role'";
    }

    $query = $con->query($sql);
    if ($query) {
        echo "User Updated";
    }

} else {
    echo "Not all the formData found";
}
?>