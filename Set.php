<?php
    $jsonString = file_get_contents('./data/user.json');
    // echo $jsonString;
    $userData = json_decode($jsonString, true); //$userData is an array// 

    $usr = "admin";
    $pwd = "admin";

    for ($i=0; $i < count($userData) ; $i++) {
        if($userData[$i]['username'] == $usr && $userData[$i]['password'] == $pwd){
            echo "Login Successful / user:".$usr;
        }
    }
?>