var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function () {
        console.log("The Car has started driving");
    };
    car.prototype.stop = function () {
        console.log("The Car has stopped");
    };
    return car;
}());
var telsa = new car();
telsa.model = "modelx";
telsa.year = 2024;
telsa.price = "$4500";
telsa.drive();
telsa.stop();
console.log(telsa);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.eat = function () {
        console.log("What's for dinner?");
    };
    Person.prototype.speak = function () {
        console.log("My name is ".concat(this.name, ", I am ").concat(this.age, " years old"));
    };
    return Person;
}());
