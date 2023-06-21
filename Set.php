<?php
    $jsonString = file_get_contents('./data/user.json');
    // echo $jsonString;
    $userData = json_decode($jsonString, true); //$userData is an array// 

    $password = "admin";

    // パスワードをハッシュ化して保存
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    //入力されたユーザー名とパスワード
    $usr = "admin";

    //login flag
    $loginFlag = false;

    for ($i=0; $i < count($userData) ; $i++) {
        if($userData[$i]['username'] == $usr && password_verify($userData[$i]['password'], $hashedPassword)){
            echo "Login Successful / user:".$usr;
            $loginFlag = true;
        }
    }

?>