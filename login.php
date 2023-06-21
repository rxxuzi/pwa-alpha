<?php
// フォームから送信されたデータを受け取る
$username = $_POST['username'];
$password = $_POST['password'];

// ユーザー名とパスワードの検証ロジックを実装
if ($username === 'admin' && $password === 'admin') {
  // ログイン成功時の処理
  // セッションの開始や認証情報の保存などを行う
    echo 'ログイン成功！';
    sleep(3);
    // 元の画面にリダイレクト
    header('Location: Example.html');
    exit; // リダイレクト後にスクリプトの実行を終了する
} else {
    // ログイン失敗時の処理
    echo 'ユーザー名またはパスワードが間違っています。';
    exit;
}
?>
