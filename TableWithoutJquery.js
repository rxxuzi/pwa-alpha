/**
 *
 * jQueryあり、要編集
 *
 * 目標：fetchAPIを使ったTable.jsの実装
 * ドルマークがついた部分を編集していく
 *  ファイルの挙動としてはここから動き出すはず。
 *  <p href="https://qiita.com/bakatono_super/items/fcbc828b21599568a597">解説 </p>
 *  予約状態としての記述と推測。本丸はdocument.addEventListener(~~~~){ の部分と思われる
 *
 *  <pre>{Data}</pre>
 */

document.addEventListener("DOMContentLoaded" , ()=>{
// アロー演算子自体は無名関数などに用いる
    load_data();
});

// このclass Dataはデータ置き場として使う
class Data{
    static lim = 0; // 制限値
    static val = 0; // メーター値
}

/**
 * 元のコード
 * <pre>{
 * document.addEventListener("DOMContentLoaded", function() {
 *       load_data();
 *     });
 * </pre>
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



/**
 * 比較して色を変える
 *
 * @param v value
 * @param l limit
 */
function switchColor(){
    // valueがlimitを超えたときにtr部分を赤くする処理
    const tableRow = document.querySelector("#table_tr");
    if (Data.val >= Data.lim) {
        tableRow.style.backgroundColor = "red";
    } else {
        tableRow.style.backgroundColor = "";
    }
}

// ここがはじまり
function load_data(){

    loadTime();

    //valueとlimitの値を取得
    var val = 0;
    var lim = 0;

    //jsonから値を取得する関数
    m_limit();
    m_value();

    refreshImage();
    // static から値を呼び出すのでパラメーターは削除
    switchColor();

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

            //static lim (number) に代入
            Data.lim =  Number(data["lim"]);
        })
        .catch(error => {
            console.error('エラーが発生しました:', error);
            location.reload();
        });
}



function m_value() {
    fetch('./data/value.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const valElement = document.querySelector(".val");
            valElement.textContent = data;
            Data.val =  Number(data);
        })
        .catch(error => {
            // .then の 投げられたエラー(throw new Error('~~~');) をここで表示
            console.error('エラーが発生しました:', error);
            location.reload();
        });
}

// 3000ms毎永遠ループ
// 雰囲気addEventListener()なやつ

/*
    var timer_id = setInterval( function () {
        load_data();
    } , loadInterval);
 */
var timer_id = setInterval( () => load_data() , loadInterval);

