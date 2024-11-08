function cong() {


    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = a + b;
    document.getElementById("ketqua").innerText = c;
}

function tru() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = a-b;
    document.getElementById("ketqua").innerText = c;
}
function nhan() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = a*b;
    document.getElementById("ketqua").innerText = c;
}
function chia() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = a/b;
    document.getElementById("ketqua").innerText = c;
}