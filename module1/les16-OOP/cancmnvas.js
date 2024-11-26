let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

 // ______________________________________________________________________
// ve duong thang

// diem bat dau
ctx.moveTo(100,0);

//diem ket thuc
ctx.lineTo(500,100);

// ve~
ctx.stroke();

// ___________________________________________________________
//VE duong tron
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
