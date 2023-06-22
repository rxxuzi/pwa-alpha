<?php
// フォームから送信されたデータを受け取る
$usr = $_POST['username'];
$pwd = $_POST['password'];

$jsonString = file_get_contents('./data/user.json');

$userData = json_decode($jsonString, true); //$userData is an array// 

//login flag
$loginFlag = false;

//password_verify($pwd, $hashedPassword)

for ($i=0; $i < count($userData) ; $i++) {
  
  $hashedPassword = $userData[$i]['password'];

  if($userData[$i]['username'] == $usr && password_verify($pwd, $hashedPassword)){
    // echo "Login Successful / user:".$usr;
    $loginFlag = true;
  }
}

// ユーザー名とパスワードの検証ロジックを実装
if ($loginFlag) {
  // ログイン成功時の処理
  // セッションの開始や認証情報の保存などを行う
    echo 'ログイン成功！';
    sleep(3);
    // 元の画面にリダイレクト
    header('Location: FinalEdit.html');
    exit; // リダイレクト後にスクリプトの実行を終了する
} else {
    // ログイン失敗時の処理
    echo 'ユーザー名またはパスワードが間違っています。';
    header('Location: Alpha.html');
    exit;
}
?>
