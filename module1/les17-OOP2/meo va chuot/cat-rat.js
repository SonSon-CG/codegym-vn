class Rat {
    constructor(name, weight, speed) {
        this.name_mouse = name;
        this.weight_mouse = weight;
        this.speed_mouse = speed;
        this.status = true;
    }
    getStatus() {
        if (this.status){
            alert("chuot song");
        }else{
            alert("chuot chet");
        }
    }
    mouseSound(){
        alert("chitchit");
    }

}

class Cat {
    constructor(name, weight, speed) {
        this.name_cat = name;
        this.weight_cat = weight;
        this.speed_cat = speed;
    }
    catSound(){
        alert("moemoe");
    }
}