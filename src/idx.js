let main = document.createElement("div");

const table_cnt = 5;

let table = document.createElement("table");
table.id = "table";
main.appendChild(table);

let thead = document.createElement("thead");
table.appendChild(thead);
let tr = document.createElement("tr");
thead.appendChild(tr);
let th = document.createElement("th");
th.textContent = "SAMPLE TABLE";
th.colSpan = 2;
tr.appendChild(th);

let tbody = document.createElement("tbody");
table.appendChild(tbody);

let ex_tr = document.createElement("tr")
//array elements
let tr_arr = document.createElement("tr")[table_cnt];
// tr_arr = document.createElement("tr");

let name_td = document.createElement("td");
name_td.id = "name";
name_td.textContent = "SAMPLE NAME"
let lim_td = document.createElement("td");
lim_td.id = "limit";
lim_td.textContent = "SAMPLE LIMIT";


ex_tr.appendChild(name_td);
ex_tr.appendChild(lim_td);


tbody.appendChild(ex_tr);






let num;
for (let i = 0; i < table_cnt; i++) {
    // new_td(i);
    let index_name = document.createElement("td");
    let index_limit = document.createElement("td");
    // let delete_btn = document.createElement("button");
    // delete_btn.textContent = "delete";
    // delete_btn.id = "btn"+i;
    // delete_btn.addEventListener("click", function () {
    //     let tr = document.getElementById(i);
    //     tr_arr[i].parentNode.removeChild(tr);
    // });

    num = ((10 % i) * 100 + 100)
    index_name.textContent = "sample name : " + i;
    index_limit.textContent = "sample limit : " + num;

    if(tr_arr[i]){
        tr_arr[i].appendChild(index_name);
        tr_arr[i].appendChild(index_limit);
        // tr_arr[i].appendChild(delete_btn);
    }
}
tbody.appendChild(tr_arr);


function reload_table(){
    tbody.innerHTML = "";
    for (let i = 0; i < tr_arr.length; i++) {
        tbody.appendChild(tr_arr[i]);
    }
}


let h = document.createElement("h1");
h.textContent = "SAMPLE TABLE";
h.style.textAlign = "center";
h.style.color = "red";
h.style.fontSize = "50px";
h.style.fontWeight = "bold";
h.style.marginTop = "50px";
h.style.marginBottom = "50px";
h.style.border = "solid black";
h.style.borderRadius = "20px";
h.style.padding = "20px";
h.style.backgroundColor = "yellow";
h.style.boxShadow = "0 0 10px black";
h.style.width = "100%";
h.style.height = "100px";
h.style.display = "flex";
h.style.justifyContent = "center";
h.style.alignItems = "center";
h.style.flexDirection = "column";
h.style.position = "relative";
h.style.top = "0px";
h.style.left = "0px";
h.style.zIndex = "1";
h.style.transition = "all 1s";
h.style.cursor = "pointer";
updown = false;
h.addEventListener("click", function () {
    updown = !updown;
    if(updown){
        h.style.top = "0px";
        h.style.left = "0px";
        h.style.zIndex = "1";
        h.style.transition = "all 1s";
        h.style.cursor = "pointer";
    }else{
        h.style.top = "-100px";
        h.style.left = "0px";
        h.style.zIndex = "0";
        h.style.transition = "all 1s";
        h.style.cursor = "default";
    }
});

h.addEventListener("mouseover", function () {
    h.style.backgroundColor = "red";
});
h.addEventListener("mouseout", function () {
    h.style.backgroundColor = "yellow";
});

main.appendChild(h);
document.body.appendChild(main);