<?php
require_once("../../database/config.php");
if (isset($_POST['id'])) {
    $id = $_POST['id'];
    $sql = "DELETE FROM users WHERE user_id = $id";
    $query = $con->query($sql);
    if ($query) {
        echo "user deleted";
    } else {
        echo "user delete Failed";
    }
}

?>