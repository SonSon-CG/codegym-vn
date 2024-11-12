function check() {
    let a = +document.getElementById("weight").value;
    let b = +document.getElementById("height").value;
    // let c = a / (b^2);
    let c = a / ( Math.pow(b,2) )
    let result = "";

    if (c<18.5){
        result = "gay"
    }else if (c<25) {
        result = "binh thuong"
    } else if (c<30) {
        result = "thua can"
    }else {
        result = "beo phi"
    }

document.getElementById("ketqua").innerHTML = "chi so BMI cua ban la " + c + ". Ban " + result;



}