var password = document.getElementById("password");
var username = document.getElementById("username");


function save_data(arg){
    //ajaxはjsonはつかさどるライブラリ
    $.ajax( {
        type: 'post', //サーバー（こっち側）にデータを送信
        url: './Set.php',
        data: arg,
        //try.catch
        success: function(){
        alert('データを保存しました。');
        },
        error:function(){
        alert('データの保存に失敗しました。');
        }
    });
}

