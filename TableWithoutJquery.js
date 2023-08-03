// jQueryあり、要編集
// 目標：fetchAPIを使ったTable.jsの実装
    //ドルマークがついた部分を編集していく

// まずはこれの解明。ファイルそのものの関数の動きを把握する
$(function(){
    load_data();
});

// アロー演算子自体は無名関数などに用いる
document.addEventListener("DOMContentLoaded" , ()=>{
    load_data();
});

/**
 * document.addEventListener("DOMContentLoaded", function() {
 *       load_data();
 *     });
 */

const loadInterval = 300;


function loadTime(){
    //時間を取得
    //現在時刻を取得
    const date = new Date();
    const H = date.getHours();
    const M = date.getMinutes();
    const S = date.getSeconds();
    const MS = date.getMilliseconds();
    const formattedTime = `${H}h ${M}min ${S}.${MS}sec`;

    const timeDiv = document.querySelector('.time');
    timeDiv.textContent = formattedTime;
}

function refreshImage() {
    const imgElement = document.getElementById('index_png');
    const url = imgElement.src;
    imgElement.src = `${url}?v=${Math.random()}`;
}

function fetchValues() {
    const valElement = document.querySelector(".val");
    const limElement = document.querySelector(".lim");

    const val = Number(valElement.textContent);
    const lim = Number(limElement.textContent);

    // 以下は、取得した val と lim の値を使って任意の処理を行う例
    console.log("val:", val);
    console.log("lim:", lim);
}

/**
 * 比較して色を変える
 *
 * @param v value
 * @param l limit
 */
function switchColor(v,l){
    // valueがlimitを超えたときにtr部分を赤くする処理
    const tableRow = document.querySelector("#table_tr");
    if (v >= l) {
        tableRow.style.backgroundColor = "red";
    } else {
        tableRow.style.backgroundColor = "";
    }
}

function load_data(){

    loadTime();

    //valueとlimitの値を取得
    var val = 0;
    var lim = 0;

    //jsonから値を取得する関数
    m_limit();
    m_value();
    //小数点もok

    fetchValues();
    refreshImage();
    switchColor(val,lim);

}

//TODO
function m_limit() {
    fetch('./data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const nameElement = document.querySelector(".name");
            const limElement = document.querySelector(".lim");

            nameElement.textContent = data["name"];
            limElement.textContent = data["lim"];

            return Number(data["lim"]);
        })
        .catch(error => {
            console.error('エラーが発生しました:', error);
            location.reload();
        });
}


//TODO
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
    //雰囲気addEventListener()なやつ

/*

var timer_id = setInterval( function () {
    load_data();
} , loadInterval);

 */
var timer_id = setInterval( () => load_data() , loadInterval);

