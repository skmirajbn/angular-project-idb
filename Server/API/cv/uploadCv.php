<?php
require_once("../../database/config.php");
if (isset($_FILES['cv']) && isset($_POST['user_id'])) {
    $user_id = $_POST['user_id'];
    $cvPath = "./../../Cvs/";
    $cvFileName = $_FILES['cv']['name'];
    $targetPath = $cvPath . $cvFileName;

    // Move Uploaded File
    if (move_uploaded_file($_FILES['cv']['tmp_name'], $targetPath)) {
        $sql = "INSERT INTO cv (user_id, cv_file) VALUES (?, ?)
                ON DUPLICATE KEY UPDATE cv_file = ?";

        $stmt = $con->prepare($sql);
        $stmt->bind_param("iss", $user_id, $cvFileName, $cvFileName);

        if ($stmt->execute()) {
            echo "CV uploaded and record updated/inserted successfully.";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Error Uploading CV File";
    }
} else {
    echo "Missing user_id or CV File";
}

?>