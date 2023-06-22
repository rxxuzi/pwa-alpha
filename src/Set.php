<?php
    // $password = $_POST['password']; // フォームからのパスワード入力を取得
    $username = "admin";
    $password = "admin";

    // パスワードをハッシュ化して保存
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // JSONに保存するなどの処理を行う
    $userData = [
        // 'username' => $_POST['username'],
        'username' => $username,
        'password' => $hashedPassword,
    ];
    // $userDataをJSONに変換して保存するなどの処理を行う
    file_put_contents('user.json', json_encode($userData));
    
?>