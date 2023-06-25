"use strict";
let login;
const un = document.getElementById('username'); //username
const pw = document.getElementById('password');
const msg = document.getElementById('msg');
function checkPassword() {
    if (msg != null) {
        if (pw != null && un != null) {
            if (un.value == "admin" && pw.value == "admin") {
                msg.innerHTML = "Login successful";
                fetch('https://api.ipify.org/?format=json') //api取得
                    .then(response => response.json())
                    .then(data => {
                    const ipAddress = data.ip;
                    const currentDate = new Date();
                    const currentTime = currentDate.toLocaleTimeString();
                    const logData = "ip : " + ipAddress + ", time : " + currentTime + ", name : " + un.value; //log書き込み用変数
                    console.log(logData);
                    // save(logData); あとで直す
                    login = true;
                })
                    .catch(error => {
                    console.error('IPアドレスの取得中にエラーが発生しました:', error);
                });
            }
            else {
                cnt++;
                login = false;
                msg.innerHTML = "Login failed";
            }
        }
    }
}
login = false; //ログインできたかのフラグ
var cnt = 0;
let checkButon = document.getElementById('chkBtn');
