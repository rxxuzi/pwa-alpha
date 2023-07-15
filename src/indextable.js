const aiTextPrompt = document.createElement("h2");
aiTextPrompt.id = "text-prompt";

let div0 = document.createElement("div");

div0.className = "prompt-list";
div0.appendChild(aiTextPrompt);
let div1 = document.createElement("div");
div1.className = "prompt-list-genre";

let deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.id = "delete-button";
deleteButton.addEventListener("click", function() {
    aiTextPrompt.textContent = "";
});

div0.appendChild(div1);
let div2 = document.createElement("div");
div2.className = "description";
div2.id = "div2";

div1.appendChild(div2);


for (let  i = 0 ; i < 10 ; i ++ ){
    const text = document.createElement("label");
    text.textContent = `${i} : Content`;
    const btn = document.createElement("button");

    // ボタンがクリックされた時のイベントリスナーを追加
    btn.addEventListener("click", function() {
        // ボタンのtextContentをtxt要素に追記
        aiTextPrompt.textContent += text.textContent + " ";
        console.log(aiTextPrompt.textContent);
    });

    btn.textContent = "Submit";
    div2.appendChild(text);
    const br = document.createElement("br");
    div2.appendChild(btn);
    div2.appendChild(br);
}

document.body.appendChild(div0);