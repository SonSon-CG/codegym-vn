class Hinhchunhat {
    width; height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.getS = this.width*this.height;
        this.getP = (this.height+this.width)*2;
    }
}
function calculate() {


    let a = +document.getElementById("inputWidth").value;
    let b = +document.getElementById("inputHeight").value;
    let rec1 = new Hinhchunhat(a, b)
    let s = rec1.getS;
    let p = rec1.getP;


    document.getElementById("result").innerHTML = `Dien tich HCN la ${s} <br> Chu vi HCN la ${p}`;
}