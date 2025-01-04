class car{
    model:string;
    year:number;
    price:string;
    drive(){
        console.log("The Car has started driving");
    }
    stop(){
        console.log("The Car has stopped");
    }
}
const telsa=new car();
telsa.model="modelx";
telsa.year=2024;
telsa.price="$4500";
telsa.drive();
telsa.stop();
console.log(telsa);

class Person {
    name: string;
    age: number;
  
    constructor(name:string, age:number){
      this.name = name;
      this.age = age;
    }
  
    eat() {
      console.log(`What's for dinner?`);
    }
  
    speak() {
      console.log(`My name is ${this.name}, I am ${this.age} years old`);
    }
  }


  