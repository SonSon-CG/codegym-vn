// khoi tao class
class Animal {
    // thuoc tinh
    id;
    name;
    age;
    color;

    // ham khoi tao
    constructor(id, name, age, color) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.color = color;
    }


    // method
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    toString() {
        console.log("name = " + this.name + " age = " + this.age);
    }


}

// ham khoi tao khong tham so
let dog = new Animal();
// doi tuong dung ham khoi tao full tham so
let cat = new Animal(1, 'dung', 14, 'black');

// use get name
console.log(cat.getName());
cat.setName("son");
console.log(cat.getName());
cat.toString();