class Temperature{
    doC;

    constructor(doC) {
        this.doC = doC;
        this.doF = (this.doC * 9/5) + 32;
        this.doK =  this.doC + 273;
    }
}
function convert() {
    let a = +document.getElementById("doC").value;
    if (a < -273) {
        alert("Do C phai lon hon -273. Moi nhap lai");
    } else {
        let temp1 = new Temperature(a);
        var dof = temp1.doF;
        var dok = temp1.doK;
    }
    document.getElementById("result").innerHTML = `Do F la ${dof}. <br> Do K la ${dok}.`
}