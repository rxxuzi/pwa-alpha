// jQueryあり、要編集
$(function(){
    load_data();
});

const loadInterval = 300;

function load_data(){
//時間を取得
//現在時刻を取得
const date = new Date();
    const 
        H = date.getHours(), //時
        M = date.getMinutes(), //分
        S = date.getSeconds(), //秒
        MS = date.getMilliseconds();//ミリ秒

$(".time").text(H + 'h' + M + 'min' + S +'.' + MS +'sec');

//valueとlimitの値を取得
var val = 0;
var lim = 0;

//jsonから値を取得する関数
m_limit();
m_value();
//小数点もok
val = Number($(".val").text());
lim = Number($(".lim").text());

var url = $("#index_png").attr("src");//画像のurlを取得する
$('#index_png').attr("src" , url + '?v=${Math.random()}')//キャッシュ回避のためにurlを毎回変える

//valueがlimitを超えたときにtr部分を赤くする
if (val >= lim) {
    $('#table_tr').css('background-color','red');
}else{
    $('#table_tr').css('background-color','');
}


}

function m_limit(){
    $.ajax({
    url: './data/data.json',
    cache : false,
    dataType : 'json',
    /*成功した場合の流れ
    まずjsonファイルからnameタグとlimタグのvalueを抜き出す
    */
    success: function(data) {
        $(".name").text(data["name"]);
        $(".lim").text(data["lim"]);
        return Number(data["lim"]);
    },
    //エラー時にリロードする
    error: function( data ) {
        location.reload()
    }
});

}


function m_value(){
    /* valueのjsonファイルを参照*/
$.ajax({
    url: './data/value.json',
    cache : false,
    dataType : 'json',
    
    success: function(data) {
        $(".val").text(data);
        return Number(data);
    },
    //エラー時にリロードする
    error: function( data ) {
        location.reload()
    }
});
}
//3000ms毎永遠ループ
var timer_id = setInterval( function () {
    load_data();
} , loadInterval);

