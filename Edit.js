/*ボタンを押したときに、nodedataにnameとvalueを代入する
*/
$(function(){
    $(document).on("click", "#idx", function(event){    
        var NodeData = { name: '', lim: '' };
        NodeData["name"] = $(".name").val(); //.nameクラスから参照
        NodeData["lim"] = $(".lim").val();//.limクラスから参照
        save_data(NodeData);//save_dataにNodeDataを渡す
    });
});
/*書き込み用関数
*/
function save_data(arg){
    //ajaxはjsonはつかさどるライブラリ
    $.ajax( {
        type: 'post', //サーバー（こっち側）にデータを送信
        url: './save.php',
        data: arg,
        //try.catch
        success: function(){
        alert('Data saved.');
        },
        error:function(){
        alert('Data saving failed.');
        }
    });
}
//読み取り用関数
function load_data(){
$.ajax({
    url: './data/data.json',
    cache : false,
    dataType : 'json',
    /*成功した場合の流れ
    まずjsonファイルからnameタグとlimタグのvalueを抜き出す
    */
    success: function(data) {
    if($.inArray("address",node[i])){
        $(".name").val(node["name"]);
        $(".lim").val(node["lim"]);
        }else{
        alert("false");
        }
    },
    //エラー時にリロードする
    error: function( data ) {
        location.reload()
    }
});
}

