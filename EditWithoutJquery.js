/*
    イベントハンドラの設定
        ElementIDがidxのボタンを押したときに値をデータ化。
*/

/**
 * 過去記述
 * $(function(){
 *      $(document).on("click", "#idx", function(event){
 *      var NodeData = { name: '', lim: '' };
 *      NodeData["name"] = $(".name").val(); //.nameクラスから参照
 *          NodeData["lim"] = $(".lim").val();//.limクラスから参照
 *          save_data(NodeData);//save_dataにNodeDataを渡す
 *      });
 *  });
 *  以下JavaScriptでのイベントハンドラ生成
 */
document.addEventListener("DOMContentLoaded", function(){
    const idxButton = document.getElementById("idx");
    idxButton.addEventListener("click", function(event){
        const nameValue = document.querySelector(".name").value;
        const limValue = document.querySelector(".lim").value;

        const nodeData = {
            name: nameValue,
            lim: limValue
        };

        save_data(nodeData);
    });
});

/*
    書き込み用関数
*/
// 過去記述
// function save_data(arg){
//    //ajaxはjsonはつかさどるライブラリ
//     $.ajax( {
//         type: 'post', //サーバー（こっち側）にデータを送信
//         url: './save.php',
//         data: arg,
//         //try.catch
//         success: function(){
//         // alert('Data saved.');
//             console.log('Data Saved');
//         },
//         error:function(){
//             alert('Data saving failed.');
//         }
//     });
// }

function save_data(arg){
    fetch('./save.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arg)
    })
        .then(response =>{
            if(!response.ok){
                throw new Error('Network response was not OK');
            }
            console.log('Data Saved');
        })
        .catch(error =>{
            alert('Data saving failed:' + error);
        });
}

/*
    読み取り用関数
 */
// function load_data(){
// $.ajax({
//     url: './data/data.json',
//     cache : false,
//     dataType : 'json',
//     /*
//     成功した場合の流れ
//     まずjsonファイルからnameタグとlimタグのvalueを抜き出す
//     */
//     success: function(data) {
//     if($.inArray("address",node[i])){
//         $(".name").val(node["name"]);
//         $(".lim").val(node["lim"]);
//         }else{
//         alert("false");
//         }
//     },
//     //エラー時にリロードする
//     error: function( data ) {
//         location.reload()
//     }
// });
// }

// 読み取り専用関数は必要ないのでは...？
// 実際に読み取って使用するのはFinalIndex.html側だけだからこの関数そのものがいらないと思われる。
    // 一応fetchで実装
function load_data() {
    fetch('./data/data.json')
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if(data.hasOwnProperty('name') && data.hasOwnProperty('lim')){
                document.querySelector(".name").value = data.name;
                document.querySelector(".lim").value = data.lim;
            } else {
                alert("false");
            }
        })
        .catch(error =>{
            console.error('Error: ', error);
            location.reload();
        });
}
