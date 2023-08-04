const timeDiv = document.querySelector('.time') as Element;


document.addEventListener("DOMContentLoaded" , ()=>{
    load_data();
});

class Data{
    static lim = 0;
    static val = 0;
}
const loadInterval = 300;

function loadTime(){
    const date = new Date();
    const H = date.getHours();
    const M = date.getMinutes();
    const S = date.getSeconds();
    const MS = date.getMilliseconds();
    const formattedTime = `${H}h ${M}min ${S}.${MS}sec`;
    // const timeDiv = document.querySelector('.time');
    if(timeDiv != null){
        timeDiv.textContent = formattedTime;
    }
}

const imgElement = document.getElementById('index_png') as HTMLImageElement;


function refreshImage() {
    const url : string = imgElement.src;
    imgElement.src = `${url}?v=${Math.random()}`;

}

const tableRow  = document.querySelector("#table_tr") as HTMLTableElement;
function switchColor(){
    if (Data.val >= Data.lim) {
        tableRow.style.backgroundColor = "red";
    } else {
        tableRow.style.backgroundColor = "";
    }
}

function load_data(){

    loadTime();
    m_limit();
    m_value();
    refreshImage();
    switchColor();

}

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
            if(nameElement !== null && limElement !== null){
                nameElement.textContent = data["name"];
                limElement.textContent = data["lim"];
            }
            Data.lim =  Number(data["lim"]);
        })
        .catch(error => {
            console.error('エラーが発生しました:', error);
            location.reload();
        });
}

const valElement = document.querySelector(".val") as Element;

function m_value() {
    fetch('./data/value.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            valElement.textContent = data;
            Data.val =  Number(data);
        })
        .catch(error => {
            console.error('エラーが発生しました:', error);
            location.reload();
        });

}
