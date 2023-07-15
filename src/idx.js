let main = document.createElement("div");

// const table_cnt = 5;
//
// let table = document.createElement("table");
// table.id = "table";
// main.appendChild(table);
//
// let thead = document.createElement("thead");
// table.appendChild(thead);
// let headtr = document.createElement("headtr");
// thead.appendChild(headtr);
// let th = document.createElement("th");
// th.textContent = "SAMPLE TABLE";
// th.colSpan = 2;
// headtr.appendChild(th);
//
// let tbody = document.createElement("tbody");
// table.appendChild(tbody);
//
// //array elements
// // let tr_arr = document.createElement("tr")[table_cnt];
// let ex_tr = document.createElement("tr");
//
// let name_td = document.createElement("td");
// name_td.textContent = "SAMPLE NAME"
// let lim_td = document.createElement("td");
// lim_td.textContent = "SAMPLE LIMIT";
//
//
// ex_tr.appendChild(name_td);
// ex_tr.appendChild(lim_td);
//
//
// tbody.appendChild(ex_tr);
//
// let tr =  document.createElement("tr");
//
// let name = document.createElement("td");
// let in_name = document.createElement("input");
// in_name.type = "text";
// in_name.placeholder = "SAMPLE NAME";
// in_name.style.width = "100%";
// in_name.id = "name";
// in_name.className = "name";
// name.appendChild(in_name);
// let name_label = document.createElement("label");
// name_label.htmlFor = "name";
//
// let lim = document.createElement("td");
// let in_lim = document.createElement("input");
// in_lim.type = "number";
// in_lim.placeholder = "SAMPLE LIMIT";
// in_lim.style.width = "100%";
// in_lim.id = "lim";
// in_lim.className = "lim";
// lim.appendChild(in_lim);
// let lim_label = document.createElement("label");
// lim_label.htmlFor = "lim";
//
// tr.appendChild(name);
// tr.appendChild(name_label);
//
// tbody.appendChild(tr);
//


let h = document.createElement("h1");
h.textContent = "EDIT WEBSITE";
h.style.textAlign = "center";
h.style.color = "05ffff";
h.style.fontFamily = "serif";
h.style.fontSize = "50px";
h.style.fontWeight = "bold";
h.style.marginTop = "50px";
h.style.marginBottom = "50px";
h.style.border = "solid black";
h.style.borderRadius = "20px";
h.style.padding = "20px";
h.style.backgroundColor = "ff05ff";
h.style.boxShadow = "0 0 10px black";
h.style.width = "50%";
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
h.style.transition = "all 1s";

let cnt= false;

h.addEventListener("click", function () {

    if(cnt){
        h.style.top = "300px";
        h.style.left = "0px";
        h.style.zIndex = "1";
        h.style.cursor = "pointer";
    }else{
        h.style.top = "-300px";
        h.style.left = "0px";
        h.style.zIndex = "0";
        h.style.cursor = "default";
    }
    cnt  = !cnt;
});

h.addEventListener("mouseover", function () {
    h.style.backgroundColor = "05ffff";
});
h.addEventListener("mouseout", function () {
    h.style.backgroundColor = "ff05ff";
});
h.addEventListener("mousedown", function () {
    h.style.backgroundColor = "ffff05";
});


main.appendChild(h);
main.style.alignItems = "center";
main.style.justifyContent = "center";
main.style.display = "flex";
main.style.flexDirection = "column";
document.body.appendChild(main);