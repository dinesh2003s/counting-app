let count = 0;
let a = 0;
let save1 = save2 = 0;
let all ;

function increment() {
    count++;
    document.getElementById("count").innerText = count;
   
}
function decrement() {
    count--;
    document.getElementById("count").innerText = count;
 
}
function save() {

    all = count + " - ";
    document.getElementById("allenters").textContent +=all;
    let save = count;
    document.getElementById("save").innerText = "previes enteries: " + save2 + "-" + save1 + "-" + save;
    a = save1;
    save1 = save;
    save2 = a;
    count = 0;
    document.getElementById("count").innerText = count;
}
