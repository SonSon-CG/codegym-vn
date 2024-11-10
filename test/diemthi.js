let a = +document.getElementById("toan").value;
let b = +document.getElementById("van").value;
let c = +document.getElementById("anh").value;
let d = a+b+c

// if (d<0){
//     alert ("nhap lai diem");
// } else (d<=10){
//     alert ("hoc dot");
// } else (d<=20) {
//     alert("hoc trung binh");
// } else (d<=30){
//     alert ("hoc gioi");
// }else (d>30){
//     alert("nhap lai diem")
// }

if (d < 0 || d > 30) {
    alert("nhap lai diem");
} else if (d <= 10) {
    alert("hoc dot");
} else if (d <= 20) {
    alert("hoc trung binh");
} else if (d <= 30) {
    alert("hoc gioi");
}

