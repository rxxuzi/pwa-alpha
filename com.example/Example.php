<?php
    $username = "admin";
    $password = "admin";

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    echo $username." : ". $password."\n";
    echo $hashedPassword."\n";
?>