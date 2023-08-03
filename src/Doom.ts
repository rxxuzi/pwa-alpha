let login;

const un = document.getElementById('username') as HTMLInputElement; //username
const pw = document.getElementById('password') as HTMLInputElement;

const msg = document.getElementById('msg');

function getIp() {
    fetch('https://api.ipify.org/?format=json') //api取得
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            const currentDate = new Date();
            const currentTime = currentDate.toLocaleTimeString();

            const logData = "ip : " + ipAddress + ", time : " + currentTime + ", name : " + un.value; //log書き込み用変数
            save(logData);
            login = true;
        })

        .catch(error => {
            console.error('IPアドレスの取得中にエラーが発生しました:', error);
        });
}

login = false; //ログインできたかのフラグ
var cnt = 0;

function save(data : string){
    //
}
